"use client"
import { useRouter, useSearchParams } from 'next/navigation';
import BrutalCard from "@/components/brutal-card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { IDataAnime } from "@/types/detail/anime";


export default function PaginationAnime({ data }: { data: IDataAnime }) {
    console.log(data)
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePageChange = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams);

    if (pageNumber === 1) {
        params.delete('page'); 
      } else {
        params.set('page', pageNumber.toString());
      }
      
      const queryString = params.toString();
      const newPath = queryString ? `?${queryString}` : '/anime';

      router.push(newPath);
        scrollToTop();
  };

    

  const renderPageNumbers = () => {
    const lastPage = data.pagination.last_visible_page;
    const pages = [];

    
    // Always show first page
    pages.push(
      <PaginationItem key={1} className='cursor-pointer'>
        <PaginationLink 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            handlePageChange(1);
          }}
          isActive={currentPage === 1}
        >
          1
        </PaginationLink>
      </PaginationItem>
    );

    // Add ellipsis after first page if current page is far from start
    if (currentPage > 3) {
      pages.push(
        <PaginationItem key="ellipsis1" className='cursor-pointer'>
          <PaginationEllipsis />
        </PaginationItem>
      );
    }

    // Add pages around current page
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(lastPage - 1, currentPage + 1); i++) {
      if (i === 1 || i === lastPage) continue; // Skip if it's first or last page
      pages.push(
        <PaginationItem key={i} className='cursor-pointer'>
          <PaginationLink 
           
            onClick={(e) => {
              e.preventDefault();
              handlePageChange(i);
            }}
            isActive={currentPage === i}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }

    // Add ellipsis before last page if current page is far from end
    if (currentPage < lastPage - 2) {
      pages.push(
        <PaginationItem key="ellipsis2">
          <PaginationEllipsis />
        </PaginationItem>
      );
    }

    // Always show last page if it's different from first page
    if (lastPage > 1) {
      pages.push(
        <PaginationItem key={lastPage} className='cursor-pointer'>
          <PaginationLink 
           
            onClick={(e) => {
              e.preventDefault();
              handlePageChange(lastPage);
            }}
            isActive={currentPage === lastPage}
          >
            {lastPage}
          </PaginationLink>
        </PaginationItem>
      );
    }

    return pages;
  };

  return (
    <BrutalCard>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious 
              onClick={(e) => {
                e.preventDefault();
                if (currentPage > 1) {
                  handlePageChange(currentPage - 1);
                }
              }}
              className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
            />
          </PaginationItem>
          
          {data.pagination.has_next_page || currentPage > 1 ? (
            renderPageNumbers()
          ) : (
            <PaginationItem>
              <PaginationLink  isActive>
                1
              </PaginationLink>
            </PaginationItem>
          )}

          <PaginationItem>
            <PaginationNext 
             
              onClick={(e) => {
                e.preventDefault();
                if (data.pagination.has_next_page) {
                  handlePageChange(currentPage + 1);
                }
              }}
              className={!data.pagination.has_next_page ? 'pointer-events-none opacity-50' : ''}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </BrutalCard>
  );
}
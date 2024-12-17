'use client';
import {
    ProgressSlider,
    SliderBtn,
    SliderBtnGroup,
    SliderContent,
    SliderWrapper,
} from '@/components/uilayouts/progress-slider';
import { useMediaQuery } from '@/hooks/use-media-query';
import Image from 'next/image';
import Link from 'next/link';

// import { imgPreview } from '@/components/website/constant';


interface IProps {

    mal_id: number;
    url : string;
    images : {
      webp : {
        large_image_url : string;
      }
    }
    title : string;
    synopsis : string
  
}

export default function PSliderTopManga({data} : {data : IProps[]}) {
  const isMobile = useMediaQuery('(min-width: 640px)');
  return (
    <>
      <ProgressSlider
        vertical={isMobile ? true : false}
        fastDuration={300}
        duration={4000}
        activeSlider='bbridge'
        className='sm:flex border-black border-2'
      >
        <SliderBtnGroup className='sm:relative absolute bottom-0 lg:w-[28rem] sm:w-96 w-full z-10 sm:flex sm:flex-col grid grid-cols-2 sm:h-[500px] h-fit sm:dark:bg-black sm:bg-white dark:bg-black/80 bg-white/80 backdrop-blur-md overflow-hidden '>
          {data.map((item, index) => (
            <SliderBtn
              key={index}
              value={item?.title}
              className='text-left  p-3 sm:border-b border sm:pl-5 sm:pb-0 pb-6 sm:flex-1'
              progressBarClass='left-0 sm:top-0 bottom-0 dark:bg-white bg-black sm:w-3 sm:h-full h-4  before:h-full before:w-4 before:'
            >
              <h2 className='relative px-4 rounded w-fit dark:bg-blue-500 bg-black text-white mb-2 line-clamp-1 '>
                {item.title}
              </h2>
              <p className='text-sm font-medium dark:text-slate-200 text-slate-900 line-clamp-2'>
                {item.synopsis}
              </p>
            </SliderBtn>
          ))}
        </SliderBtnGroup>
        <SliderContent className='w-full'>
          {data.map((item, index) => (
            <SliderWrapper
              className='h-full'
              key={index}
              value={item?.title}
            >
              <Link href={`/detail/manga/${item.mal_id}`}>
              <Image
                className=' h-[500px] object-cover  border-black border-2'
                src={item.images.webp.large_image_url}
                width={1200}
                height={1080}
                alt={item.images.webp.large_image_url}
              />
              </Link>
            </SliderWrapper>
          ))}
        </SliderContent>
      </ProgressSlider>
    </>
  );
}

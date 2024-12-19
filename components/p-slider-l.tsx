'use client';
import {
  ProgressSlider,
  SliderBtn,
  SliderBtnGroup,
  SliderContent,
  SliderWrapper,
} from '@/components/uilayouts/progress-slider';
import Image from 'next/image';
import Link from 'next/link';



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
export default function PSliderTopAnime({data} : {data : IProps[]}) {
  return (
    <>
      <ProgressSlider vertical={false} activeSlider='bridge' className='border-black border-2'>
        <SliderContent>
          {data.map((item, index) => (
            <SliderWrapper key={index} value={item?.title}>
                <Link href={`/detail/anime/${item.mal_id}`}>
              <Image
                className='rounded-sm 2xl:h-[500px] h-[350px] object-cover'
                src={item.images.webp.large_image_url}
                width={1800}
                height={1080}
                loading='lazy'
                alt={item.synopsis}
                />
                </Link>
            </SliderWrapper>
          ))}
        </SliderContent>

        <SliderBtnGroup className='absolute bottom-0 h-fit dark:text-white text-black dark:bg-black/40 bg-white/40  backdrop-blur-md overflow-hidden grid grid-cols-2 md:grid-cols-4  rounded-md'>
          {data.map((item, index) => (
            <SliderBtn
              key={index}
              value={item?.title}
              className='text-left  p-3 border-r'
              progressBarClass='dark:bg-black bg-white h-full'
            >
              <h2 className='relative px-4 rounded-full w-fit dark:bg-white dark:text-black text-white bg-gray-900 mb-2'>
                {item.title}
              </h2>
              <p className='text-sm font-medium  line-clamp-2'>{item.synopsis}</p>
            </SliderBtn>
          ))}
        </SliderBtnGroup>
      </ProgressSlider>
    </>
  );
}

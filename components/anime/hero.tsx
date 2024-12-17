"use client";
import { IDataManga } from "@/types/detail/manga";
import { motion } from "framer-motion";
import BrutalButton from "../brutal-btn";
import BrutalCard from "../brutal-card";
import HeroMangaPopuler from "../hmanga-populer";
import PSliderTopManga from "../p-slider-top";

interface Props {
  data: IDataManga[];
}

export default function HeroAnime({ data }: Props) {
  const cardVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const sliderVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <div className="mb-8 card-shadow">
        {/* title */}
        <motion.h1
          className="text-4xl mb-2 inline-block"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Top Anime
          <div className="border-b-[3px] mt-1 border-black" />
        </motion.h1>

        {/* slider */}
        <motion.div
          variants={sliderVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <PSliderTopManga data={data} />
        </motion.div>
      </div>

      {/* manga */}
      <div>
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <BrutalCard>
            <div className="flex flex-row justify-between mb-2 items-center">
              <motion.h1
                className="text-5xl"
                variants={buttonVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                Manga Terpopuler
              </motion.h1>
              <motion.div
                variants={buttonVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <BrutalButton className="text-black flex justify-center items-center">
                  Go to All Manga →
                </BrutalButton>
              </motion.div>
            </div>

            <div className="">
              <HeroMangaPopuler data={data} />
            </div>
          </BrutalCard>
        </motion.div>
      </div>
    </>
  );
}
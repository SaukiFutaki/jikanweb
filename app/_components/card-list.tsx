"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";

interface IData {
  mal_id: number;
  url: string;
  title: string;
  images: {
    webp: {
      large_image_url: string;
    };
  };
  synopsis: string;
}

export default function CardList({ data }: { data: IData[] }) {
  return (
    <section>
      <div className="my-10">
        <h1 className="text-primary text-center">Top Manga</h1>

        <p className="mt-4 text-center text-gray-500 dark:text-gray-300">
          Here are some of the top manga based on the MyAnime
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-5 pb-10 lg:px-16 lg:pb-16">
        {data.map((manga) => (
            <Link key={manga.mal_id} href={`detail/manga/${manga.mal_id}`}>
          <motion.article
            key={manga.mal_id}
            className="relative group shadow-lg overflow-hidden rounded-xl"
            >
            {/* Image with a slight hover scale effect */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="h-72 w-full"
              >
              <Image
                src={manga.images.webp.large_image_url}
                alt={manga.title}
                height={600}
                width={1200}
                className="h-full w-full object-cover transition-transform duration-500 ease-in-out rounded-xl"
              />
            </motion.div>

            {/* Project Info Overlay */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <h3 className="text-xl font-bold text-white">{manga.title}</h3>
              <p className="text-sm text-gray-300 mt-2 line-clamp-2">
                {manga.synopsis}
              </p>
            </div>

            {/* Icon at the bottom right */}
            <div className="absolute bottom-5 right-5 p-3 bg-black/70 rounded-full text-white transition-transform duration-500 ease-in-out group-hover:scale-125">
              <MoveUpRight className="w-6 h-6" />
            </div>
          </motion.article>
        </Link>
        ))}
      </div>
    </section>
  );
}

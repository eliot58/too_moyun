"use client";

import Gallery from "@/components/layouts/gallery/Gallery";
import Layout from "@/components/layouts/Layout";
import News from "@/components/layouts/news/News";
import Statistic from "@/components/layouts/statistic/Statistic";
import {
  getFirstCards,
  getFirstGallery,
  getFirstGar,
} from "@/GlobalRedux/Features/firstGetData/firstGetDataSlice";
import {
  getCards,
  getGallery,
} from "@/GlobalRedux/Features/pagination/paginationSlice";
import { AppDispatch, RootState } from "@/GlobalRedux/store";
import { Size, useReSize } from "@/hooks/useReSize";
import { IGalleryData } from "@/interfaces/gallery.interface";
import { ICards } from "@/interfaces/news.interface";
import { Carousel } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Home: FC = () => {
  const cards = useSelector((state: RootState) => state.firstData);

  const dispatch = useDispatch<AppDispatch>();
  const size: Size = useReSize();

  useEffect(() => {
    dispatch(getFirstCards({ page: 1, pageSize: 6 }));
    dispatch(getFirstGar({ page: 1, pageSize: 6 }));
    dispatch(getFirstGallery({ page: 1, pageSize: 5 }));
  }, []);

  return (
    <>      
    <div className="bg-gray-300 text-center w-full laptop:pt-10 pt-10">
      <h1 className='text-red-600 text-2xl font-bold laptop:mb-10 mb-2'>Жарыялар</h1>
      <div className="flex laptop:justify-center justify-start laptop:mt-10 mt-0  py-10">
        <div className="h-600 laptop:w-1000 w-full ">
          <Carousel slideInterval={5000}>
            {cards.garNews.results.map((el) => {
              return (
                <div className="relative">
                  <Link href={`/newsPage/${el.id}`}>
                    <Image
                      className="w-full h-660"
                      src={el === null ? "" : el.img}
                      width={1000}
                      height={660}
                      alt="..."
                    />
                    <div className="absolute top-40% left-0 text-center w-full text-white">
                      <p className="text-3xl font-bold mb-5">
                        {el === null ? "" : el.title}
                      </p>
                      {size.width === undefined ? (
                        <></>
                      ) : size.width >= 1024 ? (
                        <p className="laptop:text-sm mx-20">
                          {el === null ? "" : el.text.length >= 200 ? '...': el.text}
                        </p>
                      ) : (
                        <></>
                      )}
                    </div>
                  </Link>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
      <News cards={cards.newsCards} />
      <Gallery gallery={cards.gallery} />
      <Statistic />
    </div>
    
    </>
  );
};

export default Home;

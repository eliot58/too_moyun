import Layout from "@/components/layouts/Layout";
import { getFirstMalymattar } from "@/GlobalRedux/Features/firstGetData/firstGetDataSlice";
import { getGarPagination } from "@/GlobalRedux/Features/pagination/paginationSlice";
import { AppDispatch, RootState } from "@/GlobalRedux/store";
import { Size, useReSize } from "@/hooks/useReSize";
import { idCard, IResult } from "@/interfaces/cardNews.interface";
import { Carousel } from "flowbite-react";
import Image from "next/image";
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const MalymattarPages: FC<idCard> = (id) => {
  const size: Size = useReSize();

  const cardNews = useSelector((state: RootState) => state.pagination);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getGarPagination({ page: 1, pageSize: 3 }));
  }, []);

  const card = () => {
    return cardNews.malymattar.results.filter((el) => el.id === id.id);
  };

  const cardEl = card();

  return (
    <>
      <h1 className="w-full text-center text-4xl font-bold text-red-600 mb-20">
        {cardEl[0] === undefined ? <></> : cardEl[0].title}
      </h1>
      <div className="flex laptop:px-24 laptop:mb-32 laptop:flex-row flex-col px-6 mb-4">
        <Image
          className="laptop:w-711 laptop:h-500 laptop:mr-16 w-full h-284 mb-5"
          src={
            cardEl[0] === undefined
              ? ""
              : typeof cardEl[0].img === "string"
              ? cardEl[0].img
              : ""
          }
          alt=""
          width={711}
          height={499}
        />
        <div className="laptop:w-40% flex flex-col laptop:justify-center laptop:items-start mobile:items-center">
          <Image src="/location.png" alt="" width={32} height={32} />
          <h2 className="laptop:text-2xl font-bold text-cardColor text-base">
            {cardEl[0] === undefined ? "" : cardEl[0].sub_title}
          </h2>
          <p className="laptop:w-500 text-newsColor laptop:text-lg text-sm w-388">
            {cardEl[0] === undefined ? <></> : cardEl[0].text}
          </p>
        </div>
      </div>
      <div className="flex w-full laptop:px-24 laptop:mb-32 px-6 mb-12">
        <div className="laptop:w-1/4 w-1/2">
          <div className="flex laptop:mb-5 mb-2">
            <Image
              className="mr-1"
              src="/cloud-sunny.png"
              alt=""
              width={32}
              height={32}
            />
            <Image
              className="mr-1"
              src="/sun-fog.png"
              alt=""
              width={32}
              height={32}
            />
            <Image
              className="mr-1"
              src="/sun.png"
              alt=""
              width={32}
              height={32}
            />
          </div>
          <h3 className="laptop:text-2xl font-bold laptop:mb-5 text-cardColor mb-2 text-base">
            {cardEl[0] === undefined ? <></> : cardEl[0].bottom_title}
          </h3>
          <p className="laptop:text-lg text-sm text-newsColor">
            {cardEl[0] === undefined ? <></> : cardEl[0].bottom_text}
          </p>
        </div>
        {size.width === undefined ? (
          <></>
        ) : size.width >= 1024 ? (
          <div className="flex">
            <Image
              className="mr-2 max-h-250"
              src={
                cardEl[0] === undefined
                  ? ""
                  : typeof cardEl[0].img_1 === "string"
                  ? cardEl[0].img_1
                  : ""
              }
              alt=""
              width={340}
              height={250}
            />
            <Image
              className="mr-2 max-h-250"
              src={
                cardEl[0] === undefined
                  ? ""
                  : typeof cardEl[0].img_2 === "string"
                  ? cardEl[0].img_2
                  : ""
              }
              alt=""
              width={340}
              height={250}
            />
            <Image
              className="mr-2 max-h-250"
              src={
                cardEl[0] === undefined
                  ? ""
                  : typeof cardEl[0].img_3 === "string"
                  ? cardEl[0].img_3
                  : ""
              }
              alt=""
              width={340}
              height={250}
            />
          </div>
        ) : (
          <div className="h-250 laptop:w-1/2 w-1/2">
            <Carousel slideInterval={5000}>
              <Image
                className="mr-2 max-h-250"
                src={
                  cardEl[0] === undefined
                    ? ""
                    : typeof cardEl[0].img_1 === "string"
                    ? cardEl[0].img_1
                    : ""
                }
                alt=""
                width={340}
                height={250}
              />
              <Image
                className="mr-2 max-h-250"
                src={
                  cardEl[0] === undefined
                    ? ""
                    : typeof cardEl[0].img_2 === "string"
                    ? cardEl[0].img_2
                    : ""
                }
                alt=""
                width={340}
                height={250}
              />
              <Image
                className="mr-2 max-h-250"
                src={
                  cardEl[0] === undefined
                    ? ""
                    : typeof cardEl[0].img_3 === "string"
                    ? cardEl[0].img_3
                    : ""
                }
                alt=""
                width={340}
                height={250}
              />
            </Carousel>
          </div>
        )}
      </div>
    </>
  );
};

export default MalymattarPages;

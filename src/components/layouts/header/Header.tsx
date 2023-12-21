import DowndropLink from "@/components/elementsPage/downdrop/DowndropLink";
import {
  getAllSearch,
  setSearchWordP,
} from "@/GlobalRedux/Features/search/searchSlice";
import { AppDispatch } from "@/GlobalRedux/store";
import { Size, useReSize } from "@/hooks/useReSize";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { useDispatch } from "react-redux";

const Header: FC = () => {
  const { pathname } = useRouter();

  const router = useRouter();

  const linkStyle = `text-navColor hover:text-black laptop:py-4 py-2`;

  const linkStyleActive = `hover:text-black laptop:py-4 py-2 active:text-black`;

  const size: Size = useReSize();

  const [isActiveMenu, setIsActiveMenu] = useState(false);

  const [searchWord, setSearchWord] = useState("");

  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (val: any) => {
    setSearchWord(val.target.value);
  };

  const handleClick = () => {
    dispatch(setSearchWordP(searchWord));
    dispatch(getAllSearch({ q: searchWord, page: 1, pageSize: 6 }));
    router.push("/search");
  };

  const handleIsActive = () => {
    setIsActiveMenu(!isActiveMenu);
  };

  return (
    <div className="relative text-center pt-10">
      {size.width === undefined ? (
        <></>
      ) : size.width >= 1024 ? (
        <div className="flex flex-col justify-center align-middle">
          <h1 className="text-3xl text-gold-text font-bold">
            “Төө-Моюн” айылдык аймагынын расмий баракчасы
          </h1>
          <div className="absolute left-0 top-0">
            <Image src="/headerleft.png" alt="" width={90} height={90} />
          </div>
          <div className="absolute right-0 bottom-0">
            <Image src="/right-heder.png" alt="" width={90} height={90} />
          </div>
        </div>
      ) : (
        <></>
      )}

      <header className="flex items-center bg-white w-full laptop:pt-1 pt-2 laptop:px-10 px-5 laptop:justify-center justify-between text-lg pb-8">
        <div className="laptop:mr-8">
          <Image src="/logo.png" alt="" width={67} height={67} />
        </div>
        <div className="flex w-full items-center laptop:justify-between laptop:flex-row flex-row-reverse">
          {size.width === undefined ? (
            <></>
          ) : size.width >= 1024 ? (
            <div className="mx-2 mt-0 flex justify-between w-3/4 mr-10">
              <Link
                href="/"
                className={pathname === "/" ? linkStyleActive : linkStyle}
              >
                Башкы бет
              </Link>
              <DowndropLink />
              <Link
                href="/garNews"
                className={
                  pathname === "/garNews" ? linkStyleActive : linkStyle
                }
              >
                Жарыялар
              </Link>
              <Link
                href="/newsPage"
                className={
                  pathname === "/newsPage" ? linkStyleActive : linkStyle
                }
              >
                Пресса
              </Link>
              <Link
                href="/malymattar"
                className={
                  pathname === "/malymattar" ? linkStyleActive : linkStyle
                }
              >
                Маалытматтар
              </Link>
              <Link
                href="/download"
                className={
                  pathname === "/download" ? linkStyleActive : linkStyle
                }
              >
                Токтомдор
              </Link>

              <Link
                href="/photoGallery"
                className={
                  pathname === "/photoGallery" ? linkStyleActive : linkStyle
                }
              >
                Сүрөттөр
              </Link>
            </div>
          ) : (
            <>
              <div className="h-12">
                <button onClick={handleIsActive}>
                  <Image src="/menuBar.svg" alt="" width={50} height={50} />
                </button>
                {isActiveMenu ? (
                  <div className="flex flex-col w-full absolute z-10 left-0 bg-white pl-10">
                    <Link
                      href="/"
                      className={pathname === "/" ? linkStyleActive : linkStyle}
                    >
                      Башкы бет
                    </Link>
                    <DowndropLink />
                    <Link
                      href="/garNews"
                      className={
                        pathname === "/garNews" ? linkStyleActive : linkStyle
                      }
                    >
                      Жарыялар
                    </Link>
                    <Link
                      href="/malymattar"
                      className={
                        pathname === "/malymattar" ? linkStyleActive : linkStyle
                      }
                    >
                      Маалыматтар
                    </Link>
                    <Link
                      href="/download"
                      className={
                        pathname === "/download" ? linkStyleActive : linkStyle
                      }
                    >
                      Токтомдор
                    </Link>

                    <Link
                      href="/photoGallery"
                      className={
                        pathname === "/photoGallery"
                          ? linkStyleActive
                          : linkStyle
                      }
                    >
                      Фотогалерея
                    </Link>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </>
          )}
          <div className="relative laptop:mr-0 mr-2">
            <button
              className="absolute laptop:top-3 laptop:left-4 top-3 left-3"
              onClick={handleClick}
            >
              <Image src="/search.png" alt="" width={16} height={16} />
            </button>
            <input
              onChange={(e) => handleChange(e)}
              value={searchWord}
              className="laptop:w-64 laptop:rounded-3xl laptop:pl-12 bg-searchBg text-searchColor laptop:py-2 w-10 h-10 rounded-full focus:w-64 active:w-64 focus:pl-12 active:pl-12 pr-5"
              placeholder={
                size.width === undefined
                  ? ""
                  : size.width >= 1024
                  ? "Search for..."
                  : ""
              }
            />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;

import React, { FC, PropsWithChildren } from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import { Providers } from "@/GlobalRedux/provider";
import Image from "next/image";
import { Size, useReSize } from "@/hooks/useReSize";

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {


  const size: Size = useReSize();


  return (
    <div className="relative flex justify-center">
      {size.width === undefined ? (
          <></>
        ) : size.width >= 1024 ? (
          <div className="fixed inset-0 h-screen">
        <Image src="/tooBg.png" alt="background image" fill />
      </div>
          ): <></>}
      <div className="relative z-10 laptop:w-90% w-full laptop:bg-white">
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </div>
    </div>
  );
};

export default Layout;

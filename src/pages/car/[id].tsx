import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";

const CarPage: NextPage = () => {
  const { asPath, pathname } = useRouter();

  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((count) => count + 1);
  };

  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <div className="text-yellow-600 text-center text-3xl ">{count}</div>
      <button
        className="border-2 border-green-400 mt-5 text-green-600 bg-red-700 py-2 px-6 rounded-md"
        onClick={handleClick}
      >
        Click
      </button>
    </div>
  );
};

export default CarPage;

"use client";
import { useState, MouseEvent } from "react";
import Image from "next/image";
import pdca from "../../public/images/pdca.png";
import "@/app/ui/rotate.scss";
import { MoveButton } from "./components/button/move_button";

export default function Home() {
  const [isMoved, setIsMoved] = useState(false);

  const getStateClass = (isMoved: boolean) => {
    return isMoved ? "cycling" : "paused";
  };

  const handleMoveButtonClick = (bool: boolean) => {
    setIsMoved(bool);
  };

  const className: string[] = [];
  className.push("pdca");
  className.push(getStateClass(isMoved));
  return (
    <>
      <Image
        id="rotating-image"
        src={pdca}
        height={500}
        width={500}
        alt="pdcaサークル"
        className={className.join(" ")}
        priority
      />
      {isMoved ? (
        <MoveButton
          onClick={() => handleMoveButtonClick(false)}
          title="停止"
          buttonStyle="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
        />
      ) : (
        <MoveButton
          onClick={() => handleMoveButtonClick(true)}
          title="まわす"
          buttonStyle="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
        />
      )}
    </>
  );
}

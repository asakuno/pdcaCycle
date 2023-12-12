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
        <MoveButton onClick={() => handleMoveButtonClick(false)} title="停止" />
      ) : (
        <MoveButton
          onClick={() => handleMoveButtonClick(true)}
          title="まわす"
        />
      )}
    </>
  );
}

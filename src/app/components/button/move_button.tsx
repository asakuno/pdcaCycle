import React from "react";

interface MoveButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  title: string;
  buttonStyle: string;
}
export const MoveButton = ({
  onClick,
  title,
  buttonStyle,
}: MoveButtonProps) => {
  return (
    <button onClick={onClick} className={buttonStyle}>
      {title}
    </button>
  );
};

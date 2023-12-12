import React from "react";

interface MoveButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  title: string;
}
export const MoveButton = ({ onClick, title }: MoveButtonProps) => {
  return <button onClick={onClick}>{title}</button>;
};

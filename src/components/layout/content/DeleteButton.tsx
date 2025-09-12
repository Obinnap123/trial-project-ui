'use client';

import { BORDER_RADIUS } from "@/constants/styles";

interface DeleteButtonProps {
  onDelete?: () => void;
}

export default function DeleteButton({ onDelete }: DeleteButtonProps) {
  return (
    <div className="hidden lg:flex justify-center w-[60px]">
      <button 
        onClick={onDelete}
        className={`w-8 h-8 flex items-center justify-center ${BORDER_RADIUS.full} bg-gray-100 hover:bg-red-100 cursor-pointer`}
      >
        <img src="/trash.png" alt="Delete" className="w-4 h-4" />
      </button>
    </div>
  );
}

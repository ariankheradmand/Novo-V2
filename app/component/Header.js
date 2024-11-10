import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LuCakeSlice } from "react-icons/lu";
import { MdOutlineLocalCafe } from "react-icons/md";
function Header() {
  return (
    <header className="w-full relative">
      <div className="flex w-full h-32 bg-accent">
        <div className="w-6/12 relative">
          <div className="bg-white w-fit h-fit flex items-center justify-center absolute p-1 rounded-md left-4 top-4">
            <LuCakeSlice className="size-8 " />
            <MdOutlineLocalCafe className="size-8 " />
          </div>
          <div className="flex absolute bottom-0 left-3">
          <h3 className="text-secondary text-sm w-full font-bold">شماره تماس : 08338238383</h3>
          </div>
        </div>
        <div className="w-6/12 relative">
          <Image alt="Novo logo" width={160} height={120} src={"/NOVO-LOGO.jpg"}  className="rounded-md absolute right-4 -bottom-10"></Image>
        </div>
      </div>
    </header>
  );
}

export default Header;

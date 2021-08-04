import Image from "next/image";
import { BadgeCheckIcon, CollectionIcon, HomeIcon, LightBulbIcon, SearchIcon, UserIcon } from "@heroicons/react/outline";
import HeaderItem from "./HeaderItem";

function Header() {
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightBulbIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />

      </div>
      <Image
        src="https://hulu.tv/3ijRdbz"
        width={220}
        height={100}
        className="object-contain"
      />
    </header>
    )
}

export default Header


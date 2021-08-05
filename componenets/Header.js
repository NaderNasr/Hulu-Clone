import Image from "next/image";
import { BadgeCheckIcon, CollectionIcon, HomeIcon, LightBulbIcon, SearchIcon, UserIcon } from "@heroicons/react/outline";
import HeaderItem from "./HeaderItem";
import Link from 'next/link'; 

function Header() {
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
      <Link href="https://www.nadernasr.ca/" passHref={true}>
      <button>
        <HeaderItem title="My website" Icon={HomeIcon}/>
        </button>
        </Link>
        <HeaderItem title="TRENDING" Icon={LightBulbIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />

      </div>
      <Link href="https://www.nadernasr.ca/" passHref={true}>
      <button>
      <Image
        src="https://hulu.tv/3ijRdbz"
        width={220}
        height={100}
        className="object-contain"
      />
      </button>
        </Link>
    </header>
    )
}

export default Header


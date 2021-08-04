import Image from "next/image";
import huluLogo from "../assets/huluLogo.png";

const Header = () => {
  return (
    <header className="">
      <h1>Header</h1>
      <Image src="https://hulu.tv/3ijRdbz" width={220} height={100} className="object-contain"/>
    </header>
  );
};

export default Header;

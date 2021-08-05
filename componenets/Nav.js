import { useRouter } from "next/dist/client/router";
import requests from "../utils/requests";

function Nav() {
    const router = useRouter()
  return (
    <nav className='relative'>
      <div className="flex px-10 sm:px-20 scrollbar-hide text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-auto">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            key={key}
            onClick={() => router.push(`/?genre=${key}`)}
            className="last:pr-24 cursor-pointer transition 
            transform hover:scale-125 hover:text-red-500"
          >
            {title}
          </h2>
        ))}
      </div>
      <div className='absolute top-0 right-0 bg-gradient-to-l from-blue-900 h-10 w-1/2'/>
    </nav>
  );
}

export default Nav;

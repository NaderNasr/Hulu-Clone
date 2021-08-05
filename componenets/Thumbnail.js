import Image from "next/image";

function Thumbnail({res}) {

    const URL = "https://image.tmdb.org/t/p/original/"

    return (
        <div>
            <Image 
                layout='responsive'
                height={1080}
                width={1920}
                src={
                    `${URL}${res.backdrop_path || res.poster_path}` || 
                `${URL}${res.poster_path}`}
            />
        </div>
    )
}

export default Thumbnail

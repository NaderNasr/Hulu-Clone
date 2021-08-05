import Thumbnail from "./Thumbnail"

function Results({data}) {
    return (
        <div className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-4 3xl:flex flex-wrap justify-center'>
            {data.map(res => (
                <Thumbnail key={res.id} res={res} />
            ))}
        </div>
    )
}

export default Results

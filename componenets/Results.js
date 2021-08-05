import Thumbnail from "./Thumbnail"

function Results({data}) {
    return (
        <div>
            {data.map(res => (
                <Thumbnail key={res.id} res={res} />
            ))}
        </div>
    )
}

export default Results

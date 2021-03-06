import Head from "next/head";
import Header from "../componenets/Header";
import Nav from "../componenets/Nav";
import Results from "../componenets/Results";
import requests from "../utils/requests";
const API_KEY = process.env.API_KEY


export default function Home({data}) {
  // console.log({data})
  
  return (
    <div>
      <Head>
        <title>Hulu Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Nav />
      <Results data={data}/>
    </div>
  );
}

export async function getServerSideProps(context) {
  
  // const genre = context.query.genre
  // const data = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url 
  // || requests.fetchTrending.url}`)
  // .then((res) => res.json())
  const genre = context.query.genres
  const res = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url 
  || requests.fetchTrending.url || requests.fetchTopRated.url}`)
  let data = await res.json()
  // console.log(data.results)
  if (!data) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      data: data.results
    },
  }
} 

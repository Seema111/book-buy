import Head from 'next/head'
import NavBar from "./container/NavBar";
import ListPage from "./components/ListPage";

export default function Home() {
  return (
    <div>
        <Head>
        <title>Book App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <NavBar/>
        <ListPage/>
        <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  )
}

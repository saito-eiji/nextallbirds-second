import Head from 'next/head'
import Link from 'next/link'

export default function Collection() {
  return (
    <>
    
      <Head>
        <title>next-allbirds-collection</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="fixed w-full bg-white z-50">
        <nav className="flex font-bold justify-between items-center max-w-screen-xl mx-auto my-0">
          <ul className="flex">
            <Link href="/collection"><a><li className="p-5">メンズ</li></a></Link>
            <Link href="/collection"><a><li className="p-5">ウィメンズ</li></a></Link>
            <Link href="/collection"><a><li className="p-5">キッズ</li></a></Link>
          </ul>
          <img width="150px" className="p-3 transform hover:scale-125 duration-100" src="/images/allbirds-logo.png"/>
          <ul className="flex">
            <Link href="/"><a><li className="p-5">素材について</li></a></Link>
            <Link href="/"><a><li className="p-5">店舗について</li></a></Link>
          </ul>
        </nav>        
      </header>

      <main>
        <Link href="/"><a　className="p-5"><h2>トップに戻る</h2></a></Link>
      </main>

      <footer>
      </footer>
    </>
  )
}
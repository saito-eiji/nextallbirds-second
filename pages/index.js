import Head from 'next/head'
import Link from 'next/link'

const style = {
  paddingTop:'60vh',
  width:'100vw',
};

const backgroundImage = {
  paddingTop:'40vh',
  width:'100vw',
};

const cardImage = {
  paddingTop:'100%',
  width:'100%',
};

export default function Home() {
  
  return (
    <>
      
      <Head>
        <title>next-allbirds</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="noindex" />
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
            <Link href="/collection"><a><li className="p-5">素材について</li></a></Link>
            <Link href="/collection"><a><li className="p-5">店舗について</li></a></Link>
          </ul>
        </nav>        
      </header>

      <main>
        <div className="bg-firstview bg-cover bg-center" style={style} >
          <div className="max-w-screen-xl mx-auto my-0 p-5">
            <div className="w-full">
              <div  className="font-black text-5xl text-white leading-tight">
                <h1>春を彩る<br />さくら色が新登場！</h1>
              </div>
              <div className="my-3 flex w-96 max-w-full mt-6">
                <Link href="/collection"><a className="font-bold text-sm bg-white px-4 mr-5 py-3 w-40 text-center align-middle hover:text-white hover:bg-black">  メンズを見る</a></Link>
                <Link href="/collection"><a className="font-bold text-sm bg-white px-4 py-3 w-40 text-center align-middle hover:text-white hover:bg-black">ウィメンズを見る</a></Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="my-32">
          <div className="max-w-screen-xl mx-auto mb-30 pb-10">
            <div className="font-black text-3xl leading-tight pl-4 pb-6">
              <h2>あなたへのオススメ</h2>
            </div>
            <div className="flex">
              <div className="w-1/3 shadow-xl mx-4">
                <div className="flex w-full">
                  <Link href="/collection">
                    <a className="w-full">
                      <div className="overflow-hidden">
                        <div className="transform hover:scale-105 duration-300 ease-out">
                          <div className="bg-beach bg-cover bg-center" style={cardImage}></div>
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="font-bold text-2xl pb-2">
                          <h3>Run Hard, Tread Light</h3>
                        </div>
                        <p>Tree Dasherは、天然素材で作られたシューズです。</p>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="w-1/3 shadow-xl mx-4">
                <div className="flex w-full">
                  <Link href="/collection">
                    <a className="w-full">
                    <div className="overflow-hidden">
                        <div className="transform hover:scale-105 duration-300 ease-out">
                          <div className="bg-store bg-cover bg-center" style={cardImage}></div>
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="font-bold text-2xl pb-2">
                          <h3>店舗はオープンしております</h3>
                        </div>
                        <p>私たちは、お客様と従業員の安全が最重要だと思っております。</p>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="w-1/3 shadow-xl mx-4 ">
                <div className="flex w-full">
                  <Link href="/collection">
                    <a className="w-full">
                      <div className="overflow-hidden">
                        <div className="transform hover:scale-105 duration-300 ease-out">
                          <div className="bg-sheep bg-cover bg-center" style={cardImage}></div>
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="font-bold text-2xl pb-2">
                          <h3>私達は、B Corpとして認定されています。</h3>
                        </div>
                        <p>地球環境は、私たちにとって重要なステークホルダーです。</p>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-running bg-cover bg-center my-20 w-full" style={backgroundImage}></div>

        <div className="text-center my-20">
          <div className="font-black text-3xl leading-tight pb-6">
            <h2>地球の未来のために</h2>
          </div>
          <div className="text-base pb-8">
            <p >天然素材から生まれた、ナチュラルなランニングシューズ</p>
          </div>
          <div>
            <Link href="/collection"><a className="border-black border-2 font-bold text-sm bg-black text-white px-24 py-3 w-40 text-center align-middle hover:text-black hover:bg-white">SHOP NOW</a></Link>
          </div>
        </div>

        <div className="bg-running bg-cover bg-center my-20" style={backgroundImage}></div>
        

        <div className="text-center my-20">
          <div className="font-black text-3xl leading-tight pb-6">
            <h2>天然由来で、地球に優しく</h2>
          </div>
          <div className="text-base pb-8">
            <p>エシカルに生産されたメリノウールやユーカリなどを使用しています。サステイナブルな未来のために。</p>
          </div>
          <div>
            <Link href="/collection"><a className="border-black border-2 font-bold text-sm bg-black text-white px-24 py-3 w-40 text-center align-middle hover:text-black hover:bg-white">詳細はこちら</a></Link>
          </div>
        </div>

        <div className="my-32">
          <div className="max-w-screen-xl mx-auto mb-30 pb-10">
            <div className="font-black text-3xl leading-tight pl-4 pb-6">
              <h2>カテゴリー別</h2>
            </div>
            <div className="flex">
              <div className="w-1/3 shadow-xl mx-4">
                <div className="flex w-full">
                  <Link href="/collection">
                    <a className="w-full">
                      <div className="overflow-hidden">
                        <div className="transform hover:scale-105 duration-300 ease-out">
                          <div className="bg-beach bg-cover bg-center" style={cardImage}></div>
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="font-bold text-2xl pb-2">
                          <h3>Run Hard, Tread Light</h3>
                        </div>
                        <p>Tree Dasherは、天然素材で作られたシューズです。</p>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="w-1/3 shadow-xl mx-4">
                <div className="flex w-full">
                  <Link href="/collection">
                    <a className="w-full">
                    <div className="overflow-hidden">
                        <div className="transform hover:scale-105 duration-300 ease-out">
                          <div className="bg-store bg-cover bg-center" style={cardImage}></div>
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="font-bold text-2xl pb-2">
                          <h3>店舗はオープンしております</h3>
                        </div>
                        <p>私たちは、お客様と従業員の安全が最重要だと思っております。</p>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="w-1/3 shadow-xl mx-4 ">
                <div className="flex w-full">
                  <Link href="/collection">
                    <a className="w-full">
                      <div className="overflow-hidden">
                        <div className="transform hover:scale-105 duration-300 ease-out">
                          <div className="bg-sheep bg-cover bg-center" style={cardImage}></div>
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="font-bold text-2xl pb-2">
                          <h3>私達は、B Corpとして認定されています。</h3>
                        </div>
                        <p>地球環境は、私たちにとって重要なステークホルダーです。</p>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-running bg-cover bg-center my-20" style={backgroundImage}></div>
        

        <div className="text-center my-20 max-w-screen-xl mx-auto my-0">
          <div className="font-black text-3xl leading-tight pb-6">
            <h2>地球に優しく</h2>
          </div>
          <div className="text-base pb-8">
            <p className="inline-block md:w-6/12 w-9/12">一般的なスニーカーは、12.5 kg CO2eのカーボンフットプリント(温室効果ガス)を排出します。 一方でオールバーズのスニーカーの平均的な排出量は、7.6kg CO2e。良い数値ではありますが、より一層、地球にやさしい製品を作りたいと考えています。私たちの究極のゴールは、製品のカーボンフットプリント排出量をゼロにすること。そのための最初のステップは、その排出量を測ることです。まだゼロにはなっていませんが、私たちはいつか必ずゼロにします。この取り組みは、持続可能な未来のための計画のひとつです。</p>
          </div>
          <div>
            <Link href="/collection"><a className="border-black border-2 font-bold text-sm bg-black text-white px-24 py-3 w-40 text-center align-middle hover:text-black hover:bg-white">サスティナビリティーへの取り組み</a></Link>
          </div>
        </div>


        <div className="my-32">
          <div className="max-w-screen-xl mx-auto mb-30 pb-10">
            <div className="font-black text-3xl leading-tight pl-4 pb-6">
              <h2>ストーリー</h2>
            </div>
            <div className="flex">
              <div className="w-1/3 shadow-xl mx-4">
                <div className="flex w-full">
                  <Link href="/collection">
                    <a className="w-full">
                      <div className="overflow-hidden">
                        <div className="transform hover:scale-105 duration-300 ease-out">
                          <div className="bg-beach bg-cover bg-center" style={cardImage}></div>
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="font-bold text-2xl pb-2">
                          <h3>Run Hard, Tread Light</h3>
                        </div>
                        <p>Tree Dasherは、天然素材で作られたシューズです。</p>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="w-1/3 shadow-xl mx-4">
                <div className="flex w-full">
                  <Link href="/collection">
                    <a className="w-full">
                    <div className="overflow-hidden">
                        <div className="transform hover:scale-105 duration-300 ease-out">
                          <div className="bg-store bg-cover bg-center" style={cardImage}></div>
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="font-bold text-2xl pb-2">
                          <h3>店舗はオープンしております</h3>
                        </div>
                        <p>私たちは、お客様と従業員の安全が最重要だと思っております。</p>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="w-1/3 shadow-xl mx-4 ">
                <div className="flex w-full">
                  <Link href="/collection">
                    <a className="w-full">
                      <div className="overflow-hidden">
                        <div className="transform hover:scale-105 duration-300 ease-out">
                          <div className="bg-sheep bg-cover bg-center" style={cardImage}></div>
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="font-bold text-2xl pb-2">
                          <h3>私達は、B Corpとして認定されています。</h3>
                        </div>
                        <p>地球環境は、私たちにとって重要なステークホルダーです。</p>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="fixed bottom-0 right-0 m-5 px-5 py-4 bg-gray-700 text-white rounded-full border-white border-2">
          お問合せはこちら！
        </div>
      </main>

      <footer className="w-full bg-gray-800 text-white">
        <nav className="flex items-start max-w-screen-xl mx-auto my-0 pt-5">
          <ul className="p-5 w-1/5">
            <h4 className="px-2 py-3 text-xl font-bold">ヘルプ</h4>
            <Link href="/collection"><a><li className="px-2 py-2">help@allbirds.jp</li></a></Link>
            <Link href="/collection"><a><li className="px-2 py-2">0800-080-4054</li></a></Link>
            <Link href="/collection"><a><li className="px-2 py-2">返品・交換</li></a></Link>
            <Link href="/collection"><a><li className="px-2 py-2">FAQ・お問い合わせ</li></a></Link>
          </ul>
          <ul className="p-5 w-1/5">
            <h4 className="px-2 py-3 text-xl font-bold">ショップ</h4>
            <Link href="/collection"><a><li className="px-2 py-2">メンズシューズ</li></a></Link>
            <Link href="/collection"><a><li className="px-2 py-2">ウィメンズシューズ</li></a></Link>
            <Link href="/collection"><a><li className="px-2 py-2">メンズアパレル</li></a></Link>
            <Link href="/collection"><a><li className="px-2 py-2">ウィメンズアパレル</li></a></Link>
            <Link href="/collection"><a><li className="px-2 py-2">ソックス</li></a></Link>
          </ul>
          <ul className="p-5  w-1/5">
            <h4 className="px-2 py-3 text-xl font-bold">ALLBIRDSについて</h4>
            <Link href="/collection"><a><li className="px-2 py-2">サステナビリティー</li></a></Link>
            <Link href="/collection"><a><li className="px-2 py-2">素材について</li></a></Link>
            <Link href="/collection"><a><li className="px-2 py-2">ストーリー</li></a></Link>
            <Link href="/collection"><a><li className="px-2 py-2">店舗</li></a></Link>
            <Link href="/collection"><a><li className="px-2 py-2">こだわっていますか？</li></a></Link>
          </ul>
        </nav> 

        <div className="flex items-start max-w-screen-xl mx-auto my-0 pt-5">
          <div className="p-7 w-2/5">
              <h4 className="py-3 text-xl font-bold">ALLBIRDSをフォローしよう！</h4>
              <p>最新情報や、Allbirds商品のスナップショットなどが見れます。<br />かわいい羊もいますよ。#weareallbirds</p>
          </div>
          
          <img className="w-20 my-10 mx-7" src="https://cdn.allbirds.com/image/upload/q_auto/v1/production/footer/ja-JP/images/1X4EOQF1JJOjMbo48vDUzB/1"></img>
          
        </div>
        <div className="mx-auto my-0 max-w-screen-xl text-center py-16">
          <small>© 2021 Allbirds 利用規約, プライバシーポリシー と 特定商取引法に基づく表記.</small>
        </div>
      </footer>
    </>
  )
}

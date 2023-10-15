// components/MainBody.js
import React from 'react'
import Ellipse1 from 'assets/Ellipse1.png'
import Ellipse2 from 'assets/Ellipse2.png'
import Ellipse3 from 'assets/Ellipse3.png'

const randoms = [1, 2, 3, 4]

function MainBody() {
  return (
    <div className="top-10 h-full w-full bg-MainBodyColor1/5 z-0">
      <img src={Ellipse1} className='absolute right-0 bottom-0  z-0 w-1/2'></img>
      <img src={Ellipse2} className='absolute left-1/4 -top-10 z-0 w-1/2'></img>
      <img src={Ellipse3} className='absolute left-0 top-10 z-0 w-1/3'></img>

      <div className="flex">
        <div className="flex-1 w-90 h-full ml-36 mt-56 z-10">
          <div className="h-20">
            {/* <Avatar size="large" src={logo} /> */}
          </div>
          <h1 className="text-6xl font-bold tracking-tight text-gray-900 mb-1">
            IF YOU WANT IT,
          </h1>
          <h1 className="text-6xl font-bold tracking-tight text-gray-900 mb-8">
            I WILL SURPRISE YOU!
          </h1>
          <div>
            <div className="mt-6 flex">
              <a
                href="/wish"
                className="inline-block rounded-xl border border-FontColor1 bg-MainBodyColor2 px-12 py-2 text-center font-normal text-FontColor1 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2"
              >
                Make a wish
              </a>
              <div className='w-10'></div>
              <a
                href="/search"
                className="inline-block rounded-xl border border-FontColor1 bg-MainBodyColor3 px-12 py-2 text-center font-normal text-FontColor1 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2"
                >
                Meet a wish
              </a>
            </div>
          </div>
        </div>

        <div className='flex-2 z-10'></div>

        <div
          className="flex-1 mt-40 ml-20 z-10"
        >
          <div className="grid grid-cols-2 gap-y-10">
            {randoms.map((number, i) => (
              <div
                key={`random-${number}`}
                className="w-60 sm:opacity-0 lg:opacity-100"
              >
                <img
                  src={`https://picsum.photos/600?random=${number}`}
                  alt=""
                  className={`rounded-3xl ${i % 2 == 1 ? '-ml-20' : 'ml-0'}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainBody

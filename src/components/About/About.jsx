import React from 'react';

function About() {
  return (
    <div className='text-center bg-gray-50 text-gray-800 py-20 px-6'>
      <div class='container mx-auto'>
        <section class='mb-32 text-gray-800 text-center'>
          <h1 class='text-3xl font-bold mb-4'>かつらばキッチン紹介</h1>
          <h3 className='text-1xl font-extralight mb-20'>
            従来のレストランでは出来ない 「料理特化型レストラン」
            本来、レストランでは欠かせない、「立地」「接客」「空間」を廃止し、「美味しい料理」にこだわったらこの形にたどり着きました。
          </h3>
          <div class='grid lg:gap-x-12 lg:grid-cols-3'>
            <div class='mb-12 lg:mb-0'>
              <div class='rounded-lg shadow-lg h-full block bg-white'>
                <div class='flex justify-center'>
                  <div class='p-4 bg-pink-500 rounded-full shadow-lg inline-block -mt-8'>
                    <svg
                      class='w-8 h-8 text-white'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 512 512'
                    >
                      <span class='material-symbols-outlined'>storefront</span>
                      <path
                        fill='currentColor'
                        d='M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z'
                      ></path>
                    </svg>
                  </div>
                </div>
                <div class='p-6'>
                  <h5 class='text-lg font-semibold mb-4'>立地</h5>
                  <p>
                    人通りの多い駅前ビルの一階。お店を出すのであれば少しでも人目に付きやすい場所に！しかしそういった場所は、えてして家賃も高くコストがかかります。当店は、人目につきずらい雑居ビルの6階に構え、お客様をデリバリーのみに絞ることで余ったコストを料理に費やしています。
                  </p>
                </div>
              </div>
            </div>

            <div class='mb-12 lg:mb-0'>
              <div class='rounded-lg shadow-lg h-full block bg-white'>
                <div class='flex justify-center'>
                  <div class='p-4 bg-pink-500 rounded-full shadow-lg inline-block -mt-8'>
                    <svg
                      class='w-8 h-8 text-white'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 512 512'
                    >
                      <path
                        fill='currentColor'
                        d='M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z'
                      ></path>
                    </svg>
                  </div>
                </div>
                <div class='p-6'>
                  <h5 class='text-lg font-semibold mb-4'>接客</h5>
                  <p>
                    質の高い接客を提供するにもコストがかかります。お客様に快適なひと時を過ごしていただくためには、たくさんのウェイターを揃え、お店に合った教育をしなければなりません。かつらばキッチンでは接客を省くことでその分に費やす時間もお金も料理に費やします。
                  </p>
                </div>
              </div>
            </div>

            <div class=''>
              <div class='rounded-lg shadow-lg h-full block bg-white'>
                <div class='flex justify-center'>
                  <div class='p-4 bg-pink-500 rounded-full shadow-lg inline-block -mt-8'>
                    <svg
                      class='w-8 h-8 text-white'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 512 512'
                    >
                      <path
                        fill='currentColor'
                        d='M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z'
                      />
                    </svg>
                  </div>
                </div>
                <div class='p-6'>
                  <h5 class='text-lg font-semibold mb-4'>空間</h5>
                  <p>
                    オシャレなテーブルや椅子、手入れの行届いた食器類、お店のコンセプトに合わせた内装。整った環境での食事も素晴らしいけれど、一番居心地の良いご自宅での食事も負けないくらい素晴らしいはず。お皿も箸も使い捨てだけれども、その分美味しいものを安く食べていただきたい。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;

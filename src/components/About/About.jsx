import React from 'react';
import { IoStorefront } from 'react-icons/io5';
import { IoPeople } from 'react-icons/io5';
import { ImSpoonKnife } from 'react-icons/im';
import Underline from '../Underline/Underline';

function About() {
  return (
    <div className='text-center bg-gray-50 text-gray-800 py-20 px-6'>
      <div className='container mx-auto'>
        <section className='mb-32 text-gray-800 text-center'>
          <h1 className='text-xl md:text-2xl font-bold mb-4'>
            かつらばキッチン紹介
          </h1>
          <Underline />
          <h3 className='text-base md:text-1xl my-5 font-extralight mb-20'>
            従来のレストランでは出来ない 「料理特化型レストラン」
            本来、レストランでは欠かせない、「立地」「接客」「空間」を廃止し、「美味しい料理」にこだわったらこの形にたどり着きました。
          </h3>
          <div className='grid md:gap-x-12 md:grid-cols-3'>
            <div className='mb-12 lg:mb-0'>
              <div className='rounded-lg shadow-lg h-full block bg-white'>
                <div className='flex justify-center'>
                  <div
                    className='p-4 bg-pink-500 rounded-full shadow-lg inline-block -mt-8 text-3xl'
                    viewBox='0 0 512 512'
                  >
                    <span className='w-8 h-8 text-white material-symbols-outlined'>
                      <IoStorefront />
                    </span>
                  </div>
                </div>
                <div className='p-6'>
                  <h5 className='text-sm md:text-base font-semibold mb-4'>
                    立地
                  </h5>
                  <p className='text-sm md:text-base'>
                    人通りの多い駅前ビルの一階。お店を出すのであれば少しでも人目に付きやすい場所に！しかしそういった場所は、えてして家賃も高くコストがかかります。当店は、人目につきずらい雑居ビルの6階に構え、お客様をデリバリーのみに絞ることで余ったコストを料理に費やしています。
                  </p>
                </div>
              </div>
            </div>

            <div className='mb-12 lg:mb-0'>
              <div className='rounded-lg shadow-lg h-full block bg-white'>
                <div className='flex justify-center'>
                  <div
                    className='p-4 bg-pink-500 rounded-full shadow-lg inline-block -mt-8 text-3xl'
                    viewBox='0 0 512 512'
                  >
                    <span className='w-8 h-8 text-white material-symbols-outlined'>
                      <IoPeople />
                    </span>
                  </div>
                </div>
                <div className='p-6'>
                  <h5 className='text-sm md:text-base font-semibold mb-4'>
                    接客
                  </h5>
                  <p className='text-sm md:text-base'>
                    質の高い接客を提供するにもコストがかかります。お客様に快適なひと時を過ごしていただくためには、たくさんのウェイターを揃え、お店に合った教育をしなければなりません。かつらばキッチンでは接客を省くことでその分に費やす時間もお金も料理に費やします。
                  </p>
                </div>
              </div>
            </div>

            <div className='mb-12 lg:mb-0'>
              <div className='rounded-lg shadow-lg h-full block bg-white'>
                <div className='flex justify-center'>
                  <div
                    className='p-4 bg-pink-500 rounded-full shadow-lg inline-block -mt-8 text-3xl'
                    viewBox='0 0 512 512'
                  >
                    <span className='w-8 h-8 text-white material-symbols-outlined'>
                      <ImSpoonKnife />
                    </span>
                  </div>
                </div>
                <div className='p-6'>
                  <h5 className='text-sm md:text-base font-semibold mb-4'>
                    空間
                  </h5>
                  <p className='text-sm md:text-base'>
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

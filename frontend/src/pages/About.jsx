import React from 'react'
import Title from '../components/Title'
import NewsTeller from '../components/NewsTeller'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t' >
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16 ">
        <img className='w-full max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Welcome to ShopEase, your ultimate destination for effortless shopping! We believe in bringing you the latest trends, high-quality products, and a seamless shopping experience—all in one place. Our mission is to make online shopping simple, enjoyable, and convenient, offering a wide range of curated collections that suit every style and need.</p>
          <p>At ShopEase, customer satisfaction is our top priority. From trendy fashion to must-have essentials, we ensure every product meets the highest standards. With secure payments, fast shipping, and dedicated support, we make sure you shop with confidence.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>To deliver quality products with a seamless, enjoyable, and hassle-free shopping experience.!</p>
        </div>
      </div>
      <div className="text-4xl py-4">
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-10 flex flex-col gap-5 ">
          <b>Quality Assurance :</b>
          <p className='text-gray-600'> Premium products, carefully curated for durability and excellence!</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-10 flex flex-col gap-5 ">
          <b>Convenience :</b>
          <p className='text-gray-600'>Seamless shopping with easy navigation, secure payments, and fast delivery!</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-10 flex flex-col gap-5 ">
          <b>Exceptional Customer Service :</b>
          <p className='text-gray-600'>Dedicated support to ensure a hassle-free shopping experience!</p>
        </div>
      </div>

      <NewsTeller />

    </div>
  )
}

export default About
'use client'
import React, { useEffect, useState } from 'react'
import { assets, } from '@/assets/assets';
import Footer from '@/components/footer';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';

const page = ({ params }) => {

    const [data, setData] = useState(null)

    const fetchBlogData = async () => {
        const response = await axios.get('/api/blog', {
            params: {
                id: params.id
            }
        });
        setData(response.data);
    }
    useEffect(() => {
        fetchBlogData();
    }, [params.id,])

    return (
        data ? <>
            <div className='bg-gray-200 px-5 py-5 md:px-25 lg:px-28'>
                <div className="flex justify-between items-center">
                    <Link href="/">
                        <Image src={assets.logo} width={180} alt='' className='w-[130px] sm:w-auto' />
                    </Link>
                    <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border  border-black shadow-[-7px_7px_0px_#000000'>
                        Get Started
                        <Image src={assets.arrow} alt='' />
                    </button>
                </div>
                <div className='text-center my-24'>
                    <h1 className='text-2xl sm:text-5xl font-semibold  max-w-[700px] mx-auto'>{data.title}</h1>
                    <Image src={data.image} width={60} height={60} alt='' className='mx-auto mt-6 border border-white rounded-full' />
                    <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>
                </div>
                <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100] mb-10'>
                    <Image src={data.image} width={1280} height={120} alt='' className='border-4 border-white' />
                    <h1 className='my-8 text-[26px] font-semibold '>Introduction</h1>
                    <p className=''>{data.description}</p>
                    <h3 className='my-5 text-[18px] font-semibold'>Step 1: self Reflection and goal .....</h3>
                    <p className='my-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam natus aut voluptates corporis eaque architecto recusandae expedita maiores distinctio ea facere laudantium similique vel itaque, incidunt veritatis quia libero pariatur.</p>
                    <p className='my-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam natus aut voluptates corporis eaque architecto recusandae expedita maiores distinctio ea facere laudantium similique vel itaque, incidunt veritatis quia libero pariatur.</p>
                    <p className=''>{data.description}</p>
                    <h3 className='my-5 text-[18px] font-semibold'>Step 2: self Reflection and goal .....</h3>
                    <p className='my-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam natus aut voluptates corporis eaque architecto recusandae expedita maiores distinctio ea facere laudantium similique vel itaque, incidunt veritatis quia libero pariatur.</p>
                    <p className='my-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam natus aut voluptates corporis eaque architecto recusandae expedita maiores distinctio ea facere laudantium similique vel itaque, incidunt veritatis quia libero pariatur.</p>
                    <p className=''>{data.description}</p>
                    <h3 className='my-5 text-[18px] font-semibold'>Step 3: self Reflection and goal .....</h3>
                    <p className='my-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam natus aut voluptates corporis eaque architecto recusandae expedita maiores distinctio ea facere laudantium similique vel itaque, incidunt veritatis quia libero pariatur.</p>
                    <p className='my-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam natus aut voluptates corporis eaque architecto recusandae expedita maiores distinctio ea facere laudantium similique vel itaque, incidunt veritatis quia libero pariatur.</p>
                    <h3 className='my-5 text-[18px] font-semibold'>Conclusion.</h3>
                    <p className='my-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam natus aut voluptates corporis eaque architecto recusandae expedita maiores distinctio ea facere laudantium similique vel itaque, incidunt veritatis quia libero pariatur.</p>
                    <div className="my-24">
                        <p className='text-black font font-semibold my-4'>Sahre this artical on :</p>
                        <div className='flex'>
                            <Image src={assets.facebook_icon} alt="Facebook" />
                            <Image src={assets.twitter_icon} alt="twitter" />
                            <Image src={assets.googleplus_icon} alt="googleplus" />
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </> : <></>
    )
}

export default page
"use client";
import React, { useEffect, useState } from 'react';
import { blog_data, assets } from '../../../../public/Assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import { IoLogoVercel } from 'react-icons/io5'
import { FaLinkedin } from 'react-icons/fa'
import CommentSection from '@/app/components/comments';

interface PageProps {
  params: {
    id: string;
  };
}

const Page = ({ params }: PageProps) => {
  const [data, setData] = useState<any>(null); // Use appropriate typing based on your data structure
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBlogData = () => {
    try {
      const blog = blog_data.find(item => item.id === Number(params.id)); // Ensure params.id is a number
      if (blog) {
        setData(blog);
      } else {
        setError('Blog not found');
      }
    } catch (err) {
      setError('Error fetching blog data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, [params.id]); // Run the effect when params.id changes


  return data ? (
    <div className=' py-5 px-5 md:px-12 lg:px-28'>
      <div className='flex justify-between items-center'>
        {/* Make sure this image is correctly referenced */}
        <Link href={"/"}>
        <h1 className="w-[130px] sm:w-auto font-bold text-2xl text-primary">Saima blog</h1>
        </Link>

        <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border-black shadow-[-7px_7px_0px_#000000]'>
          Get started
          <Image
            src={assets.rightarrow} // Assuming rightarrow is a correct path
            width={40}
            height={40}
            alt='arrow'
          />
        </button>
      </div>
      <div className='text-center my-24'>
        <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>{data.title}</h1>
        {/* Ensure profile_icon is correctly referenced */}
        <Image
          src={assets.profile_icon} // Ensure profile_icon is a correct path
          width={60}
          height={60}
          alt='author'
          className='mx-auto mt-6 border border-white rounded-full'
        />
        <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>
      </div>
      <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
        {/* Ensure data.image contains a correct relative path */}
        <Image
          src={data.image} // Make sure data.image is correctly formatted, starting with '/' or as a valid URL
          width={1280}
          height={720}
          alt='Blog post image'
          className='border-4 border-white'
        />
        <h1 className='my-8 text-xl font-semibold '>Introduction</h1>
        <p>{data.description}</p>

        {/* ------------------------------------------------------------ */}
        <h3 className='my-5 text-lg font-bold'>{data.step1}</h3>
        <p className='my-3 '>{data.para1}</p>
        <p className='my-3 '>{data.para2}</p>

        {/* ------------------------------------------------------------------------ */}
        <h3 className='my-5 text-lg font-bold'>{data.step2}</h3>
        <p className='my-3 '>{data.para3}</p>
        <p className='my-3 '>{data.para4}</p>

        {/* ------------------------------------------------------------------------ */}
        <h3 className='my-5 text-lg font-bold'>{data.step3}</h3>
        <p className='my-3 '>{data.para5}</p>
        <p className='my-3 '>{data.para6}</p>

        {/* ------------------------------------------------------------------------ */}
        <h3 className='my-5 text-lg font-bold'>Conclusion</h3>
        <p>
          {data.conclusion}
        </p>
        <CommentSection/>
        
        <div className='my-10'>
          <p className='font-bold text-black text-[-26px]'>Share this artice on social media</p>
          <div className='flex mt-4 '>

            <Link
              target='blank' href={"https://vercel.com/new/saima-amjads-projects"} className=" ml-3 text-black">
              <IoLogoVercel className='text-3xl' />
            </Link>

            <Link
              target='blank' href={"https://www.linkedin.com/in/saima-amjad-2263012b6/"} className="ml-3 text-blue-600">
              <FaLinkedin className='text-3xl ' />
            </Link>
          </div>
        </div>
      </div>
      
    </div>
  ) : (
    <></>
  );
};

export default Page;









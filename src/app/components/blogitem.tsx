import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

// Define the types for the props
interface BlogitemProps {
  title: string;
  description: string;
  category: string;
  image: string | StaticImageData; // Accept both string and StaticImageData
  id: string | number;
}

const Blogitem: React.FC<BlogitemProps> = ({ title, description, category, image, id }) => {
  return (
    <div className="max-w-full sm:max-w-[330px] md:max-w-[300px] border-2 border-black hover:shadow-lg transition-shadow duration-300 mb-6">
      <Link href={`/blogs/${id}`}>
        <Image
          src={image} // This can now accept both string and StaticImageData
          width={300}
          height={300}
          alt={title}
          className="w-full h-auto object-cover border-b-2"
        />
      </Link>
      <p className="ml-5 mt-5 px-2 inline-block bg-black py-2 font-bold text-white  text-base rounded-md">
        {category}
      </p>
      <div className="p-5">
        <h5 className="mb-2 text-lg font-medium tracking-tight flex  text-black">
          {title}
        </h5>
        <p className="mb-3 text-base text-gray-700">{description}</p>
        <Link
          href={`/blogs/${id}`}
          className="inline-flex  justify-center py-2 font-bold bg-black w-full rounded-lg text-white hover:underline"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Blogitem;

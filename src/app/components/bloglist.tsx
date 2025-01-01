"use client";
import React, { useState } from "react";
import { blog_data } from "../../../public/Assets/assets"; // Make sure the path is correct
import Blogitem from "./blogitem"; // Ensure this component exists and works properly

function Bloglist() {
  const [menu, setMenu] = useState("All");

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Category Filter Buttons */}
      <div className="flex justify-center mb-10 gap-4 my-6 flex-wrap">
        {["All", "Technology", "Education", "Collaboration"].map((category) => (
          <button
            key={category}
            onClick={() => setMenu(category)}
            className={`py-2 px-6 rounded-md ${
              menu === category
                ? "bg-black text-white"
                : "bg-gray-200 text-black hover:bg-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blog Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {blog_data
          .filter((item) => (menu === "All" ? true : item.category === menu))
          .map((item) => (
            <Blogitem
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
              category={item.category}
            />
          ))}
      </div>
    </div>
  );
}

export default Bloglist;

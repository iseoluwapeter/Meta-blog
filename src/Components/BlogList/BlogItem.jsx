import React from 'react'
import { blogData } from '../../assets/assets';

const BlogItem = () => {
  return (
    <div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 pb-10">
        {blogData.map((blog, index) => (
          <div key={index} className="border p-4 rounded ">
            <img src={blog.image} alt="" className="pb-4" />
            <p
              className="bg-[#f5f6fb]  w-[97px] h-[28px] py-1 px-2 text-sm text-[#4b6bfb] text-center rounded font-medium text-[#4B6BFB];
]  "
            >
              {blog.title}
            </p>
            <p className="font-semibold text-xl pt-3 pb-3 text-[#181a2a]-500 ">
              {blog.body}
            </p>

            <div className="flex gap-3 items-center text-sm text-[#97989f] ">
              <img src={blog.Profile_Img} alt="" />
              <p>{blog.Profile_name}</p>
              <p>{blog.Date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogItem

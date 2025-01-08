import React from "react";
// import { assests, blogData } from "../../assets/assets";
import BlogItem from "./BlogItem";
import Blog from "../Pages/Blog";

const BlogList = () => {
  return (
    <div className="container pb-7">
      <div className="flex justify-between pb-7">
        <p className="text-lg font-semibold">Latest Post</p>
        <p className="bg-gray-200 px-4 py-2  font-medium rounded">
          <a href="">Add Blog</a>
        </p>
      </div>

      {/* blog list  */}
      <BlogItem />

      {/* view all */}
      <div className="flex justify-center mx-auto items-center border w-[150px] hover:bg-slate-600 hover:text-white duration-500 p-2 rounded  text-gray-500">
        <button className="">View All Post</button>
      </div>
    </div>
  );
};

export default BlogList;

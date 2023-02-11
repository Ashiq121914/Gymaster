import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowUp } from "react-icons/fa";

const BlogCard = ({ blog }) => {
  const { image, category, title, description, authorImg, authorName, date } =
    blog;
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <Image
          src={image}
          className="w-full h-full object-cover object-center"
          alt=""
          width={384}
          height={240}
        />
      </figure>
      <div className="card-body">
        <p className="text-[#3E084C] text-[14px]">{category}</p>
        <h2 className="card-title flex items-start justify-between text-[#101828] my-[12px]">
          {title}{" "}
          <Link href="#">
            <FaArrowUp className="rotate-45"></FaArrowUp>
          </Link>
        </h2>
        <p className="text-[#667085] text-[16px] mb-[42px]">{description}</p>
        <div className="flex items-center">
          <Image
            src={authorImg}
            className="mr-[8px]"
            alt=""
            width={40}
            height={40}
          />

          <div>
            <p className="text-[14px]">ইফতেখার আহমেদ</p>
            <p className="text-[#667085] text-[14px]">২০ শে জুলাই, ২০২২</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

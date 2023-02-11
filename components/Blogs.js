/* eslint-disable react/jsx-key */
import React from "react";
import BlogCard from "./BlogCard";
import img1 from "../assets/blog1.png";
import img2 from "../assets/blog2.png";
import img3 from "../assets/blog3.png";
import one from "../assets/1.png";
import two from "../assets/2.png";
import three from "../assets/3.png";
import Link from "next/link";
const blogs = [
  {
    id: 1,
    image: img1,
    category: "লাইফস্টাইল",
    title: "জেনে নিন, ডাম্বেল নিয়ে সহজে ব্যায়ামের নিয়ম!",
    description:
      "ডাম্বেল নিয়ে ব্যায়ামের সঙ্গে আগেই পরিচিত হয়েছেন আপনি আজ ডাম্বেল নিয়ে আরো কিছু ব্যায়ামের সঙ্গে...",
    authorImg: one,
    authorName: "ইফতেখার আহমেদ",
    date: "২০ শে জুলাই, ২০২২",
  },
  {
    id: 2,
    image: img2,
    category: "সুস্থতা",
    title: "ফিট থাকতে শরীরচর্চা ও ডায়েট কেন জরুরী?",
    description:
      "মহামারী করোনা ভাইরাসের আতঙ্কে দীর্ঘদিন সবকিছু বন্ধ থাকার পর স্বল্প পরিসরে কাজগুলো শুরু হচ্ছে...",
    authorImg: two,
    authorName: "তাওসিফ হক",
    date: "২১ শে জুলাই, ২০২২",
  },
  {
    id: 3,
    image: img3,
    category: "স্বাস্থ্য টিপস",
    title: "সুস্থ থাকতে নিত্যদিনের অভ্যাসে আনুন ৬ বদল",
    description:
      "অস্বাস্থ্যকর খাদ্যাভ্যাস ও জীবনযাপনের কারণে আজকাল ডায়াবেটিস, হাইপার টেনশন, স্থূলতা ও হার্টের রোগের মতো...",
    authorImg: three,
    authorName: "সাকিব রহমান",
    date: "২৩ শে জুলাই, ২০২২",
  },
];

const Blogs = () => {
  return (
    <div className="max-w-[1240px] mx-auto mb-[30px]">
      <div className="flex justify-between mb-[40px]">
        <div>
          <h2 className="text-[#101828] text-[30px] mb-[20px] font-bold">আমাদের ব্লগ সমূহ</h2>
          <p className="text-[20px] text-[#667085;]">
            সুস্থ থাকতে আমাদের ব্লগ সমূহ পড়ুন, সর্বশেষ স্বাস্থ্য পরামর্শ নিন
          </p>
        </div>
        <Link href="#">
          <button className="bg-[#3E084C] px-[20px] py-[12px] text-white rounded-lg">
            ব্লগগুলো দেখুন
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-2 xl:grid-cols-3 gap-4">
        {blogs.map((blog) => {
          return <BlogCard key={blog.id} blog={blog}></BlogCard>;
        })}
      </div>
    </div>
  );
};

export default Blogs;

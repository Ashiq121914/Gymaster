import img1 from "../assets/blog1.png";
import img2 from "../assets/blog2.png";
import img3 from "../assets/blog3.png";
import one from "../assets/1.png";
import two from "../assets/2.png";
import three from "../assets/3.png";
const Blogs = [
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

export default Blogs;

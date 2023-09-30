import { Link } from "react-router-dom";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: '18 Best programming and web development blogs for 2023 ',
      imageSrc: 'https://bloggerspassion.com/wp-content/uploads/2019/12/best-programming-blogs.webp',
      date: 'September 15, 2023',
      author: 'Belal Hosen',
    },
    {
      id: 1,
      title: 'What are the best Programming Blogs',
      imageSrc: 'https://qph.cf2.quoracdn.net/main-qimg-b307b13e264abf158f10b84410d3789a-lq',
      date: 'September 16, 2023',
      author: 'Belal Hosen',
    },
    {
      id: 1,
      title: 'Best Programming Blogs to Learn Code',
      imageSrc: 'https://bloggingidol.com/wp-content/uploads/2023/07/Best-programming-Blogs-to-Learn-Coding-and-Development-2023.png',
      date: 'September 17, 2023',
      author: 'Belal Hosen',
    },
    {
      id: 1,
      title: 'How to Start Your Programming Blog in 2023',
      imageSrc: 'https://cdn-ajfgf.nitrocdn.com/nGWdNtcPFeISKWtSVCvCnMpXEmHwZRTu/assets/images/optimized/rev-b8ff565/i0.wp.com/dotnetcrunch.in/wp-content/uploads/2023/07/a210a4e17bc2ce726bebe063438b914f.how-to-start-your-programming-blog.png',
      date: 'September 18, 2023',
      author: 'Belal Hosen',
    },
    {
      id: 1,
      title: 'Best Programming Ideas to Start Earning',
      imageSrc: 'https://mdevelopers.com/storage/0_blogcool-programming-ideas-for-beginners-happy_8c466355.webp',
      date: 'September 19, 2023',
      author: 'Belal Hosen',
    },
    {
      id: 1,
      title: '15 Best Coding Ideas in 2023',
      imageSrc: 'https://tipseason.com/assets/images/coding-post-types.png',
      date: 'September 20, 2023',
      author: 'Belal Hosen',
    },
   
  ];

  return (
   <>
<a href='/blog1'>
<div className="container mx-auto mt-8">
<h1 className="text-3xl font-semibold mb-4">Blog</h1>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
  {blogs.map((blog) => (
    <div key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={blog.imageSrc}
        alt={blog.title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{blog.title}</h2>
        <p className="text-gray-600 text-sm mt-2">Posted on {blog.date} by {blog.author}</p>
      </div>
    </div>
  ))}
</div>
</div>

</a>
   </>
  );
}

export default Blog;

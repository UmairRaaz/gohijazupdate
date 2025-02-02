import BlogsCard from "../components/BlogsCard";


const blogData = [
  {
    image: '/newImage/blogImageOne.png',
    title: 'Guide to Hajj 2024: What You Need to Know',
    description: 'Essential information and updates for pilgrims planning their Hajj journey in 2024.',
    date: '2024-01-25',
  },
  {
    image: '/newImage/blogImageTwo.png',
    title: 'Planning Your Umrah: Tips and Tricks',
    description: 'Learn how to prepare for Umrah with practical tips on travel, accommodation, and rituals.',
    date: '2024-02-15',
  },
  {
    image: '/newImage/blogImageThree.png',
    title: 'The History Behind the Holy Kaaba',
    description: 'Uncover the rich history of the Kaaba, the most sacred site in Islam.',
    date: '2024-01-10',
  },
];

const BlogsSection = () => {
  return (
    <div className="">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Latest News & Blogs</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {blogData.map((blog, index) => (
            <BlogsCard
              key={index}
              image={blog.image}
              title={blog.title}
              description={blog.description}
              date={blog.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsSection;

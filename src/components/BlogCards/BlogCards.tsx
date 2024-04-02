import { cn } from "@/lib/utils";
import blogPosts from "@/resources/blogPosts.json";
import BlogCard from "./BlogCard";

interface IPost {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
  url: string;
  where?: string;
}

export default function BlogCards() {
  const posts = blogPosts as IPost[];

  let grid = "grid-cols-1";
  if (posts.length >= 2) grid = cn(grid, "lg:grid-cols-2");
  if (posts.length >= 3) grid += cn(grid, "xl:grid-cols-3");
  if (posts.length >= 4) grid += cn(grid, "2xl:grid-cols-4");

  return (
    <div className={`grid place-items-center min-w-full gap-5 ${grid}`}>
      {posts.map(({ title, date, description, image, url, where }, index) => (
        <BlogCard
          key={index}
          title={title}
          description={description}
          imageUrl={image}
          date={date}
          link={url}
          where={where}
        />
      ))}
    </div>
  );
}

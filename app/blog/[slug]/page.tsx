import { blogPosts } from "@/data/blog-posts";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FileEdit } from "lucide-react";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-16 max-w-4xl">
      {post.isDraft && (
        <div className="mb-8 flex items-center gap-2 px-4 py-3 bg-yellow-50 text-yellow-800 rounded-lg border border-yellow-200">
          <FileEdit className="h-5 w-5" />
          <span className="font-medium">Draft Post</span>
          <span className="text-sm">- This post is not yet published</span>
        </div>
      )}
      
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <span className="text-gray-500">{post.date}</span>
          <div className="flex items-center gap-2">
            {post.isDraft && (
              <span className="px-3 py-1 text-sm font-semibold text-yellow-600 bg-yellow-100 rounded-full">
                Draft
              </span>
            )}
            <span className="px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full">
              {post.category}
            </span>
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-xl text-gray-600 mb-6">{post.excerpt}</p>
        <div className="text-sm text-gray-500">
          <span>{post.readTime}</span>
        </div>
      </div>

      <div className="relative h-[400px] w-full mb-12">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover rounded-lg"
          priority
        />
      </div>

      <div className="prose prose-lg max-w-none">
        {/* This is where the actual blog post content would go */}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </p>
        
        <h2>Key Features</h2>
        <ul>
          <li>Feature 1: Description of the first key feature</li>
          <li>Feature 2: Description of the second key feature</li>
          <li>Feature 3: Description of the third key feature</li>
        </ul>

        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <h2>Conclusion</h2>
        <p>
          In conclusion, this blog post demonstrates the power and flexibility of
          our newsletter management system. We hope you found this information
          helpful and look forward to bringing you more insights in the future.
        </p>
      </div>
    </article>
  );
} 
import Link from "next/link";

export const metadata = {
  title: "Blog | Next App",
};

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60,
    },
  });

  return response.json();
}

export default async function Blog() {
  const posts = await getData();

  return (
    <>
      <h1>Blog Page</h1>
      <ul>
        {posts.map((post: any) => {
          return (
            <li key={post.id}>
              <Link href={`/blog/${post.id}`}>{post.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

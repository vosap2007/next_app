import Link from "next/link";

// export const metadata = {
//   title: "Blog | Next App",
// };

// async function getData() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     next: {
//       revalidate: 60,
//     },
//   });

//   return response.json();
// }

export default async function Posts() {
  //   const posts = await getData();

  const [] = useSWR;

  return (
    <ul>
      <li>AAAAAAA</li>
      <li>DDDDDDD</li>
      {/* {posts.map((post: any) => {
        return (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        );
      })} */}
    </ul>
  );
}

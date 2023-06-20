"use client";
import { getAllPosts } from "@/services/getPosts";
import Link from "next/link";
import useSWR from "swr";

export default async function Posts() {
  const { data, isLoading } = useSWR("posts", getAllPosts);

  return isLoading ? (
    <h3>Loading...</h3>
  ) : (
    <ul>
      {data.map((post: any) => {
        return (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        );
      })}
    </ul>
  );
}

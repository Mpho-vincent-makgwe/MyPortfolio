"use client";
import React from "react";
import Navigation from "@/components/Navigation";
import Image from "next/image";
import { CodeBlock } from "react-code-blocks";
import Meta from "@/components/Meta";
import { getAllBlogs, getBlogBySlug } from "../../lib/blogs";

export default function BlogSlugPage({ blogData }) {
    if (!blogData) return <div>Loading...</div>;

    return (
        <>
            <Meta
                title={`${blogData.head} | Blogs`}
                seoTitle={`${blogData.head} | Blogs`}
                description={blogData.opening}
                theme="#008080"
            />
            <div className="min-h-screen bg-neutral-900 text-white">
                <Navigation />
                <div className="w-full h-full pt-[8rem] pb-20 px-5 laptop:px-40 largeDesktop:px-80">
                    <article className="flex flex-col gap-8 bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10">
                        <h1 className="font-extrabold text-4xl text-secondary">
                            {blogData.head}
                        </h1>

                        {blogData.images && blogData.images[0] && (
                            <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
                                <Image
                                    src={`/blogs${blogData.link}${blogData.images[0].headImage.src}`}
                                    alt={blogData.images[0].headImage.alt}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        )}

                        <div className="text-lg leading-relaxed text-gray-300">
                            {blogData.opening}
                        </div>

                        <div className="flex flex-col gap-10">
                            {blogData.sections?.map((section, i) => (
                                <div key={i} className="flex flex-col gap-4">
                                    <h2 className="font-bold text-2xl text-primary">
                                        {section.section}
                                    </h2>
                                    <div className="text-gray-300">{section.content}</div>

                                    {section.list && (
                                        <ol className="list-decimal list-inside space-y-2 text-gray-300">
                                            {section.list.map((listItem, j) => (
                                                <li key={j}>
                                                    <span className="font-bold text-white">{listItem.head}</span>{" "}
                                                    {listItem.content}
                                                </li>
                                            ))}
                                        </ol>
                                    )}

                                    {section.code && (
                                        <div className="rounded-lg overflow-hidden">
                                            <CodeBlock
                                                text={section.code.join("\n")}
                                                language="kotlin"
                                                theme={"atom-one-dark"}
                                                showLineNumbers={false}
                                                wrapLongLines
                                            />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </article>
                </div>
            </div>
        </>
    );
}

export async function getStaticPaths() {
    const blogs = await getAllBlogs();
    // Assuming blog.link is like "/some-slug"
    const paths = blogs.map((blog) => ({
        params: { slug: blog.link.replace("/", "") },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const blogData = await getBlogBySlug(params.slug);
    return {
        props: {
            blogData,
        },
    };
}

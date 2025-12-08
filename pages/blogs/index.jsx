import React, { useState, useEffect } from "react";
import Navigation from "@/components/Navigation"; // Using main navigation for consistency
import BlogItem from "@/components/blogs/layouts/BlogItem";
import TopicItem from "@/components/blogs/layouts/TopicItem";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded";
import { useRouter } from "next/router";
import Meta from "@/components/Meta";
import { getAllBlogs, getAllTopics } from "../../lib/blogs";

export default function BlogIndex({ blogs, topics }) {
    const router = useRouter();
    const [selectedTopic, setSelectedTopic] = useState(null);
    const [filteredBlogs, setFilteredBlogs] = useState(blogs);
    const [topicsDropdown, setTopicsDropdown] = useState(false);

    useEffect(() => {
        if (router.query.topic) {
            const topicName = router.query.topic;
            setSelectedTopic(topicName);
            setFilteredBlogs(blogs.filter(b => b.topic === topicName));
        } else {
            setSelectedTopic(null);
            setFilteredBlogs(blogs);
        }
    }, [router.query.topic, blogs]);

    return (
        <>
            <Meta
                title={"Blogs | Mpho Vincent Makgwe"}
                seoTitle={"Blogs | Mpho Vincent Makgwe"}
                seoURL={"https://www.Mpho.vincetek.co.za/blogs"}
                keywords={"web blogs, programming blogs, latest blogs"}
                description={"Read my latest blogs on web development and technology."}
                seoDescription={"Read my latest blogs on web development and technology."}
                theme="#008080"
            />
            <div className="min-h-screen bg-neutral-900 text-white">
                <Navigation />

                <div className="w-full h-full pt-[6rem] px-5 largeDesktop:px-80">
                    <div className="flex flex-row justify-evenly items-start w-full flex-wrap laptop:flex-nowrap gap-10">

                        {/* Blog List */}
                        <div className="w-full laptop:w-2/3">
                            <h1 className="text-3xl font-bold mb-8 text-secondary">Latest Blogs</h1>
                            <div className="flex flex-col gap-6">
                                {filteredBlogs.length > 0 ? (
                                    filteredBlogs.map((blog, i) => (
                                        <BlogItem
                                            key={i}
                                            author={blog.author}
                                            topic={blog.topic}
                                            link={`/blogs${blog.link}`} // Ensure link is correct
                                            blogHead={blog.head}
                                            blogBody={blog.opening.slice(0, 150) + "..."}
                                            date={blog.date}
                                            image={blog.images && blog.images[0] ? `/blogs${blog.link}${blog.images[0].headImage.src}` : ""}
                                            text="#fff"
                                        />
                                    ))
                                ) : (
                                    <p>No blogs found.</p>
                                )}
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="w-full laptop:w-1/3 sticky top-[6rem]">
                            <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
                                <div className="font-semibold text-2xl flex flex-row justify-between items-center mb-4 text-secondary">
                                    <span>Topics</span>
                                    <span
                                        onClick={() => setTopicsDropdown(!topicsDropdown)}
                                        className="laptop:hidden cursor-pointer"
                                    >
                                        {!topicsDropdown ? <ArrowDropDownOutlinedIcon /> : <ArrowDropUpRoundedIcon />}
                                    </span>
                                </div>

                                <div className={`flex flex-row flex-wrap gap-3 ${!topicsDropdown ? "hidden laptop:flex" : "flex"}`}>
                                    {topics.map((topic) => (
                                        <TopicItem
                                            key={topic}
                                            selected={selectedTopic === topic}
                                            topic={topic}
                                            onDeselect={() => router.push(`/blogs`)}
                                            onClick={() => router.push(`/blogs?topic=${topic}`)}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export async function getStaticProps() {
    const blogs = await getAllBlogs();
    const topics = await getAllTopics();

    return {
        props: {
            blogs,
            topics,
        },
        revalidate: 3600,
    };
}

import Link from "next/link";
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import { motion } from "framer-motion";

function Hero() {
    return (
        <section className="h-full min-h-screen flex flex-col justify-center">
            <div className="flex flex-col justify-between items-start mobile:mt-0 tablet:mt-0 laptop:mt-[2rem] desktop:mt-[2rem] mobile:mx-auto tablet:mx-auto laptop:mx-[50px] desktop:mx-[50px]">
                <div className="flex flex-row justify-center items-center mobile:block tablet:block laptop:flex desktop:flex w-full">
                    <div className="flex flex-col mobile:justify-center tablet:justify-center laptop:justify-start desktop:justify-start mobile:h-[100vh] tablet:h-[100vh] laptop:h-auto desktop:h-auto mobile:items-center tablet:items-center laptop:items-start desktop:items-start mobile:w-[100vw] tablet:w-[100vw] laptop:w-[50vw] desktop:w-[50vw]">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.1, type: "spring" }}
                            className="flex flex-row justify-center items-center text-[2.5rem] font-extrabold text-white"
                        >
                            Hello World!
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2, type: "spring" }}
                            className="flex flex-row justify-center items-center text-secondary text-[1.5rem] font-extrabold"
                        >
                            My Name is
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.3, type: "spring" }}
                            className="flex flex-row justify-center items-center text-primary text-[3rem] font-extrabold text-center"
                        >
                            Mpho Vincent Makgwe
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.4, type: "spring" }}
                            className="flex flex-row justify-center items-center text-[2rem] font-extrabold text-center text-accent"
                        >
                            I&apos;m a Full Stack Developer
                        </motion.div>

                        {/* Buttons & Socials */}
                        <div className="flex justify-start pt-[1.5rem] mobile:flex-col mobile:gap-5 mobile:items-center tablet:flex-col tablet:gap-5 tablet:items-start laptop:flex-row laptop:gap-0 laptop:items-center desktop:flex-row desktop:gap-0 desktop:items-center">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.5, type: "spring" }}
                                className="flex flex-row justify-center items-center w-full px-[1rem] py-[0.50rem] bg-secondary text-black rounded-full font-bold hover:cursor-pointer hover:bg-white transition-colors duration-300"
                            >
                                <Link href={"mailto:mpho.makgwe@vincetek.co.za"}>
                                    Contact me
                                </Link>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.6, type: "spring" }}
                                className="w-[2px] h-[50px] bg-white/20 mx-[3rem] mobile:hidden tablet:hidden laptop:block desktop:block"
                            ></motion.div>

                            <div className="flex flex-row justify-evenly items-center mobile:w-[100%] tablet:w-[100%] laptop:w-[50%] desktop:w-[50%] gap-5">
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.7, type: "spring" }}
                                    className="flex flex-row justify-center items-center w-[3rem] h-[3rem] rounded-full bg-white/10 hover:bg-white/20 transition-all"
                                >
                                    <Link
                                        href={"https://www.linkedin.com/in/mpho-vincent-makgwe-1ab386199/"}
                                        target={"_blank"}
                                        className="text-secondary"
                                    >
                                        <LinkedInIcon className="scale-[150%]" />
                                    </Link>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 1, type: "spring" }}
                                    className="flex flex-row justify-center items-center w-[3rem] h-[3rem] rounded-full bg-white/10 hover:bg-white/20 transition-all"
                                >
                                    <Link
                                        href={"https://www.instagram.com/king_vince014_rsa/"}
                                        target={"_blank"}
                                        className="text-secondary"
                                    >
                                        <InstagramIcon className="scale-[150%]" />
                                    </Link>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 1.2, type: "spring" }}
                                    className="flex flex-row justify-center items-center w-[3rem] h-[3rem] rounded-full bg-white/10 hover:bg-white/20 transition-all"
                                >
                                    <Link
                                        className="text-secondary"
                                        target={"_blank"}
                                        href={"https://github.com/Mpho-vincent-makgwe"}
                                    >
                                        <GitHubIcon className="scale-[150%]" />
                                    </Link>
                                </motion.div>
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1.4, type: "spring" }}
                            className="flex flex-row justify-start items-center mt-[3rem]"
                        >
                            <Link
                                className="px-[0.75rem] py-[0.50rem] border border-secondary text-secondary font-bold rounded-full hover:cursor-pointer hover:bg-secondary hover:text-black transition-all duration-300"
                                target={"_blank"}
                                href={"/M.V Makgwe_Resume(Full-Stack) (3).pdf"}
                            >
                                Download Resume
                            </Link>
                        </motion.div>
                    </div>

                    <div className="flex flex-col justify-center items-center w-[50vw] mobile:hidden tablet:hidden laptop:block desktop:block relative">
                        <motion.div
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 2, delay: 0.2, type: "spring" }}
                            className="absolute right-0 top-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse"
                        ></motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 2, delay: 0.4, type: "spring" }}
                            className="absolute right-20 bottom-20 w-40 h-40 bg-secondary/20 rounded-full blur-2xl animate-pulse"
                        ></motion.div>
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.8, type: "spring" }}
                    className="w-[100%] flex-row justify-center items-center mt-[3rem] mobile:hidden tablet:hidden laptop:flex desktop:flex text-gray-400 animate-bounce"
                >
                    <a href="#aboutme">Scroll Down</a>
                </motion.div>
            </div>
        </section>
    );
}

export default Hero;

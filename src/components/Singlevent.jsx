import React from "react";
import { motion } from "framer-motion";

const marqueeImages = [
    "https://i.pinimg.com/736x/b3/13/4d/b3134d9e7b00843a7642c79403f03995.jpg",
    "https://i.pinimg.com/736x/18/53/ff/1853ffa63c8f98745918e3ee18341e4f.jpg",
    "https://i.pinimg.com/736x/21/df/68/21df68828daab6f4c4388a9e971f82ee.jpg",
    "https://i.pinimg.com/736x/03/38/65/03386523ad9c2384e512303d088812f8.jpg",
    "https://i.pinimg.com/736x/c8/d5/ab/c8d5ab256d03049a7ddda7c8ce57f956.jpg",
    "https://i.pinimg.com/736x/b3/13/4d/b3134d9e7b00843a7642c79403f03995.jpg",
    "https://i.pinimg.com/736x/18/53/ff/1853ffa63c8f98745918e3ee18341e4f.jpg",
    "https://i.pinimg.com/736x/21/df/68/21df68828daab6f4c4388a9e971f82ee.jpg",
    "https://i.pinimg.com/736x/03/38/65/03386523ad9c2384e512303d088812f8.jpg",
    "https://i.pinimg.com/736x/c8/d5/ab/c8d5ab256d03049a7ddda7c8ce57f956.jpg",
    "https://i.pinimg.com/736x/b3/13/4d/b3134d9e7b00843a7642c79403f03995.jpg",
    "https://i.pinimg.com/736x/18/53/ff/1853ffa63c8f98745918e3ee18341e4f.jpg",
    "https://i.pinimg.com/736x/21/df/68/21df68828daab6f4c4388a9e971f82ee.jpg",
    "https://i.pinimg.com/736x/03/38/65/03386523ad9c2384e512303d088812f8.jpg",
    "https://i.pinimg.com/736x/c8/d5/ab/c8d5ab256d03049a7ddda7c8ce57f956.jpg",
];

// Motion Variants for Seamless Scrolling
const marqueeVariants = (direction) => ({
    animate: {
        y: direction === "up" ? ["0%", "-100%"] : ["-100%", "0%"],
        transition: {
            duration: 30, // Adjusted speed for smoothness
            ease: "linear",
            repeat: Infinity,
        },
    },
});

function Singlevent() {
    return (
        <div className="min-h-screen w-full p-6 relative bg-[#111] text-white">
            {/* Top Banner */}
            <div className="border border-[#595959] h-[20vh] relative rounded-2xl overflow-hidden z-40 bg-[#6868687d]"></div>

            <div className="flex min-h-[75vh] mt-5 mr-4">
                <div className="w-[65%]   p-3">
                    <h1 className="text-3xl">SGJHFC BCKELK;VNC LBA;SDC</h1>
                   <div className="flex gap-4"> <h5>jsdhkv </h5> <h5>ghjhwd</h5></div>
                   <p className="mt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium animi velit laudantium quo odio, doloribus neque magnam culpa necessitatibus officiis ratione, atque corporis possimus exercitationem, facilis dolorum deserunt iusto similique.
                   Eaque eos tempora, doloremque eligendi laboriosam, quaerat sunt ullam exercitationem cum dolores atque ipsa facilis quo nemo ducimus quasi tenetur. Molestiae sed alias officiis iusto laboriosam, iure eveniet veniam delectus.
                   Sed reiciendis ratione soluta et rem! Suscipit error provident obcaecati eaque earum, eius libero fugiat ut consectetur vero! A exercitationem, corporis asperiores quia eius sunt minus aspernatur ut? Reiciendis, eum!
                   Odit a illo fuga inventore, optio veniam alias adipisci, sapiente iste, accusantium maiores sunt tempora quidem facere commodi. Deleniti fugit accusamus eos saepe quisquam, laboriosam maxime ipsam dolore nisi sapiente?
                   Quas omnis temporibus similique esse inventore alias fugiat labore voluptatem, deserunt, nesciunt nulla ab minima at molestias vero eos ipsam incidunt iste. Perferendis odit officia repellat? Et dicta repudiandae odit.
                   Placeat, adipisci. Optio animi illum cumque ab temporibus? Est perspiciatis voluptas temporibus autem ipsa odit laudantium, laborum labore voluptate sapiente. Quaerat, beatae eligendi non distinctio eos quia quisquam fugit quasi.
                   Nihil veritatis, consequatur voluptatem quos aperiam autem unde, non quia veniam omnis quod nam, provident quisquam. Sunt rerum dolorem debitis nulla modi, quod labore, neque earum provident voluptatem odio pariatur.</p>

                   <p className="mt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, incidunt, adipisci quod temporibus aliquid accusantium delectus enim nulla qui nihil, sequi necessitatibus deleniti consectetur modi? Quod accusantium saepe porro est?</p>
                   <p className="mt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, incidunt, adipisci quod temporibus aliquid accusantium delectus enim nulla qui nihil, sequi necessitatibus deleniti consectetur modi? Quod accusantium saepe porro est?</p>
                </div>

                {/* Right Side Marquee Section */}
                <div className="min-h-[100vh] w-[35%] absolute top-0 right-0 flex p-5 gap-5">
                    {/* Scrolling Up (Left Side) */}
                    <div className="w-[50%] overflow-hidden relative">
                        <motion.div 
                            className="absolute flex flex-col h-[200vh]" // Ensures smooth continuous scrolling
                            variants={marqueeVariants("up")} 
                            animate="animate"
                        >
                            {/* Duplicate images for seamless loop */}
                            {[...marqueeImages, ...marqueeImages].map((image, index) => (
                                <img key={index} src={image} alt={`Marquee ${index}`} className="w-full h-[33vh] object-cover rounded-lg my-4 border border-[#5a5a5acd]" />
                            ))}
                        </motion.div>
                    </div>

                    {/* Scrolling Down (Right Side) */}
                    <div className="w-[50%] overflow-hidden relative">
                        <motion.div 
                            className="absolute flex flex-col h-[200vh]" // Ensures smooth continuous scrolling
                            variants={marqueeVariants("down")} 
                            animate="animate"
                        >
                            {/* Duplicate images for seamless loop */}
                            {[...marqueeImages, ...marqueeImages].map((image, index) => (
                                <img key={index} src={image} alt={`Marquee ${index}`} className="w-full h-[33vh] object-cover rounded-lg my-4" />
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Singlevent;

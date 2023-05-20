import Marquee from "react-fast-marquee";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import CatagoryCard from "./CatagoryCard";
import SwiperSection from "./SwiperSection";
import { useState } from "react";

const Home = () => {

    const toyPic = [
        " https://i.ibb.co/QXjJc96/456.jpg",
        "https://i.ibb.co/Swm2RPW/3581280.jpg",
        "https://i.ibb.co/9hD2qp1/ecnb-kawh-210603.jpg",
        "https://i.ibb.co/YhzD9zQ/i7nv-j54j-210603.jpg",
        "https://i.ibb.co/mGtRS2s/Screenshot-1.png",
        "https://i.ibb.co/VmSHpQ6/Screenshot-2.png",
        "https://i.ibb.co/JtNdpdF/Screenshot-3.png",
        "https://i.ibb.co/tKqHTC6/Screenshot-4.png",
        "https://i.ibb.co/TmJYcH9/Screenshot-5.png",
        "https://i.ibb.co/R2R0FwD/Screenshot-6.png",
        "https://i.ibb.co/sFvt7TY/Screenshot-7.png",
        "https://i.ibb.co/XS8zfZ4/Screenshot-8.png",
        "https://i.ibb.co/TB8Xb4b/Screenshot-9.png",
        "https://i.ibb.co/PD3jnPM/Screenshot-10.png",
        "https://i.ibb.co/zbLcWDp/Screenshot-11.png",
        "https://i.ibb.co/HGKWYvd/Screenshot-12.png",
        "https://i.ibb.co/F0ZZG5f/Screenshot-13.png",
        "https://i.ibb.co/7zz4cnN/Screenshot-14.png",
        "https://i.ibb.co/d71KWLr/ums0-4gjc-220805.jpg",
        "https://i.ibb.co/D1jN947/vxjm-9w9o-210603.jpg",
        "https://i.ibb.co/tDpn4rT/y5j9-oao7-170429.jpg",
    ]

    const tabvalue = ["Frozen Doll", "Tangled Doll", "Moana Doll", "Ariel Doll", "Belle Doll", "Elsa Doll", "Cinderella Doll", "Anna Doll", "Mulan Doll"]
    const [selectedTabValue, setSelectedTabValue] = useState(null)

    const handlerTabs = index => {

        setSelectedTabValue(tabvalue[index])
    }

    console.log(selectedTabValue);

    return (
        <>
            {/* Banner Section */}
            <section className="relative">
                <img src="https://i.ibb.co/KKq7y8N/33641-frozen-movie-mb.webp" alt="banner image" className="w-full" />
                <div className="absolute top-1/2 left-40 text-white">
                    <h2 className="text-3xl">Frozen</h2>
                    <p>Discover our Frozen collection including toys, dolls   & more featuring Anna, Elsa & <br />all of their friends.</p>
                </div>
            </section>

            {/* Sub Catagory tab Section */}
            <section className="mt-16 mb-12 max-w-screen-xl mx-auto">
                <h2 className="text-xl font-semibold pb-2">SHOP BY CATEGORY</h2>
                <hr className="mb-5 border-black border-opacity-20" />
                <Tabs onSelect={handlerTabs} className="grid grid-cols-11 gap-6">
                    <div className="col-span-3">
                        <TabList className="space-y-3 ml-3 mt-5" >
                            <Tab className="cursor-pointer">Frozen Doll</Tab>
                            <Tab className="cursor-pointer">Tangled Doll</Tab>
                            <Tab className="cursor-pointer">Moana Doll</Tab>
                            <Tab className="cursor-pointer">Ariel Doll</Tab>
                            <Tab className="cursor-pointer">Belle Doll</Tab>
                            <Tab className="cursor-pointer">Elsa Doll</Tab>
                            <Tab className="cursor-pointer">Cinderella Doll</Tab>
                            <Tab className="cursor-pointer">Anna Doll</Tab>
                            <Tab className="cursor-pointer">Mulan Doll</Tab>
                        </TabList>
                    </div>

                    <div className="col-span-8">

                        <TabPanel >
                            <div className="grid grid-cols-4 gap-8">

                                <div className="rounded-3xl">
                                    <CatagoryCard
                                        textColor="text-red"
                                        bg="bg-rose"
                                    ></CatagoryCard>
                                </div>
                                <div className="rounded-3xl">
                                    <CatagoryCard
                                        textColor="text-sky-blue"
                                        bg="bg-sky"
                                    ></CatagoryCard>
                                </div>
                                <div className="rounded-3xl">
                                    <CatagoryCard
                                        textColor="text-purple"
                                        bg="bg-light-purple"
                                    ></CatagoryCard>
                                </div>
                                <div className="rounded-3xl">
                                    <CatagoryCard
                                        textColor="text-sky-blue"
                                        bg="bg-brown"
                                    ></CatagoryCard>
                                </div>

                            </div>
                        </TabPanel>
                    </div>
                </Tabs>
            </section>

            {/* Gallery Section */}
            <div className="max-w-screen-xl mx-auto hidden">
                <section className="text-center mt-32">
                    <h2 className="text-3xl font-semibold">Disney Gallery</h2>
                    <p className="my-5">
                        <small className="">Disney Gallery is a captivating and immersive experience that takes visitors behind the scenes of the beloved Disney universe. It showcases the artistry, creativity, and imagination that go into bringing iconic characters and stories to life. From concept art and character design to visual effects and set construction, Disney Gallery offers a glimpse into the intricate process of filmmaking and the meticulous attention to detail that makes Disney films and animations so enchanting. Whether you are a fan of classic Disney films or the latest blockbusters, Disney Gallery is a must-visit destination for anyone seeking a deeper understanding and appreciation of the magic behind the Disney storytelling.</small>
                    </p>

                    <div>
                        <Marquee className="flex items-center my-12" pauseOnHover>
                            {
                                toyPic.map((pic, idx) =>
                                    <div key={idx}>
                                        {idx % 2 === 0 ?
                                            <img src={toyPic[idx]} alt="" className="h-[300px] w-[300px]  rounded-lg mx-3" /> : <img src={toyPic[idx]} alt="" className="w-[200px] h-[200px] border rounded-lg mx-3" />
                                        }
                                    </div>
                                )
                            }
                        </Marquee>
                    </div>
                </section>
            </div>




            <div className="max-w-screen-xl mx-auto my-32">
                <div className="text-center">
                    <h3 className="text-2xl font-semibold pb-3">@CastleDisneyUSA </h3>
                    <p>We love seeing your littles with their favorites from CastleDisney! Tag us or share a photo for a chance to be featured.</p>
                </div>

                <h3 className="text-xl font-semibold pt-10">#CastleDisneyUSA </h3>
                <SwiperSection></SwiperSection>
            </div>

            <section className="my-96">
            </section>

        </>
    );
};

export default Home;
import Marquee from "react-fast-marquee";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

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


    return (
        <>
            {/* Banner Section */}
            <section className="">
                <img src="https://i.ibb.co/s3Y3SdR/Disney-Princess-Banner-00b-scaled.jpg" alt="" />
            </section>

            {/* Gallery Section */}
            <div className="container mx-auto">
                <section className="text-center  m-12">
                    <h2 className="text-5xl font-semibold">Disney Gallery</h2>
                    <p className="my-5">
                        <small className="italic">Disney Gallery is a captivating and immersive experience that takes visitors behind the scenes of the beloved Disney universe. It showcases the artistry, creativity, and imagination that go into bringing iconic characters and stories to life. From concept art and character design to visual effects and set construction, Disney Gallery offers a glimpse into the intricate process of filmmaking and the meticulous attention to detail that makes Disney films and animations so enchanting. Whether you are a fan of classic Disney films or the latest blockbusters, Disney Gallery is a must-visit destination for anyone seeking a deeper understanding and appreciation of the magic behind the Disney storytelling.</small>
                    </p>

                    <div>
                        <Marquee className="flex items-center my-12" pauseOnHover>
                            {
                                toyPic.map((pic, idx) => <>
                                    {idx % 2 === 0 ?
                                        <img src={toyPic[idx]} alt="" className="h-[300px] w-[300px] border rounded-lg mx-3" /> : <img src={toyPic[idx]} alt="" className="w-[200px] h-[200px] border rounded-lg mx-3" />
                                    }
                                </>)
                            }
                        </Marquee>
                    </div>
                </section>

                {/* Sub Catagory tab Section */}
                <section className="mt-32 mb-12">
                    <h2 className="text-3xl font-semibold pb-2">CATEGORY</h2>
                    <hr className="mb-5" />
                    <Tabs className="grid grid-cols-11 gap-6">
                        <div className="col-span-3">
                            <TabList className="space-y-3 text-xl ml-3" >
                                <Tab className="cursor-pointer">Disney Princes</Tab>
                                <Tab className="cursor-pointer">Frozen Dolls</Tab>
                                <Tab className="cursor-pointer">Animation Characters</Tab>
                                <Tab className="cursor-pointer">Donald Duck</Tab>
                            </TabList>
                        </div>

                        <div className="col-span-8">

                            <TabPanel >
                                <div className="flex">
                                    <h2>Any content 1</h2>
                                    <h2>Any content 1</h2>
                                </div>
                            </TabPanel>

                        </div>

                    </Tabs>
                </section>

                <section className="my-96"></section>
            </div>

        </>
    );
};

export default Home;
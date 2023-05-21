import Marquee from "react-fast-marquee";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import CatagoryCard from "./CatagoryCard";
import SwiperSection from "./SwiperSection";
import { useEffect, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import useTitle from "../../hooks/useTitle";
import { FaShieldAlt, FaTree, FaTrophy } from "react-icons/fa";
AOS.init();


const Home = () => {

    // custom Hooks
    useTitle('Home')

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
    const [categoryData, setCategoryData] = useState([])

    const handlerTabs = index => {

        const categoryName = tabvalue[index] || 'Frozen Doll'

        fetch(`https://castle-disney-server.vercel.app/${categoryName}`)
            .then(res => res.json())
            .then(data => setCategoryData(data))
    }

    useEffect(() => {

        fetch(`https://castle-disney-server.vercel.app/Frozen Doll`)
            .then(res => res.json())
            .then(data => setCategoryData(data))
    }, [])

    return (
        <>
            {/* Banner Section */}
            <section data-aos="zoom-in" data-aos-duration="1000" className="relative mx-2 md:mx-0 mt-3">
                <img src="https://i.ibb.co/KKq7y8N/33641-frozen-movie-mb.webp" alt="banner image" className="w-full" />
                <div className="absolute top-1/2 left-40 text-white hidden md:block">
                    <h2 className="text-3xl">Frozen</h2>
                    <p>Discover our Frozen collection including toys, dolls   & more featuring Anna, Elsa & <br />all of their friends.</p>
                </div>
            </section>

            {/* Sub Catagory tab Section */}
            {/* data-aos="zoom-out" data-aos-duration="1500" */}
            <section className="my-8 md:mt-16 md:mb-12 max-w-screen-2xl mx-2 md:mx-auto">
                <h2 className="text-xl font-semibold pb-2">SHOP BY CATEGORY</h2>
                <hr className="mb-5 border-black border-opacity-20" />
                <Tabs onSelect={handlerTabs} className="grid md:grid-cols-11 gap-6">
                    <div className="col-span-3">
                        <TabList className=" space-y-3 ml-3 mt-5" >

                            {
                                tabvalue.map((subCategory, idx) => <Tab key={idx} className="cursor-pointer">{subCategory}</Tab>)
                            }

                        </TabList>
                    </div>

                    <div className="col-span-8">

                        {
                            tabvalue.map((_, idx) => <TabPanel key={idx}>
                                <div className="grid md:grid-cols-4 gap-4 md:gap-8">
                                    {
                                        categoryData && categoryData.map((subCategory, idx) => <div key={subCategory._id} >
                                            <CatagoryCard
                                                subCategory={subCategory}
                                                idx={idx}
                                            ></CatagoryCard>
                                        </div>)
                                    }
                                </div>
                            </TabPanel>)
                        }
                    </div>
                </Tabs>
            </section>

            {/* Gallery Section */}
            <div data-aos="zoom-out-down" data-aos-duration="1500" className="max-w-screen-xl mx-2 md:mx-auto">
                <section className="md:text-center mt-20 md:mt-32">
                    <h2 className="text-3xl font-semibold text-center">Disney Gallery</h2>
                    <p className="my-5">
                        <small className="text-start">Disney Gallery is a captivating and immersive experience that takes visitors behind the scenes of the beloved Disney universe. It showcases the artistry, creativity, and imagination that go into bringing iconic characters and stories to life. From concept art and character design to visual effects and set construction, Disney Gallery offers a glimpse into the intricate process of filmmaking and the meticulous attention to detail that makes Disney films and animations so enchanting. Whether you are a fan of classic Disney films or the latest blockbusters, Disney Gallery is a must-visit destination for anyone seeking a deeper understanding and appreciation of the magic behind the Disney storytelling.</small>
                    </p>

                    <div>
                        <Marquee className="items-center my-12" pauseOnHover>
                            {
                                toyPic.map((pic, idx) =>
                                    <div key={idx}>
                                        {idx % 2 === 0 ?
                                            <img src={toyPic[idx]} alt="" className="h-[300px] w-[300px]  rounded-lg mx-3" /> : <img src={toyPic[idx]} alt="" className="w-[200px] h-[200px]  rounded-lg mx-3 mt-12" />
                                        }
                                    </div>
                                )
                            }
                        </Marquee>
                    </div>
                </section>
            </div>

            <div data-aos="zoom-out-down" data-aos-duration="1500" className="max-w-screen-2xl mx-2 md:mx-auto my-32">
                <div className="text-center">
                    <h3 className="text-2xl font-semibold pb-3">@CastleDisneyUSA </h3>
                    <p>We love seeing your littles with their favorites from CastleDisney! Tag us or share a photo for a chance to be featured.</p>
                </div>

                <h3 className="text-xl font-semibold pt-10">#CastleDisneyUSA </h3>
                <SwiperSection></SwiperSection>
            </div>

            <section className="max-w-screen-xl md:mx-auto text-center mb-32 mx-2">
                <h3 className="text-3xl ">A Tradition of Play</h3>
                <p className="text-xl tracking-wider my-8 max-w-screen-lg mx-auto">CastleDisney has been making educational toys for kids that inspire for more than 80 years. We know the difference a toy can make in a child’s life – not only the skills they learn, but the memories they make. Our commitment is to create premium, educational children’s toys that help unlock kids’ creativity, curiosity and more.</p>

                <div className="grid md:grid-cols-3 gap-12 text-center mt-16 mx-2 md:mx-0">
                    <div>
                        <FaTrophy className="mx-auto text-5xl text-red"></FaTrophy>
                        <h6 className="text-2xl mt-5 mb-3">Quality</h6>
                        <p>Our toys are designed to last for years of play.</p>
                    </div>
                    <div>
                        <FaShieldAlt className="mx-auto text-5xl text-red"></FaShieldAlt>
                        <h6 className="text-2xl mt-5 mb-3">Safety</h6>
                        <p>Our toys are rigorously tested to meet the highest standards of safety.</p>
                    </div>
                    <div>
                        <FaTree className="mx-auto text-5xl text-red"></FaTree>
                        <h6 className="text-2xl mt-5 mb-3">Sustainability</h6>
                        <p>We source materials & manufacture with a focus on environmentally friendly practices.</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
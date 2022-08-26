import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios';
import LeftMenu from "../../components/LeftMenu";
import * as C from "./styles"
import { useNavigate } from "react-router";

import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Navigation, Pagination, Autoplay } from "swiper";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import RightMenu from "../../components/RightMenu";

const Home2 = () => {
    let navigate = useNavigate();

    const [d, setData] = useState({
        "page": 1,
        "results": [],
        "total_pages": 0,
        "total_results": 0
    });
    const [d2, setData2] = useState({
        "page": 1,
        "results": [],
        "total_pages": 0,
        "total_results": 0
    });

    const [topRated, setTopRated] = useState({
        "page": 1,
        "results": [],
        "total_pages": 0,
        "total_results": 0
    });
    const [popular, setPopular] = useState({
        "page": 1,
        "results": [],
        "total_pages": 0,
        "total_results": 0
    });
    const [qSlides, setQSlides] = useState(4);

    useEffect(() => {
        const url = `https://api.themoviedb.org/3/movie/now_playing?&api_key=${process.env.REACT_APP_TOKEN}&language=pt-BR&page=1`;

        const url2 = `https://api.themoviedb.org/3/movie/upcoming?&api_key=${process.env.REACT_APP_TOKEN}&language=pt-BR`;

        const url3 = `https://api.themoviedb.org/3/movie/top_rated?&api_key=${process.env.REACT_APP_TOKEN}&language=pt-BR&page=1`;

        const url4 = `https://api.themoviedb.org/3/movie/popular?&api_key=${process.env.REACT_APP_TOKEN}&language=pt-BR&page=1`;

        const fetchSearch = async () => {
            const { data } = await axios.get(url);

            setData(data)

        };
        fetchSearch();

        const fetchSearch2 = async () => {
            const { data } = await axios.get(url2);

            setData2(data)

        };

        const fetchSearch3 = async () => {
            const { data } = await axios.get(url3);

            setTopRated(data)

        };
        const fetchSearch4 = async () => {
            const { data } = await axios.get(url4);

            setPopular(data)

        };

        const CalScreen = () => {
            const mqLarge = window.matchMedia("(max-width: 400px)");
            if (mqLarge.matches) {
                setQSlides(2)
            }
        }

        CalScreen();
        fetchSearch2();
        fetchSearch3();
        fetchSearch4();

    }, []);

    window.gapi.load('client', init);


    async function init() {
        // 2. Initialize the JavaScript client library.
        await window.gapi.client.setApiKey(process.env.REACT_APP_GOOGLE_KEY);
        window.gapi.client.load("https://content.googleapis.com/discovery/v1/apis/youtube/v3/rest")
    }

    return (

        <C.Container>
            <Navbar />
            <div className="content">

                <C.Filmes>


                    <Swiper
                        centeredSlides={true}
                        spaceBetween={10}
                        effect={"fade"}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay, Pagination]}
                        className="mySwiperDes"
                    >
                        {d.results.map((item, key) =>



                            <SwiperSlide key={key}>

                                <img onClick={() => {
                                    navigate("/filme", { state: { id: item.id, title: item.title } })
                                }} src={`https://image.tmdb.org/t/p/w780${item.backdrop_path}`} alt={item.original_title} />



                            </SwiperSlide>
                        )}
                    </Swiper>

                    <h1>Now Playing</h1>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={10}
                        slidesPerGroup={qSlides}
                        loop={true}
                        loopFillGroupWithBlank={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {d.results.map((item, key) =>



                            <SwiperSlide key={key}>

                                <img onClick={() => {
                                    navigate("/filme", { state: { id: item.id, title: item.title } })
                                }} src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.original_title} />

                            </SwiperSlide>
                        )}
                    </Swiper>

                    <h1>Upcoming</h1>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={20}
                        slidesPerGroup={qSlides - 1}
                        loop={true}
                        loopFillGroupWithBlank={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="SwiperPopular"
                    >
                        {d2.results.map((item, key) =>



                            <SwiperSlide key={key}>

                                <img onClick={() => {
                                    navigate("/filme", { state: { id: item.id, title: item.title } })
                                }} src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`} alt={item.original_title} />



                            </SwiperSlide>
                        )}
                    </Swiper>

                    <h1>Popular</h1>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={10}
                        slidesPerGroup={qSlides}
                        loop={true}
                        loopFillGroupWithBlank={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {popular.results.map((item, key) =>



                            <SwiperSlide key={key}>

                                <img onClick={() => {
                                    navigate("/filme", { state: { id: item.id, title: item.title } })
                                }} src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.original_title} />

                            </SwiperSlide>
                        )}
                    </Swiper>

                </C.Filmes>
                
                <C.RightMenu>
                </C.RightMenu>
            </div>
            <Footer />
        </C.Container>
    )
}

export default Home2;
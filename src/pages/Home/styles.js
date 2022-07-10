import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    h1 {
        margin-top: 1rem;
        margin-bottom: 1rem;
}
    img {
        width: 180px;
        height: auto;
        border-radius: 10px;
    }

    .content {
        display: flex;
        justify-content: center;
    }
`;

export const Filmes = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem;

    div {
        width: 800px;
    }

    div.swiper-button-prev {
        width: 3rem;
        left: -1rem;
}

    div.swiper-button-next {
        width: 3rem;
        right: -1rem;
}

div.swiper-button-next:after, div.swiper-button-prev:after {
  font-size: 1.5rem;
}

div.swiper-button-prev,
div.swiper-button-next {
    top: 2rem;
   outline: none;
   color: #80ff80;
   height: 150px;
   opacity: 0;
}

.mySwiper {

    div.swiper-button-prev,
    div.swiper-button-next {
        top: 6rem;
}
}

.mySwiper:hover {

    div.swiper-button-prev,
    div.swiper-button-next {
        opacity: 1;
    }
}

.mySwiperDes {
    margin-top: 4rem;
    padding-left: 5rem;

    img {
        display: block;
        width: 90%;
        height: auto;
        object-fit: cover;
    }
}

.SwiperPopular {
    img {
        width: 100%;
        height: auto;
    }
}

.SwiperPopular:hover {
    
    div.swiper-button-prev,
    div.swiper-button-next {
        opacity: 1;
    }
}

@media screen and (max-width: 400px){

    h1 {
        margin-left: 3rem;
    }

    div {
        width: 400px;
    }

    .mySwiperDes {   
       width: 100% ;
       margin-top: auto;
       padding-left: 3rem;
}
    .mySwiper {

        width: 393px;

        div.swiper-button-next:after, div.swiper-button-prev:after, div.swiper-button-prev, div.swiper-button-next { 
            display: none;
         }

        img {
            width: 100%;
            height: auto;
    }
    }

    .SwiperPopular {
       img {
            width: 100px;
            height: auto;
    }
}

}

`;
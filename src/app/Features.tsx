'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Mousewheel, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Planning from './Features/Planning';
import InHouse from './Features/Inhouse';

const pages = [<Planning key="1" />, <InHouse key="2" />];

const Features: React.FC = () => {
    return <>
    <section className="relative h-screen w-screen overflow-hidden bg-background">
       <Swiper
        modules={[Navigation, Autoplay, Pagination, Mousewheel]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ 
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true, 
        }}
        mousewheel={false}
        navigation={true}
        style={{
          ['--swiper-navigation-color' as any]: '#DE4345', // ta couleur
        }}
        className="h-full w-full"
      >
        {pages.map((page, index) => (
            <SwiperSlide key={index}>
                <div className="h-full w-full">{page}</div>
            </SwiperSlide>
            
        ))}
      </Swiper>
      </section>
    </>
};

export default Features;
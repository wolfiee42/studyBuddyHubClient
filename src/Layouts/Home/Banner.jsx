import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
const Banner = () => {
    return (
        <Swiper className='max-w-7xl mx-auto mt-32 lg:mt-0 text-white'
        spaceBetween={50}
        slidesPerView={1}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}

        centeredSlides={true}
        autoplay={{
            delay: 1500,
            disableOnInteraction: false,
        }}
        pagination={{
            clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        >
            <SwiperSlide className='relative mx-auto'>
                <img className='w-[500px] h-[230px] md:w-[768px] md:h-[430px] lg:w-[1100px] lg:h-[600px] mx-auto rounded-xl' src="https://i.ibb.co/MRJzTZt/essay-Writing.jpg" alt="" />
                <div className='absolute opacity-70 h-full  flex items-center w-[500px] lg:left-[90px] top-0 rounded-l-lg gap-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]'>
                    <div className='pl-10'>
                        <h2 className='text-2xl md:text-5xl font-bold'>Study Buddy Hub</h2>
                        <p className='md:text-xl mt-5'>Together We Learn, Together We Grow</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='relative mx-auto'>
                <img className='w-[500px] h-[230px] md:w-[768px] md:h-[430px] lg:w-[1100px] lg:h-[600px] mx-auto rounded-xl' src="https://i.ibb.co/W5mFPKc/mathematics.jpg" alt="" />
                <div className='absolute opacity-70 h-full  flex items-center w-[500px] lg:left-[90px] rounded-l-lg top-0 gap-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]'>
                    <div className='pl-10'>
                        <h2 className='text-2xl md:text-5xl font-bold'>Study Buddy Hub</h2>
                        <p className='md:text-xl mt-5'>Together We Learn, Together We Grow</p>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Banner;
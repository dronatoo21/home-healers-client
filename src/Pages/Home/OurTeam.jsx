import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';


const OurTeam = () => {
    return (
        <div className='px-5 mb-10'>
            <Swiper
        slidesPerView={2}
        breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 9,
            },
          }}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='text-center'>
                <img className="md:h-[250px] h-[200px] w-[200px] md:w-[250px]  rounded-full border-2 mx-auto" src="https://i.ibb.co/x1YFdy2/person1.png" alt="img" />
                <h2 className="text-lg md:text-2xl mt-3 font-bold">James</h2>
                <p className="font-semibold text-xl"><i>@James</i></p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='text-center'>
                <img className="md:h-[250px] h-[200px] w-[200px] md:w-[250px]  rounded-full border-2 mx-auto" src="https://i.ibb.co/5x2PvDm/person2.png" alt="img" />
                <h2  className="text-lg md:text-2xl mt-3 font-bold">William</h2>
                <p className="font-semibold text-xl"><i>@William</i></p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='text-center'>
                <img className="md:h-[250px] h-[200px] w-[200px] md:w-[250px]  rounded-full border-2 mx-auto" src="https://i.ibb.co/ypQW2v9/person3.png" alt="img" />
                <h2  className="text-lg md:text-2xl mt-3 font-bold">John</h2>
                <p className="font-semibold text-xl"><i>@John</i></p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='text-center'>
                <img className="md:h-[250px] h-[200px] w-[200px] md:w-[250px]  rounded-full border-2 mx-auto" src="https://i.ibb.co/t8dHnxR/person4.png" alt="img" />
                <h2  className="text-lg md:text-2xl mt-3 font-bold">Michael</h2>
                <p className="font-semibold text-xl"><i>@Michael</i></p>
            </div>
        </SwiperSlide>
      </Swiper>
        </div>            
    );
};

export default OurTeam;
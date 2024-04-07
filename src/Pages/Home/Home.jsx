import Nav from "../../Shared/Nav";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
function Home() {
  return (
    <div className="">
      <div
        className="min-h-screen bg-cover"
        style={{
          backgroundImage: "url('/images/hero.png')",
        }}
      >
        <div className="bg-black min-h-screen bg-opacity-60">
          <Nav />
          <div className=" space-y-10 text-center max-w-7xl mx-auto ">
            <div className="flex-1 space-y-3">
              <h1 className="text-white font-bebas font-bold text-5xl">
                Cox's bazar
              </h1>
              <p className="text-white max-w-3xl mx-auto">
                Cox's Bazar is a city, fishing port, tourism centre and district
                headquarters in southeastern Bangladesh. It is famous mostly for
                its long natural sandy beach, and it ...
              </p>
              <button className="btn border-none bg-amber-400 hover:bg-amber-300">
                Booking
              </button>
            </div>
            <div className="">
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper max-w-5xl"
              >
                <SwiperSlide className="relative">
                  <h1 className="font-bold text-3xl bottom-8 left-28 text-white absolute z-10">
                    Sajek
                  </h1>
                  <img
                    className="max-w-72 border-4 rounded-3xl border-amber-400"
                    src="images/Sajek.png"
                    alt=""
                    srcset=""
                  />
                </SwiperSlide>
                <SwiperSlide className="relative">
                  <h1 className="font-bold text-3xl bottom-8 left-16 text-white absolute z-10">
                    Bundorbon
                  </h1>
                  <img
                    className="max-w-72 border-4 rounded-3xl border-amber-400 z-0"
                    src="images/sundorbon.png"
                    alt=""
                    srcset=""
                  />
                </SwiperSlide>
                <SwiperSlide className="relative">
                  <h1 className="font-bold text-3xl bottom-4 left-16 text-white absolute z-10">
                    Sreemongol
                  </h1>
                  <img
                    className="max-w-72 border-4 rounded-3xl border-amber-400"
                    src="images/Sreemongol.png"
                    alt=""
                    srcset=""
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

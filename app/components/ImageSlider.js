"use client";

import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";

const videos = [
  "/assets/video.mp4",
  "/assets/video.mp4",
  "/assets/video.mp4",
  "/assets/video.mp4",
  "/assets/video.mp4",
];

export default function VideoSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplayRunning, setIsAutoplayRunning] = useState(true);
  const swiperRef = useRef(null);
  const videoRefs = useRef([]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        swiperRef.current?.autoplay.stop();
      } else {
        swiperRef.current?.autoplay.start();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
    videoRefs.current.forEach((video, index) => {
      if (index === swiper.realIndex) {
        video.currentTime = 0;
        video.play();
      } else {
        video.pause();
      }
    });
  };

  const handleVideoInteraction = (action, index) => {
    if (swiperRef.current) {
      if (action === "play") {
        swiperRef.current.autoplay.stop();
        setIsAutoplayRunning(false);
      } else if (action === "pause" && isAutoplayRunning) {
        swiperRef.current.autoplay.start();
      }
    }
  };

  const handleVideoEnded = (index) => {
    if (swiperRef.current && index === activeIndex) {
      swiperRef.current.slideNext();
    }
  };

  const handleVideoError = (index) => {
    console.error(`Error loading video at index ${index}`);
    if (swiperRef.current && index === activeIndex) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <div className="w-full mt-10">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay, EffectCoverflow]}
        className="w-full"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={handleSlideChange}
      >
        {videos.map((videoSrc, index) => (
          <SwiperSlide
            key={index}
            className="xl:!w-[1005px] lg:!w-[800px] md:!w-[600px] sm:!w-[450px] !w-[295px] max-w-full"
          >
            <div className="w-full md:h-[626px] h-[384px] rounded-[16px] overflow-hidden relative">
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                width="100%"
                height="100%"
                src={videoSrc}
                title={`Luxury Hotel Video ${index + 1}`}
                className="rounded-[16px] min-h-full object-cover bg-gray-200"
                onPlay={() => handleVideoInteraction("play", index)}
                onPause={() => handleVideoInteraction("pause", index)}
                onEnded={() => handleVideoEnded(index)}
                playsInline
                muted
                loop={false}
                preload="metadata"
                onError={() => handleVideoError(index)}
                controls={activeIndex === index}
              ></video>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}


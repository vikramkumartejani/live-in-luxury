"use client";

import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

const videos = [
  "/assets/video.mp4",
  "/assets/video.mp4",
  "/assets/video.mp4",
  "/assets/video.mp4",
  "/assets/video.mp4",
  "/assets/video.mp4",
];

export default function VideoSlider() {
  const [hoveringIndex, setHoveringIndex] = useState(null); // Store the index of the hovered video
  const swiperRef = useRef(null);
  const videoRefs = useRef([]);

  // Handle play/pause logic for videos
  const handleVideoInteraction = (action, index) => {
    if (swiperRef.current) {
      if (action === "play") {
        swiperRef.current.autoplay.stop();
        videoRefs.current[index].play();
      } else {
        videoRefs.current[index].pause();
        if (hoveringIndex === null) {
          swiperRef.current.autoplay.start();
        }
      }
    }
  };

  // Handle mouse hover events for stopping autoplay
  const handleMouseEnter = (index) => {
    setHoveringIndex(index); // Set the hovering index to the current video
    if (swiperRef.current) {
      swiperRef.current.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    setHoveringIndex(null); // Reset the hovering index
    if (swiperRef.current) {
      swiperRef.current.autoplay.start();
    }
  };

  // Handle video download functionality
  const handleDownload = (videoSrc) => {
    const link = document.createElement("a");
    link.href = videoSrc;
    link.download = "video.mp4";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Handle video error events
  const handleVideoError = (index) => {
    console.error(`Error loading video at index ${index}`);
    videoRefs.current[index]?.pause();
  };

  return (
    <div className="w-full mt-10">
      <Swiper
        spaceBetween={24}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        initialSlide={1}
        speed={2000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            spaceBetween: 20,
          },
          768: {
            spaceBetween: 30,
          },
          1024: {
            spaceBetween: 40,
          },
          1280: {
            spaceBetween: 50,
          },
          2000: {
            spaceBetween: 80,
          },
        }}
        modules={[Autoplay]}
        className="w-full"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {videos.map((videoSrc, index) => (
          <SwiperSlide
            key={index}
            className="xl:!w-[1005px] lg:!w-[800px] md:!w-[600px] sm:!w-[450px] !w-[295px] max-w-full"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
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
                playsInline
                muted
                autoPlay={true}
                preload="auto"  // Preload the video data (metadata + part of the video)
                onError={() => handleVideoError(index)}
                controls={hoveringIndex === index}
              ></video>


            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

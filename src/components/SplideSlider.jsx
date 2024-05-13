"use client";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import Lottie from "lottie-react";
import firstPageLottie from "@/public/lottie/1st_Page.json";
import secondPageLottie from "@/public/lottie/2nd_Page.json";
import thirdPageLottie from "@/public/lottie/3rd_Page.json";
import fourthPageLottie from "@/public/lottie/4th_Page.json";
import fifthPageLottie from "@/public/lottie/5th_Page.json";
import sixthPageLottie from "@/public/lottie/6th_Page.json";
import { useEffect, useState } from "react";

const SplideSlider = () => {
  const [documentWidth, setDocumentWidth] = useState();

  useEffect(() => {
    const handleResize = () => {
      let documentWidth = window.innerWidth;
      setDocumentWidth(documentWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let style1 = null;
  let style2 = null;
  switch (true) {
    case documentWidth < 300:
      style1 = {
        width: "calc(100vw)",
        height: "100vh",
        scale: 1.2,
        transformOrigin: "50% 80%",
      };
      style2 = {
        width: "calc(100vw)",
        height: "100vh",
        scale: 1.2,
        transformOrigin: "45% 80%",
      };
      break;
    case documentWidth >= 300 && documentWidth < 600:
      style1 = {
        width: "calc(100vw)",
        height: "100vh",
        scale: 1.2,
        transformOrigin: "50% 80%",
      };
      style2 = {
        width: "calc(100vw)",
        height: "100vh",
        scale: 1.2,
        transformOrigin: "45% 80%",
      };
      break;
    case documentWidth >= 601 && documentWidth < 900:
      style1 = {
        width: "calc(100vw)",
        height: "100vh",
        scale: 1.2,
        transformOrigin: "50% 80%",
      };
      style2 = {
        width: "calc(100vw)",
        height: "100vh",
        scale: 1.2,
        transformOrigin: "45% 80%",
      };
      break;
    case documentWidth >= 901 && documentWidth < 1200:
      style1 = {
        width: "calc(100vw)",
        height: "100vh",
        scale: 1.2,
        transformOrigin: "50% 80%",
      };
      style2 = {
        width: "calc(100vw)",
        height: "100vh",
        scale: 1.2,
        transformOrigin: "45% 80%",
      };
      break;
    case documentWidth >= 1201 && documentWidth < 1500:
      style1 = {
        width: "calc(100vw)",
        height: "100vh",
        scale: 1.2,
        transformOrigin: "50% 80%",
      };
      style2 = {
        width: "calc(100vw)",
        height: "100vh",
        scale: 1.2,
        transformOrigin: "45% 80%",
      };
      break;
    case documentWidth >= 1501 :
      style1 = {
        width: "calc(100vw)",
        height: "100vh",
        scale: 1.2,
        transformOrigin: "50% 80%",
      };
      style2 = {
        width: "calc(100vw)",
        height: "100vh",
        scale: 1.2,
        transformOrigin: "45% 80%",
      };
      break;

  }

  return (
    <div>
      <Splide
        className=""
        options={{
          wheel: true,
          arrows: false,
          autoHeight: true,
          paginationDirection: "ttb",
          type: "loop",
          cover: true,
          width: "100%",
          height: "100%",
          fixedHeight: "100vh",
          // breakpoints: {
          //   1024: {
          //     fixedHeight: "100%",
          //   },
          //   767: {
          //     fixedHeight: "732px",
          //   },
          //   640: {
          //     fixedHeight: "400px",
          //   },
          // },
        }}
        aria-label="React Splide Example"
      >
        <SplideSlide>
          <Lottie style={style1} animationData={firstPageLottie} loop={true} />
        </SplideSlide>
        <SplideSlide>
          <Lottie style={style2} animationData={secondPageLottie} loop={true} />
        </SplideSlide>
        <SplideSlide>
          <Lottie style={style1} animationData={thirdPageLottie} loop={true} />
        </SplideSlide>
        <SplideSlide>
          <Lottie style={style2} animationData={fourthPageLottie} loop={true} />
        </SplideSlide>
        <SplideSlide>
          <Lottie style={style1} animationData={fifthPageLottie} loop={true} />
        </SplideSlide>
        <SplideSlide>
          <Lottie style={style2} animationData={sixthPageLottie} loop={true} />
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default SplideSlider;

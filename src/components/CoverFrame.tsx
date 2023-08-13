import { FunctionComponent, useEffect } from "react";

const CoverFrame: FunctionComponent = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <a className="[text-decoration:none] relative bg-white w-[1615px] h-[960px] overflow-hidden text-left text-[34px] text-white font-components-button-large">
      <section className="absolute top-[0px] left-[0px] bg-whitesmoke w-[1920px] h-[960px]" />
      <img
        className="absolute top-[0px] left-[297.9px] w-[1302.1px] h-[960px] object-cover [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0]"
        alt=""
        src="/group-16@2x.png"
        data-animate-on-scroll
      />
      <img
        className="absolute h-[7.2%] w-[22.92%] top-[44.34%] right-[3.36%] bottom-[48.46%] left-[73.72%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/weblogo-1.svg"
      />
      <img
        className="absolute top-[878.05px] left-[1174.94px] text-[20px] font-components-button-large text-skyblue text-left"
        alt=""
      >
        Made by Team Locofy
      </img>
      <h2 className="m-0 absolute top-[827.38px] left-[1173.29px] text-[inherit] font-medium font-inherit hidden">
        Travel Website
      </h2>
      <img
        className="absolute top-[0px] left-[55px] rounded-2xl max-h-full w-[1140px] overflow-hidden object-cover hover:[background:linear-gradient(#fff,_#fff),_#87550a] sm:w-full sm:hover:bg-orange"
        alt=""
        src="/homepage@2x.png"
      />
    </a>
  );
};

export default CoverFrame;

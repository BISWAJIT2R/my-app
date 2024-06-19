"use client"
import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./AnimationBox";
import { GridGlobe } from "./GridGlobe";
import { TechStack } from "@/data";
import { Infinite } from "./Infinite";
import { useState } from "react";
import animationData from "@/data/confetti.json"
import Lottie from "react-lottie";
import Button from "./Button";
import { IoCopyOutline } from "react-icons/io5";
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  img,
  imgClassName,
  spareImg,
  titleClassName,
  id,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  spareImg?: string;
  titleClassName?: string;
  id?: number;
}) => {
 
  const [copied, setCopied] = useState(false);
  // console.clear()
  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    console.log("hello")
    const text = "mrbiswajitdas2000@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };


  return (
    <div
      className={cn(
        "row-span-1 rounded-md group/bento hover:shadow-xl transition duration-200 shadow-input border-1  justify-between flex flex-col space-y-4 relative text-white overflow-hidden",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className=" absolute h-full w-full top-0 left-0 ">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover, object-center")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5  ${id === 5 && "w-full opacity-80"
            }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={"object-cover, object-center"}
            />
          )}
        </div>
        {id === 6 && (
            <BackgroundGradientAnimation>
              <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl" />
            </BackgroundGradientAnimation>
          )}
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 "
          )}
        >
          <div
            className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10 md:w-full`}
          >
            {title}
            
          </div>
          <div className="font-sans font-extralight md:max-w-1/2 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10 pt-3">
            {description}
          </div>
          {id === 2 && <GridGlobe />}

          {
            id === 3 && <Infinite items={TechStack} speed="normal" />
          }

          
           {id === 6 && (
            <div className="mt-5 relative">
              
              <div
                className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"
                  } pointer-events-none`}
              >
                {/* <img src="/confetti.gif" alt="confetti" /> */}
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>

              <Button
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icons={<IoCopyOutline />}
                onclick={handleCopy}
              />
            </div>
          )}
        </div>
        
      </div>
    </div>
  );
};

"use client";
import React from "react";
import { SectionContainer } from "./SectionContainer";
import { Icon } from "@iconify/react";
import Image from "next/image";
import feature1 from "../../public/projects/features1.png";
import feature2 from "../../public/projects/features2.png";

const Features = () => {
  const ContentImageData = [
    {
      id: 1,
      title: "Effortless Planning",
      content:
        "Say goodbye to meal planning stress! With NutriTrack, planning your meals becomes a breeze. Our user-friendly Notion template lets you create customized daily or weekly meal plans effortlessly. Enjoy a balanced and nutritious diet without the hassle.",
      align: "right",
      image: feature1,
      reverse: false,
    },
    {
      id: 1,
      title: "Effortless Planning",
      content:
        "Say goodbye to meal planning stress! With NutriTrack, planning your meals becomes a breeze. Our user-friendly Notion template lets you create customized daily or weekly meal plans effortlessly. Enjoy a balanced and nutritious diet without the hassle.",
      align: "right",
      image: feature1,
      reverse: true,
    },
  ];

  return (
    <SectionContainer className="py-24 lg:py-32">
      {ContentImageData.map((item) => (
        // Parent Div
        <div
          id={item.id}
          key={item.id}
          className={`flex gap-y-8 ${
            item.reverse ? "flex-col-reverse" : "flex-col"
          } px-5 justify-center items-center lg:flex-row`}
        >
          {item.reverse ? (
            <>
              {/* Text */}
              <div className="flex flex-col justify-center items-center w-full lg:w-1/2">
                <div className="w-full lg:w-4/5">
                  <h3 className="flex justify-center items-center text-center text-3xl lg:text-4xl mb-2 font-semibold text-white sm:leading-[55px] sm:tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-base lg:text-lg text-gray-400 my-5 py-5 px-5">
                    {item.content}
                  </p>
                </div>
              </div>
              {/* Image */}
              <div
                className={`flex flex-col justify-center items-center w-full lg:w-1/2`}
              >
                <div className="w-4/5 flex flex-col justify-center items-center text-center">
                  <Image
                    src={item.image}
                    width={400}
                    height={400}
                    objectFit="cover"
                    alt="Process Banner 1"
                    className="drop-shadow-xl w-full offset-y-0 offset-x-8 blur-16"
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Image */}
              <div
                className={`flex flex-col justify-center items-center w-full lg:w-1/2`}
              >
                <div className="w-4/5 flex flex-col justify-center items-center text-center">
                  <Image
                    src={item.image}
                    width={400}
                    height={400}
                    objectFit="cover"
                    alt="Process Banner 1"
                    className="drop-shadow-xl w-full offset-y-0 offset-x-8 blur-16"
                  />
                </div>
              </div>
              {/* Text */}
              <div className="flex flex-col mt-8 justify-center items-center w-full lg:w-1/2">
                <div className="w-full lg:w-4/5">
                  <h3 className="flex justify-center items-center text-center text-3xl lg:text-4xl mb-2 font-semibold text-white sm:leading-[55px] sm:tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-base lg:text-lg text-gray-400 my-5 py-5 px-5">
                    {item.content}
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      ))}
    </SectionContainer>
  );
};

export default Features;

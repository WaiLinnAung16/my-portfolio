"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import {
  IconBrandFigma,
  IconBrandGithubFilled,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandVue,
} from "@tabler/icons-react";

export default function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] h-[30rem] w-full max-w-[25rem] sm:w-[30rem] rounded-xl border">
        <CardItem
          translateZ="50"
          className="pointer-events-none absolute inset-0"
        >
          <div className="h-16 w-16 flex items-center justify-center bg-black border border-white/10 rounded-md absolute -top-5 -left-5 ">
            <IconBrandNextjs className=" text-neutral-500 dark:text-neutral-300" />
          </div>
        </CardItem>
        <CardItem
          translateZ="50"
          className="pointer-events-none absolute inset-0"
        >
          <div className="h-16 w-16 flex items-center justify-center bg-black border border-white/10 rounded-md absolute top-5 -right-5">
            <IconBrandJavascript className=" text-[#F0DB4F]" />
          </div>
        </CardItem>
        <CardItem
          translateZ="50"
          className="pointer-events-none absolute inset-0"
        >
          <div className="h-16 w-16 flex items-center justify-center bg-black border border-white/10 rounded-md absolute bottom-10 -left-5">
            <IconBrandReact className=" text-[#61DBFB]" />
          </div>
        </CardItem>
        <CardItem
          translateZ="50"
          className="pointer-events-none absolute inset-0"
        >
          <div className="h-16 w-16 flex items-center justify-center bg-black border border-white/10 rounded-md absolute -bottom-5 -right-5">
            <IconBrandVue className=" text-[#41B883]" />
          </div>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}

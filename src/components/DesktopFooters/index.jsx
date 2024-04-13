import React from "react";
import { Img, Text } from "./..";

export default function DesktopFooters({ p2024your = "@ 2024 Your Company, Inc. All rights reserved", ...props }) {
  return (
    <div {...props}>
      <Text as="p" className="ml-5 self-end text-center !text-gray-600 sm:ml-0">
        {p2024your}
      </Text>
      <div className="mr-2.5 flex gap-[11px] sm:mr-0">
        <Img src="images/img_socials.svg" alt="socials_one" className="h-[24px] w-[24px]" />
        <Img src="images/img_socials_white_a700.svg" alt="socials_three" className="h-[24px] w-[24px]" />
        <Img src="images/img_socials_white_a700_24x24.svg" alt="socials_five" className="h-[24px] w-[24px]" />
        <Img src="images/img_socials_24x24.svg" alt="socials_seven" className="h-[24px] w-[24px]" />
        <Img src="images/img_socials_1.svg" alt="socials_nine" className="h-[24px] w-[24px]" />
        <Img src="images/img_socials_2.svg" alt="socials_eleven" className="h-[24px] w-[24px]" />
      </div>
    </div>
  );
}

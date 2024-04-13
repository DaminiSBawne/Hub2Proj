import React from "react";
import { Img, Text } from "./..";

export default function DesktopTag({ version20is = "Version 2.0 is here", readmore = "Read more", ...props }) {
  return (
    <div {...props}>
      <div className="flex items-center gap-[7px]">
        <Text size="xs" as="p" className="tracking-[-0.33px] !text-white-A700_7f">
          {version20is}
        </Text>
        <div className="flex gap-[5px] py-[7px]">
          <a href="#">
            <Text size="xs" as="p" className="tracking-[-0.33px]">
              {readmore}
            </Text>
          </a>
          <Img src="images/img_icons_white_a700.svg" alt="icons_three" className="h-[16px] w-[16px]" />
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Text, Heading, Button, Img } from "./..";

export default function DesktopFeaturecards({
  integration = "Integration ecosystem",
  body = "Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one place.",
  ...props
}) {
  return (
    <div {...props}>
      <Button shape="round" className="mt-[19px] w-[56px]">
        <Img src="images/img_icons_black_900_01.svg" />
      </Button>
      <div className="mb-[19px] flex flex-col items-center gap-[5px] self-stretch">
        <Heading as="h1" className="text-center tracking-[-0.56px]">
          {integration}
        </Heading>
        <Text size="md" as="p" className="text-center leading-[23px] tracking-[-0.16px]">
          {body}
        </Text>
      </div>
    </div>
  );
}

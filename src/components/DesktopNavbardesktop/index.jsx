import React from "react";
import { Button, Img, Text } from "./..";


export default function DesktopNavbardesktop({ madeby = "made by", getForFree = "Get for free", ...props }) {
  return (
    
    <div {...props}>
    

      
      <div className="my-1 flex items-center gap-2">
       
        <Img src="images/img_logo_default.png" alt="logodefault_one" className="h-[41px] w-[40px] object-cover flex justify-between items-center" />
       
        <Text as="p" className="mb-2.5 self-end">
          {madeby}
        </Text>
        
        
          <div className="flex items-center gap-2">
          <Img src="images/img_contrast.svg" alt="contrast_one" className="h-[21px]" />
          <Img src="images/img_settings.svg" alt="settings_one" className="h-[9px]" />
        </div>
        
        About
      </div>
      
   
       <Button size="xs" shape="round" className="min-w-[115px] font-medium tracking-[-0.32px]">
        {getForFree}
      </Button>
     
    </div>
   
  );
}

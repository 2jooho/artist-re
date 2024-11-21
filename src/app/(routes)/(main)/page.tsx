import React, { useState } from "react";
import backgroundImg from "../assets/img/main/mainBack.jpg";
import mainFrame from "../assets/img/main/mainFrame.png";
import aboutBack from "../assets/img/main/aboutBack.gif";
import delaybar from "../assets/icons/use/delaybar.gif";
import { useMainInfo } from "@/features/hooks/useMainInfo";
import { LoadingSpinner } from "@/shared/components/ui/LoadingSpinner";
import { MainImage } from "@/features/main/components/MainImage";
import { AboutSection } from "@/features/main/components/AboutSection";


const Main = () => {
  const [showText] = useState(false);
  const { data: mainInfo } = useMainInfo();

  return (
    <div>
      <MainImage 
        backgroundImg={backgroundImg.src}
        mainFrame={mainFrame.src}
        mainImgUrl="" // {mainInfo?.mainImgUrl}
      />
      <AboutSection 
        backgroundImg={aboutBack.src}
        showText={showText}
      />
    </div>
  );
};

export default Main;
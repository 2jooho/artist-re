import { heightPercentage } from "@/shared/lib/utils/ResponsiveSize";
import {MainHeader} from "./MainHeader";
// import backgroundImg from "@/public/images/img/main/aboutBack.gif";

interface AboutSectionProps {
  showText: boolean;
}

export const AboutSection = ({ showText }: AboutSectionProps) => (
  <div 
    className="flex flex-col items-center justify-center w-full h-screen bg-cover bg-no-repeat relative md:h-[50vh]"
    style={{ backgroundImage: "url('/images/img/main/aboutBack.gif')" }}
  >
    <div 
      className="absolute top-0 w-full bg-[#0f1c28]" 
      style={{ height: `${heightPercentage(50)}%` }}
    />
    <div 
      className="flex w-[1.2px] bg-[#785f22] -mt-[3%] mb-[3%]"
      style={{ height: `${heightPercentage(133)}%` }}
    />
    <MainHeader showText={showText} />
    <div className="flex flex-col items-center justify-center mb-[7%]">
      <span className="flex text-xl font-normal text-[#b09464] leading-[35.83px] text-center">
        <span className="font-semibold">' 아르티스타 '&nbsp;</span>
        예술의 별 마당 방문을 환영합니다.
      </span>
      <span className="flex text-xl font-normal text-[#b09464] leading-[35.83px] text-center">
        <span className="font-semibold">작가님</span>의&nbsp;
        <span className="font-semibold">작품</span>을 보여주세요.
      </span>
    </div>
  </div>
);
import {MainFrame, BestImg} from "./styles/main.styles";

interface MainImageProps {
    mainImgUrl?: string;
  }
  
  export const MainImage = ({ mainImgUrl = 'https://d10g3jdogj131g.cloudfront.net/star/2023-12/KimSeoyeon01.jpg' }: MainImageProps) => (
    <div 
      className="flex items-center justify-center w-full h-screen bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('/images/img/main/mainBack.jpg')" }}
    >
      <MainFrame src={`/images/img/main/mainFrame.png`}>
       <BestImg
          src={mainImgUrl}
        ></BestImg>
      </MainFrame>
    </div>
  );
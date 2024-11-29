// import backgroundImg from "@/public/images/img/main/mainBack.jpg";
// import mainFrame from "@/public/images/img/main/mainFrame.png";
import Image from 'next/image';
interface MainImageProps {
    mainImgUrl?: string;
  }
  
  export const MainImage = ({  mainImgUrl = '/images/img/main/galleryBack.jpg' }: MainImageProps) => (
    <div 
      className="flex items-center justify-center w-full h-[93vh] bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('/images/img/main/mainBack.jpg')" }}
    >
      <div 
        className="flex items-center justify-center mb-[10vh] w-[17%] h-[45%] bg-cover bg-no-repeat p-[3.5vh_1.7%_3.2vh_1.7%] shadow-[0_18px_15px_12px_rgba(0,0,0,0.55)]"
        style={{ backgroundImage: "url('/images/img/main/mainFrame.png')" }}
      >
        <Image 
          src="/images/img/main/galleryBack.jpg"//{mainImgUrl} 
          alt="main" 
          fill
          className="w-full h-full object-fill bg-white"
        />
      </div>
    </div>
  );
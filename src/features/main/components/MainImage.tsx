interface MainImageProps {
    backgroundImg: string;
    mainFrame: string;
    mainImgUrl?: string;
  }
  
  export const MainImage = ({ backgroundImg, mainFrame, mainImgUrl }: MainImageProps) => (
    <div 
      className="flex items-center justify-center w-full h-[93vh] bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div 
        className="flex items-center justify-center mb-[10vh] w-[17%] h-[45%] bg-cover bg-no-repeat p-[3.5vh_1.7%_3.2vh_1.7%] shadow-[0_18px_15px_12px_rgba(0,0,0,0.55)]"
        style={{ backgroundImage: `url(${mainFrame})` }}
      >
        <img 
          src={mainImgUrl} 
          alt="main" 
          className="w-full h-full object-fill bg-white"
        />
      </div>
    </div>
  );
interface MainHeaderProps {
    showText: boolean;
  }
  
  export const MainHeader = ({ showText }: MainHeaderProps) => (
    <div className="flex flex-row justify-center pb-5 pl-[58px] -mt-[3%]">
      <div className={`text-5xl font-normal text-white flex mt-10 ${showText ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
        SHOW ME YOUR
      </div>
      <div className="flex mt-[35px] ml-4 text-8xl font-semibold text-white">
        .JPG
      </div>
    </div>
  );
  
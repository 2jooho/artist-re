interface LoadingSpinnerProps {
    src: string;
  }
  //로딩 처리
  export const LoadingSpinner = ({ src }: LoadingSpinnerProps) => (
    <div className="flex w-full h-screen items-center justify-center bg-black/60">
      <img 
        src={src} 
        alt="loading" 
        className="flex w-1/3 h-1/3 object-contain"
      />
    </div>
  );
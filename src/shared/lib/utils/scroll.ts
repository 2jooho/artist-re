// 위로올리기 버튼 설정
export const scrollToPosition = (location: 'top' | 'low') => {
    const duration = 500;
    
    const easeInOutQuad = (t: number) =>
      t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  
    const startTime = performance.now();
    const startY = window.pageYOffset;
    const distance =
      location === 'top'
        ? -startY
        : document.body.scrollHeight - startY - window.innerHeight;
  
    const animateScroll = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const scroll = easeInOutQuad(elapsedTime / duration);
  
      if (location === 'top') {
        window.scrollTo(0, startY + distance * scroll - 1);
      } else {
        window.scrollTo(0, startY + distance * scroll);
      }
  
      if (elapsedTime < duration) {
        requestAnimationFrame(animateScroll);
      }
    };
  
    requestAnimationFrame(animateScroll);
  };
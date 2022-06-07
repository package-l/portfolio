import { useState } from 'react';
import Window from './Window';

/*function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}*/

const Shadows = ({ props }) => {
  const windowSize = Window();
  //console.log(windoSize) **check window size is being registered.
  var [shadows, setShadows] = useState("")
  var [mousePosition, setMousePosition] = useState({
    left: 0,
    top: 0
  })

  function handleMouseMove(eve) {
    setMousePosition({
      left: eve.pageY,
      top: eve.pageX
    });
    calculateShadows(mousePosition.left/windowSize.width, mousePosition.top/windowSize.height, shadows);
  }

  function calculateShadows(calcX, calcY) {
      if(calcX > 0.5) {
        calcX *= -1;
      }
      if(calcY > 0.5) {
        calcY *= -1;
      }
      if(calcX < 0.5) {
        calcX += 1;
      }
      if(calcY < 0.5) {
        calcY += 1;
      }
      
      if(calcX > 1) {
          calcX = 1;
       }
       if(calcX < -1) {
          calcX = -1;
       }
       if(calcY > 1) {
          calcY = 1;
       }
       if(calcY < -1) {
          calcY = -1;
       }

       shadows = calcX*5 + "px " + (calcY*5+5) + "px 5px rgba(0,0,0,0.25), ";
       shadows += calcX*10 + "px " + (calcY*10+5) + "px 10px rgba(0,0,0,0.25), ";
       shadows += calcX*20 + "px " + (calcY*20+5) + "px 20px rgba(0,0,0,0.20), ";
       shadows += calcX*35 + "px " + (calcY*35+5) + "px 35px rgba(0,0,0,0.20), ";
       shadows += calcX*50 + "px " + (calcY*50+5) + "px 50px rgba(0,0,0,0.15), ";
       shadows += calcX*65 + "px " + (calcY*65+5) + "px 65px rgba(0,0,0,0.15), ";
       shadows += calcX*80 + "px " + (calcY*80+5) + "px 80px rgba(0,0,0,0.10), ";
       shadows += calcX*100 + "px " + (calcY*100+5) + "px 100px rgba(0,0,0,0.10)";
      
      return setShadows(shadows);
  }

    return (
        <div className="Shadows"
        onMouseMove={(eve) => handleMouseMove(eve)}
            style={{left: mousePosition.left, top: mousePosition.top, textShadow: shadows}}
        >
        </div>
    )
};

export default Shadows;

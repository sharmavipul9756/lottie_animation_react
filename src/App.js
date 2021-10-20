import React from 'react'
import Lottie from 'react-lottie'
import animationBuilding from './Lotties/animationBuilding.json'
const App = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationBuilding,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

      return (
        <div>
          <Lottie 
            options={defaultOptions}
            height={400}
            width={400}
          />
        </div>
      );
    }
    


export default App

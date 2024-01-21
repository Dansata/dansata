// Loading.jsx
import React from 'react';
import { useLottie } from 'lottie-react';
import loaderAnimation from './Loader.json';
import './Loading.css';

const Loading = () => {
  const options = {
    animationData: loaderAnimation,
    loop: true,
  };

  const { View } = useLottie(options);

  return (
    <div className='iconLoading'>
      <div className='iconLoadingContainer'>
        {View}
      </div>
    </div>
  );
};

export default Loading;

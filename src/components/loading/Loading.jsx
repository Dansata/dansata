
import React from 'react';
import { useLottie } from "lottie-react";
import loaderAnimation from "./Loader.json"; // Replace with the path to your loader.json file

const Loading = () => {
  const options = {
    animationData: loaderAnimation,
    loop: true
  };

  const { View } = useLottie(options);

  return <>{View}</>;
};

export default Loading;
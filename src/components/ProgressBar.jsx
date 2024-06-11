import React, { useState, useEffect } from 'react';
import './ProgressBar.css';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('Loading');

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prevProgress => {
        if (prevProgress >= 100) {
          setStatus('Complete');
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const getImage = () => {
    if (progress >= 10 && progress <= 30) {
      return img1;
    } else if (progress >= 31 && progress <= 50) {
      return img2;
    } else if (progress >= 51 && progress <= 70) {
      return img3;
    } else if (progress >= 71 && progress <= 99) {
      return img4;
    } else if (progress === 100) {
      return img5;
    }
    return null;
  };
  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      <div className="progress-info">
        {progress}% - {status}
      </div>
      <div className="progress-image">
        {getImage() && <img src={getImage()} alt="progress" />}
      </div>
    </div>
  );
};

export default ProgressBar;

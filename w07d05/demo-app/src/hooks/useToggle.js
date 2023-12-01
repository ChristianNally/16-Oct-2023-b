// import {useState as useReactStatePlease} from 'react';
import {useState} from 'react'; 

const useToggle = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggle = () => {
    setIsVisible(!isVisible);
  };

  return [isVisible, toggle];
};

export default useToggle;

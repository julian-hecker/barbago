import React, { useEffect, useRef } from 'react';
import { IonNav } from '@ionic/react';

const Test: React.FC = () => {
  const navRef = useRef<any>(null);
  useEffect(() => {
    console.log(Object.entries(navRef.current));
  });
  return <IonNav ref={navRef}></IonNav>;
};

export default Test;

import React from 'react';
import {
  IonPage,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonSlides,
  IonSlide,
} from '@ionic/react';

// import './Welcome.scss';

const Welcome: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Welcome to Barbago!</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen scrollY={false}>
        <IonSlides pager={true}>
          <IonSlide>
            <h1>Hi, welcome to the club!</h1>
          </IonSlide>
          <IonSlide>
            <h1>If this is your first time here, say heeey-oooh</h1>
          </IonSlide>
          <IonSlide>
            <h1>It is your first time here right? Nice!</h1>
          </IonSlide>
          <IonSlide>
            <h1>We have something very special for you!</h1>
          </IonSlide>
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};

export default Welcome;

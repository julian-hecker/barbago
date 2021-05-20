import React, { useRef, useState } from 'react';
import {
  IonPage,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonSlides,
  IonSlide,
  IonButton,
  IonFooter,
  IonList,
  IonItem,
  IonInput,
  IonLabel,
} from '@ionic/react';

// Only used for type definitions
import { Swiper } from 'swiper';

const Welcome: React.FC = () => {
  // https://forum.ionicframework.com/t/get-swiper-instance-from-slides-component/186503/2
  const slides: any = useRef(null);

  // const [disablePrev, setDisablePrev] = useState(true);
  // const [disableNext, setDisableNext] = useState(false);

  const handleSlideChange = async (_e: CustomEvent) => {
    const swiper: Swiper = await slides.current.getSwiper();
    // setDisablePrev(swiper.isBeginning);
    // setDisableNext(swiper.isEnd);
  };

  const slidePrev = async (_e: any) => {
    const swiper: Swiper = await slides.current.getSwiper();
    swiper.slidePrev();
  };

  const slideNext = async (_e: any) => {
    const swiper: Swiper = await slides.current.getSwiper();
    swiper.slideNext();
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar mode="md">
          <IonTitle>Barbago | Welcome</IonTitle>
          <IonButton slot="end" color="primary" href="/auth/google">
            Log In
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen scrollY={true}>
        <IonSlides
          ref={slides}
          pager={true}
          options={{ allowTouchMove: true }}
          onIonSlideDidChange={handleSlideChange}
          style={{ height: '100%' }}
        >
          <IonSlide>
            <h1>Welcome to Barbago</h1>
            <p>
              Here, the barber comes directly to you! No need to even
              leave your house.
            </p>
            <IonButton slot="end" color="primary" onClick={slideNext}>
              Next
            </IonButton>
          </IonSlide>

          <IonSlide>
            <IonList>
              <IonItem>
                <IonLabel position="floating">Something</IonLabel>
                <IonInput></IonInput>
              </IonItem>
            </IonList>
          </IonSlide>

          <IonSlide>
            <h1>It is your first time here right? Nice!</h1>
          </IonSlide>

          <IonSlide>
            <IonButton href="/auth/google" size="large">
              Sign up with Google
            </IonButton>
          </IonSlide>
        </IonSlides>
      </IonContent>
      {/* <IonFooter>
        <IonToolbar>
          <IonButton
            slot="start"
            color="light"
            disabled={disablePrev}
            onClick={slidePrev}
          >
            Previous
          </IonButton>
          <IonButton
            slot="end"
            color="primary"
            disabled={disableNext}
            onClick={slideNext}
          >
            Next
          </IonButton>
        </IonToolbar>
      </IonFooter> */}
    </IonPage>
  );
};

export default Welcome;

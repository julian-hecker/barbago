import React, { useRef } from 'react';
import {
  IonPage,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonSlides,
  IonSlide,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonCardSubtitle,
  IonCardHeader,
} from '@ionic/react';

// Only used for type definitions
import { Swiper } from 'swiper';

import './Welcome.scss';
import icon from '../../assets/icon.png';

const Welcome: React.FC = () => {
  // https://forum.ionicframework.com/t/get-swiper-instance-from-slides-component/186503/2
  const slides: any = useRef(null);

  const handleSlideChange = async (_e: CustomEvent) => {
    const swiper: Swiper = await slides.current.getSwiper();
    console.log(swiper.activeIndex);
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
    <IonPage className="welcome page">
      <IonHeader>
        <IonToolbar mode="md">
          <IonTitle>Barbago | Welcome</IonTitle>
          <IonButton slot="end" color="primary" href="/auth/google">
            Log In
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent scrollY={false}>
        <IonSlides
          ref={slides}
          pager={true}
          options={{ allowTouchMove: true }}
          onIonSlideDidChange={handleSlideChange}
        >
          <IonSlide>
            <IonCard>
              <IonCardContent>
                <IonCardTitle>
                  <h1>Welcome to Barbago</h1>
                </IonCardTitle>
                <p>
                  Here, the barber comes directly to you! No need to
                  even leave your house.
                </p>
              </IonCardContent>
            </IonCard>
            <IonButton color="primary" onClick={slideNext}>
              Next
            </IonButton>
          </IonSlide>

          <IonSlide>
            <IonCard>
              <IonCardContent>
                <IonCardTitle>How it works</IonCardTitle>
                <IonCardSubtitle>In a few words</IonCardSubtitle>
                <div style={{ textAlign: 'left' }}>
                  <p>
                    1. Search, filter, and sort barbers near you to
                    find the best one for you.
                  </p>
                  <p>
                    2. Select which services you would like to
                    purchase and the date of your appointment
                  </p>
                  <p>
                    3. Pay through the app and enjoy your grooming
                    where it's most convenient!
                  </p>
                </div>
              </IonCardContent>
            </IonCard>
            <div>
              <IonButton color="light" onClick={slidePrev}>
                Back
              </IonButton>
              <IonButton color="primary" onClick={slideNext}>
                Next
              </IonButton>
            </div>
          </IonSlide>

          <IonSlide>
            <IonCard>
              <IonCardHeader>
                <img
                  src={icon}
                  style={{ maxWidth: '150px' }}
                  alt="Barbago Logo"
                />
              </IonCardHeader>
              <IonCardContent>
                <IonCardTitle>Join Barbago!</IonCardTitle>
                <IonCardSubtitle>
                  Create an account or login
                </IonCardSubtitle>
                <div>
                  <IonButton href="/login" color="light">
                    Log in
                  </IonButton>
                  <IonButton href="/signup" color="primary">
                    Sign up
                  </IonButton>
                </div>
              </IonCardContent>
            </IonCard>
            <div>
              <IonButton color="light" onClick={slidePrev}>
                Back
              </IonButton>
              <IonButton href="/home" color="light">
                Skip for now
              </IonButton>
            </div>
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

import React from 'react';
import {
  IonPage,
  IonHeader,
  IonContent,
  IonTitle,
  IonToolbar,
  IonItem,
  IonList,
} from '@ionic/react';

// import style from './Home.module.scss';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          <IonItem>Greetings, my fellow hoomans.</IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

/**
 * Ideas:
 * Links to:
 * - Search for a barber near you
 * - Popular in your area
 * - If messages: view your messages
 * - If previous purchase: review your barber
 * - Are you a barber? Click here to get started! (dismissable)
 */

export default Home;

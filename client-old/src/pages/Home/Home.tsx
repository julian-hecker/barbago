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
 * - a month after last hair cut: Ready for a new cut? go with your favorites!
 * - Take a look at some popular styles! (stretch goal)
 * - Are you a barber? Click here to get started! (dismissable)
 */

export default Home;

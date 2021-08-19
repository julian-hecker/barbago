import React from 'react';
import { Link } from 'react-router-dom';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import {
  logoFacebook,
  logoGoogle,
  lockClosed,
  mail,
  person,
} from 'ionicons/icons';

// Problem: Can't test on Mobile; should open a new tab
const Signup: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Signup</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard
          style={{
            maxWidth: '500px',
            marginRight: 'auto',
            marginLeft: 'auto',
          }}
        >
          <IonCardHeader>
            <IonCardTitle>Welcome to Barbago!</IonCardTitle>
            <IonCardSubtitle>
              You can sign up using your email address or a provider
              like Google or Facebook.
            </IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList>
              <IonItem>
                <IonLabel position="floating">Name</IonLabel>
                <IonInput />
                <IonIcon
                  icon={person}
                  slot="start"
                  className="ion-align-self-center"
                  color="primary"
                />
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Email Address</IonLabel>
                <IonInput />
                <IonIcon
                  icon={mail}
                  slot="start"
                  className="ion-align-self-center"
                  color="primary"
                />
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Password</IonLabel>
                <IonInput />
                <IonIcon
                  icon={lockClosed}
                  slot="start"
                  className="ion-align-self-center"
                  color="primary"
                />
              </IonItem>
              <IonItem>
                <IonLabel position="floating">
                  Confirm Password
                </IonLabel>
                <IonInput />
                <IonIcon
                  icon={lockClosed}
                  slot="start"
                  className="ion-align-self-center"
                  color="primary"
                />
              </IonItem>
            </IonList>
            <IonButton expand="block">Signup</IonButton>
            <p
              style={{
                margin: '0.5rem 0',
                color: 'var(--ion-color-step-650)',
                textAlign: 'center',
              }}
            >
              — Or —
            </p>
            <IonButton
              expand="block"
              color="light"
              href="/auth/google"
              target="_blank"
            >
              <IonIcon slot="start" icon={logoGoogle} />
              Signup with Google
            </IonButton>
            <IonButton
              expand="block"
              color="light"
              href="/auth/facebook"
              target="_blank"
            >
              <IonIcon slot="start" icon={logoFacebook} />
              Signup with Facebook
            </IonButton>
            <p style={{ marginTop: '1rem', textAlign: 'center' }}>
              Already have an account? <Link to="/login">Log in</Link>
            </p>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Signup;

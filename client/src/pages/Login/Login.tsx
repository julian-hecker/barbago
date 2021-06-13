import React from 'react';
import { Link } from 'react-router-dom';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
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
} from 'ionicons/icons';

import icon from '../../assets/icon.png';

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
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
            <IonImg
              src={icon}
              style={{
                maxWidth: '50%',
                width: '200px',
                margin: 'auto',
              }}
            />
            {/* Welcome Back! */}
          </IonCardHeader>
          <IonCardContent>
            <IonList>
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
            </IonList>
            <IonButton expand="block">Log In</IonButton>
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
              Log in with Google
            </IonButton>
            <IonButton
              expand="block"
              color="light"
              href="/auth/facebook"
              target="_blank"
            >
              <IonIcon slot="start" icon={logoFacebook} />
              Log in with Facebook
            </IonButton>
            <p style={{ marginTop: '1rem', textAlign: 'center' }}>
              Don't have an account? <Link to="/signup">Sign up</Link>
            </p>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Login;

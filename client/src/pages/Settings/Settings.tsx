import {
  IonButton,
  IonContent,
  IonHeader,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToggle,
  IonToolbar,
} from '@ionic/react';
import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const Settings: React.FC<any> = () => {
  const { user } = useContext(UserContext);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList mode="ios">
          {settingsOptions.map(({ name, options }, ci) => {
            return (
              <div key={`category-${ci}`}>
                <IonItemDivider>{name}</IonItemDivider>
                {options &&
                  options.map((option: any, oi: number) => {
                    const type = option.type;
                    const detail = type === 'details';
                    return (
                      <IonItem
                        detail={detail}
                        key={`option-${ci}-${oi}`}
                      >
                        <IonLabel>{option.name}</IonLabel>
                        {option.type === 'switch' && <IonToggle />}
                      </IonItem>
                    );
                  })}
              </div>
            );
          })}
          <IonItemDivider>Account</IonItemDivider>
          {user.loggedIn ? (
            <IonItem>
              <IonButton color="danger" size="large">
                Logout
              </IonButton>
            </IonItem>
          ) : (
            <IonItem>
              <IonButton color="light" size="large">
                Login
              </IonButton>
              <IonButton color="light" size="large">
                Signup
              </IonButton>
            </IonItem>
          )}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

/**
 * To Do:
 * - Learn how the nav thing works in Ionic
 * Ideas:
 * Account Settings
 * - Change information
 * - Payment Information
 * Barber Settings
 * App Settings
 * - Dark Mode
 * - Enable/Disable messaging
 * - Notifications
 * "Credits and Referrals" (Stretch goal)
 * Support
 * - How Barbago Works
 * - Contact
 * - Feedback
 * Legal
 * - Terms of Service
 * Login/Logout|Signup
 */

const settingsOptions: Array<ISetting> = [
  {
    name: 'Personal Settings',
    options: [
      { name: 'Personal Information', type: 'details' },
      { name: 'Payment Details', type: 'details' },
    ],
  },
  {
    name: 'Barber Settings',
    options: [{ name: 'Set up a Barber Profile', type: 'details' }],
  },
  {
    name: 'App Settings',
    options: [
      { name: 'Dark Mode', type: 'switch' },
      { name: 'Allow Messages', type: 'switch' },
      { name: 'Notifications', type: 'details' },
    ],
  },
  {
    name: 'Support',
    options: [
      { name: 'How Barbago Works', type: 'details' },
      { name: 'Contact', type: 'details' },
      { name: 'Feedback', type: 'details' },
    ],
  },
  {
    name: 'Legal',
    options: [
      { name: 'Terms of Service', type: 'details' },
      { name: 'Privacy Policy', type: 'details' },
    ],
  },
];

interface ISetting {
  name: string; // Category Name
  options: {
    name: string;
    type?: 'details' | 'switch';
  }[];
}

export default Settings;

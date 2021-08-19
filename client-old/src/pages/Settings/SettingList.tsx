import React, { useContext } from 'react';
import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

import { UserContext } from '../../context/UserContext';

const SettingList: React.FC<any> = () => {
  const { user } = useContext(UserContext);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonListHeader>Account</IonListHeader>
          {/* {user.loggedIn ? ( */}
          {user.user ? (
            <IonItem routerLink="/logout" style={{ color: 'red' }}>
              Logout
            </IonItem>
          ) : (
            <>
              <IonItem routerLink="/signup">Signup</IonItem>
              <IonItem routerLink="/login">Login</IonItem>
            </>
          )}
          {optionCategories.map(({ category, options }, ci) => (
            <React.Fragment key={ci}>
              <IonListHeader>{category}</IonListHeader>
              {options &&
                options.map(({ name, type, href }, oi) => {
                  const isDetails = type === 'details';
                  return (
                    <IonItem
                      routerLink={href}
                      detail={isDetails}
                      key={oi}
                    >
                      <IonLabel>{name}</IonLabel>
                    </IonItem>
                  );
                })}
            </React.Fragment>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default SettingList;

const optionCategories: Array<ISetting> = [
  {
    category: 'Personal Settings',
    options: [
      {
        name: 'Personal Information',
        type: 'details',
        href: '/settings/info',
      },
      {
        name: 'Payment Details',
        type: 'details',
        href: '/settings/payment',
      },
    ],
  },
  {
    category: 'Barber Settings',
    options: [
      {
        name: 'Set up a Barber Profile',
        type: 'details',
        href: '/settings/barber',
      },
    ],
  },
  {
    category: 'App Settings',
    options: [
      {
        name: 'Notifications',
        type: 'details',
        href: '/settings/notifications',
      },
      {
        name: 'Preferences',
        type: 'details',
        href: '/settings/preferences',
      },
    ],
  },
  {
    category: 'Support',
    options: [
      {
        name: 'How Barbago Works',
        type: 'details',
        href: '/welcome',
      },
      { name: 'Contact', type: 'details', href: '/contact' },
      { name: 'Feedback', type: 'details', href: '/feedback' },
    ],
  },
  {
    category: 'Legal',
    options: [
      {
        name: 'Terms of Service',
        type: 'details',
        href: '/terms_of_service',
      },
      {
        name: 'Privacy Policy',
        type: 'details',
        href: '/privacy_policy',
      },
    ],
  },
];

interface ISetting {
  category: string; // Category Name
  options: {
    name: string;
    type?: 'details' | 'switch';
    value?: any;
    href?: string;
    details?: string;
    title?: string;
  }[];
}

/**
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

import React, { useContext } from 'react';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonTitle,
  IonToggle,
  IonToolbar,
} from '@ionic/react';

import { SettingContext } from '../../context/SettingContext';

interface Options {
  category: string;
  options: {
    name: string;
    slug: string;
    type: string;
    placeholder?: string;
  }[];
}

interface SettingDetailProps {
  title: string;
  optionsList: Options[];
}

export const SettingDetail: React.FC<SettingDetailProps> = ({
  title,
  optionsList,
}) => {
  const { settings, setSettings } = useContext<any>(SettingContext);

  const handleToggle = (event: any) => {
    setSettings({
      ...settings,
      [event.target!.name]: event.detail.checked,
    });
  };

  const handleChange = (event: any) => {
    setSettings({
      ...settings,
      [event.target!.name]: event.detail.value,
    });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/settings" />
          </IonButtons>
          <IonTitle>{title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {optionsList.map(({ category, options }) => (
            <React.Fragment key={category}>
              <IonListHeader>{category}</IonListHeader>
              {options.map(({ name, slug, type, placeholder }) => {
                switch (type) {
                  case 'toggle':
                    return (
                      <IonItem key={name}>
                        <IonLabel>{name}</IonLabel>
                        <IonToggle
                          name={slug}
                          checked={settings[slug]}
                          onIonChange={handleToggle}
                        ></IonToggle>
                      </IonItem>
                    );
                  case 'text':
                    return (
                      <IonItem key={name}>
                        <IonLabel position="stacked">{name}</IonLabel>
                        <IonInput
                          name={slug}
                          value={settings[slug]}
                          placeholder={placeholder}
                          onIonChange={handleChange}
                        />
                      </IonItem>
                    );
                  default:
                    return (
                      <IonItem key={name}>
                        <IonLabel>{name}</IonLabel>
                      </IonItem>
                    );
                }
              })}
            </React.Fragment>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export const SettingNotificationDetail: React.FC<any> = () => {
  return (
    <SettingDetail
      title="Notifications"
      optionsList={notificationOptions}
    />
  );
};

export const SettingPreferenceDetail: React.FC = () => (
  <SettingDetail
    title="Preferences"
    optionsList={preferenceOptions}
  />
);

export const SettingPersonalDetail: React.FC = () => (
  <SettingDetail
    title="Personal Information"
    optionsList={personalOptions}
  />
);

const notificationOptions: Array<Options> = [
  {
    category: 'Updates from Barbago',
    options: [
      { name: 'Push Notifications', slug: 'push', type: 'toggle' },
      { name: 'Email Notifications', slug: 'email', type: 'toggle' },
    ],
  },
  {
    category: 'Other',
    options: [
      { name: 'Allow Messaging', slug: 'messages', type: 'toggle' },
    ],
  },
];

const preferenceOptions: Array<Options> = [
  {
    category: 'Display',
    options: [{ name: 'Dark Mode', slug: 'dark', type: 'toggle' }],
  },
];

const personalOptions: Array<Options> = [
  {
    category: 'Personal Information',
    options: [
      {
        name: 'First Name',
        slug: 'first',
        type: 'text',
        placeholder: 'John',
      },
      {
        name: 'Last Name',
        slug: 'last',
        type: 'text',
        placeholder: 'Doe',
      },
    ],
  },
];

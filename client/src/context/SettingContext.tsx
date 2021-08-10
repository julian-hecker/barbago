import React, { createContext, Dispatch, SetStateAction, useState } from 'react';
import { ISettings } from '../types/settings';

export const SettingContext = createContext<
  Partial<{
    settings: ISettings;
    setSettings: Dispatch<SetStateAction<ISettings>>;
  }>
>({});

export const SettingContextProvider: React.FC = ({ children }) => {
  const initialSettings: ISettings = {
    notifications: {
      pushNotifications: true,
      emailNotifications: true,
      messageNotifications: true,
    },
  };

  const [settings, setSettings] = useState(initialSettings);

  return (
    <SettingContext.Provider value={{ settings, setSettings }}>
      {children}
    </SettingContext.Provider>
  );
};

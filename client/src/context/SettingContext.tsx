import React, { createContext, Dispatch, useReducer } from 'react';
import { ISettings } from '../types/settings';

const initialSettings: ISettings = {
  notifications: {
    pushNotifications: true,
    emailNotifications: true,
    messageNotifications: true,
  },
};

type SettingAction =
  | { type: ''; payload: object }
  | { type: '' }
  | { type: 'reee' };

const settingReducer: React.Reducer<ISettings, SettingAction> = (
  prevState = initialSettings,
  action,
) => {
  switch (action.type) {
    case '':
      return {
        ...prevState,
      };
    default:
      return prevState;
  }
};

export const SettingContext = createContext<
  Partial<{
    settingState: ISettings;
    settingDispatch: Dispatch<SettingAction>;
  }>
>({});

export const SettingContextProvider: React.FC = ({ children }) => {
  const [settingState, settingDispatch] = useReducer(
    settingReducer,
    initialSettings,
  );

  return (
    <SettingContext.Provider
      value={{ settingState, settingDispatch }}
    >
      {children}
    </SettingContext.Provider>
  );
};

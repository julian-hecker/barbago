import { createContext, useEffect, useState } from 'react';

export const SettingContext = createContext<any>({});

const SettingContextProvider: React.FC = ({ children }) => {
  const initialSettings = {
    push: true,
    email: true,
    messages: true,
    first: '',
    last: '',
    dark: window?.matchMedia('(prefers-color-scheme: dark)').matches,
  };

  const localSettings = localStorage.getItem('settings');

  const [settings, setSettings] = useState<any>(
    localSettings ? JSON.parse(localSettings) : initialSettings,
  );
  
  useEffect(() => {
    try {
      localStorage.setItem('settings', JSON.stringify(settings));
    } catch (err) {
      console.error(err);
    }
  }, [settings]);
  
  useEffect(() => {
    if (settings.dark) document.body.classList.add('dark');
    else document.body.classList.remove('dark');
  }, [settings.dark]);
  
  return (
    <SettingContext.Provider value={{ settings, setSettings }}>
      {children}
    </SettingContext.Provider>
  );
};

export default SettingContextProvider;

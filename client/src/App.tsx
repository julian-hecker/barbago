import React, { useContext, useEffect } from 'react';
import {
  IonApp,
  IonTabBar,
  IonTabs,
  IonTabButton,
  IonRouterOutlet,
  IonIcon,
  IonLabel,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { chatbubbles, home, search, settings } from 'ionicons/icons';
import { Switch, Redirect } from 'react-router-dom';

import ConditionalRoute from './components/ConditionalRoute';
import { UserContext } from './context/UserContext';

import Welcome from './pages/Welcome/Welcome';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Settings from './pages/Settings/Settings';
import Messages from './pages/Messages/Messages';
// Account? Profile? Edit Profile? Services? Schedule?

// To do: Add application-level notification area
// Decide on using firebase or node-express for backend

const App: React.FC = () => {
  const { user } = useContext(UserContext);

  useEffect(() => {
    console.log(user);
  }, [user]);

  const routes = [
    {
      path: '/:tab(home)',
      component: Home,
    },
    {
      path: '/:tab(search)',
      component: Search,
    },
    {
      path: '/:tab(messages)',
      component: Messages,
      condition: user.user,
      redirect: '/signup',
    },
    {
      path: '/:tab(settings)',
      component: Settings,
    },
    {
      path: '/welcome',
      component: Welcome,
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/signup',
      component: Signup,
    },
  ];

  const tabs = [
    {
      text: 'Home',
      path: '/home',
      icon: home,
    },
    {
      text: 'Search',
      path: '/search',
      icon: search,
    },
    {
      text: 'Messages',
      path: '/messages',
      icon: chatbubbles,
    },
    {
      text: 'Settings',
      path: '/settings',
      icon: settings,
    },
  ];

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Switch>
              <Redirect exact path="/" to="/welcome" />
              {routes.map((props, key) => (
                <ConditionalRoute key={key} {...props} />
              ))}
            </Switch>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            {tabs.map(({ text, path, icon }, key) => (
              <IonTabButton tab={text} href={path} key={key}>
                <IonIcon icon={icon} />
                <IonLabel>{text}</IonLabel>
              </IonTabButton>
            ))}
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;

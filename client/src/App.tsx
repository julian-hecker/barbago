import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
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
import {
  chatbubbles,
  heart,
  home,
  search,
  settings,
} from 'ionicons/icons';
import { Switch, Route, Redirect } from 'react-router-dom';
import axios from 'axios';

import Welcome from './pages/Welcome/Welcome';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import Favorites from './pages/Favorites/Favorites';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Settings from './pages/Settings/Settings';
import Messages from './pages/Messages/Messages';
// Account? Profile? Edit Profile? Services? Schedule? Map?

import { UserContext } from './context/UserContext';

const App: React.FC = () => {
  const user = useContext(UserContext);
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Switch>
              <Route exact path="/welcome" component={Welcome} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/search" component={Search} />
              <Route exact path="/favorites" component={Favorites} />
              <Route exact path="/messages" component={Messages} />
              <Route exact path="/settings" component={Settings} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Redirect path="/" to="/home" />
            </Switch>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="welcome" href="/welcome">
              <IonLabel>Welcome</IonLabel>
            </IonTabButton>
            <IonTabButton tab="home" href="/home">
              <IonIcon icon={home} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab="search" href="/search">
              <IonIcon icon={search} />
              <IonLabel>Search</IonLabel>
            </IonTabButton>
            <IonTabButton tab="favorites" href="/favorites">
              <IonIcon icon={heart} />
              <IonLabel>Favorites</IonLabel>
            </IonTabButton>
            <IonTabButton tab="messages" href="/messages">
              <IonIcon icon={chatbubbles} />
              <IonLabel>Messages</IonLabel>
            </IonTabButton>
            <IonTabButton tab="settings" href="/settings">
              <IonIcon icon={settings} />
              <IonLabel>Settings</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;

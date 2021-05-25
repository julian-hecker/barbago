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
import {
  chatbubbles,
  // heart,
  home,
  search,
  settings,
} from 'ionicons/icons';
import { Switch, Route, Redirect } from 'react-router-dom';
// import axios from 'axios';

import { UserContext } from './context/UserContext';

import Welcome from './pages/Welcome/Welcome';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import Favorites from './pages/Favorites/Favorites';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Settings from './pages/Settings/Settings';
import Messages from './pages/Messages/Messages';
import Test from './pages/Settings/Test';
// Account? Profile? Edit Profile? Services? Schedule? Map?

const App: React.FC = () => {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    setUser('caca');
    console.log(user);
  }, [setUser, user]);

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Switch>
              <Redirect exact path="/" to="/home" />
              <Route path="/welcome" component={Welcome} />
              <Route path="/home" component={Home} />
              <Route path="/search" component={Search} />
              <Route path="/favorites" component={Favorites} />
              <Route path="/messages" component={Messages} />
              <Route path="/settings" component={Settings} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />

              <Route path="/test" component={Test} />
            </Switch>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            {/* <IonTabButton tab="welcome" href="/welcome">
              <IonLabel>Welcome</IonLabel>
            </IonTabButton> */}
            <IonTabButton tab="home" href="/home">
              <IonIcon icon={home} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>
            {/* <IonTabButton tab="favorites" href="/favorites">
              <IonIcon icon={heart} />
              <IonLabel>Faves</IonLabel>
            </IonTabButton> */}
            <IonTabButton tab="search" href="/search">
              <IonIcon icon={search} />
              <IonLabel>Search</IonLabel>
            </IonTabButton>
            <IonTabButton tab="messages" href="/messages">
              <IonIcon icon={chatbubbles} />
              <IonLabel>Chat</IonLabel>
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

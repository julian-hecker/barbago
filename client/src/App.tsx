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
import { Switch, Route, Redirect } from 'react-router-dom';
// import axios from 'axios';

import PrivateRoute from './components/PrivateRoute';
import { UserContext } from './context/UserContext';

import Welcome from './pages/Welcome/Welcome';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Settings from './pages/Settings/Settings';
import Messages from './pages/Messages/Messages';
// Account? Profile? Edit Profile? Services? Schedule? Map?

const App: React.FC = () => {
  const { user } = useContext(UserContext);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Switch>
              <Redirect exact path="/" to="/welcome" />

              <Route path="/:tab(home)" component={Home} />
              <Route path="/:tab(search)" component={Search} />
              <PrivateRoute
                path="/:tab(messages)"
                component={Messages}
              />
              <Route path="/:tab(settings)" component={Settings} />

              <Route path="/welcome" component={Welcome} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
            </Switch>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="home" href="/home">
              <IonIcon icon={home} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>
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


// Extract Routes into an object

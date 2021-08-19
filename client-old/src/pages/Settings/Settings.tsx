import React from 'react';
import { IonRouterOutlet } from '@ionic/react';
import { Route, Switch } from 'react-router';

import {
  SettingPersonalDetail,
  SettingPreferenceDetail,
  SettingNotificationDetail,
} from './SettingDetail';
import SettingList from './SettingList';

const Settings: React.FC<any> = ({ match }) => {
  // https://stackblitz.com/edit/ionic-react-routing
  return (
    <IonRouterOutlet>
      <Switch>
        <Route exact path={match.url} component={SettingList} />
        <Route
          exact
          path={`${match.url}/notifications`}
          component={SettingNotificationDetail}
        />
        <Route
          exact
          path={`${match.url}/preferences`}
          component={SettingPreferenceDetail}
        />

        <Route
          exact
          path={`${match.url}/info`}
          component={SettingPersonalDetail}
        />
        <Route
          path="/settings/*"
          component={() => <div>Wrong place!</div>}
        />
      </Switch>
    </IonRouterOutlet>
  );
};

export default Settings;

import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import Deliveries from '~/pages/Deliveries';
import Deliveriymans from '~/pages/Deliverymans';
import AddDeliveries from '~/pages/Deliveries/DeliveryForm';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/deliveries" exact component={Deliveries} isPrivate />
      <Route path="/deliverymans" exact component={Deliveriymans} isPrivate />
      <Route path="/deliveries/add" exact component={AddDeliveries} isPrivate />
    </Switch>
  );
}

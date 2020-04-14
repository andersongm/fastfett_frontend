import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import Deliveries from '~/pages/Deliveries';
import Deliveriymans from '~/pages/Deliverymans';
import Recipients from '~/pages/Recipients';
import AddDeliveries from '~/pages/Deliveries/DeliveryForm';
import EditDeliveries from '~/pages/Deliveries/DeliveryForm';
import AddDeliveryMans from '~/pages/Deliverymans/DeliverymansForm';
import EditDeliveryMans from '~/pages/Deliverymans/DeliverymansForm';
import AddRecipients from '~/pages/Recipients/RecipientsForm';
import EditRecipients from '~/pages/Recipients/RecipientsForm';
import Problems from '~/pages/Problems';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/deliveries" exact component={Deliveries} isPrivate />
      <Route path="/deliverymans" exact component={Deliveriymans} isPrivate />
      <Route path="/deliveries/add" exact component={AddDeliveries} isPrivate />
      <Route path="/deliveries/edit" exact component={EditDeliveries} isPrivate />
      <Route path="/deliveries/show" exact component={Deliveries} isPrivate />
      <Route path="/deliverymans/add" exact component={AddDeliveryMans} isPrivate />
      <Route path="/deliverymans/edit" exact component={EditDeliveryMans} isPrivate />
      <Route path="/recipients" exact component={Recipients} isPrivate />
      <Route path="/recipients/add" exact component={AddRecipients} isPrivate />
      <Route path="/recipients/edit" exact component={EditRecipients} isPrivate />
      <Route path="/problems" exact component={Problems} isPrivate />
      {/* <Route path="/problems/show" exact component={Problems} isPrivate /> */}
    </Switch>
  );
}

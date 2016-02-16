//Configure Torii, authentication library for emberfire.


import ember from 'ember';
import ToriiFirebaseAdapter from 'emberfire/torii-adapters/firebase';
export default ToriiFirebaseAdapter.extend({
  firebase: Ember.inject.service()
});
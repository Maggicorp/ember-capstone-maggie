import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),
  //because nothing is inside of it, it assumes the service is called auth. Could be Ember.inject.service(auth)
//services are useful for auth, third party apis, logins, lives for the durations.  A service is a peice of reusable code.
  user: Ember.computed.alias('auth.credentials.email'),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),

  actions: {
    signOut () {
      this.sendAction('signOut');
    },
  },
});

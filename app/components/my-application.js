import Ember from 'ember';

export default Ember.Component.extend({
  // routing: Ember.inject.service('-routing'),
  auth: Ember.inject.service(),
  user: Ember.computed.alias('auth.credentials.email'),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),
  // isEditPoem: Ember.computed( function(){
  //   let currentRoute = this.get('routing.currentRouteName');
  //   console.log('route is', currentRoute)
  //   if (currentRoute === 'poem-edit') {
  //     return true
  //   } else
  //   return false;
  // }),
  actions: {
    signOut () {
      this.sendAction('signOut');
    },
  },
});

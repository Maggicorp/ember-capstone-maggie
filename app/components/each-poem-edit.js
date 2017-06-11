import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    edit() {
      console.log('at update poem in each poem edit component, poem is', this.get('poem'))
      this.sendAction('editPoem', this.get('poem'))
    }
  }
});

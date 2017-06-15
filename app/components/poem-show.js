import Ember from 'ember';

export default Ember.Component.extend({

 actions: {
   poemCreate(data) {
     this.sendAction('poemCreate', data);
   },
 }
});

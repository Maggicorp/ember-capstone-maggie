import Ember from 'ember';

export default Ember.Component.extend({
  onInit: function(){
    console.log('on init');
    this.rerender()
  }.on("init"),
 actions: {
   poemCreate(data) {
     console.log('at poem show poemCreate in poem-show')
     console.log('here is the data', data)
     this.sendAction('poemCreate', data)
   },
 }
});

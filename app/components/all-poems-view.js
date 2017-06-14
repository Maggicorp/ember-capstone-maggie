import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  className: ['each-haiku'],
  onInit: function(){
    console.log('on init', this.get('model.length'))
    this.sendAction('poemCount')
  }.on("init"),
  actions: {
    deletePoem() {
          // console.log('at delete poem');
          // console.log(this.get('poem'))
          this.sendAction('deletePoem', this.get('poem'));
        },
    }
});

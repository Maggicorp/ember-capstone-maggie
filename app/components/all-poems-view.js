import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  className: ['each-haiku'],
  actions: {
    deletePoem() {
          // console.log('at delete poem');
          // console.log(this.get('poem'))
          this.sendAction('deletePoem', this.get('poem'));
        },
    }
});

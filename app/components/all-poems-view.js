import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  className: ['each-haiku'],
  actions: {
    deletePoem() {
          this.sendAction('deletePoem', this.get('poem'));
        },
      publish() {
        let poem = this.get('poem');
        this.set('poem.published', true);
        this.sendAction('publish', this.get('poem'), 'published');
      },
      unpublish() {
        let poem = this.get('poem');
        this.set('poem.published', false);
        this.sendAction('publish', this.get('poem'), 'unpublished');
      }
    }
});

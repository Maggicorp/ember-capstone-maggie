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
      publish() {
        let poem = this.get('poem')
        this.set('poem.published', true)
        this.sendAction('publish', this.get('poem'))
        // console.log('in publish')
        // let poem = this.get('poem')
        // console.log('it is', poem.get('published'))
        // // let published = poem.get('published')
        // this.set('poem.published', true)
        // poem.save()
        // console.log('it is', poem.get('published'))
        // this.sendAction('publish', poem)
      }
    }
});

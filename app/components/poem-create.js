import Ember from 'ember';

export default Ember.Component.extend({
  newPoem: {
    title: null,
    firstLine: null,
    secondLine: null,
    thirdLine: null,
  },
  actions: {
    // poemCreate() {
    //   console.log('at poemCreate')
    //   let data =
    //   this.get('newPoem')
    //   console.log('data is', data)
    //   this.sendAction('createList', data);
    //   this.set('newList.title', null);
    // },
    submit() {
      console.log('on submit')
      let data =
      this.get('newPoem')
      console.log('data is', data)
      this.sendAction('poemCreate', data);
      this.set('newPoem', null);
    }
  }
  })

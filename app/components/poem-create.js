import Ember from 'ember';

export default Ember.Component.extend({
  newPoem: {
    title: null,
    firstline: null,
    secondline: null,
    thirdline: null
  },
  actions: {
    submit() {
      console.log('after on submit')
      let data =
      this.get('newPoem')
      if(data.firstline === null || data.secondline === null || data.thirdline === null) {
        this.get('flashMessages')
        .danger('Error, please include a valid input for all three lines')
        return
      }
      console.log('data is', data)
      this.sendAction('poemCreate', data);
      this.set('newPoem.title', null);
      this.set('newPoem.firstline', null);
      this.set('newPoem.secondline', null);
      this.set('newPoem.thirdline', null);
    }
  }
  })

  // need to get better user data

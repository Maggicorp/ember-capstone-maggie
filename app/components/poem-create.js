import Ember from 'ember';

export default Ember.Component.extend({
  newPoem: {
    title: 'Yossa Buson Example Haiku',
    firstline: 'A summer river being crossed',
    secondline: 'how pleasing',
    thirdline: 'with sandals in my hands'
  },
  actions: {
    submit() {
      console.log('on submit')
      let data =
      this.get('newPoem')
      // data.user = this.get('user')
      console.log('data is', data)
      this.sendAction('poemCreate', data);
      this.set('newPoem', null);
    }
  }
  })

  // need to get better user data

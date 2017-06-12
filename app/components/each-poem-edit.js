import Ember from 'ember';

export default Ember.Component.extend({
  // pastPoem: {
  //   title: 'hello',
  //   firstline: 'hello',
  //   secondline: 'hello',
  //   thirdline: 'hello'
  // },
  actions: {
    onInit: function(){
      console.log('on init');
    }.on("init"),
    edit() {
      console.log('at update poem in each poem edit component, poem is', this.get('poem'))
      let firstline = this.get('poem').get('firstline')
      let secondline = this.get('poem').get('secondline')
      let thirdline = this.get('poem').get('thirdline')
      console.log('they are', firstline, secondline, thirdline)
      if (firstline === '' || secondline === '' || thirdline === '') {
        console.log('at error')
        this.get('flashMessages')
          .danger('Error, please include a valid input for all three lines')
        return
      }
      this.sendAction('editPoem', this.get('poem'))
    },
    cancel(){
      console.log('at cancel');
      this.get('poem').rollbackAttributes();
      this.sendAction('cancel');
    }
}
});

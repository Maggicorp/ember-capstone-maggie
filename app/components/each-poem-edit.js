import Ember from 'ember';

export default Ember.Component.extend({
  pastPoem: {
    title: 'hello',
    firstline: 'hello',
    secondline: 'hello',
    thirdline: 'hello'
  },
  actions: {
    onInit: function(){
      console.log('on init');
      this.set('pastPoem.secondline', 'socks' )
      this.set('pastPoem.firstline', this.get('poem').get('firstline') )
    }.on("init"),
    edit() {
      let data = this.get('poem')
      let firstline = this.get('poem').get('firstline')
      this.set('pastPoem.firstline', firstline )
      this.sendAction('editPoem', this.get('pastPoem'))
    // }
    // edit() {
    //   console.log('at update poem in each poem edit component, poem is', this.get('poem'))
    //   let data = this.get('poem')
    //   console.log('different line is', this.get('poem').get('firstline'))
    //   let firstline = this.get('poem').get('firstline')
    //   this.get('pastPoem').get('firstline')
    //   let secondline = this.get('poem').get('secondline')
    //   let thirdline = this.get('poem').get('thirdline')
    //   console.log('they are', firstline, secondline, thirdline)
    //   if (firstline === '' || secondline === '' || thirdline === '') {
    //     console.log('at error')
    //     this.get('flashMessages')
    //       .danger('Error, please include a valid input for all three lines')
    //     return
    //   }
    //   this.sendAction('editPoem', this.get('poem'))
    // }
  }
}
});

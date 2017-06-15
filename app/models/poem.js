import DS from 'ember-data';
// import Validator from '../mixins/model-validator';

export default DS.Model.extend({
  title: DS.attr('string'),
  firstline: DS.attr('string'),
  secondline: DS.attr('string'),
  thirdline: DS.attr('string'),
  published: DS.attr('boolean'),
  // validations: {
  //   firstline: {
  //     presence: true
  //   }
  //   }
});


// set user on the backend

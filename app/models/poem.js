import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  firstline: DS.attr('string'),
  secondline: DS.attr('string'),
  thirdline: DS.attr('string'),
  // user: DS.belongsTo('user')
});


// set user on the backend

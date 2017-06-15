import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('poem');
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('poem-edit', { path: 'poem/:poem_id/edit'});
  this.route('create', { path: 'poem/create'});
  this.route('published');
});

export default Router;

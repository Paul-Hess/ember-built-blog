import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      posts: this.store.findAll('post'),
      authors: this.store.findAll('author'),
      categories: this.store.findAll('category')
    });
  },
  actions: {
    save3(params){
      var newPost = this.store.createRecord('post', params);
      newPost.save();
      this.transitionTo('index');
    }
  }
});

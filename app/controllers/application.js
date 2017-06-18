import Ember from 'ember';

export default Ember.Controller.extend({
  appName: 'Ember Twiddle',
  model: {
    sumText: 'sum text',
  },
  actions: {
    changed() {
      alert('onChange triggered')
    },
    test() {
      console.log('shesh')
      this.set('model.sumText', 'asdasdasdasdqweq')
    }
  },
});

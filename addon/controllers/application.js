import Ember from 'ember';
import Data from './data';

const { Controller } = Ember;

export default Controller.extend({
  data: Data.create({ foo: 10, bar: 20, baz: 30 })
});

import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Data from 'engine-play/controllers/data';
import engineResolverFor from '../../helpers/engine-resolver';

moduleForComponent('my-component', 'Integration | Component | my-component', {
  integration: true,
  resolver: engineResolverFor('engine-play')
});

test('it renders the data we provide', function(assert) {
  this.set('data', Data.create({ foo: 10, bar: 20, baz: 40 }));
  this.render(hbs`{{my-component data=data}}`);
  const $el = this.$();
  assert.equal($el.text().trim().replace(/\s/g, ''), 'foo10bar20baz40', 'Expected to find raw queryString in DOM.');
});

import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('post', 'Unit | Model | post', {
  // Specify the other units that are required for this test.
  needs: ['model:user']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

test('user relationship', function(assert) {
  var model = this.store().modelFor('post');
  var relationship = Ember.get(model, 'relationshipsByName').get('user');

  assert.equal(relationship.key, 'user');
  assert.equal(relationship.kind, 'belongsTo');
});
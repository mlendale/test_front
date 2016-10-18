import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('user', 'Unit | Model | user', {
  // Specify the other units that are required for this test.
  needs: ['model:post']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});


test('post relationship', function(assert) {
  var model = this.store().modelFor('user');
  var relationship = Ember.get(model, 'relationshipsByName').get('posts');

  assert.equal(relationship.key, 'posts');
  assert.equal(relationship.kind, 'hasMany');
  });
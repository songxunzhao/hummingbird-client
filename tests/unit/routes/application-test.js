import { moduleFor, test } from 'ember-qunit';

moduleFor('route:application', 'Unit | Route | application', {
  needs: [
    'service:session',
    'service:metrics',
    'service:head-data',
    'service:ajax',
    'service:router-scroll',
    'service:scheduler',
    'service:intl',
    'service:moment',
    'service:raven',
    'service:features',
    'service:head-tags'
  ]
});

test('title works', function(assert) {
  assert.expect(2);
  const route = this.subject();
  assert.equal(route.title(['One', 'Two']), 'Two | One | Kitsu');
  assert.equal(route.title(), 'Kitsu');
});

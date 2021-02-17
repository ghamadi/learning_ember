import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | jumbo', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the content inside a jumbo header with a tomster', async function (assert) {
    /**
     * Instead of navigating to a URL, we start the test by rendering our <Jumbo> component on the test page.
     * This is useful because it may otherwise require a lot of setup and interaction just to get to a page where your component is used.
     * Component tests allows us to skip all of that and focus exclusively on testing the component in isolation.
     */

    await render(hbs`<Jumbo>Hello World</Jumbo>`);
    assert.dom('.jumbo').exists();
    assert.dom('.jumbo').hasText('Hello World');
    assert.dom('.jumbo .tomster').exists();
  });
});

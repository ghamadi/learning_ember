import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | rental/image', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the given image', async function (assert) {
    // Template block usage:
    await render(hbs`
      <Rental::Image
        src="/assets/images/teaching-tomster.png"
        alt="Teaching Tomster"
      />
    `);

    assert
      .dom('.image img')
      .exists()
      .hasAttribute('src', '/assets/images/teaching-tomster.png')
      .hasAttribute('alt', 'Teaching Tomster');
  });

  test('clicking the component toggles its size', async function (assert) {
    await render(hbs`
    <Rental::Image
      src="/assets/images/teaching-tomster.png"
      alt="Teaching Tomster"
    />
  `);

    assert.dom('button.image').exists();
    assert.dom('.image').doesNotHaveClass('large');
    assert.dom('.image').hasText('View larger');

    await click('button.image');
    assert.dom('.image').hasClass('large');
    assert.dom('.image').hasText('View smaller');

    await click('button.image');
    assert.dom('.image').doesNotHaveClass('large');
    assert.dom('.image').hasText('View larger');
  });
});

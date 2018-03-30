import Component from '@ember/component';
import layout from '../templates/components/ui-breadcrumbs-menu-trigger';
import { Styled, group } from '../lib/ui-components';

export default Component.extend(Styled, {
  layout,
  tagName: 'span',
  init() {
    this._super(...arguments);
    this.set('styles', {
      base: 'bb-dashed bb--light-blue bb-dashed-hover bb-w1 p-b-4',
      defaultStyle: 'small',
      sizes: group({
        small: '',
        medium: 'p-l-20 p-r-20',
        large: 'p-l-35 p-r-35'
      })
    });
  }
});

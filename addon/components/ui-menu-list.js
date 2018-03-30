import Component from '@ember/component';
import layout from '../templates/components/ui-menu-list';
import { Styled, group } from '../lib/ui-components';

export default Component.extend(Styled, {
  layout,
  tagName: 'ul',
  init() {
    this._super(...arguments);
    this.set('styles', {
      base: 'p-t-10 p-b-10 p-l-0 p-r-0 ba txt-12 b--light-gray shadow-1 br2 bg-white',
      defaultStyle: 'small',

      sizes: group({
        small: 'w160px',
        medium: 'w180px',
        large: 'w200px'
      })
    })
  }
});

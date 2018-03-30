import Component from '@ember/component';
import layout from '../templates/components/ui-menu-item';
import { Styled, group } from '../lib/ui-components';

export default Component.extend(Styled, {
  tagName: 'li',
  layout,
  styles: {
    base: 'db hover-bg-light-gray no-underline link p-t-6 p-b-6 dark-gray mb0 cursor-pointer',
    defaultStyle: 'small',

    sizes: group({
      small: 'p-l-15 p-r-15',
      medium: 'p-l-20 p-r-20',
      large: 'p-l-35 p-r-35'
    })
  }
});

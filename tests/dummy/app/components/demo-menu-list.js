import Component from '@ember/component';
import layout from '../templates/components/demo-menu-list';

export default Component.extend({
  layout,
  selectedItem: 'Inline Yielded',
  selectedBlock: 'Block',
  init() {
    this._super(...arguments);
    this.set('menuItems', [
      'Inline Yielded',
      'Controls',
      'Tests',
      'Narratives',
      'Issues',
      'Workstream',
      'OpsAudits',
      'Closed Comments'
    ]);

    this.set('blockItems', [
      'Block',
      'Controls',
      'Tests',
      'Narratives',
      'Issues',
      'Workstream',
      'OpsAudits',
      'Closed Comments'
    ]);
  }
});

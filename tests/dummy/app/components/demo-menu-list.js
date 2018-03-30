import Component from '@ember/component';
import layout from '../templates/components/demo-menu-list';

export default Component.extend({
  layout,
  selectedItem: 'All Comments',
  init() {
    this._super(...arguments);
    this.set('menuItems', [
      'All Comments',
      'Controls',
      'Tests',
      'Narratives',
      'Issues',
      'Workstream',
      'OpsAudits',
      'Closed Comments'
    ])
  }
});

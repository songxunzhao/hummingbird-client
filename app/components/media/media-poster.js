import Component from 'ember-component';
import set from 'ember-metal/set';
import get from 'ember-metal/get';
import service from 'ember-service/inject';
import { addObserver, removeObserver } from 'ember-metal/observer';

export default Component.extend({
  classNames: ['poster-wrapper'],
  trailerOpen: false,
  showTooltip: false,
  isTooltipHovered: false,
  notify: service(),
  store: service(),

  didInsertElement() {
    this._super(...arguments);
    this.$('.grid-poster').hoverIntent({
      over: () => this._onMouseEnter(),
      out: () => this._onMouseLeave(),
      timeout: 250
    });
  },

  willDestroyElement() {
    this._super(...arguments);
    this.$('.grid-poster').off('mouseenter.hoverIntent');
  },

  /**
   * Called by hoverIntent when the user hovers this component
   */
  _onMouseEnter() {
    set(this, 'showTooltip', true);
  },

  /**
   * Called by hoverIntent when the user's mouse leaves this component
   */
  _onMouseLeave() {
    // We don't want to close the tooltip if the tooltip itself is hovered.
    // The tooltip communicates that to us via the onHover/onLeave actions
    if (get(this, 'isTooltipHovered')) {
      // tooltip is currently hovered, so observe the variable and exit after
      addObserver(this, 'isTooltipHovered', this._onMouseLeave);
    } else {
      removeObserver(this, 'isTooltipHovered', this._onMouseLeave);
      set(this, 'showTooltip', false);
    }
  }
});

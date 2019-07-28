import daysCounter from './components/days-counter.js';
import configPanel from './components/config-panel.js';
import renderOctagon from './components/render-octagon.js';

document.addEventListener('DOMContentLoaded', () => {

  // Days Counter
  daysCounter.init();

  // Configuration Panel
  configPanel.init();

  // Render 3d Octagon
  renderOctagon.init();

});
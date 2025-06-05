import { setupSlotUI } from './slot-ui.js';
import { setupPixiBackground } from './pixi-background.js';

(async () => {
    await setupSlotUI();
    setupPixiBackground();
})();

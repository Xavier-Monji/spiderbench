import { assetUrl } from '../platform/assets.js';
// OWNER: systems engineer. The game's local UI fonts (public/assets/ui/fonts/fonts.css): never fetched from the internet.
// One <link id="sys-fonts"> for the whole page: index.html has it for the loading screen, everything else calls
// loadFonts(), which adds it only when it is missing. (A second link to the same @font-face rules makes Safari reload
// the fonts and blank the text that uses them for a moment.)
export function loadFonts() {
  if (document.getElementById('sys-fonts')) return;
  const l = document.createElement('link'); l.id = 'sys-fonts'; l.rel = 'stylesheet';
  l.href = assetUrl('/assets/ui/fonts/fonts.css');
  document.head.appendChild(l);
}

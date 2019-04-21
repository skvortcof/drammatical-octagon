/**
 * Configuration Panel
 */
let configPanel = () => {

  let module = {},

    init = () => {

      /**
       * Toggle Config Panel
       */
      const days = document.getElementById('days');
      const config_panel = document.getElementById('config_panel');
      btn_config.addEventListener('click', () => {
        config_panel.classList.toggle('show');
      });

      /**
       * Toggle Full Screen
       * https://github.com/sindresorhus/screenfull.js
       *
       */
      const btn_fullScreen = document.getElementById('btn_fullScreen');
      btn_fullScreen.addEventListener('click', () => {
        if (screenfull.enabled) {
          btn_fullScreen.classList.toggle('active');
          screenfull.toggle();
        }
      });

      /**
       * Toggle Font Size
       */
      const html = document.documentElement;
      const btn_fontSize = document.getElementById('btn_fontSize');
      btn_fontSize.addEventListener('click', () => {
        btn_fontSize.classList.toggle('active');
        html.classList.toggle('increase-font-size');
      });

      /**
       * Toggle Audio
       */
      const btn_sound = document.getElementById('btn_sound');
      const sound = document.getElementById('audio');

      function togglePlay() {
        return sound.paused ? sound.play() : sound.pause();
      }

      btn_sound.addEventListener('click', () => {
        btn_sound.classList.toggle('active');
        togglePlay();
      });

      /**
       * Toggle Theme
       */
      const btn_theme = document.getElementById('btn_theme');
      btn_theme.addEventListener('click', () => {
        btn_theme.classList.toggle('active');
        html.classList.toggle('theme-night');

          $('iframe').contents().find('html').toggleClass('theme-night');
      });


    };

  module.init = init;

  return module;

};

export default configPanel();
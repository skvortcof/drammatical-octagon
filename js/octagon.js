(function ($) {
  $(function () {
    const delay = 700;
    const tiles = 16; // Tiles in the shape

    let octagon = $('#octagon');
    let imgs = octagon.find('img');
    let imgsLength = imgs.length;
    let interval;

    /**
     * Prepare Octagon
     */
    function octagonInit() {
      let shapes = []; // Shape Elements

      /**
       * Create List of the shapes
       */
      for (let i = 0; i < imgsLength; i++) {
        for (let j = 0; j < tiles; j++) {
          let imgSrc = imgs[i].src;
          let imgClass = 'o-' + j;
          let imgTile = '<img src="' + imgSrc + '" alt="" class="o ' + imgClass + '" style="z-index:' + i + '" data-index="' + i + '">';
          shapes.push(imgTile);
        }
      }

      /**
       * Add shapes to DOM
       */
      octagon.append(shapes.reverse().join(''));
      return true;
    }
    octagonInit();

    /**
     * Octagon Slider
     */
    function octagonSlider() {
      let list = $('.o'); // Tiles List
      let len = list.length; // Tiles Count
      let i = 0; // Tales Index
      let dip = imgsLength;
      let src = list;
      let data = [];
      var step = tiles;
      var start = 0 - step;
      var end = step;
      let img = '';

      interval = setInterval(function () {
        if (data.length) {
          img = data.splice(data.length * Math.random() | 0, 1)[0];

          $(img).fadeOut('slow', function () {
            let z = $(this).css("z-index");
            z = z - dip;
            $(this).attr('style', 'z-index: ' + z).show();

            // Reset z-index
            if (i == 0) {
              for (let i = 0; i < len; i++) {
                let dataIndex = $(list[i]).data('index');
                $(list[i]).attr('style', 'z-index: ' + dataIndex);
              }
            }
          });

          i++;
        } else {
          start += step;
          end = start + step;
          data = src.slice(start, end);
        }

        if (end == (len + step)) {
          i = 0;
          clearInterval(interval);
          octagonSlider();
        }
      }, delay);
    }
    octagonSlider();




  });
})(jQuery);
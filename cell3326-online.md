---
layout: page
title: Cell 3326 online
permalink: /cell3326-online/
---
<canvas class="emscripten" id="canvas" oncontextmenu="event.preventDefault()"></canvas>
<script type='text/javascript'>

      var Module = {
        preRun: [],
        postRun: [],
        onReady: function() {
          Module.requestFullScreen(true,true);
          document.querySelector("canvas").focus();
          var url="/release/cell3326.tap";
          var result = Module.ccall('OpenFile', null, ['string'], [url]);
        },
        canvas: (function() {
          canvas.addEventListener("webglcontextlost", function(e) { alert('WebGL context lost. You will need to reload the page.'); e.preventDefault(); }, false);
          return canvas;
        })(),
        // setStatus: function(text) { }
      };

          (function() {
            var memoryInitializer = '/release/unreal_speccy_portable.html.mem';
            if (typeof Module['locateFile'] === 'function') {
              memoryInitializer = Module['locateFile'](memoryInitializer);
            } else if (Module['memoryInitializerPrefixURL']) {
              memoryInitializer = Module['memoryInitializerPrefixURL'] + memoryInitializer;
            }
            var meminitXHR = Module['memoryInitializerRequest'] = new XMLHttpRequest();
            meminitXHR.open('GET', memoryInitializer, true);
            meminitXHR.responseType = 'arraybuffer';
            meminitXHR.send(null);
          })();

          var script = document.createElement('script');
          script.src = "/release/unreal_speccy_portable.js";
          document.body.appendChild(script);

          Module.requestFullScreen(false,true);document.querySelector('canvas').focus();

</script>
<button name="button" onclick="Module.requestFullScreen(false,true);document.querySelector('canvas').focus();">Fullscreen game</button>
<-- нажать сюда чтобы развернуть игру на полный экран. Для перехода обратно нажмите Esc.
---
layout: page
title: Cell 3326 online
permalink: /cell3326-online/
---
  <button class="button" onclick="unreal.go('/release/cell3326.tap')">[ Run Online ]</button><br/><br/>
    <canvas id="canvas" style="display:none"></canvas>
    <script>
        document.unreal = new function() {
          this.go = function(path) {
            console.log(window.Module)
            if (typeof Module === "undefined") {
              window.Module = {
                preRun: [],
                postRun: [],
                onInit:function(){
                  Module.ccall("OnCommand", null, ["string"], ["filtering=on"]);
                  Module.ccall("OnCommand", null, ["string"], ["zoom=fill screen"]);
                },
                onReady: function() {
                  Module.ccall("OnCommand", null, ["string"], ["filtering=on"]);
                  Module.ccall("OnCommand", null, ["string"], ["zoom=fill screen"]);
                  Module.ccall("OpenFile", null, ["string"], [path]);
                },
                canvas: (
                  function() {
                    return document.getElementById("canvas"); 
                  })(),
                locateFile: function(file) {
                  return '/release/' + file;
                  } 
                };
              var inject = document.createElement("script"); inject.src = "/release/unreal_speccy_portable.js"; document.body.appendChild(inject);
            }
            document.getElementById("canvas").style.display = "block";
            document.querySelector('canvas').focus();
            document.getElementById("buttonFullScreen").style.visibility = "visible";
          }
        }
        </script>
<div id="buttonFullScreen" style="visibility: hidden">
  <button name="buttonFullScreen" onclick="document.querySelector('canvas').requestFullscreen()">Fullscreen game</button>
<-- нажать сюда чтобы развернуть игру на полный экран. Для перехода обратно нажмите Esc.
</div>

#### Управление:

**QAOP** - стандартное спектрумовское передвижение вверх-вниз-влево-вправо, так же работают кнопки курсора

 **Enter**, **M** или **Space** - поднять/бросить/применить предмет перед собой по направлению взгляда

 **G** - выход в меню ( рестарт игры )

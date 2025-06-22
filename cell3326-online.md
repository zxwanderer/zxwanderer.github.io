---
layout: page
title: Cell 3326 online
permalink: /cell3326-online/
---
<button id="buttonRun" class="button" onclick="unreal.go('/release/cell3326.tap')">[ Run Online ]</button><br/><br/>
<br>
<canvas id="canvas" style="display:none; border: 1px solid green;"></canvas>
<div id="buttonFullScreen" style="visibility: hidden">
  <button name="buttonFullScreen" onclick="document.querySelector('canvas').requestFullscreen()">Fullscreen game</button>
<-- нажать сюда чтобы развернуть игру на полный экран. Для перехода обратно нажмите Esc.
</div>

#### Управление:

**QAOP** - стандартное спектрумовское передвижение вверх-вниз-влево-вправо, так же работают кнопки курсора

 **Enter**, **M** или **Space** - поднять/бросить/применить предмет перед собой по направлению взгляда

 **G** - выход в меню ( рестарт игры )

{% include js/unreal.js %}
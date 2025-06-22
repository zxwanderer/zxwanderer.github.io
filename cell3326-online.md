---
layout: custom_page
title: Cell 3326 online
permalink: /cell3326-online/
---
<div>
<button id="buttonRun" class="button" onclick="unreal.go('/release/cell3326.tap')">[ Run Online ]</button>
<canvas id="canvas" style="display:none; max-width: 100%; border: 1px solid green;
margin-bottom: 1em;
max-width: 100%;
image-rendering: crisp-edges;
aspect-ratio: 256 / 192;
}
"></canvas>
<div id="buttonFullScreen" style="visibility: hidden">
  <button name="buttonFullScreen" onclick="document.querySelector('canvas').requestFullscreen()">Fullscreen game</button>
<-- нажать сюда чтобы развернуть игру на полный экран. Для перехода обратно нажмите Esc.
</div>
</div>

#### Управление:

**G** - выход в меню ( рестарт игры )

**QAOP** - стандартное спектрумовское передвижение вверх-вниз-влево-вправо, так же работают кнопки курсора

**Enter**, **M**, **Space** - использовать/поднять/бросить/применить

{% include js/unreal.js %}

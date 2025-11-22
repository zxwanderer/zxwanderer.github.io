---
  layout: custom_page
  title: Cell 3326 luxiry
  permalink: /cell3326-rvm/
---
<div class='rvm' style='position: relative; width: 800px; height: 600px;
    border: 1px solid green;'></div>
<script>
    let script = document.createElement('script');
    script.src = "/release/rvmplayer.plus3.min.js";
    document.head.append(script);

    script.onload = function() {
      const c=document.querySelector('.rvm')
      console.log(c)
      rvmPlayer_plus3(c,{
        disk: {
          type: 'dsk',
          url: '/release/cell3326.dsk',
        },
        command: 'run"disc\n',
        videoMode: 'tv',
        warpFrames: 33*50
      })
    }
</script>


#### Управление:

**QAOP** - стандартное спектрумовское передвижение вверх-вниз-влево-вправо, так же работают кнопки курсора

 **Enter**, **M** или **Space** - поднять/бросить/применить предмет перед собой по направлению взгляда

 **G** - выход в меню ( рестарт игры )

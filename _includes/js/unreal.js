<script>
  document.unreal = new function() {
  this.go = function(path) {
    if (typeof Module === "undefined") {
      window.Module = {
        preRun: [],
        postRun: [],
        onInit: function() {
          Module.ccall("OnCommand", null, ["string"], ["filtering=off"]);
          Module.ccall("OnCommand", null, ["string"], ["zoom=fill screen"]);
        },
        onReady: function() {
          Module.ccall("OpenFile", null, ["string"], [path]);
        },
        canvas: (function() {
          const canv = document.getElementById("canvas")
          console.log('canv=', canv)
          return canv
        })(),
        locateFile: function(file) {
          return '/release/' + file;
        }
      };
      var inject = document.createElement("script");
      inject.src = "/release/unreal_speccy_portable.js";
      document.body.appendChild(inject);
    }
    document.getElementById("canvas").style.display = "block";
    // document.getElementById("canvas").style.width = "100%";
    document.querySelector('canvas').focus();
    document.getElementById("buttonFullScreen").style.visibility = "visible";
    document.getElementById("buttonRun").style.visibility = "hidden";

  }
}
</script>
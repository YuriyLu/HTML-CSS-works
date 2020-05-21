var objects = document.getElementsByTagName("a")
    for (var i = 0; i < objects.length; i++) {
      objects[i].onmouseover = function () {
        this.style.color = 'white';
      };
      objects[i].onmouseout = function () {
        this.style.color = 'rgb(223, 67, 67)';
      };
    }
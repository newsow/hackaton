
window.onload = function() {
    var ava = "url('https://static.cdprojektred.com/cms.cdprojektred.com/16x9_big/f4ce7b1be9bc4b0ee2df8f9a311a850a594d3d1a-1920x1080.jpg')";// картинку фигачишь вместо ссылки(в виде переменной, если нужно, всёравно сожрёт)
    var element = document.getElementById('avatar');
    element.style.backgroundImage = ava;
};
    function FuncImages(number) {   
        document.getElementById("photoload").style.display = "block";
        document.getElementById("close-set-photo").style.display = "block";
        var ava = "url('https://static.cdprojektred.com/cms.cdprojektred.com/16x9_big/f4ce7b1be9bc4b0ee2df8f9a311a850a594d3d1a-1920x1080.jpg')";
        if(number==0) document.getElementById('image').style.backgroundImage = ava;
        if(number==1) document.getElementById('image').style.backgroundImage = "url('')";
        if(number==2) document.getElementById('image').style.backgroundImage = "url('')";
        if(number==3) document.getElementById('image').style.backgroundImage = "url('')";
        if(number==4) document.getElementById('image').style.backgroundImage = "url('')";
      }
      function Funcdialog() {
        document.getElementById("photoload").style.display = "none";    
        document.getElementById("close-set-photo").style.display = "none";
      }
      function registration() {
        document.getElementById("main-site").style.display = "block";
        document.getElementById("logreg").style.display = "none";
      }
      function FuncImagesShow() {
        document.getElementById("main").style.display = "block";
        document.getElementById("click").style.display = "block";
      }
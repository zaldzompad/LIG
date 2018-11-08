var content = document.getElementById('box');
var images = ['1','2','3'];
var i = images.length;


function nextImage(){
    if(i < images.length)
    {
        i = i + 1;
         content.innerHTML = "<img src="+ images[i-1] +".jpg>";
    }
    else
    {
        i = 1;
    }
   
}

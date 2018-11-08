let carousels = document.getElementsByClassName('image-carousel');

[].forEach.call(carousels, function (c) {
    let next = c.getElementsByClassName('next')[0],
        prev = c.getElementsByClassName('prev')[0],
        bubblesContainer = c.getElementsByClassName('bubbles')[0],
        inner = c.getElementsByClassName('inner')[0],
        imgs = inner.getElementsByTagName('img'),
        currentImageIndex = 0,
        width = 1400,
        bubbles = [];


    for (let i = 0; i < imgs.length; i++) {
        let b = document.createElement('span');
        b.classList.add('bubble');
        bubblesContainer.appendChild(b);
        bubbles.push(b);

        b.addEventListener('click', function () {
            currentImageIndex = i;
            switchImg();
            switchColor();
        });
    }
    function switchColor(){
      if(currentImageIndex == 0)
      {
        document.getElementById('bc').style.background = 'red';
       
      }
      else if(currentImageIndex == 1){
         document.getElementById('bc').style.background = 'blue';
      }
      else if(currentImageIndex == 2)
      {
         document.getElementById('bc').style.background = 'green';
      }
      else
      {
         document.getElementById('bc').style.background = 'black';
      }
      
    }

    function switchImg () {
        inner.style.left = -width * currentImageIndex + 'px';
        
        bubbles.forEach(function (b, i) {
            if (i === currentImageIndex) {
                b.classList.add('active');
                
            } else {
                b.classList.remove('active');
            }
        });
    }

    next.addEventListener('click', function () {
        currentImageIndex++;

        if (currentImageIndex >= imgs.length) {
            currentImageIndex = imgs.length - 1;
        }

        switchImg();
        switchColor();
    });

    prev.addEventListener('click', function () {
        currentImageIndex--;

        if (currentImageIndex < 0) {
            currentImageIndex = 0;
        }

        switchImg();
        switchColor();
        
    });

    switchImg();
    switchColor();
});
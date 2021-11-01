window.addEventListener('load', function () {

    const sliderItem = this.document.querySelectorAll('.slider-item');
    const btnLeft = this.document.querySelector('.slider-btn-left');
    const btnRight = this.document.querySelector('.slider-btn-right');
    var current = 0;

    function slider() {
        for (let i = 0; i < sliderItem.length; i++) {
            sliderItem[i].classList.add('opasity');
        }
        sliderItem[current].classList.remove('opasity');
    }

    slider()

    btnLeft.addEventListener('click', function () {
        if (current + 1 === sliderItem.length) {
            current = 0;
        } else {
            current++;
        }
        slider()
    });

    btnRight.addEventListener('click', function () {
        if (current - 1 === -1) {
            current = sliderItem.length - 1;
        } else {
            current--;
        }
        slider()
    });



})
const contenitore = document.querySelector(".container")
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        contenitore.innerHTML += `<div class="box bg_color_red">Fizz</div>`;
    } else if (i % 5 == 0){
        contenitore.innerHTML += `<div class="box bg_color_yellow">Buzz</div>`;
    } else if (i % 3 == 0){
        contenitore.innerHTML += `<div class="box bg_color_green">FizzBuzz</div>`;
    }else{
        contenitore.innerHTML += `<div class="box">${i}</div>`;
    }
        
}
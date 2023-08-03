let cel = document.getElementById("cel");
let fah = document.getElementById("fah");
let kel = document.getElementById("kel");

cel.addEventListener('input', function(){
    let c = this.value;
    let f = (c * 9/5) + 32; 
    // let k = (k -273.15) * 9/5 +32;

    fah.value = f;
})

fah.addEventListener('input', function(){
    let f = this.value;
    let c = (f - 32) *5/9;
    // let k = k - 273.15; 

    cel.value = c;
})


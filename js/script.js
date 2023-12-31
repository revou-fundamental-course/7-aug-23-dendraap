var luasSegitiga = document.getElementById('luas-segitiga')
var inputLuasSegitiga = document.getElementById('input-luas-segitiga')
var kelSegitiga = document.getElementById('keliling-segitiga')
var inputKelSegitiga = document.getElementById('input-keliling-segitiga')
var luasJajargenjang = document.getElementById('luas-jajargenjang')
var inputLuasJajargenjang = document.getElementById('input-luas-jajargenjang')
var kelJajargenjang = document.getElementById('keliling-jajargenjang')
var inputKelJajargenjang = document.getElementById('input-keliling-jajargenjang')
var containerHasilLuasSegitiga = document.getElementById('container-hasil-luas-segitiga')
var containerHasilKelilingSegitiga = document.getElementById('container-hasil-keliling-segitiga')
var containerHasilLuasJajargenjang = document.getElementById('container-hasil-luas-jajargenjang')
var containerHasilKelilingJajargenjang = document.getElementById('container-hasil-keliling-jajargenjang')


kelSegitiga.style.display = "none"
inputKelSegitiga.style.display = "none"
luasJajargenjang.style.display = "none"
inputLuasJajargenjang.style.display = "none"
kelJajargenjang.style.display = "none"
inputKelJajargenjang.style.display = "none"
containerHasilLuasSegitiga.style.display = "none"
containerHasilKelilingSegitiga.style.display = "none"
containerHasilLuasJajargenjang.style.display = "none"
containerHasilKelilingJajargenjang.style.display = "none"

var btnContainer = document.getElementById("btn-pilih-bangun-datar")
var btns = btnContainer.getElementsByClassName("button-primary")
for (var i = 0; i < btns.length; i++){
    btns[i].addEventListener("click", function(){
        var current = document.getElementsByClassName("active")
        current[0].className = current[0].className.replace(" active", "")
        this.className += " active"
    })
}

function displayLuasSegitiga(){
    luasSegitiga.style.display = "block"
    inputLuasSegitiga.style.display = "block"

    kelSegitiga.style.display = "none"
    inputKelSegitiga.style.display = "none"

    luasJajargenjang.style.display = "none"
    inputLuasJajargenjang.style.display = "none"

    kelJajargenjang.style.display = "none"
    inputKelJajargenjang.style.display = "none"
}

function displayLuasJajargenjang(){
    luasSegitiga.style.display = "none"
    inputLuasSegitiga.style.display = "none"

    kelSegitiga.style.display = "none"
    inputKelSegitiga.style.display = "none"

    luasJajargenjang.style.display = "block"
    inputLuasJajargenjang.style.display = "block"

    kelJajargenjang.style.display = "none"
    inputKelJajargenjang.style.display = "none"
}

function displayKelilingSegitiga(){
    luasSegitiga.style.display = "none"
    inputLuasSegitiga.style.display = "none"

    kelSegitiga.style.display = "block"
    inputKelSegitiga.style.display = "block"

    luasJajargenjang.style.display = "none"
    inputLuasJajargenjang.style.display = "none"

    kelJajargenjang.style.display = "none"
    inputKelJajargenjang.style.display = "none"
}

function displayKelilingJajargenjang(){
    luasSegitiga.style.display = "none"
    inputLuasSegitiga.style.display = "none"

    kelSegitiga.style.display = "none"
    inputKelSegitiga.style.display = "none"

    luasJajargenjang.style.display = "none"
    inputLuasJajargenjang.style.display = "none"

    kelJajargenjang.style.display = "block"
    inputKelJajargenjang.style.display = "block"
}


function hitungLuasSegitiga(){

    if (document.getElementById("tinggi-input").value == "" || document.getElementById("alas-input").value == ""){
        alert("Lengkapi formnya dulu yaaa")
    } else {
        var tinggi = parseFloat(document.getElementById("tinggi-input").value)
        var alas = parseFloat(document.getElementById("alas-input").value)
        let hasil = 1/2*tinggi*alas
        containerHasilLuasSegitiga.style.display = "block"
        document.getElementById("tinggi-segitiga").innerHTML = tinggi
        document.getElementById("alas-segitiga").innerHTML = alas
        document.getElementById("hasil-luas-segitiga").innerHTML = hasil
    }
}

function hitungKelilingSegitiga(){
    if (document.getElementById('a-input').value == "" || document.getElementById('b-input').value == "" || document.getElementById('c-input').value == ""){
        alert("Lengkapi formnya dulu yaaa")
    } else {
        var sisiA = parseFloat(document.getElementById('a-input').value)
        var sisiB = parseFloat(document.getElementById('b-input').value)
        var sisiC = parseFloat(document.getElementById('c-input').value)
        let hasil = sisiA+sisiB+sisiC
    
        containerHasilKelilingSegitiga.style.display = "block"
        document.getElementById("sisi-a").innerHTML = sisiA
        document.getElementById("sisi-b").innerHTML = sisiB
        document.getElementById("sisi-c").innerHTML = sisiC
        document.getElementById("hasil-keliling-segitiga").innerHTML = hasil
    }
}

function hitungLuasJajargenjang(){

    if (document.getElementById("tinggi-jajargenjang-input").value == "" || document.getElementById("alas-jajargenjang-input").value == ""){
        alert("Lengkapi form nya dulu yaaa")
    } else {
        var tinggi = parseFloat(document.getElementById("tinggi-jajargenjang-input").value)
        var alas = parseFloat(document.getElementById("alas-jajargenjang-input").value)
        let hasil = tinggi*alas
    
        containerHasilLuasJajargenjang.style.display = "block"
        document.getElementById("tinggi-jajargenjang").innerHTML = tinggi
        document.getElementById("alas-jajargenjang").innerHTML = alas
        document.getElementById("hasil-luas-jajargenjang").innerHTML = hasil
    }
}

function hitungKelilingJajargenjang(){
    if (document.getElementById("a-jajargenjang-input").value == "" || document.getElementById("b-jajargenjang-input").value == ""){
        alert("Lengkapi form nya dulu yaaa")
    } else {
        var tinggi = parseFloat(document.getElementById("a-jajargenjang-input").value)
        var alas = parseFloat(document.getElementById("b-jajargenjang-input").value)
        let hasil = 2 * (tinggi + alas)
    
        containerHasilKelilingJajargenjang.style.display = "block"
        document.getElementById("a-jajargenjang").innerHTML = tinggi
        document.getElementById("b-jajargenjang").innerHTML = alas
        document.getElementById("hasil-keliling-jajargenjang").innerHTML = hasil
    }
}

function resetDisplayHasil(){
    containerHasilLuasSegitiga.style.display = "none"
    containerHasilKelilingSegitiga.style.display = "none"
    containerHasilLuasJajargenjang.style.display = "none"
    containerHasilKelilingJajargenjang.style.display = "none"

    // luas segitiga
    document.getElementById("tinggi-input").value = ""
    document.getElementById("alas-input").value = ""

    // keliling segitiga
    document.getElementById('a-input').value = ""
    document.getElementById('b-input').value = ""
    document.getElementById('c-input').value = ""

    // luas jajargenjang
    document.getElementById("tinggi-jajargenjang-input").value = ""
    document.getElementById("alas-jajargenjang-input").value = ""

    // keliling jajargenjang
    document.getElementById("a-jajargenjang-input").value = ""
    document.getElementById("b-jajargenjang-input").value = ""
}



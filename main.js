// Night Mode vs Light Mode

const root = document.querySelector("html");
const currentDark = window.matchMedia("(prefers-color-scheme: dark)");
const themeToggle = document.getElementById("theme-toggle");

function setToDarkMode(){
    themeToggle.classList.add("bi-sun-fill");
    themeToggle.classList.remove("bi-moon-stars-fill");
    root.setAttribute("data-theme","dark");
}

function setToLightMode(){
    themeToggle.classList.add("bi-moon-stars-fill");
    themeToggle.classList.remove("bi-sun-fill");
    root.setAttribute("data-theme","light");
}

if (currentDark.matches){
    setToDarkMode();
} else {
    setToLightMode();
}

themeToggle.addEventListener("click", ()=>{
    if (root.getAttribute("data-theme") == 'dark'){
        setToLightMode();
    } else {
        setToDarkMode();
    }
})

// Logika Hitung Umur

const inputDate = document.getElementById("date");
const result = document.getElementById("result");
const today = new Date();

function calculateAge(){
    const age = today - new Date(inputDate.value);
    const xyears = age/1000/60/60/24/365.25;
    const xmonths = (xyears - Math.floor(xyears)) * 12; //sisa pecahan tahun dikali 12, karena 1 tahun = 12 bulan
    const xdays = (xmonths - Math.floor(xmonths)) * 30.5; //sisa pecahan bulan dikali 3-.5, karena rata rata jumlah hari dalam satu bulan = 30.5
    // Math.floor untuk membulatkan angka pecahan kebawah
    result.innerHTML = "Umur kamu adalah <br>";
    result.innerHTML += Math.floor(xyears) + " Tahun ";
    result.innerHTML += Math.floor(xmonths) + " Bulan ";
    result.innerHTML += Math.floor(xdays) + " Hari ";

    return false
}
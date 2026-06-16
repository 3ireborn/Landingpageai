// ANIMASI SCROLL

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add('show');

}

});

});

document.querySelectorAll('.card,.bonus,.profile,.cta')
.forEach(el => {

el.classList.add('fade-up');

observer.observe(el);

});


// COUNTER ANIMASI

const counters = document.querySelectorAll('.counter-box h3');

counters.forEach(counter=>{

const updateCounter=()=>{

const target=counter.innerText;

if(isNaN(target)) return;

const value=+counter.getAttribute('data-count');

const current=+counter.innerText;

const increment=value/100;

if(current<value){

counter.innerText=Math.ceil(current+increment);

setTimeout(updateCounter,20);

}else{

counter.innerText=value;

}

};

});


// TOMBOL WA TRACKING

document.querySelectorAll('a[href*="wa.me"]')
.forEach(btn=>{

btn.addEventListener('click',()=>{

console.log('WA Clicked');

});

});


// TAHUN OTOMATIS FOOTER

const year = new Date().getFullYear();

const footerYear =
document.getElementById('year');

if(footerYear){

footerYear.innerHTML = year;

}

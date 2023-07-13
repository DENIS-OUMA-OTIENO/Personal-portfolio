
var tablinks = document.getElementsByClassName("tab-links");
var tablecontents = document.getElementsByClassName("tab-contents");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let closeBtn = document.querySelector(".close-btn");


function opentab(tabname){
  for(tablink of tablinks){
    tablink.classList.remove("active-link");
  }
  for(tablecontent of tablecontents){
    tablecontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// sidebar Navigation menu 

menuBtn.addEventListener("click", ()=>{
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  
  
});

closeBtn.addEventListener("click",  ()=>{
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  
});




// sticky navbar

let nav = document.querySelector("nav");
let scrollTopBtn = document.querySelector(".scroll-btn a");
let val;
window.addEventListener("scroll", ()=>{
  if(document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollTopBtn.style.display = "block";
    scroll
  }else{
    nav.classList.remove("sticky");
    scrollTopBtn.style.display = "none";
  }
})

let navLinks = document.querySelectorAll(".sidemenu li a");
for(let i = 0; i < navLinks.length; i++){
  navLinks[i].addEventListener("click", ()=>{
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto"
  });
}

// send message js


  const scriptURL = 'https://script.google.com/macros/s/AKfycbzTCfemIQ-vy4nPFayyGEfb379QgtRNiPpc5UXiXjhWfSnIt5KhI4Fy5yLkOcA88q5ysA/exec';
  const form = document.forms['submit-to-google-sheet'];
  const message = document.getElementById("msg");
  
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        message.innerHTML = "Message sent successfully";
        setTimeout(function(){
          msg.innerHTML = "";
        }, 2000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })

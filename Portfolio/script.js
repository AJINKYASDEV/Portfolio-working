var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// for screen

var sidemeu = document.getElementById("sidemenu");

function openmenu(){
    sidemeu.style.right = "0";
}

function closemenu(){
    sidemeu.style.right = "-200px";
}

  const scriptURL = 'https://script.google.com/macros/s/AKfycbxXjMiGG5ZPgl_iOyoC_KbBQF1-TlUTgp3Po8FfGKC0qrd6gohaqAAQF7D2kuXJsAB3/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })

  // ===== HERO ANIMATION =====
gsap.from("nav",{
  y:-80,
  duration:1,
  opacity:0,
  ease:"power4.out"
});

gsap.from(".header-text p",{
  y:50,
  opacity:0,
  duration:1,
  delay:0.5,
  ease:"power3.out"
});

gsap.from(".header-text h1",{
  y:80,
  opacity:0,
  duration:1.2,
  delay:0.7,
  ease:"power4.out"
});

// ===== ABOUT SECTION SCROLL REVEAL =====
gsap.from("#about .about-col-1",{
  scrollTrigger:"#about",
  x:-100,
  opacity:0,
  duration:1,
  ease:"power3.out"
});

gsap.from("#about .about-col-2",{
  scrollTrigger:"#about",
  x:100,
  opacity:0,
  duration:1,
  ease:"power3.out"
});

// ===== SERVICES CARDS =====
gsap.from(".services-list div",{
  scrollTrigger:"#services",
  opacity:0,
  y:80,
  duration:1,
  stagger:0.2,
  ease:"power3.out"
});

// ===== PROJECT CARDS =====
gsap.from(".work",{
  scrollTrigger:"#projects",
  scale:0.8,
  opacity:0,
  duration:1,
  stagger:0.2,
  ease:"power3.out"
});

// ===== CONTACT SECTION SMOOTH REVEAL =====
gsap.from("#contact .contact-left",{
  scrollTrigger:"#contact",
  x:-100,
  opacity:0,
  duration:1,
  ease:"power3.out"
});

gsap.from("#contact .contact-right",{
  scrollTrigger:"#contact",
  x:100,
  opacity:0,
  duration:1,
  ease:"power3.out"
});

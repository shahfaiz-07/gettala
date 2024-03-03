//LOCOMOTIVE JS

gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true },
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector(".main").style.transform
    ? "transform"
    : "fixed"*/
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

const navBtn = document.getElementById("nav-caller");
const navBar = document.querySelector(".nav-bar");
const fullNav = document.querySelector(".full-nav");

let flag = 0;
navBtn.addEventListener("click", (evt) => {
  if (flag == 0) {
    gsap.to(".full-nav", {
      y: "0%",
      duration: 2,
      ease: Expo.easeOut,
    });
    navBar.style.color = "#2b2b2b";
    evt.target.setAttribute("class", "ri-close-large-line");
    flag = 1;
  } else {
    gsap.to(".full-nav", {
      y: "-100%",
      duration: 2,
      ease: Expo.easeOut,
    });
    navBar.style.color = "#cecece";
    evt.target.setAttribute("class", "ri-menu-3-line");
    flag = 0;
  }
});

gsap.from(".p1", {
  stagger: 0.1,
  opacity: 0,
  y: 30,
  duration: 2,
  ease: Expo.easeOut,
});

gsap.to(".page-2-hero img", {
  scale: 1.2,
  scrollTrigger: {
    trigger: ".page-2-hero img",
    scrub: 3,
    start: "top 30%",
    scroller: ".main",
  },
});

gsap.from(".page-2-content .page-2-lines", {
  rotationX: -90,
  y: "20",
  opacity: 0,
  ease: Expo.easeOut,
  transformOrigin: "50% 100%",
  scrollTrigger: {
    trigger: ".page-2-content .page-2-lines",
    scrub: 1,
    start: "top 60%",
    end: "top 10%",
    scroller: ".main",
  },
});

gsap.to(".p3-underline", {
  width: "100%",
  scrollTrigger: {
    trigger: ".p3-underline",
    scrub: 4,
    scroller: ".main",
  },
});

gsap.from(".p5-content img", {
  rotateZ: -360,
  duration: 2,
  repeat: -1,
  ease: "none",
});

gsap.set(".p6-sliders-even", {
  x: "-50%",
});

gsap.to(".p6-sliders-odd", {
  x: "-50%",
  scrollTrigger: {
    trigger: "#page-6",
    scroller: ".main",
    scrub: 2,
  },
});

gsap.to(".p6-sliders-even", {
  x: "0%",
  scrollTrigger: {
    trigger: "#page-6",
    scroller: ".main",
    scrub: 2,
  },
});

const elems = gsap.utils.toArray(".prakat");
elems.forEach((box) => {
  gsap.from(box, {
    y: "10rem",
    opacity: 0,
    scrollTrigger: {
      trigger: box,
      scroller: ".main",
      start: "top 100%",
      end: "top 100%",
      scrub: 4,
    },
  });
});


let yesDiv = document.querySelector(".p7-content #yes-div");
let yesImg = document.querySelector("#yes-img");

yesDiv.addEventListener("mousemove", (evt) => {
    yesImg.style.opacity = 1;
  yesImg.style.left = `${evt.x}px`;
    yesImg.style.top = `${evt.y}px`;
    yesImg.style.transform = `translate(-50%, -50%) rotate(15deg)`;
  });
document
  .querySelector(".p7-content #yes-div")
  .addEventListener("mouseleave", () => {
    yesImg.style.opacity = 0;
  });

let noImg = document.querySelector("#no-img");
document
  .querySelector(".p7-content #no-div")
  .addEventListener("mousemove", (evt) => {
    noImg.style.opacity = 1;
    noImg.style.left = `${evt.x}px`;
    noImg.style.top = `${evt.y}px`;
    noImg.style.transform = `translate(-50%, -50%) rotate(15deg)`;
  });
document
  .querySelector(".p7-content #no-div")
  .addEventListener("mouseleave", () => {
    noImg.style.opacity = 0;
  });

document.addEventListener("scroll", () => {
  if ((yesImg.style.opacity = 1)) yesImg.style.opacity = 0;
  if ((noImg.style.opacity = 1)) noImg.style.opacity = 0;
});

let card1 = document.querySelector("#mango-card");
let s1 = document.querySelector("#li-1-share");

document.querySelector("#li-1").addEventListener("mouseover", (evt) => {
  card1.style.opacity = 1;
  card1.style.transform = `rotate(15deg) translateY(-10%) scale(0.9) translateX(-100%)`;
  s1.style.opacity = 1;
});
document.querySelector("#li-1").addEventListener("mousemove", (evt) => {
  card1.style.left = `${evt.x}px`;
});
document.querySelector("#li-1").addEventListener("mouseleave", () => {
  card1.style.opacity = 0;
  card1.style.transform = `translateY(-20%) scale(0.9)`;
  s1.style.opacity = 0;
});

let card2 = document.querySelector("#banana-card");
let s2 = document.querySelector("#li-2-share");

document.querySelector("#li-2").addEventListener("mouseover", (evt) => {
  card2.style.opacity = 1;
  card2.style.transform = `rotate(15deg) translateY(-10%) scale(0.9) translateX(-100%)`;
  s2.style.opacity = 1;
});
document.querySelector("#li-2").addEventListener("mousemove", (evt) => {
  card2.style.left = `${evt.x}px`;
});
document.querySelector("#li-2").addEventListener("mouseleave", () => {
  card2.style.opacity = 0;
  card2.style.transform = `translateY(-20%) scale(0.9)`;
  s2.style.opacity = 0;
});

let card3 = document.querySelector("#pine-card");
let s3 = document.querySelector("#li-3-share");

document.querySelector("#li-3").addEventListener("mouseover", (evt) => {
  card3.style.opacity = 1;
  card3.style.transform = `rotate(15deg) translateY(-10%) scale(0.9) translateX(-100%)`;
  s3.style.opacity = 1;
});
document.querySelector("#li-3").addEventListener("mousemove", (evt) => {
  card3.style.left = `${evt.x}px`;
});
document.querySelector("#li-3").addEventListener("mouseleave", () => {
  card3.style.opacity = 0;
  card3.style.transform = `translateY(-20%) scale(0.9)`;
  s3.style.opacity = 0;
});

let card4 = document.querySelector("#pith-card");
let s4 = document.querySelector("#li-4-share");

document.querySelector("#li-4").addEventListener("mouseover", (evt) => {
  card4.style.opacity = 1;
  card4.style.transform = `rotate(15deg) translateY(-10%) scale(0.9) translateX(-100%)`;
  s4.style.opacity = 1;
});
document.querySelector("#li-4").addEventListener("mousemove", (evt) => {
  card4.style.left = `${evt.x}px`;
});
document.querySelector("#li-4").addEventListener("mouseleave", () => {
  card4.style.opacity = 0;
  card4.style.transform = `translateY(-20%) scale(0.9)`;
  s4.style.opacity = 0;
});

let s5 = document.querySelector("#li-5-share");
document.querySelector("#li-5").addEventListener("mouseover", (evt) => {
  s5.style.opacity = 1;
});
document.querySelector("#li-5").addEventListener("mouseleave", () => {
  s5.style.opacity = 0;
});

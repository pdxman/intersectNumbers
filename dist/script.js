"use strict";
const section = document.querySelector(".big-div");
const divContent = document.querySelector(".center");

const objOptions = {
  root: null,
  threshold: 0.3, 
  rootMargin: "-100px"
}

const sectionObserver = new IntersectionObserver(callBackFunction, objOptions);
sectionObserver.observe(section)

function callBackFunction(entries){
  const [entry] = entries;
  console.log(entry)
  if(entry.isIntersecting){
    divContent.classList.remove("new-color");
  } else {
    divContent.classList.add("new-color");
  }
}
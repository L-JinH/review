// 수치 반영
window.addEventListener("mousemove", (event) => {
  document.querySelector(".clintX ").innerText = event.clientX;
  document.querySelector(".clintY ").innerText = event.clientY;
  document.querySelector(".offsetX ").innerText = event.offsetX;
  document.querySelector(".offsetY ").innerText = event.offsetY;
  document.querySelector(".pageX ").innerText = event.pageX;
  document.querySelector(".pageY ").innerText = event.pageY;
  document.querySelector(".screenX ").innerText = event.screenX;
  document.querySelector(".screenY ").innerText = event.screenY;
});

const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", (ev) => {
  cursor.style.top = ev.clientY - 5 + "px";
  cursor.style.left = ev.clientX - 5 + "px";
});

const effect = document.querySelectorAll("p >span");

for (let i = 0; i < effect.length; i++) {
  effect[i].addEventListener("mouseover", (e) => {
    cursor.classList.add("active");
  });
  effect[i].addEventListener("mouseout", (e) => {
    cursor.classList.remove("active");
  });
}

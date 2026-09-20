document.body.classList.add("loading");
window.addEventListener("load",()=>setTimeout(()=>document.querySelector(".loader").classList.add("done"),500));
document.getElementById("year").textContent=new Date().getFullYear();

const nav=document.querySelector(".nav"), toggle=document.querySelector(".menu-toggle");
toggle.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll(".nav nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const filterBtns=document.querySelectorAll(".filter button"), projects=document.querySelectorAll(".project");
filterBtns.forEach(btn=>btn.addEventListener("click",()=>{
  filterBtns.forEach(b=>b.classList.remove("active")); btn.classList.add("active");
  const f=btn.dataset.filter;
  projects.forEach(p=>p.classList.toggle("hidden",f!=="all"&&p.dataset.category!==f));
}));

const cursor=document.querySelector(".cursor"), follower=document.querySelector(".cursor-follower");
window.addEventListener("mousemove",e=>{cursor.style.left=e.clientX+"px";cursor.style.top=e.clientY+"px";follower.style.left=e.clientX+"px";follower.style.top=e.clientY+"px"});
document.querySelectorAll("a,button,.project").forEach(el=>{
  el.addEventListener("mouseenter",()=>follower.style.transform="translate(-50%,-50%) scale(1.5)");
  el.addEventListener("mouseleave",()=>follower.style.transform="translate(-50%,-50%) scale(1)");
});

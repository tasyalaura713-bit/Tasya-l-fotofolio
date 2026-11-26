const io=new IntersectionObserver(e=>e.forEach(x=>x.isIntersecting&&x.target.classList.add('show')),{threshold:.2});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
document.getElementById('theme').onclick=()=>document.body.classList.toggle('dark');
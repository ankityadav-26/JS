const btn=document.querySelector("#throttle");

const throttleFunction=(func,delay)=>{
	let prev = 0;
	return (...args)=>{
let now = new Date().getTime();
if(now-prev>delay){
	prev = now;
	return func(...args);

}
	}
}
document.querySelector("#center")
.addEventListener("mousemove",throttleFunction((dets)=>{
	// your less repetation code 
	 var div=document.createElement("div");
	 div.classList.add('imagediv');
	 div.style.left =dets.clientX +'px';
	 div.style.top = dets.clientY +'px';
	 var img=document.createElement("img");
	 img.setAttribute("src","https://plus.unsplash.com/premium_photo-1664301680046-deb815ddff0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8")
	 div.appendChild(img);
	 
	 document.body.appendChild(div);
	 gsap.to(img,{
		y:"0",
		ease:Power1,
		duration:.6
	 });
	 gsap.to(img,{
		y:"100%",
		delay:.6,
		ease:Power3,
		duration:.3
	 });

setTimeout(function(){
	div.remove();
},2000)
},400));
particlesJS("particles-js",{

particles:{
number:{
value:100
},

size:{
value:3
},

move:{
speed:2
},

line_linked:{
enable:true,
color:"#00c6ff"
}

}

});

const observer =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity=1;
entry.target.style.transform="translateY(0px)";

}

});

});

document
.querySelectorAll("section")
.forEach(section=>{

section.style.opacity=0;
section.style.transform="translateY(80px)";
section.style.transition="1s";

observer.observe(section);

});
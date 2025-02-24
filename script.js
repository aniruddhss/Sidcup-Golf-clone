var crsr=document.querySelector('#cursor') //DOM concept- kisi bhi html ke element ko js m select krne ke liye use krte hai
var crsrblur=document.querySelector('#cursorblur')
document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+"px",
    crsr.style.top=dets.y+"px",
    
    crsrblur.style.left=dets.x -100 +"px",
    crsrblur.style.top=dets.y-100+"px"
})
var h4all=document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale=3
        crsr.style.border="1px solid white"
        crsr.style.backgroundColor="transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale=1
        crsr.style.border="0px solid #c9e60a"
        crsr.style.backgroundColor="#c9e60a"
    })
})




gsap.to("#nav",{
    // we can use all functionalities of css here by just converting it into camelcase 
    backgroundColor:"#000",
    duration:0.5,
    height:"110px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:"true",
        start:"top -10%",
        end:"top -11%",
        scrub:0.5
    }
})

gsap.to('#main',{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true, //markers are for dev convenience
        start:"top -40%",
        end:"top -80%",
        scrub:1 //scrub repeats the trigger when scrolling back
    }
})

gsap.from("#about-us img,#about-us-in",{
    y:90,
    opacity:0,
    duration:1,
    // stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:1,
    },
});

gsap.from(".card",{
    scale:0.8,
    // y:90,
    // opacity:0,
    duration:0.5,
    stagger:0.1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:3,
    },
});

gsap.from("#colon1",{
    y: -70,
    x: -70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        // markers:true,
        scrub:4,
    },
});

gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        // markers:true,
        scrub: 4
    },
});


gsap.from("#page4 h1",{
    y:50,
    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body",
        start: "top 75%",
        end: "top 70%",
        // markers:true,
        scrub: 4
    },
});
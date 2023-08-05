var cursor=document.querySelector("#cursor")
var cursorblur=document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    cursor.style.left=dets.x+"px"
    cursor.style.top=dets.y+"px"
    cursorblur.style.left=dets.x-200 +"px"
    cursorblur.style.top=dets.y -200 +"px"
})
var h4all=document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener('mouseenter',function(){
        cursor.style.scale=3;
        cursor.style.border="1px solid #fff"
        cursor.style.backgroundColor="transparent"
    })
    elem.addEventListener('mouseleave',function(){
        cursor.style.scale=1;
        cursor.style.border="0px solid #95C11E"
        cursor.style.backgroundColor="#95C11E"
    })
})

gsap.to("#nav",{
    backgroundColor: "#000",
    height:"100px",
    duration:1,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top-11%",
        scrub:1
    }
    
}
)
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -25%",
        end:"top -70%",
        scrub:"2"

    }
})
gsap.from("#about-us img,#about-us-in",{
    y:90,
    opacity:0,
    duration:1,
    stagger:"1",
    scrollTrigger:{
    trigger:"#about-us",
    scroller:"body",
    start:"top 60%",
    end:"top 58%",
    // scrub:"2"
}
})
gsap.from(".cards",{
    scale:0.7,
    opacity:0,
    duration:1,
    scrollTrigger:{
    trigger:".cards",
    scroller:"body",
    start:"top 75%",
    end:"top 65%",
    scrub:"2"
}
})
gsap.from("#colon-left",{
    y:-70,
    x:-70,
    scrollTrigger:{
    trigger:"#colon-left",
    scroller:"body",
    start:"top 55%",
    end:"top 45%",
    scrub:4
}

})
gsap.from("#page3,#colon-right",{
    y:-70,
    x:-70,
    scrollTrigger:{
    trigger:"#colon-right",
    scroller:"body",
    start:"top 55%",
    end:"top 45%",
    scrub:4
}
})
gsap.from("#page4 h2",{
    y:50,
    scrollTrigger:{
    trigger:"#page4 h2",
    scroller:"body",
    start:"top 75%",
    end:"top 70%",
    scrub:3 
    
}
})


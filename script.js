gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

function CursorEffect(){
    var page1Con = document.querySelector("#page1_con")
var cursor = document.querySelector("#cursor")
page1Con.addEventListener("mousemove",(e)=>{
    gsap.to(cursor,{
        x:e.x,
        y:e.y,
        duration:0.5
    })
})
page1Con.addEventListener("mouseenter",()=>{
    gsap.to(cursor,{
        scale:1,
        opacity:1
    })
})
page1Con.addEventListener("mouseleave",()=>{
    gsap.to(cursor,{
        scale:0,
        opacity:0
    })
})
}
CursorEffect()

function page2Animation(){
    // gsap.from("#p22 h1",{
    //     y:150,
    //     opacity:0,
    //     stagger:0.2,
    //     duration:1,
    //     scrollTrigger:{
    //         trigger:"#page2",
    //         scroller:"body",
    //         start:"top 47%",
    //         end:"top 48%",
    //         markers:true,
    //         scrub:3
    //     }
    // })
     var t1 = gsap.timeline()
    t1.from("#p22 h1",{
        y:'120',
        duration:2,
        stagger:1,
        scrollTrigger:{
            trigger:"#page2",
            scroller:"#main",
            start:"top 40%",
            end:"top 30%",
            scrub:3
        }



    })
}
  var t1 = gsap.timeline()
    t1.from("#p21 h4",{
        y:'20',
        duration:0.5,
        stagger:1,
        opacity:0,
        scrollTrigger:{
            trigger:"#page2",
            scroller:"#main",
            start:"top 40%",
            end:"top 30%",
            scrub:3
        }



    })
page2Animation()
function sliderAnimation(){
    var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  loop: true,

  speed: 8000, // controls scrolling speed
  freeMode: true,
  freeModeMomentum: false,

  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
});

}
sliderAnimation()



var t1 = gsap.timeline()
t1.from("#loader h3",{
    x:40,
    opacity:0,
    duration:1,
    stagger:0.2
})
t1.to("#loader h3",{
    opacity:0,
    x:-40,
    stagger:0.1
})
t1.to("#loader",{
    opacity:0,
})
t1.from("#page1_con h1 span",{
    y:100,
    opacity:0,
    duration:0.5,
    delay:-0.5,
    stagger:0.1

})
t1.to("#loader",{
    display:"none"

})
function Page6Animation() {
    const t1 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page6",   // ✅ correct trigger
            scroller: "#main",
            start: "top 60%",
            end: "top 40%",
            scrub: 2
        }
    });

    t1.from("#page6 h1 span", {
        y: -100,
        delay:1,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        

    });
}

Page6Animation()
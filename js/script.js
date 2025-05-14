 gsap.registerPlugin(ScrollTrigger);


 gsap.to(".img",{
    scrollTrigger: {
        trigger: ".img",
        start:"top 10%",
        end:"bottom 50%",
        scrub: true
    },
    scale: 1.2,
    duration: 3,
    // repeat: -1,
    opacity: 1

 })

// carousel

gsap.to(".left-carousel",{
  
    scrollTrigger: {
        trigger: ".carousel",
        start:"top center",
        end:"bottom center",
        scrub: true,
        // markers: true
        // toggle: "active"
    },
    x: "130%",
    // rotation: 360,
    duration: 3,
    // scrub: true
  
})
gsap.to(".right-carousel",{
  
    scrollTrigger: {
        trigger: ".carousel",
        start:"top center",
        end:"bottom center",
        scrub: true,
        // markers: true
        // toggle: "active"
    },
    x: "240%",
    // rotation: 360,
    duration: 3,
    // scrub: true
  
})


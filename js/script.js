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
        end:"center 50%",
        scrub: true,
        // markers: true
        // toggle: "active"
    },
    x:"4%",
    // rotation: 360,
    duration: 3,
    // scrub: true
  
})
gsap.to(".right-carousel",{
  
    scrollTrigger: {
        trigger: ".carousel",
        start:"top center",
        end:"center 50%",
        scrub: true,
        // markers: true
        // toggle: "active"
    },
    x:"5%",
    // rotation: 360,
    duration: 3,
    // scrub: true
  
})






// open

gsap.to(".open .left-container",{
    
        scrollTrigger: {
            trigger: ".open",
            start:"top center",
            end:"center 80%",
            scrub: true,
            // markers: true
            // toggle: "active"
        },
        x:"5%",
        // rotation: 360,
        duration: 3,
        // scrub: true
})

gsap.to(".open .right-container",{
    
    scrollTrigger: {
        trigger: ".open",
        start:"top center",
        end:"center 80%",
        scrub: true,
        // markers: true
        // toggle: "active"
    },
    x:"5%",
    // rotation: 360,
    duration: 3,
    // scrub: true
})();

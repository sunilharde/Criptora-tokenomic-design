
var tl = gsap.timeline();

// section - 1 
tl.from(".hero-desc h1, .hero-p, .hero-btn",{
    scale:.0,
    duration:2,
    delay:0.3,
    opcity:0,
    stagger:0.3,
});

// section - 2
tl.from(".head-2, .sec2-about h2, .para",{
    x:-930,
    duration:2,
    opcity:0,
    stagger:0.3,
    // scrollTrigger:{
    //     trigger:".head-2, .sec2-about h2, .para",
    //     scroller:"body",
        // markers:true,
        // start:"top 70%",
    // }
});

// section - 3
tl.from(".sec3",{
    scale:.0,
    duration:2,
    delay:0.3,
    opcity:0,
    stagger:0.3,
});

tl.from(".left-1",{
    x:-550,
    duration:2,
    opcity:0,
    stagger:0.3,
    scrollTrigger
});

tl.from(".right-1",{
    x:550,
    duration:2,
    opcity:0,
    stagger:0.3,
});


tl.from(".left-2",{
    scale:.0,
    duration:2,
    opcity:0,
    stagger:0.3,
});

// section - 4
tl.from(".sec-4 h2, .sec4-box",{
    scale:.0,
    duration:2,
    opcity:0,
    stagger:0.5,
});





















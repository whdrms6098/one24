history.scrollRestoration = "manual";

const lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
    lenis.raf(time * 800);
});

gsap.ticker.lagSmoothing(0);

const homeText = new SplitType(".home__header-title h1", {
    types: "words, chars",
});

const visionText = new SplitType(".vision__title p", {
    types: "words, chars",
});

const apartText = new SplitType(".apart__info-title strong", {
    types: "words, chars",
});

const islandText1 = new SplitType(".island__title strong", {
    types: "words, chars",
});

const islandText2 = new SplitType(".island__info strong", {
    types: "words, chars",
});

const availText = new SplitType(".avail__title strong", {
    types: "words, chars",
});

const footerText = new SplitType(".footer__header-title strong", {
    types: "words, chars",
});

gsap.defaults({
    ease: "none",
});

gsap.set(`[data-move="y-move"]`, { yPercent: -100 });

gsap.from(".home__header-title .char", {
    opacity: 0,
    stagger: {
        each: 0.1,
        from: "random",
        amount: 1.5
    }
})

gsap.from(".home__header-desc", {
    opacity: 0,
    duration: 2,
})

const mm = gsap.matchMedia();

mm.add("(min-width: 1001px)", () => {
    gsap.set(`[data-move="y-move"]`, { yPercent: -100 });

    const slide = gsap.timeline({
        scrollTrigger: {
            trigger: ".sc-wrapper",
            start: "0% 0%",
            end: "100% 100%",
            scrub: 0,
            // markers: true,
            invalidateOnRefresh: true,
        },
    });

    slide.to(".scroll-slide", {
        xPercent: -100,
        x: function () {
            return window.innerWidth;
        },
        duration: 1,
    })

    const homeBg = gsap.timeline({
        scrollTrigger: {
            trigger: ".home",
            containerAnimation: slide,
            start: "right 100%",
            end: "right 50%",
            scrub: 0,
            // markers: true,
        },
    }).to(".home__bg img", { xPercent: 40 });

    const navVision = ScrollTrigger.create({
        trigger: ".vision",
        containerAnimation: slide,
        start: "left 50%",
        end: "left 50%",
        // markers: true,
        onEnter: function () {
            $(".header").addClass("dark");
            $(".header__gnb-list a").removeClass("active");
            $(`[data-nav="vision"]`).addClass("active");
        },
        onLeaveBack: function () {
            $(".header").removeClass("dark");
            $(".header__gnb-list a").removeClass("active");
            $(`[data-nav="home"]`).addClass("active");
        }
    })

    const vision = gsap.timeline({
        scrollTrigger: {
            trigger: ".vision",
            containerAnimation: slide,
            start: "left 85%",
            end: "left 85%",
            // scrub: 0,
            toggleActions: "play none reverse none",
            // markers: true,
        },
    });

    vision.from(".vision__img-box-item img", {
        opacity: 0,
    }, "vision+=.5");

    vision.to(".vision__img-box-item--brown", {
        x: 0,
        xPercent: 100,
        duration: 1.25,
    }, "vision");

    vision.from(".vision__title .char", {
        opacity: 0,
        stagger: {
            each: 0.1,
            from: "random",
            amount: 1.25
        },
    }, "vision")

    const navApart = ScrollTrigger.create({
        trigger: ".apart",
        containerAnimation: slide,
        start: "left 30%",
        end: "left 30%",
        // markers: true,
        onEnter: function () {
            $(".header__gnb-list a").removeClass("active");
            $(`[data-nav="apart"]`).addClass("active");
        },
        onLeaveBack: function () {
            $(".header__gnb-list a").removeClass("active");
            $(`[data-nav="vision"]`).addClass("active");
        }
    })

    const navIsland = gsap.timeline({
        scrollTrigger: {
            trigger: ".island",
            containerAnimation: slide,
            start: "left 50%",
            end: "left 50%",
            // scrub: 0,
            toggleActions: "play none reverse none",
            // markers: true,
            onEnter: function () {
                $(".header").removeClass("dark");
                $(".header__gnb-list a").removeClass("active");
                $(`[data-nav="island"]`).addClass("active");
            },
            onLeaveBack: function () {
                $(".header").addClass("dark");
                $(".header__gnb-list a").removeClass("active");
                $(`[data-nav="apart"]`).addClass("active");
            }
        },
    });

    navIsland.from(".island .char", {
        opacity: 0,
        stagger: {
            each: 0.1,
            from: "random",
            amount: .25
        },
    })

    const islnad = gsap.timeline({
        scrollTrigger: {
            trigger: ".island",
            containerAnimation: slide,
            start: "0 0%",
            end: "100% 100%",
            scrub: 0,
            // markers: true,
        }
    });

    islnad.to(".island .sticky", { xPercent: 50 }, "island");

    islnad.to(".island__title", {
        yPercent: -50,
        rotateX: 60,
        opacity: 0,
        duration: .25,
    }, "island");

    islnad.to(".island__info", {
        yPercent: 50,
        rotateX: -60,
        opacity: 0,
        duration: .25,
    }, "island");

    islnad.to(".island__video-box", {
        width: "100%",
        height: "100%",
        marginTop: 0,
        duration: .25,
    }, "island");

    const navLocation = ScrollTrigger.create({
        trigger: ".location",
        containerAnimation: slide,
        start: "left 50%",
        end: "left 50%",
        // markers: true,
        onEnter: function () {
            $(".header").addClass("dark");
            $(".header__gnb-list a").removeClass("active");
            $(`[data-nav="location"]`).addClass("active");
        },
        onLeaveBack: function () {
            $(".header").removeClass("dark");
            $(".header__gnb-list a").removeClass("active");
            $(`[data-nav="island"]`).addClass("active");
        }
    })

    const locationSlide = gsap.timeline({
        scrollTrigger: {
            trigger: ".location",
            containerAnimation: slide,
            start: "0 0%",
            end: "100% 100%",
            scrub: 0,
            // markers: true,
        }
    }).to(".location .sticky", {
        xPercent: 200,
    });

    const location = gsap.timeline({
        scrollTrigger: {
            trigger: ".location",
            containerAnimation: slide,
            start: "0 0%",
            end: "100% 100%",
            scrub: 0,
            // markers: true,
            onUpdate: function (self) {
                gsap.to(".location__progress-bar", { height: (Math.floor(self.progress * 100)) + "%" });
            },
        }
    });

    location.to(".location-info__desc--area1", {
        opacity: 0,
    });

    location.to(".location-info__desc--area2", {
        opacity: 1,
    });

    location.to(".location-info__desc--area2", {
        opacity: 0,
    });

    location.to(".location-info__desc--area3", {
        opacity: 1,
    });

    const locationBg = gsap.timeline({
        scrollTrigger: {
            trigger: ".avail",
            containerAnimation: slide,
            start: "-38% 0%",
            end: "right 100%",
            scrub: 0,
            // markers: true,
        },
    }).to(".location__img img", { xPercent: 20 });

    const avail = gsap.timeline({
        scrollTrigger: {
            trigger: ".avail",
            containerAnimation: slide,
            start: "0% 0%",
            end: "100% 100%",
            scrub: 0,
            // markers: true,
        },
    })

    avail.to(".avail", { xPercent: 50 }, "end");
    avail.to(".avail", {
        yPercent: -100,
        y: function () {
            return window.innerHeight;
        },
        duration: .25,
    }, "end");
    avail.to(".footer", { yPercent: 0, duration: .25, }, "end")
    avail.fromTo(".footer__bg", { yPercent: 30, duration: .5 }, { yPercent: 0, duration: .25 }, "end");


    const navAvail = ScrollTrigger.create({
        trigger: ".avail",
        containerAnimation: slide,
        start: "left 40%",
        end: "left 40%",
        // markers: true,
        onEnter: function () {
            $(".header__gnb-list a").removeClass("active");
            $(`[data-nav="avail"]`).addClass("active");
        },
        onLeaveBack: function () {
            $(".header__gnb-list a").removeClass("active");
            $(`[data-nav="location"]`).addClass("active");
        }
    })

    const availText = gsap.timeline({
        scrollTrigger: {
            trigger: ".avail",
            containerAnimation: slide,
            start: "left 70%",
            end: "left 70%",
            // scrub: 0,
            toggleActions: "play none reverse none",
            // markers: true,
        },
    });

    availText.from(".avail__title .char", {
        opacity: 0,
        stagger: {
            each: 0.1,
            from: "random",
            amount: .25
        },
    })

});

mm.add("(max-width:1000px", () => {
    gsap.set(`[data-move="y-move"]`, { yPercent: 0 });

    const vision = gsap.timeline({
        scrollTrigger: {
            trigger: ".vision",
            start: "0% 90%",
            end: "0% 100%",
            // markers: true,
            toggleActions: "play none reverse none",
        },
    }).from(".vision__title .char", {
        opacity: 0,
        stagger: {
            each: 0.1,
            from: "random",
            amount: 1.25
        },
    });

    const apart = gsap.timeline({
        scrollTrigger: {
            trigger: ".apart",
            start: "0% 60%",
            end: "0% 100%",
            // markers: true,
            toggleActions: "play none reverse none",
        },
    }).from(".apart__info-title .char", {
        opacity: 0,
        stagger: {
            each: 0.1,
            from: "random",
            amount: 1.25
        },
    });

    const island = gsap.timeline({
        scrollTrigger: {
            trigger: ".island",
            start: "0% 60%",
            end: "0% 100%",
            // markers: true,
            toggleActions: "play none reverse none",
        },
    }).from(".island .char", {
        opacity: 0,
        stagger: {
            each: 0.1,
            from: "random",
            amount: 1.25
        },
    });

    const location = gsap.timeline({
        scrollTrigger: {
            trigger: ".location",
            start: "0% 0%",
            end: "80% 80%",
            scrub: 0,
            // markers: true,
            onUpdate: function (self) {
                gsap.to(".location__progress-bar", { width: (Math.floor(self.progress * 100)) + "%" });
            },
        },
    }).to(".location-info__desc--area1", { opacity: 0 })
        .to(".location-info__desc--area2", { opacity: 1 })
        .to(".location-info__desc--area2", { opacity: 0 })
        .to(".location-info__desc--area3", { opacity: 1 });

    const avail = gsap.timeline({
        scrollTrigger: {
            trigger: ".avail",
            start: "0% 100%",
            end: "0% 100",
            // markers: true,
            toggleActions: "play none reverse none",
        },
    }).from(".avail__title .char", {
        opacity: 0,
        stagger: {
            each: 0.1,
            from: "random",
            amount: 1.25
        },
    });

    const footer = gsap.timeline({
        scrollTrigger: {
            trigger: ".footer__header",
            start: "0% 100%",
            end: "0% 100%",
            // markers: true,
            toggleActions: "play none reverse none",
        },
    }).from(".footer .char", {
        opacity: 0,
        stagger: {
            each: 0.1,
            from: "random",
            amount: 1.25
        },
    });
});


$(".footer__header-schedule").hover(
    function () {
        gsap.to(".footer__group", { backgroundColor: "rgba(0,0,0,0)" })
    },
    function () {
        gsap.to(".footer__group", { backgroundColor: "rgba(0,0,0,.3)" })
    }
)

$(".home__bottom-scroll").mousemove(function (e) {
    const x = (e.offsetX - $(this).outerWidth() / 2) / 3
    const y = (e.offsetY - $(this).outerHeight() / 2) / 3

    gsap.to($(this), { x: x, y: y });
})

$(".home__bottom-scroll").mouseleave(function () {
    gsap.to($(this), { x: 0, y: 0 });
})

$(".apart .arrow").mousemove(function (e) {
    const x = (e.offsetX - $(this).outerWidth() / 2) / 2
    const y = (e.offsetY - $(this).outerHeight() / 2) / 2

    gsap.to($(this), { x: x, y: y });
})

$(".apart .arrow").mouseleave(function () {
    gsap.to($(this), { x: 0, y: 0 });
})

$(".apart__gallery-item").mousemove(function (e) {
    const y = e.offsetY
    gsap.to($(this).find(".apart__gallery-item-title"), { y: y });
})

$(".apart__gallery-item").each(function (_, el) {
    $(el).hover(
        function () {
            gsap.to($(el).find(".apart__gallery-item-title"), { opacity: 1, duration: .2 });
        },
        function () {
            gsap.to($(el).find(".apart__gallery-item-title"), { opacity: 0, duration: .2 });
        }
    );
});

$(".location .arrow").mousemove(function (e) {
    const x = (e.offsetX - $(this).outerWidth() / 2) / 2
    const y = (e.offsetY - $(this).outerHeight() / 2) / 2

    gsap.to($(this), { x: x, y: y });
})

$(".location .arrow").mouseleave(function () {
    gsap.to($(this), { x: 0, y: 0 });
})

$(".footer__header-schedule").mousemove(function (e) {
    const x = (e.offsetX - $(this).outerWidth() / 2) / 3
    const y = (e.offsetY - $(this).outerHeight() / 2) / 3

    gsap.to($(this), { x: x, y: y });
})

$(".footer__header-schedule").mouseleave(function () {
    gsap.to($(this), { x: 0, y: 0 });
})

$(".header__gnb-list li").each(function (index) {
    $(this).click(function () {
        gsap.to(window, {
            duration: 0.7,
            scrollTo: { x: `#sc${index + 1}` }
        });
    });
});
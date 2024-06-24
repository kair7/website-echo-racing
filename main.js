
window.onload = function() {

    var pageTitle = document.title;
    var attentionMessage = 'Hey, come back!';

    document.addEventListener('visibilitychange', function(e) {
        var isPageActive = !document.hidden;

        if (!isPageActive) {
            document.title = attentionMessage;
        } else {
            document.title = pageTitle;
        }
    });
}

let tl = gsap.timeline({delay: 0});

tl.to(".col", {
    top: 0,
    duration: 3,
    ease: "power4.inOut"
})

tl.to(".c-1 .item", {
    top: 0,
    stagger: 0.25,
    duration: 3,
    ease: "power4.inOut"
}, "-=2")

tl.to(".c-2 .item", {
    top: 0,
    stagger: -0.25,
    duration: 3,
    ease: "power4.inOut"
}, "-=4")

tl.to(".c-3 .item", {
    top: 0,
    stagger: 0.25,
    duration: 3,
    ease: "power4.inOut"
}, "-=4")

tl.to(".c-4 .item", {
    top: 0,
    stagger: -0.25,
    duration: 3,
    ease: "power4.inOut"
}, "-=4")

tl.to(".c-5 .item", {
    top: 0,
    stagger: 0.25,
    duration: 3,
    ease: "power4.inOut"
}, "-=4")

tl.to(".container", {
    scale: 6,
    duration: 4,
    ease: "power4.inOut"
}, "-=2")

tl.to(".nav-item a, .title p, .slide-num p, .preview img", {
    top: 0,
    stagger: 0.075,
    duration: 3,
    ease: "power3.out"
}, "-=1.5")

tl.to(".icon ion-icon, .icon ion-icon", {
    scale: 1,
    stagger: 0.05,
    ease: "power3.out",
}, "-=1")

gsap.registerPlugin(ScrollTrigger);
window.addEventListener("load", function () {
    const slides = gsap.utils.toArray(".slide");
    const activeSlideImages = gsap.utils.toArray(".active-slide img");

    function getInitialTranslateZ(slide) {
        const style = window.getComputedStyle(slide);
        const matrix = style.transform.match(/matrix3d\((.+)\)/);
        if(matrix) {
            const values = matrix[1].split(", ");
            return parseFloat(values[14] || 0);
        }
        return 0;
    }

    function mapRange(value, inMin, inMax, outMin, outMax) {
        return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
    }

    slides.forEach((slide, index) => {
        const initialZ = getInitialTranslateZ(slide);

        ScrollTrigger.create({
            trigger: ".container",
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            onUpdate: (self) => {
                const progress = self.progress;
                const zIncrement = progress * 5000;
                const currentZ = initialZ + zIncrement;

                let opacity;
                
                if(currentZ > -2500) {
                    opacity = mapRange(currentZ, -2500, 0, 0.5, 1);
                } 
                else {
                    opacity = mapRange(currentZ, -5000, -2500, 0, 0.5);
                }

                slide.style.opacity = opacity;

                slide.style.transform = `translateX(-50%) translateY(-50%) translateZ(${currentZ}px)`;

                if(currentZ < 100) {
                    gsap.to(activeSlideImages[index], 1.5, {
                        opacity: 1,
                        ease: "power3.out",

                    });
                }
                else {
                    gsap.to(activeSlideImages[index], 1.5, {
                        opacity: 0,
                        ease: "power3.out",
                    });
                }
            },
        });
    });
});
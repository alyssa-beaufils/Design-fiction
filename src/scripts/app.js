import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

gsap.to('.logo', {
    x: 300, 
    duration: 3,
    scrollTrigger: {
        trigger: '.logo',
        toggleActions: "play none none reverse",
        start: "top center",
    }
});

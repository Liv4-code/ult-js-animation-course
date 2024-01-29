// dom references
const button = document.querySelector("button");

// setting global animations timeline
const timeline = gsap.timeline({
    defaults: { duration: 0.75, ease: "power1.out" },
});

// popup, cookie & text opening animation
timeline.fromTo(
    ".cookie-container",
    { scale: 0 },
    { scale: 1, ease: "elastic.out(1,0.4)", duration: 1.5 }
);
timeline.fromTo(
    ".cookie",
    { opacity: 0, x: -50, rotation: "-45deg" },
    { opacity: 1, x: 0, rotation: "0deg" },
    "<50%"
);
timeline.fromTo(".text", { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "<");

// cookie & crumb bounce
timeline.fromTo(
    ".cookie",
    { y: 0, rotation: "0deg" },
    { y: -15, yoyo: true, repeat: -1, rotation: "-20deg" }
);
timeline.fromTo("#crumbs", { y: 0 }, { y: -10, yoyo: true, repeat: -1 }, "<");

// remove popup on btn click
button.addEventListener("click", () => {
    gsap.to(".cookie-container", {
        opacity: 0,
        y: 100,
        duration: 0.75,
        ease: "power1.out",
    });
});

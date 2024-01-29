const timeline = gsap.timeline({
    defaults: { duration: 0.75, ease: "power1.out" },
});

timeline.fromTo(".cookie-container", { scale: 0 }, { scale: 1 });
timeline.fromTo(
    ".cookie",
    { opacity: 0, x: -50, rotation: "-45deg" },
    { opacity: 1, x: 0, rotation: "0deg" }
);
timeline.fromTo(".text", { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "<");

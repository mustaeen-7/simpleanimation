const headLine = new SplitType("h1");
const myText2 = new SplitType("p", { charClass: "char2" });
var t1 = gsap.timeline({ defaults: { ease: "Expo.easeInOut" } });
t1.from(".char", {
  y: -100,
  stagger: 0.05,
  delay: 1,
})
  .from(
    ".char2",
    {
      y: -100,
      stagger: 0.05,
      duration: 0.6,
      delay: 1,
    },
    "-=1.2"
  )
  .to("h1,p", {
    y: 130,
    delay: 0.4,
    duration: 1.4,
  });

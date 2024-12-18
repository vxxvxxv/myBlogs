import { defineComponent as s, onMounted as r } from "vue";

const u = /* @__PURE__ */ s({
  __name: "EscookConfetti",
  setup(d) {
    r(() => {
      window.addEventListener("click", (t) => {
        const e = t.clientX / (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth), n = t.clientY / (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight);
        c(e, n);
      });
    });
    const c = (t, e) => {
      var n = {
        spread: 360,
        ticks: 50,
        gravity: 0,
        decay: 0.94,
        startVelocity: 10,
        colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
        origin: { x: t, y: e }
      };
      function o() {
        i({
          ...n,
          particleCount: 4,
          scalar: 1.2,
          shapes: ["star"]
        }), i({
          ...n,
          particleCount: 10,
          scalar: 0.75,
          shapes: ["circle"]
        });
      }
      setTimeout(o, 0), setTimeout(o, 50), setTimeout(o, 100);
    };
    return (t, e) => null;
  }
});
export {
  u as default
};

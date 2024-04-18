import AOS from "aos";

export function aosInit() {
  AOS.init({ duration: 1200, easing: "ease-in-out", once: true, debounceDelay: 50, throttleDelay: 99, offset: 10 });
}
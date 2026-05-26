import type { ISourceOptions } from "@tsparticles/engine";

export const particlesOptions: ISourceOptions = {
  background: { color: { value: "#0B0017" } },
  fpsLimit: 244,
  particles: {
    color: {
      value: ["#9333ea", "#c084fc", "#7c3aed", "#a855f7"],
    },
    links: {
      color: "#7c3aed",
      distance: 100,
      enable: true,
      opacity: 0.5,
      width: 2,
      triangles: {
        enable: true,
        color: "#6d28d9",
        opacity: 0.02,
      },
    },
    move: {
      enable: true,
      speed: 3,
    },
    number: { value: 450, density: { enable: true } },
    opacity: {
      value: { min: 0.41, max: 1 },
      animation: { enable: true, speed: 0.6, sync: true },
    },
    size: { value: { min: 1.2, max: 3.3 } },
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: "grab" },
      onClick: { enable: true, mode: "repulse" },
    },
    modes: {
      grab: { distance: 160, links: { opacity: 0.8 } },
      repulse: { distance: 150, duration: 0.8 },
    },
  },
  detectRetina: true,
};
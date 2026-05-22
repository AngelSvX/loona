import type { ISourceOptions } from "@tsparticles/engine";

export const particlesOptions: ISourceOptions = {
  background: {
    color: {
      value: "#0f172a",
    },
  },

  fpsLimit: 120,

  particles: {
    color: {
      value: "#ffffff",
    },

    links: {
      enable: true,
      color: "#ffffff",
      distance: 150,
      opacity: 0.3,
    },

    move: {
      enable: true,
      speed: 2,
    },

    number: {
      value: 80,
    },

    opacity: {
      value: 0.5,
    },

    size: {
      value: {
        min: 1,
        max: 5,
      },
    },
  },

  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "grab",
      },
    },

    modes: {
      grab: {
        distance: 200,
      },
    },
  },

  detectRetina: true,
};
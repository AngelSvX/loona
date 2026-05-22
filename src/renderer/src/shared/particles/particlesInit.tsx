import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

export const particlesInit = async (engine: Engine) => {
  await loadSlim(engine);
};
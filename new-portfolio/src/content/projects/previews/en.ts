import thumbnailAdventure from "../../../assets/images/projects/ADVENTURE/Screenshot 2026-05-24 215856.png";
import thumbnailSpiderman from "../../../assets/images/projects/spiderman/Screenshot 2026-05-24 214531.png";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "ADVENTURE",
    slug: "adventure",
    thumbnail: thumbnailAdventure,
    description: "EXPLORE THE WORLD",
  },
  {
    title: "Spider-Man",
    slug: "spiderman",
    thumbnail: thumbnailSpiderman,
    description: "Spider-Verse action adventure",
  },
] as const satisfies ProjectPreview[];

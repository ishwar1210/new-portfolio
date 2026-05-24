import spiderman0 from "../../../assets/images/projects/spiderman/Screenshot 2026-05-24 214531.png";
import spiderman1 from "../../../assets/images/projects/spiderman/Screenshot 2026-05-24 214711.png";
import spiderman2 from "../../../assets/images/projects/spiderman/Screenshot 2026-05-24 214829.png";
import spiderman3 from "../../../assets/images/projects/spiderman/Screenshot 2026-05-24 214857.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Spider-Man",
  theme: "dark",
  tags: ["javascript", "html", "css"],
  videoBorder: false,
  live: "https://ishwar1210.github.io/Spider-men/",
  description:
    "Spider-Man Miles Morales - Swing through the city as Miles Morales and protect New York with powerful new abilities.<br/><br/>Spider-Man Unlimited - Team up with different Spider-Verse heroes in an action-packed multiverse adventure.<br/><br/>Into the Spider-Verse - Explore the Spider-Verse and join epic missions with your favorite Spider-Man characters.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: spiderman0,
        alt: "Spider-Man project screenshot 1",
        caption: "Screenshot 1",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: spiderman1,
        alt: "Spider-Man project screenshot 2",
        caption: "Screenshot 2",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: spiderman2,
        alt: "Spider-Man project screenshot 3",
        caption: "Screenshot 3",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: spiderman3,
        alt: "Spider-Man project screenshot 4",
        caption: "Screenshot 4",
      },
    },
  ],
} as const satisfies ProjectContent;

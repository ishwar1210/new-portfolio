import adventure0 from "../../../assets/images/projects/ADVENTURE/Screenshot 2026-05-24 215856.png";
import adventure1 from "../../../assets/images/projects/ADVENTURE/Screenshot 2026-05-24 215907.png";
import adventure2 from "../../../assets/images/projects/ADVENTURE/Screenshot 2026-05-24 215920.png";
import adventure3 from "../../../assets/images/projects/ADVENTURE/Screenshot 2026-05-24 215938.png";

import type { ProjectContent } from "../../types";

export default {
  title: "ADVENTURE",
  theme: "light",
  tags: ["javascript", "html", "css"],
  videoBorder: false,
  live: "https://ishwar1210.github.io/ADVENTURE/",
  source: "https://github.com/ishwar1210/ADVENTURE",
  description:
    "EXPLORE THE WORLD<br/><br/>\"Travel makes one modest. You see what a tiny place you occupy in the world.\" - Gustav Flaubert<br/><br/>Exploring will make you want to pack your bag, book that ticket and jet away.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: adventure0,
        alt: "ADVENTURE project screenshot 1",
        caption: "Screenshot 1",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: adventure1,
        alt: "ADVENTURE project screenshot 2",
        caption: "Screenshot 2",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: adventure2,
        alt: "ADVENTURE project screenshot 3",
        caption: "Screenshot 3",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: adventure3,
        alt: "ADVENTURE project screenshot 4",
        caption: "Screenshot 4",
      },
    },
  ],
} as const satisfies ProjectContent;

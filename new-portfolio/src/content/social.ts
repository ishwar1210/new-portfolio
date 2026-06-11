export const social = [
  { url: "https://mail.google.com/mail/?view=cm&fs=1&to=sanketkhairnar390@gmail.com", name: "mail" },
  { url: "https://github.com/ishwar1210", name: "github" },
  { url: "https://www.linkedin.com/in/ishwar-khairnar-01aa3938b/", name: "linkedin" },
  { url: "https://www.instagram.com/mr_sanket_khairnar_04/", name: "instagram" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "x" }[];

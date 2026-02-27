export type SkillChip = {
  label: string;
  iconClass?: string;
  plain?: boolean;
};

export type SkillGroup = {
  id: string;
  title: string;
  items: SkillChip[];
};

export const skillsCardData: SkillGroup[] = [
  {
    id: "frontend-data",
    title: "Frontend & Data Layer",
    items: [
      { label: "React", iconClass: "devicon-react-original" },
      { label: "Next.js", iconClass: "devicon-nextjs-plain" },
      { label: "TypeScript", iconClass: "devicon-typescript-plain" },
      { label: "JavaScript", iconClass: "devicon-javascript-plain" },
      { label: "Tanstack Query", iconClass: "devicon-reactrouter-plain" },
      { label: "HTML5", iconClass: "devicon-html5-plain" },
      { label: "CSS3", iconClass: "devicon-css3-plain" },
      { label: "Sass", iconClass: "devicon-sass-original" },
      { label: "Tailwind CSS", iconClass: "devicon-tailwindcss-plain" },
      { label: "Bootstrap", iconClass: "devicon-bootstrap-plain" },
    ],
  },
  {
    id: "backend-platform",
    title: "Backend & Platform",
    items: [
      { label: "Node.js", iconClass: "devicon-nodejs-plain" },
      { label: "PHP", iconClass: "devicon-php-plain" },
      { label: "MySQL", iconClass: "devicon-mysql-plain" },
      { label: "WordPress", iconClass: "devicon-wordpress-plain" },
      { label: "AWS S3", iconClass: "devicon-amazonwebservices-plain-wordmark" },
      { label: "CloudFront", iconClass: "devicon-amazonwebservices-plain-wordmark" },
      { label: "REST APIs", plain: true },
    ],
  },
  {
    id: "tooling-delivery",
    title: "Tooling & Delivery",
    items: [
      { label: "Vite", iconClass: "devicon-vite-plain" },
      { label: "Git", iconClass: "devicon-git-plain" },
      { label: "Bitbucket Pipelines", iconClass: "devicon-bitbucket-original" },
      { label: "GitHub Actions", iconClass: "devicon-githubactions-plain" },
      { label: "Jira", iconClass: "devicon-jira-plain" },
      { label: "Figma", iconClass: "devicon-figma-plain" },
      { label: "Postman", iconClass: "devicon-postman-plain" },
    ],
  },
  {
    id: "performance-accessibility",
    title: "Performance & Accessibility",
    items: [
      { label: "Lighthouse", iconClass: "devicon-chrome-plain" },
      { label: "aXe DevTools", plain: true },
      { label: "WCAG 2.1 AA", plain: true },
      { label: "Image Optimization", plain: true },
      { label: "Core Web Vitals", plain: true },
    ],
  },
];
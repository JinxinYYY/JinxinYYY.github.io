export type NavItem = { label: string; href: string };
export type Experience = {
  institution: string;
  role: string;
  period: string;
  location: string;
  supervisors: Array<{ name: string; url: string }>;
  researchArea: string;
  project?: string;
  bullets: string[];
  tags?: string[];
  ongoing?: boolean;
};

export type Education = {
  institution: string;
  period: string;
  degree: string;
  gpa?: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Experience", href: "/experience/" },
  { label: "Publications", href: "/publications/" },
  { label: "Misc", href: "/misc/" },
];

export const experiences: Experience[] = [
  {
    institution: "University of California, Irvine",
    role: "Research Intern",
    period: "June 2026–Present",
    location: "Irvine, California, USA",
    supervisors: [
      { name: "Prof. Yanning Shen", url: "https://sites.google.com/uci.edu/yanning-shen/home" },
    ],
    researchArea: "Graph Learning for Networked Systems",
    bullets: [
      "Graph-based machine learning for intelligent communication and networked systems.",
    ],
    ongoing: true,
  },
  {
    institution: "University of California, Santa Cruz",
    role: "Research Intern",
    period: "June 2025–June 2026",
    location: "Santa Cruz, California, USA",
    supervisors: [
      { name: "Prof. Hamid Sadjadpour", url: "https://users.soe.ucsc.edu/~hamid/index.html" },
      { name: "Prof. Mohammad Moltafet", url: "https://mohammad-moltafet.github.io/my-website/" },
    ],
    researchArea: "Age of Information, Reinforcement Learning, Wireless Networks",
    project: "Age-of-Information-Aware Status Updating in Two-Way Delay Systems",
    bullets: [
      "Developed stochastic models of sampler–sink status-update systems with random two-way delay and finite buffer sizes, extending them to multi-packet systems.",
      "Formulated long-run AoI minimization as an average-cost Markov decision process and analyzed weak-accessibility conditions and stationary policy structure.",
      "Implemented reinforcement-learning and numerical algorithms in Python and evaluated AoI performance across system parameters.",
    ],
    tags: ["Age of Information", "MDP", "Reinforcement Learning", "Python", "Stochastic Optimization"],
  },
  {
    institution: "Southwest Jiaotong University",
    role: "Research Intern",
    period: "October 2024–March 2025",
    location: "Chengdu, China",
    supervisors: [
      {
        name: "Prof. Xiangyi Chen",
        url: "https://scholar.google.com/citations?user=iv1w1DkAAAAJ&hl=zh-CN",
      },
    ],
    researchArea: "Multi-Access Edge Computing, Deep Reinforcement Learning, and AoI-Aware Network Control",
    bullets: [
      "Reviewed multi-access edge computing, deep reinforcement learning, Markov decision processes, and Lyapunov optimization, focusing on AoI-aware scheduling and offloading.",
      "Built MATLAB simulation frameworks for task offloading and resource allocation and reproduced important baselines from recent research.",
    ],
    tags: ["MEC", "Deep Reinforcement Learning", "Lyapunov Optimization", "MATLAB"],
  },
];

export const education: Education[] = [
  {
    institution: "University of Leeds",
    period: "2023–2027",
    degree: "B.Eng. in Electronic and Electrical Engineering",
  },
  {
    institution: "Southwest Jiaotong University",
    period: "2023–2027",
    degree: "B.Eng. in Electronic and Electrical Engineering",
    gpa: "3.9 / 4.0",
  },
];

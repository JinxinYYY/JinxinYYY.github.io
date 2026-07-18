export type NavItem = { label: string; href: string };
export type Experience = {
  institution: string;
  role: string;
  period: string;
  location: string;
  supervisor: string;
  researchArea: string;
  project?: string;
  bullets: string[];
  tags?: string[];
  ongoing?: boolean;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Publications", href: "#publications" },
];

export const experiences: Experience[] = [
  {
    institution: "University of California, Irvine",
    role: "Research Intern",
    period: "June 2026–Present",
    location: "Irvine, California, USA",
    supervisor: "Prof. Yanning Shen",
    researchArea: "Semantic wireless communications, real-time remote tracking, and graph-based machine learning",
    bullets: [
      "Semantic wireless communications and real-time remote tracking.",
      "Graph-based machine learning for intelligent communication and networked systems.",
    ],
    ongoing: true,
  },
  {
    institution: "University of California, Santa Cruz",
    role: "Research Intern",
    period: "June 2025–June 2026",
    location: "Santa Cruz, California, USA",
    supervisor: "Prof. Hamid Sadjadpour and Dr. Mohammad Moltafet",
    researchArea: "Age-of-Information-aware status updating in two-way delay systems",
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
    role: "Research Assistant — Multi-Access Edge Computing and Deep Reinforcement Learning",
    period: "October 2024–March 2025",
    location: "Chengdu, China",
    supervisor: "Prof. Xiangyi Chen",
    researchArea: "Multi-access edge computing, deep reinforcement learning, and AoI-aware network control",
    bullets: [
      "Reviewed multi-access edge computing, deep reinforcement learning, Markov decision processes, and Lyapunov optimization, focusing on AoI-aware scheduling and offloading.",
      "Built MATLAB simulation frameworks for task offloading and resource allocation and reproduced important baselines from recent research.",
    ],
    tags: ["MEC", "Deep Reinforcement Learning", "Lyapunov Optimization", "MATLAB"],
  },
];

import type { LucideIcon } from "lucide-react";
import {
  Activity,
  BrainCircuit,
  Clock3,
  CloudCog,
  Cpu,
  Network,
} from "lucide-react";

export type NavItem = { label: string; href: string };
export type ResearchInterest = { title: string; description: string; icon: LucideIcon };
export type Experience = {
  institution: string;
  role: string;
  period: string;
  location: string;
  supervisor: string;
  project?: string;
  bullets: string[];
  tags?: string[];
  ongoing?: boolean;
};
export type SkillGroup = { title: string; items: string[] };

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Publications", href: "#publications" },
  { label: "Experience", href: "#experience" },
  { label: "Awards", href: "#awards" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const researchInterests: ResearchInterest[] = [
  {
    title: "Wireless Communications",
    description: "Modeling, optimization, and intelligent resource allocation for future wireless systems.",
    icon: Activity,
  },
  {
    title: "Computer Networks",
    description: "Reliable networked systems, scheduling, congestion management, and distributed communication.",
    icon: Network,
  },
  {
    title: "Graph Neural Networks",
    description: "Learning representations of graph-structured communication and network systems.",
    icon: BrainCircuit,
  },
  {
    title: "Age of Information",
    description: "Timeliness-aware sampling, scheduling, and status-update optimization.",
    icon: Clock3,
  },
  {
    title: "Machine Learning for Networks",
    description: "Reinforcement learning and learning-based optimization for network control.",
    icon: Cpu,
  },
  {
    title: "AI Infrastructure",
    description: "Networking for distributed training, inference, data movement, and large-scale AI services.",
    icon: CloudCog,
  },
];

export const experiences: Experience[] = [
  {
    institution: "University of California, Irvine",
    role: "Research Intern",
    period: "June 2026–Present",
    location: "Irvine, California, USA",
    supervisor: "Prof. Yanning Shen",
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
    bullets: [
      "Reviewed multi-access edge computing, deep reinforcement learning, Markov decision processes, and Lyapunov optimization, focusing on AoI-aware scheduling and offloading.",
      "Built MATLAB simulation frameworks for task offloading and resource allocation and reproduced important baselines from recent research.",
    ],
    tags: ["MEC", "Deep Reinforcement Learning", "Lyapunov Optimization", "MATLAB"],
  },
  {
    institution: "Southwest Jiaotong University",
    role: "Undergraduate Researcher — Wireless Data Acquisition for Permanent-Magnet Synchronous Linear Motors",
    period: "May 2024–April 2025",
    location: "Chengdu, China",
    supervisor: "Prof. Jiling Guo",
    bullets: [
      "Co-designed sensor and interface circuits and analyzed motor force characteristics under different operating conditions.",
      "Developed embedded C firmware on STM32 microcontrollers for multi-channel ADC acquisition and Bluetooth transmission.",
      "Contributed to reports and presentations for an Excellent Student Research Training Program.",
    ],
    tags: ["STM32", "Embedded C", "ADC", "Bluetooth", "Sensor Systems"],
  },
];

export const skillGroups: SkillGroup[] = [
  { title: "Programming", items: ["Python", "C", "MATLAB", "HDL", "LaTeX"] },
  {
    title: "Research & Modeling",
    items: ["Markov Decision Processes", "Reinforcement Learning", "Stochastic Modeling", "Age of Information", "Lyapunov Optimization", "Numerical Simulation"],
  },
  {
    title: "Networking & Communications",
    items: ["Wireless Communications", "Computer Networks", "Multi-Access Edge Computing", "Semantic Communications", "Networked Systems"],
  },
  {
    title: "Machine Learning",
    items: ["Graph Neural Networks", "Deep Reinforcement Learning", "Machine Learning for Networks"],
  },
  {
    title: "Embedded Systems",
    items: ["STM32", "Embedded C", "ADC-based Data Acquisition", "Bluetooth Communication", "Sensor Interfaces"],
  },
  { title: "Languages", items: ["Mandarin: Native", "English: TOEFL iBT 96, CET-6 593"] },
];

import type { ReactNode } from "react";

export interface Skill {
  icon: string;
  title: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface Step {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export interface Project {
  image: string;
  title: string;
  description: string;
  demo: string;
}

export interface ContactDetail {
  icon: ReactNode;
  title: string;
  info: string;
  link: string;
}

export type ServiceCategory = 'all' | 'agentic' | 'engineering';

export interface ServiceItem {
  id: string;
  category: 'agentic' | 'engineering';
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  capabilities: string[];
  metrics: string;
  accentColor: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: 'In-House Product' | 'Enterprise Client' | 'Fintech System';
  pillar: 'Web Platform' | 'Agentic System' | 'Hybrid Architecture';
  url?: string;
  isFlagship?: boolean;
  summary: string;
  techStack: string[];
  metrics: { label: string; value: string }[];
  accentColor: string;
  badge?: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  phase: string;
  description: string;
  deliverables: string[];
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  projectType: string;
  budgetRange: string;
  message: string;
}

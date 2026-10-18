export type DiagramKind = 'structure' | 'wall' | 'water' | 'schedule' | 'quantity' | 'road'
export interface Project {
  slug: string
  title: string
  category: 'Structures' | 'Water' | 'Planning' | 'Transportation'
  period?: string
  subtitle?: string
  domain?: string
  organization?: string
  badge?: string
  summary: string
  context: string
  scope: string[]
  outcome: string
  contribution: string
  details?: string[]
  diagram: DiagramKind
  source: string[]
  tools: string[]
  link?: string
  linkLabel?: string
}
export interface Experience {
  slug: string
  organization: string
  role: string
  period: string
  location: string
  domain: string
  summary: string
  context: string
  details: string[]
  tools: string[]
  achievements: string[]
  learnings: string[]
}

export interface ResearchMethod {
  title: string
  detail: string
}

export interface ResearchItem {
  slug: string
  title: string
  shortTitle: string
  status: string
  period: string
  venue: string
  authors: string[]
  doi: string
  summary: string
  context: string
  overviewText: string[]
  methods: ResearchMethod[]
  tools: string[]
  citation: string
}

export interface EducationSubject {
  name: string
  maxMarks?: number
  obtainedMarks?: number
  grade?: string
}

export interface EducationSemester {
  semester: string
  sgpa?: string
  meritPosition?: string
  courses: Array<{
    code?: string
    name: string
    credits?: string | number
    grade?: string
  }>
}

export interface EducationItem {
  slug: string
  degree: string
  shortDegree: string
  institution: string
  institutionUrl?: string
  boardOrUniversity?: string
  period: string
  years: string
  location: string
  grade: string
  distinction?: string
  summary: string
  context: string
  rollNumber?: string
  registrationNumber?: string
  certificateNumber?: string
  dateIssued?: string
  thesis?: string
  subjects?: EducationSubject[]
  semesters?: EducationSemester[]
  courses?: string[]
  achievements?: string[]
}


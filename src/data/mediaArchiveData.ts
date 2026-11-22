export type MediaKind =
  | 'image'
  | 'pdf'
  | 'video'
  | 'embed-video'
  | 'excel'
  | 'folder-tree'
  | 'external-link'
  | 'card'

export interface ExcelWorkbookInfo {
  filename: string
  fileUrl: string
  description: string
}

export interface FolderNode {
  name: string
  type: 'folder' | 'file'
  children?: FolderNode[]
}

export interface MediaItem {
  title: string
  kind: MediaKind
  src?: string
  poster?: string
  previewUrl?: string
  externalUrl?: string
  downloadUrl?: string
  downloadLabel?: string
  alt?: string
  caption?: string
  tag?: string
  excelFiles?: ExcelWorkbookInfo[]
  tree?: FolderNode[]
}

export interface MediaArchiveEntry {
  title: string
  sectionTitle: string
  items: MediaItem[]
}

export const mediaArchiveCatalog: Record<string, MediaArchiveEntry> = {
  // =========================================================================
  // EDUCATION
  // =========================================================================
  'bs-civil-engineering': {
    title: 'BS Civil Engineering',
    sectionTitle: 'Education',
    items: [
      {
        title: 'Degree',
        kind: 'image',
        src: '/media/education/01 - BS Civil Engineering — COMSATS University Islamabad/Degree.jpeg',
        alt: 'Official BS Civil Engineering Degree Parchment — COMSATS University Islamabad',
        caption: 'Official BS Civil Engineering Degree Parchment — Awarded with Highest Academic Distinction (Gold Medalist, CGPA 3.95/4.00).',
        tag: 'Official Degree',
      },
      {
        title: 'Transcript',
        kind: 'image',
        src: '/media/education/01 - BS Civil Engineering — COMSATS University Islamabad/Transcript.jpeg',
        alt: 'Official Academic Transcript of Record — COMSATS University Islamabad',
        caption: 'Complete 8-Semester Official Transcript certifying 137 Credit Hours, 541.26 Quality Points, and Summa Cum Laude standing.',
        tag: 'Official Transcript',
      },
    ],
  },
  'hssc-pre-engineering': {
    title: 'HSSC Pre-Engineering',
    sectionTitle: 'Education',
    items: [
      {
        title: 'Certificate',
        kind: 'image',
        src: '/media/education/02 - HSSC Pre-Engineering — F.G. Degree College/Certificate.jpeg',
        alt: 'Higher Secondary School Certificate (HSSC Pre-Engineering)',
        caption: 'Higher Secondary School Certificate (Pre-Engineering) — Federal Board of Intermediate and Secondary Education.',
        tag: 'HSSC Certificate',
      },
      {
        title: 'Marksheet',
        kind: 'image',
        src: '/media/education/02 - HSSC Pre-Engineering — F.G. Degree College/Marksheet.jpeg',
        alt: 'HSSC Official Statement of Marks',
        caption: 'Official Marksheet of Higher Secondary School Certificate Examination (Grade A-1 Distinction).',
        tag: 'HSSC Marksheet',
      },
    ],
  },
  'ssc-science': {
    title: 'SSC Science',
    sectionTitle: 'Education',
    items: [
      {
        title: 'Certificate',
        kind: 'image',
        src: '/media/education/03 - SSC Science — Sir Syed College/Certificate.jpeg',
        alt: 'Secondary School Certificate (SSC Science)',
        caption: 'Secondary School Certificate (Science Group) — Federal Board of Intermediate and Secondary Education.',
        tag: 'SSC Certificate',
      },
      {
        title: 'Marksheet',
        kind: 'image',
        src: '/media/education/03 - SSC Science — Sir Syed College/Marksheet.jpeg',
        alt: 'SSC Official Statement of Marks',
        caption: 'Official Marksheet of Secondary School Certificate Examination (Grade A-1 Distinction).',
        tag: 'SSC Marksheet',
      },
    ],
  },

  // =========================================================================
  // CERTIFICATIONS
  // =========================================================================
  'master-structural-design': {
    title: 'Master Structural Design of Buildings',
    sectionTitle: 'Certifications',
    items: [
      {
        title: 'Certificate',
        kind: 'image',
        src: '/media/Certification/Structural Design of Buildings_page-0001.jpg',
        alt: 'Master Structural Design of Buildings Certificate',
        caption: 'Certificate of Completion — Master Structural Design of Buildings (ETABS, SAFE & ACI Member Design).',
        tag: 'Structural Engineering',
      },
    ],
  },
  'bim-management-revit-maintenance': {
    title: 'BIM Management: Revit Model Maintenance',
    sectionTitle: 'Certifications',
    items: [
      {
        title: 'Certificate',
        kind: 'image',
        src: '/media/Certification/BIM Management Revit Model Maintenance_page-0001.jpg',
        alt: 'BIM Management Revit Model Maintenance Certificate',
        caption: 'Certificate of Completion — BIM Management: Revit Model Maintenance (LinkedIn Learning).',
        tag: 'BIM Management',
      },
    ],
  },
  'revit-beginners-architecture-structure-mep': {
    title: 'Revit For Beginners: Architecture, Structure and MEP',
    sectionTitle: 'Certifications',
    items: [
      {
        title: 'Certificate',
        kind: 'image',
        src: '/media/Certification/REVIT (Architecture,Structure,MEP)_page-0001.jpg',
        alt: 'Revit Architecture, Structure, and MEP Certificate',
        caption: 'Professional Training Certificate — Revit for Beginners: Architecture, Structure and MEP (VIS Management Consulting & CISD).',
        tag: 'BIM Certification',
      },
    ],
  },
  'learning-revit-2023': {
    title: 'Learning Revit 2023',
    sectionTitle: 'Certifications',
    items: [
      {
        title: 'Certificate',
        kind: 'image',
        src: '/media/Certification/Learning Revit 2023_page-0001.jpg',
        alt: 'Learning Revit 2023 Certificate',
        caption: 'Certificate of Completion — Learning Revit 2023 (LinkedIn Learning).',
        tag: 'Autodesk Revit',
      },
    ],
  },
  'excel-essential-training': {
    title: 'Excel Essential Training (Microsoft 365)',
    sectionTitle: 'Certifications',
    items: [
      {
        title: 'Certificate',
        kind: 'image',
        src: '/media/Certification/Excel Essential Training Microsoft 365_page-0001.jpg',
        alt: 'Excel Essential Training Microsoft 365 Certificate',
        caption: 'NASBA CPE Accredited Certificate of Completion — Excel Essential Training Microsoft 365 (LinkedIn Learning).',
        tag: 'NASBA CPE Accredited',
      },
    ],
  },
  'english-career-development': {
    title: 'English for Career Development MOOC',
    sectionTitle: 'Certifications',
    items: [
      {
        title: 'Certificate',
        kind: 'image',
        src: '/media/Certification/English for Career Development.jpg',
        alt: 'English for Career Development Certificate',
        caption: 'Course Certificate — English for Career Development (University of Pennsylvania & Coursera).',
        tag: 'University of Pennsylvania',
      },
    ],
  },
  'understanding-ar-vr': {
    title: 'Understanding Augmented and Virtual Reality: An Introduction',
    sectionTitle: 'Certifications',
    items: [
      {
        title: 'Certificate',
        kind: 'image',
        src: '/media/Certification/Understanding Augmented and Virtual Reality An Introduction_page-0001.jpg',
        alt: 'Understanding Augmented and Virtual Reality Certificate',
        caption: 'Certificate of Completion — Understanding Augmented and Virtual Reality (LinkedIn Learning).',
        tag: 'Spatial Computing',
      },
    ],
  },
  'midjourney-for-architects': {
    title: 'MidJourney for Architects',
    sectionTitle: 'Certifications',
    items: [
      {
        title: 'Certificate',
        kind: 'image',
        src: '/media/Certification/MidJourney For Architects_page-0001.jpg',
        alt: 'MidJourney for Architects Certificate',
        caption: 'Certificate of Completion — MidJourney for Architects (AI Generative Architectural Conceptualization).',
        tag: 'Generative AI',
      },
    ],
  },

  // =========================================================================
  // CONTINUING PROFESSIONAL DEVELOPMENT SEMINARS (all 11 items)
  // =========================================================================
  'cpd-gis-remote-sensing': {
    title: 'Application of GIS and Remote Sensing in Civil Engineering',
    sectionTitle: 'Continuing Professional Development Seminars',
    items: [
      {
        title: 'Certificate',
        kind: 'image',
        src: '/media/professional-trainings-cpd/01 - Application of GIS and Remote Sensing in Civil Engineering/Application of GIS & Remote Sensing in Civil Engineering.jpg',
        alt: 'Pakistan Engineering Council Continuing Professional Development Seminar Certificate',
        caption: 'Pakistan Engineering Council Accredited Continuing Professional Development Seminar Certificate (1.0 Credit Point).',
        tag: 'CPD Certificate',
      },
    ],
  },
  'cpd-fidic-variation-orders': {
    title: 'Variation Order as per FIDIC Conditions of Contract',
    sectionTitle: 'Continuing Professional Development Seminars',
    items: [
      {
        title: 'Certificate',
        kind: 'image',
        src: '/media/professional-trainings-cpd/02 - Variation Order as per FIDIC Conditions of Contract/Variation Orders as per FIDIC Conditions.jpg',
        alt: 'Pakistan Engineering Council Continuing Professional Development Seminar Certificate',
        caption: 'Pakistan Engineering Council Accredited Continuing Professional Development Seminar Certificate (1.0 Credit Point).',
        tag: 'CPD Certificate',
      },
    ],
  },
  'cpd-sustainable-urban-planning': {
    title: 'Sustainable Urban Planning and Design',
    sectionTitle: 'Continuing Professional Development Seminars',
    items: [
      {
        title: 'Certificate',
        kind: 'image',
        src: '/media/professional-trainings-cpd/03 - Sustainable Urban Planning and Design/Suatainable Urban Planning and Design.jpg',
        alt: 'Pakistan Engineering Council Continuing Professional Development Seminar Certificate',
        caption: 'Pakistan Engineering Council Accredited Continuing Professional Development Seminar Certificate (1.0 Credit Point).',
        tag: 'CPD Certificate',
      },
    ],
  },
  'cpd-fem-structural-analysis': {
    title: 'Finite Element Method: A Modern Tool for Structural Analysis in Civil Engineering',
    sectionTitle: 'Continuing Professional Development Seminars',
    items: [
      {
        title: 'Certificate',
        kind: 'image',
        src: '/media/professional-trainings-cpd/04 - Finite Element Method (FEM) Seminar/Finite Element Method (FEM).jpg',
        alt: 'Pakistan Engineering Council Continuing Professional Development Seminar Certificate',
        caption: 'Pakistan Engineering Council Accredited Continuing Professional Development Seminar Certificate (1.0 Credit Point).',
        tag: 'CPD Certificate',
      },
    ],
  },
  'cpd-national-heritages': {
    title: 'Contemporary Strategies for the Restoration and Preservation of National Heritages',
    sectionTitle: 'Continuing Professional Development Seminars',
    items: [
      {
        title: 'Certificate',
        kind: 'image',
        src: '/media/professional-trainings-cpd/05 - Contemporary Strategies for the Restoration and Preservation of National Heritages/Contemporary Strategies for the Restoration of National Heritages.jpg',
        alt: 'Pakistan Engineering Council Continuing Professional Development Seminar Certificate',
        caption: 'Pakistan Engineering Council Accredited Continuing Professional Development Seminar Certificate (1.0 Credit Point).',
        tag: 'CPD Certificate',
      },
    ],
  },
  'cpd-rut-depth-asphalt': {
    title: 'Modeling and Analyzing Rut Depth in Asphalt Mixtures for Sustainable Road Performance',
    sectionTitle: 'Continuing Professional Development Seminars',
    items: [
      {
        title: 'Certificate',
        kind: 'image',
        src: '/media/professional-trainings-cpd/06 - Modeling and Analyzing Rut Depth in Asphalt Mixtures for Sustainable Road Performance/Modeling & Analyzing Rut Depth in Asphalt Mixture for Sustainab.jpg',
        alt: 'Pakistan Engineering Council Continuing Professional Development Seminar Certificate',
        caption: 'Pakistan Engineering Council Accredited Continuing Professional Development Seminar Certificate (1.0 Credit Point).',
        tag: 'CPD Certificate',
      },
    ],
  },
  'webinar-ai-ml-civil-pef': {
    title: 'Application of AI/ML in Civil Engineering Webinar',
    sectionTitle: 'Continuing Professional Development Seminars',
    items: [
      {
        title: 'Certificate',
        kind: 'image',
        src: '/media/professional-trainings-cpd/07 - Application of AI-ML in Civil Engineering Webinar/Application of AI ML in Civil Engineering.jpg',
        alt: 'Pakistan Engineers Forum Webinar Certificate',
        caption: 'Professional Development Webinar Certificate — Pakistan Engineers Forum (PEF - KP/GB).',
        tag: 'Technical Webinar',
      },
    ],
  },
  'cpd-ndt-concrete-bridges': {
    title: 'Non-Destructive Test Methods for Concrete Bridge',
    sectionTitle: 'Continuing Professional Development Seminars',
    items: [
      {
        title: 'Certificate',
        kind: 'image',
        src: '/media/professional-trainings-cpd/08 - Non-Destructive Test Methods for Concrete Bridge/Non-Destructive Test Methods for Concrete.jpg',
        alt: 'Pakistan Engineering Council Continuing Professional Development Seminar Certificate',
        caption: 'Pakistan Engineering Council Accredited Continuing Professional Development Seminar Certificate (1.0 Credit Point).',
        tag: 'CPD Certificate',
      },
    ],
  },
  'workshop-introduction-r': {
    title: 'One Day Workshop on Introduction to R',
    sectionTitle: 'Continuing Professional Development Seminars',
    items: [
      {
        title: 'Certificate',
        kind: 'image',
        src: '/media/professional-trainings-cpd/09 - One Day Workshop on Introduction to R/Introduction to R language.jpg',
        alt: 'UNESCO Chair One Day Workshop Certificate',
        caption: 'Workshop Certificate — UNESCO Chair on Knowledge Systems for IWRM, COMSATS University Islamabad.',
        tag: 'UNESCO Chair Workshop',
      },
    ],
  },
  'cpd-integrating-technologies': {
    title: 'Integrating Technologies in Civil Engineering',
    sectionTitle: 'Continuing Professional Development Seminars',
    items: [
      {
        title: 'Certificate',
        kind: 'image',
        src: '/media/professional-trainings-cpd/10 - Integrating Technologies in Civil Engineering/Integrating Technologies in Civil Engineering.jpg',
        alt: 'Pakistan Engineering Council Continuing Professional Development Seminar Certificate',
        caption: 'Pakistan Engineering Council Accredited Continuing Professional Development Seminar Certificate (0.5 Credit Point).',
        tag: 'CPD Certificate',
      },
    ],
  },
  'cpd-ml-civil-engineering': {
    title: 'Impact of Machine Learning in the Field of Civil Engineering',
    sectionTitle: 'Continuing Professional Development Seminars',
    items: [
      {
        title: 'Certificate',
        kind: 'image',
        src: '/media/professional-trainings-cpd/11 - Impact of Machine Learning in the Field of Civil Engineering/Impact of Machine Learning in Civil Engineering.jpg',
        alt: 'Pakistan Engineering Council Continuing Professional Development Seminar Certificate',
        caption: 'Pakistan Engineering Council Accredited Continuing Professional Development Seminar Certificate (0.5 Credit Point).',
        tag: 'CPD Certificate',
      },
    ],
  },

  // =========================================================================
  // CONFERENCES
  // =========================================================================
  'conference-cacio-2024': {
    title: '4th UW-POFs Joint Conference CACIO-2024',
    sectionTitle: 'Conferences',
    items: [
      {
        title: 'Certificate',
        kind: 'image',
        src: '/media/Conferences/CACIO UW/CACIO(POF-UW).jpg',
        alt: 'CACIO-2024 Conference Certificate',
        caption: 'Official Certificate of Participation — 4th UW-POFs Joint Conference on Computing, Artificial Intelligence & Industrial Optimization.',
        tag: 'Conference Certificate',
      },
      {
        title: 'Panel Group Photo',
        kind: 'image',
        src: '/media/Conferences/CACIO UW/Panel Group Photo.jpeg',
        alt: 'CACIO-2024 Conference Panel Discussion and Organizing Group Photo',
        caption: 'Conference Panel Discussion delegates and organizing session photo at University of Wah / POF.',
        tag: 'Panel Group Photo',
      },
    ],
  },

  // =========================================================================
  // HONOURS & AWARDS
  // =========================================================================
  'award-gold-medalist': {
    title: 'University Gold Medalist',
    sectionTitle: 'Honours & Awards',
    items: [
      {
        title: 'Degree Parchment',
        kind: 'image',
        src: '/media/education/01 - BS Civil Engineering — COMSATS University Islamabad/Degree.jpeg',
        alt: 'Official BS Civil Engineering Degree Parchment — Gold Medalist',
        caption: 'Official Degree Parchment certifying graduating 1st in class with the highest academic distinction (University Gold Medal).',
        tag: 'Gold Medal Credential',
      },
      {
        title: 'Official Transcript',
        kind: 'image',
        src: '/media/education/01 - BS Civil Engineering — COMSATS University Islamabad/Transcript.jpeg',
        alt: 'Official Academic Transcript — CGPA 3.95 / 4.00',
        caption: 'Official 8-Semester Transcript verifying 3.95 / 4.00 Cumulative Grade Point Average across 137 registered credit hours.',
        tag: 'Academic Distinction',
      },
    ],
  },
  'award-aspire-skill-advancement-grant': {
    title: 'Skill Advancement Grant Winner',
    sectionTitle: 'Honours & Awards',
    items: [
      {
        title: 'Grant Announcement Post',
        kind: 'external-link',
        externalUrl: 'https://lnkd.in/p/db6zsURx',
        alt: 'Aspire Institute Skill Advancement Grant Official Post',
        caption: 'Official announcement and public recognition post for the Aspire Institute Skill Advancement Grant ($155) awarded for specialized GFRP reinforced concrete design.',
        tag: 'Aspire Institute Grant',
      },
    ],
  },
  'award-pof-scholarship': {
    title: 'Pakistan Ordnance Factories (POF) Merit Scholarship',
    sectionTitle: 'Honours & Awards',
    items: [
      {
        title: 'Certificate',
        kind: 'image',
        src: '/media/honours-and-awards/03 - Pakistan Ordnance Factory (POF) Merit Scholarship/Pakistan Ordnance Factory.jpg',
        alt: 'POF Merit Scholarship Certificate',
        caption: 'Official POF Merit Scholarship Certificate — Awarded 50% tuition waiver across five consecutive undergraduate semesters.',
        tag: 'Merit Scholarship',
      },
    ],
  },
  'award-english-access-scholarship': {
    title: 'U.S. Embassy English Access Scholarship Program',
    sectionTitle: 'Honours & Awards',
    items: [
      {
        title: 'Access Program Certificate',
        kind: 'image',
        src: '/media/honours-and-awards/04 - U.S. Embassy English Access Scholarship Program/English Access Program.jpg',
        alt: 'U.S. Embassy English Access Microscholarship Certificate',
        caption: 'Official Certificate of Completion — U.S. Embassy English Access Microscholarship Program.',
        tag: 'U.S. Embassy Certificate',
      },
      {
        title: 'Award Ceremony Photo',
        kind: 'image',
        src: '/media/honours-and-awards/04 - U.S. Embassy English Access Scholarship Program/Certificate Receiving.jpeg',
        alt: 'Certificate Receiving Ceremony with U.S. Embassy Representatives',
        caption: 'Certificate receiving and graduation ceremony with U.S. Embassy Access Program leadership.',
        tag: 'Graduation Ceremony',
      },
    ],
  },
  'award-pm-laptop-scheme': {
    title: "Prime Minister's National Laptop Scheme Award",
    sectionTitle: 'Honours & Awards',
    items: [
      {
        title: 'Award Credential',
        kind: 'image',
        src: "/media/honours-and-awards/05 - Prime Minister's National Laptop Scheme Award/Prime Minister’s Youth Laptop Scheme Set.png",
        alt: "Prime Minister's National Laptop Scheme Award Package",
        caption: "Government of Pakistan Prime Minister's Youth Laptop Scheme official merit award and specification record.",
        tag: 'Government Merit Award',
      },
    ],
  },
  'award-semester-merit-certificates': {
    title: 'Departmental Semester Merit Position Certificates (8 Awards)',
    sectionTitle: 'Honours & Awards',
    items: [
      {
        title: 'Semester 1 (FA-22)',
        kind: 'image',
        src: '/media/honours-and-awards/06 - Departmental Semester Merit Position Certificates (8 Awards)/Merit Position(FA-22).jpg',
        alt: 'Fall 2022 Departmental Merit Certificate',
        caption: 'Departmental Merit Position Certificate — Fall 2022 (Semester 1).',
        tag: 'Semester Merit 01',
      },
      {
        title: 'Semester 2 (SP-23)',
        kind: 'image',
        src: '/media/honours-and-awards/06 - Departmental Semester Merit Position Certificates (8 Awards)/Merit Position(SP-23).jpg',
        alt: 'Spring 2023 Departmental Merit Certificate',
        caption: 'Departmental Merit Position Certificate — Spring 2023 (Semester 2).',
        tag: 'Semester Merit 02',
      },
      {
        title: 'Semester 3 (FA-23)',
        kind: 'image',
        src: '/media/honours-and-awards/06 - Departmental Semester Merit Position Certificates (8 Awards)/Merit Position(FA-23).jpg',
        alt: 'Fall 2023 Departmental Merit Certificate',
        caption: 'Departmental Merit Position Certificate — Fall 2023 (Semester 3).',
        tag: 'Semester Merit 03',
      },
      {
        title: 'Semester 4 (SP-24)',
        kind: 'image',
        src: '/media/honours-and-awards/06 - Departmental Semester Merit Position Certificates (8 Awards)/Merit Position(SP-24).jpg',
        alt: 'Spring 2024 Departmental Merit Certificate',
        caption: 'Departmental Merit Position Certificate — Spring 2024 (Semester 4).',
        tag: 'Semester Merit 04',
      },
      {
        title: 'Semester 5 (FA-24)',
        kind: 'image',
        src: '/media/honours-and-awards/06 - Departmental Semester Merit Position Certificates (8 Awards)/Merit Position(FA-24).jpg',
        alt: 'Fall 2024 Departmental Merit Certificate',
        caption: 'Departmental Merit Position Certificate — Fall 2024 (Semester 5).',
        tag: 'Semester Merit 05',
      },
      {
        title: 'Semester 6 (SP-25)',
        kind: 'image',
        src: '/media/honours-and-awards/06 - Departmental Semester Merit Position Certificates (8 Awards)/Merit Position(SP-25).jpg',
        alt: 'Spring 2025 Departmental Merit Certificate',
        caption: 'Departmental Merit Position Certificate — Spring 2025 (Semester 6).',
        tag: 'Semester Merit 06',
      },
      {
        title: 'Semester 7 (FA-25)',
        kind: 'image',
        src: '/media/honours-and-awards/06 - Departmental Semester Merit Position Certificates (8 Awards)/Merit Position(FA-25).jpg',
        alt: 'Fall 2025 Departmental Merit Certificate',
        caption: 'Departmental Merit Position Certificate — Fall 2025 (Semester 7).',
        tag: 'Semester Merit 07',
      },
    ],
  },
  'award-fyp-open-house-3rd': {
    title: '3rd Position Winner — Final Year Project (Open House 2026)',
    sectionTitle: 'Honours & Awards',
    items: [
      {
        title: 'Award Certificate',
        kind: 'image',
        src: '/media/honours-and-awards/07 - 3rd Position Winner — Final Year Project (Open House 2026)/Job Fair SP26 - Merit Position.jpg',
        alt: 'Open House and Job Fair Spring 2026 3rd Position Certificate',
        caption: 'Certificate of Merit — 3rd Position in Final Year Project (FYP) Open House & Job Fair Spring 2026.',
        tag: 'FYP Award',
      },
    ],
  },
  'award-sfd-bmd-competition': {
    title: '1st Position Winner — SFD & BMD Competition (Civil Mania 2024)',
    sectionTitle: 'Honours & Awards',
    items: [
      {
        title: 'Winner Certificate',
        kind: 'image',
        src: '/media/honours-and-awards/08 - 1st Position Winner — SFD & BMD Competition (Civil Mania 2024)/SFD BMD Winner(Civil Mania in WEC).jpg',
        alt: 'SFD & BMD Competition 1st Position Certificate',
        caption: '1st Position Winner Certificate — Shear Force and Bending Moment Diagram analytical challenge at Civil Mania.',
        tag: '1st Position Winner',
      },
    ],
  },
  'award-best-survey-group-2024': {
    title: 'Best Survey Group Award — Annual Survey Camp 2024',
    sectionTitle: 'Honours & Awards',
    items: [
      {
        title: 'Award Certificate',
        kind: 'image',
        src: '/media/honours-and-awards/09 - Best Survey Group Award — Annual Survey Camp 2024/Survey Camp(Best Survey Group).jpg',
        alt: 'Best Survey Group Certificate',
        caption: 'Certificate of Excellence — Best Survey Group Award at the Annual Field Survey Camp 2024.',
        tag: 'Survey Camp Award',
      },
      {
        title: 'Award Shield',
        kind: 'image',
        src: '/media/honours-and-awards/09 - Best Survey Group Award — Annual Survey Camp 2024/Shield.jpeg',
        alt: 'Best Survey Group Commemorative Shield',
        caption: 'Official Commemorative Trophy Shield for Best Survey Group performance.',
        tag: 'Trophy Shield',
      },
      {
        title: 'Field Survey Photo',
        kind: 'image',
        src: '/media/honours-and-awards/09 - Best Survey Group Award — Annual Survey Camp 2024/SIte.jpeg',
        alt: 'Survey Team Conducting Field Leveling and Theodolite Traversing',
        caption: 'Field surveying operations: total station setup, leveling network, and topographic mapping.',
        tag: 'Field Operations',
      },
    ],
  },
  'award-ice-truss-bridge-2nd': {
    title: '2nd Position Winner — ICE Truss Bridge Competition 2022',
    sectionTitle: 'Honours & Awards',
    items: [
      {
        title: 'Winner Certificate',
        kind: 'image',
        src: '/media/honours-and-awards/10 - 2nd Position Winner — ICE Truss Bridge Competition 2022/Merit Position(Ice Truss Bridge Competition).jpg',
        alt: 'ICE Truss Bridge Competition 2nd Position Certificate',
        caption: '2nd Position Certificate — Institution of Civil Engineers (ICE) Student Chapter Annual Truss Bridge Load Challenge.',
        tag: 'ICE Competition',
      },
    ],
  },
  'award-grade-8-position': {
    title: '3rd Position in Class — Grade 8 Annual Examination',
    sectionTitle: 'Honours & Awards',
    items: [
      {
        title: 'Merit Certificate',
        kind: 'image',
        src: '/media/honours-and-awards/11 - 3rd Position in Class — Grade 8 Annual Examination/Merit Certificate.jpeg',
        alt: 'Grade 8 Annual Examination Merit Certificate',
        caption: 'Academic Merit Certificate — 3rd Position in Class at the Grade 8 Annual Examination.',
        tag: 'School Distinction',
      },
    ],
  },
  'award-grade-4-position': {
    title: '3rd Position in Class — Grade 4 Annual Examination',
    sectionTitle: 'Honours & Awards',
    items: [
      {
        title: 'Merit Certificate',
        kind: 'image',
        src: '/media/honours-and-awards/12 - 3rd Position in Class — Grade 4 Annual Examination/Merit Certificate.jpeg',
        alt: 'Grade 4 Annual Examination Merit Certificate',
        caption: 'Academic Merit Certificate — 3rd Position in Class at the Grade 4 Annual Examination.',
        tag: 'School Distinction',
      },
    ],
  },

  // =========================================================================
  // EXTRACURRICULAR ACTIVITIES
  // =========================================================================
  'extra-aspire-leaders-program': {
    title: 'Aspire Leaders Program',
    sectionTitle: 'Extracurricular Activities',
    items: [
      {
        title: 'Certificate',
        kind: 'image',
        src: '/media/extracurriculars/01 - Aspire Leaders Program/Aspire.png',
        alt: 'Aspire Leaders Program Credential',
        caption: 'Leadership Development Credential — Aspire Leaders Program (Founded by Harvard University faculty).',
        tag: 'Aspire Leaders',
      },
    ],
  },
  'extra-wfeo-hackathon-2026': {
    title: 'World Engineering Day 2026 Hackathon — Construction Digitalization',
    sectionTitle: 'Extracurricular Activities',
    items: [
      {
        title: 'Hackathon Certificate',
        kind: 'image',
        src: '/media/extracurriculars/02 - World Engineering Day 2026 Hackathon — Construction Digitalization/WED 2026_page-0001.jpg',
        alt: 'World Engineering Day 2026 Hackathon Certificate',
        caption: 'Official Certificate of Participation — WFEO World Engineering Day 2026 Global Hackathon on Construction Digitalization.',
        tag: 'WFEO Hackathon',
      },
      {
        title: 'Hackathon Presentation Video',
        kind: 'embed-video',
        poster: '/media/extracurriculars/02 - World Engineering Day 2026 Hackathon — Construction Digitalization/youtube-cover.jpg',
        previewUrl: 'https://www.youtube.com/watch?v=z70xaKYh1ps',
        externalUrl: 'https://www.youtube.com/watch?v=z70xaKYh1ps',
        alt: 'World Engineering Day 2026 Hackathon Presentation Video',
        caption: 'Project presentation video submission for the WFEO World Engineering Day 2026 Global Hackathon on Construction Digitalization.',
        tag: 'YouTube Video',
      },
    ],
  },
  'extra-omlas-fellowship-2025': {
    title: 'One Million Leaders Asia (OMLAS) Fellowship',
    sectionTitle: 'Extracurricular Activities',
    items: [
      {
        title: 'Fellowship Certificate',
        kind: 'image',
        src: '/media/extracurriculars/03 - One Million Leaders Asia (OMLAS) Fellowship/OMLAS Certificate._page-0001.jpg',
        alt: 'OMLAS Fellowship Certificate',
        caption: 'Fellowship Certificate — One Million Leaders Asia (OMLAS) & NELIS Global Sustainability Leadership Program.',
        tag: 'OMLAS Fellowship',
      },
    ],
  },
  'extra-lgs-panel-discussion': {
    title: 'Leaders for Global Society (LGS) Panel Discussion',
    sectionTitle: 'Extracurricular Activities',
    items: [
      {
        title: 'Certificate',
        kind: 'image',
        src: '/media/extracurriculars/04 - Leaders for Global Society (LGS) Panel Discussion/LGS-Panel Discussion_page-0001.jpg',
        alt: 'Leaders for Global Society Panel Certificate',
        caption: 'Certificate of Participation — Leaders for Global Society (LGS) Leadership & Civil Engagement Panel Discussion.',
        tag: 'Panel Discussion',
      },
    ],
  },
  'extra-constructx-giki': {
    title: 'CONSTRUCTX-3.0 National Engineering Competition',
    sectionTitle: 'Extracurricular Activities',
    items: [
      {
        title: 'Competition Certificate',
        kind: 'image',
        src: '/media/extracurriculars/05 - CONSTRUCTX-3.0 National Engineering Competition/CONSTRUCTX - 3.0 (GIKI)_page-0001.jpg',
        alt: 'CONSTRUCTX-3.0 GIKI Certificate',
        caption: 'National Engineering Competition Certificate — CONSTRUCTX-3.0 at GIK Institute of Engineering Sciences and Technology.',
        tag: 'GIKI Competition',
      },
    ],
  },
  'extra-wed-hackathon-2025': {
    title: 'World Engineering Day 2025 Hackathon — Shelter For All Housing Solution',
    sectionTitle: 'Extracurricular Activities',
    items: [
      {
        title: 'Hackathon Certificate',
        kind: 'image',
        src: '/media/extracurriculars/06 - World Engineering Day 2025 Hackathon — Shelter For All Housing Solution/WED 2025_page-0001.jpg',
        alt: 'World Engineering Day 2025 Hackathon Certificate',
        caption: 'Certificate of Participation — World Engineering Day 2025 Hackathon (Shelter For All Low-Cost Housing Design).',
        tag: 'WFEO Hackathon',
      },
      {
        title: 'Hackathon Presentation Video',
        kind: 'embed-video',
        poster: '/media/extracurriculars/06 - World Engineering Day 2025 Hackathon — Shelter For All Housing Solution/youtube-cover.jpg',
        previewUrl: 'https://www.youtube.com/watch?v=nDrsA6qMuOY',
        externalUrl: 'https://www.youtube.com/watch?v=nDrsA6qMuOY',
        alt: 'World Engineering Day 2025 Hackathon Presentation Video',
        caption: 'Project presentation video submission for the World Engineering Day 2025 Hackathon — Shelter For All Sustainable Housing Solution.',
        tag: 'YouTube Video',
      },
    ],
  },
  'extra-civil-nexus-2025': {
    title: 'Civil Nexus 2025 Engineering Symposium',
    sectionTitle: 'Extracurricular Activities',
    items: [
      {
        title: 'Symposium Certificate',
        kind: 'image',
        src: '/media/extracurriculars/07 - Civil Nexus 2025 Engineering Symposium/Civil Nexus(WEC)_page-0001.jpg',
        alt: 'Civil Nexus 2025 Symposium Certificate',
        caption: 'Certificate of Participation — Civil Nexus 2025 Multi-Society Engineering Symposium.',
        tag: 'Engineering Symposium',
      },
    ],
  },
  'extra-unesco-water-day-2025': {
    title: 'World Water Day 2025 Video Competition',
    sectionTitle: 'Extracurricular Activities',
    items: [
      {
        title: 'Competition Certificate',
        kind: 'image',
        src: '/media/extracurriculars/08 - World Water Day 2025 Video Competition/World Water Day 2025_page-0001.jpg',
        alt: 'World Water Day 2025 Certificate',
        caption: 'Certificate of Recognition — UNESCO Chair & PCRWR World Water Day 2025 Video Competition on Glacier Preservation.',
        tag: 'UNESCO Competition',
      },
    ],
  },
  'extra-mental-wellbeing-speaker': {
    title: 'Lead Organizer & Speaker — "The Happy Brain" Seminar',
    sectionTitle: 'Extracurricular Activities',
    items: [
      {
        title: 'Seminar Video Recording',
        kind: 'embed-video',
        poster: '/media/extracurriculars/09 - Lead Organizer & Speaker — The Happy Brain Seminar/facebook-cover.jpg',
        previewUrl: 'https://www.facebook.com/accesscuiwah/videos/685081240845599/',
        externalUrl: 'https://www.facebook.com/accesscuiwah/videos/685081240845599/',
        alt: '"The Happy Brain" Seminar Live Video Recording',
        caption: 'Live video recording of "The Happy Brain" mental well-being workshop conducted at Pehla Qadam School.',
        tag: 'Facebook Video',
      },
    ],
  },
  'extra-eid-mingle-cohost': {
    title: 'Co-Host — Eid Mingle Day Cultural Celebration',
    sectionTitle: 'Extracurricular Activities',
    items: [
      {
        title: 'Celebration Video Recording',
        kind: 'embed-video',
        poster: '/media/extracurriculars/10 - Co-Host — Eid Mingle Day Cultural Celebration/facebook-cover.jpg',
        previewUrl: 'https://www.facebook.com/accesscuiwah/videos/990116886094067/',
        externalUrl: 'https://www.facebook.com/accesscuiwah/videos/990116886094067/',
        alt: 'Eid Mingle Day Cultural Celebration Video Recording',
        caption: 'Live video recording of the Eid Mingle Day community celebration and cultural exchange.',
        tag: 'Facebook Video',
      },
    ],
  },
  'extra-speech-competition': {
    title: 'Speech Competition — Taqareer-e-Silsila Sir Syed',
    sectionTitle: 'Extracurricular Activities',
    items: [
      {
        title: 'Merit Certificate',
        kind: 'image',
        src: '/media/extracurriculars/11 - Speech Competition — Taqareer-e-Silsila Sir Syed/Speech.jpg',
        alt: 'Taqareer-e-Silsila Sir Syed Speech Certificate',
        caption: 'Certificate of Appreciation — Taqareer-e-Silsila Sir Syed Inter-Collegiate Speech Competition.',
        tag: 'Oratory & Speech',
      },
    ],
  },

  // =========================================================================
  // VOLUNTEERING
  // =========================================================================
  'volunteering-alkhidmat-foundation': {
    title: 'Professional Volunteer — Alkhidmat Foundation',
    sectionTitle: 'Volunteering',
    items: [
      {
        title: 'Volunteer Credential Card',
        kind: 'image',
        src: '/media/volunteering/01 - Alkhidmat Foundation Professional Volunteer/Alkhidmat Volunteer-card_pages-to-jpg-0001.jpg',
        alt: 'Alkhidmat Foundation Professional Volunteer Card',
        caption: 'Official Professional Volunteer Credential Card — Alkhidmat Foundation Pakistan.',
        tag: 'Volunteer Credential',
      },
    ],
  },
  'volunteering-academic-resource-database': {
    title: 'Academic Resource Database Initiative',
    sectionTitle: 'Volunteering',
    items: [
      {
        title: 'Curated Civil Engineering Curriculum Archive',
        kind: 'folder-tree',
        externalUrl: 'https://drive.google.com/drive/folders/1m2kdWPX0X7Dn5LIPxeV_mcUl_yowBMoo?usp=sharing',
        caption: 'Collaborative cloud archive co-founded with Faizan Manshad, providing 8 semesters of structured lecture notes, numerical solutions, lab manuals, and software templates for junior civil engineering cohorts.',
        tag: 'Curated Database',
        tree: [
          {
            name: '01 - Foundation Semesters (Semesters 1 & 2)',
            type: 'folder',
            children: [
              { name: 'Engineering Drawing & Descriptive Geometry Notes', type: 'file' },
              { name: 'Applied Mechanics & Calculus Analytical Problem Sets', type: 'file' },
              { name: 'Surveying-I Field Leveling & Theodolite Manuals', type: 'file' },
            ],
          },
          {
            name: '02 - Intermediate Semesters (Semesters 3 & 4)',
            type: 'folder',
            children: [
              { name: 'Mechanics of Solids I & II Lecture Modules', type: 'file' },
              { name: 'Fluid Mechanics & Open Channel Flow Solved Sets', type: 'file' },
              { name: 'Structural Analysis I & Concrete Mix Design Guides', type: 'file' },
              { name: 'Engineering Hydrology & Catchment Data Sheets', type: 'file' },
            ],
          },
          {
            name: '03 - Advanced Design Semesters (Semesters 5 & 6)',
            type: 'folder',
            children: [
              { name: 'Reinforced Concrete Design I & II (ACI 318 Handouts)', type: 'file' },
              { name: 'Soil Mechanics & Geotechnical Testing Worksheets', type: 'file' },
              { name: 'Structural Steel Design (AISC Member Sizing Guides)', type: 'file' },
              { name: 'Highway Geometric Design (AASHTO Green Book Notes)', type: 'file' },
            ],
          },
          {
            name: '04 - Capstone Semesters (Semesters 7 & 8)',
            type: 'folder',
            children: [
              { name: 'Design of Structures (DOS CEP ETABS & SAFE Workflows)', type: 'file' },
              { name: 'Construction Project Planning (Primavera P6 Models)', type: 'file' },
              { name: 'Quantity Surveying & Complete Building BOQ Sheets', type: 'file' },
              { name: 'FYP Guidelines, Research Writing & Thesis Preprints', type: 'file' },
            ],
          },
          {
            name: '05 - Software & Computational Repositories',
            type: 'folder',
            children: [
              { name: 'Autodesk Revit Parametric Families & Templates', type: 'file' },
              { name: 'ETABS & SAFE Non-Linear & Seismic Run Files', type: 'file' },
              { name: 'EPA-SWMM Sewerage Models & R Statistical Scripts', type: 'file' },
            ],
          },
        ],
      },
    ],
  },
  'volunteering-community-service-orphans': {
    title: 'Community Service for Orphans — Educational Support',
    sectionTitle: 'Volunteering',
    items: [
      {
        title: 'Community Service Certificate',
        kind: 'image',
        src: '/media/volunteering/03 - Community Service for Orphans — Educational Support/Community Service_page-0001.jpg',
        alt: 'Certificate of Appreciation for Community Educational Support',
        caption: 'Certificate of Appreciation — Educational mentorship and community service supporting underprivileged orphans.',
        tag: 'Appreciation Certificate',
      },
    ],
  },
  'volunteering-child-labour-advocacy': {
    title: 'Awareness Video on World Day Against Child Labour',
    sectionTitle: 'Volunteering',
    items: [
      {
        title: 'Child Labour Advocacy Video',
        kind: 'embed-video',
        poster: '/media/volunteering/04 - Awareness Video on World Day Against Child Labour/drive-cover.jpg',
        previewUrl: 'https://drive.google.com/file/d/1UXkgB-BKh876kN4kptHxmziqxTD3z24L/preview',
        externalUrl: 'https://drive.google.com/file/d/1UXkgB-BKh876kN4kptHxmziqxTD3z24L/view',
        alt: 'Awareness Video on World Day Against Child Labour Preview',
        caption: 'Public advocacy short documentary produced for World Day Against Child Labour, highlighting educational access and youth protection.',
        tag: 'Google Drive Video',
      },
    ],
  },

  // =========================================================================
  // WORK EXPERIENCE
  // =========================================================================
  'archnetix-scan-to-bim': {
    title: 'Junior BIM Modeler — Archnetix',
    sectionTitle: 'Work Experience',
    items: [
      {
        title: 'Professional Practice Record',
        kind: 'card',
        alt: 'Archnetix Verified Professional Practice Record',
        caption: 'Verified engineering experience in point-cloud registration (Leica Cyclone) and LOD 300/350 structural/architectural BIM modeling in Autodesk Revit.',
        tag: 'Verified Practice',
      },
    ],
  },
  'mount-khalid-high-rise-bim': {
    title: 'BIM & Site Engineering Intern — Mount Khalid Tower 04',
    sectionTitle: 'Work Experience',
    items: [
      {
        title: 'Internship Certificate',
        kind: 'image',
        src: '/media/work-experience/02 - BIM & Site Engineering Intern — Mount Khalid Tower 04/Mount Khalid(Internship).jpg',
        alt: 'Mount Khalid Internship Certificate',
        caption: 'Official Certificate of Completion — BIM & Site Engineering Internship on Mount Khalid Tower 04 (45-Storey Residential Tower).',
        tag: 'Experience Certificate',
      },
      {
        title: 'Official Group Photo',
        kind: 'image',
        src: '/media/work-experience/02 - BIM & Site Engineering Intern — Mount Khalid Tower 04/Official Group Photo.jpeg',
        alt: 'Mount Khalid Tower Site Engineering and Supervision Team',
        caption: 'Mount Khalid Project Resident Engineers, Site Supervisors, and Internship Cohort.',
        tag: 'Engineering Team',
      },
      {
        title: 'Site Execution Video',
        kind: 'video',
        src: '/media/work-experience/02 - BIM & Site Engineering Intern — Mount Khalid Tower 04/Construction Site.mp4',
        alt: 'Mount Khalid Tower 04 Construction Site Video',
        caption: 'Field site inspection: tower crane operations, structural frame rising, and live construction execution.',
        tag: 'Site Video',
      },
      {
        title: 'Core & Slab Video',
        kind: 'video',
        src: '/media/work-experience/02 - BIM & Site Engineering Intern — Mount Khalid Tower 04/WhatsApp Video 2026-11-15 at 5.44.31 PM.mp4',
        alt: 'Mount Khalid Core Wall and Suspended Slab Video',
        caption: 'Core shear wall reinforcement inspection, climbing formwork, and post-tensioned slab readiness.',
        tag: 'Site Video',
      },
      {
        title: 'Site Inspection 01',
        kind: 'image',
        src: '/media/work-experience/02 - BIM & Site Engineering Intern — Mount Khalid Tower 04/WhatsApp Image 2026-11-15 at 5.40.03 PM.jpeg',
        alt: 'Tower 04 Structural Inspection',
        caption: 'Suspended post-tensioned slab tendon layout and rebar chair inspection.',
        tag: 'Site Inspection',
      },
      {
        title: 'Site Inspection 02',
        kind: 'image',
        src: '/media/work-experience/02 - BIM & Site Engineering Intern — Mount Khalid Tower 04/WhatsApp Image 2026-11-15 at 5.40.03 PM (1).jpeg',
        alt: 'Column Rebar Splicing Inspection',
        caption: 'Column vertical rebar lap splices, mechanical couplers, and containment ties.',
        tag: 'Site Inspection',
      },
      {
        title: 'Site Inspection 03',
        kind: 'image',
        src: '/media/work-experience/02 - BIM & Site Engineering Intern — Mount Khalid Tower 04/WhatsApp Image 2026-11-15 at 5.40.04 PM.jpeg',
        alt: 'Perimeter Formwork & Shoring',
        caption: 'Perimeter cantilever formwork staging and vertical shore load distribution.',
        tag: 'Site Inspection',
      },
      {
        title: 'Site Inspection 04',
        kind: 'image',
        src: '/media/work-experience/02 - BIM & Site Engineering Intern — Mount Khalid Tower 04/WhatsApp Image 2026-11-15 at 5.40.05 PM.jpeg',
        alt: 'Beam-Column Joint Confinement',
        caption: 'Beam-column ductile joint transverse hoop spacing and anchorage check.',
        tag: 'Site Inspection',
      },
      {
        title: 'Site Inspection 05',
        kind: 'image',
        src: '/media/work-experience/02 - BIM & Site Engineering Intern — Mount Khalid Tower 04/WhatsApp Image 2026-11-15 at 5.40.05 PM (1).jpeg',
        alt: 'Core Shear Wall Formwork',
        caption: 'Core lift shaft shuttering, tie rod placement, and wall verticality check.',
        tag: 'Site Inspection',
      },
      {
        title: 'Site Inspection 06',
        kind: 'image',
        src: '/media/work-experience/02 - BIM & Site Engineering Intern — Mount Khalid Tower 04/WhatsApp Image 2026-11-15 at 5.40.05 PM (2).jpeg',
        alt: 'Rebar Cover Block Spacing',
        caption: 'Concrete cover spacer blocks and MEP penetration sleeve coordination.',
        tag: 'Site Inspection',
      },
      {
        title: 'Site Inspection 07',
        kind: 'image',
        src: '/media/work-experience/02 - BIM & Site Engineering Intern — Mount Khalid Tower 04/WhatsApp Image 2026-11-15 at 5.40.06 PM.jpeg',
        alt: 'Pre-Pour Inspection Clearance',
        caption: 'Pre-pour structural QA/QC sign-off before ready-mix concrete pump placement.',
        tag: 'Site Inspection',
      },
      {
        title: 'Site Inspection 08',
        kind: 'image',
        src: '/media/work-experience/02 - BIM & Site Engineering Intern — Mount Khalid Tower 04/WhatsApp Image 2026-11-15 at 5.40.07 PM (1).jpeg',
        alt: 'Tower Frame Elevation View',
        caption: 'Mount Khalid Tower 04 rising frame viewed from ground staging area.',
        tag: 'Site Inspection',
      },
    ],
  },
  'resolve-nstp-tower-intern': {
    title: 'Trainee Engineer — Shoukat Iqbal Mir & Co (SIMCO)',
    sectionTitle: 'Work Experience',
    items: [
      {
        title: 'Trainee Certificate',
        kind: 'image',
        src: '/media/work-experience/03 - Trainee Engineer — Resolve Engineering - SIMCO (NSTP Tower)/SIMCO(Internship).jpg',
        alt: 'Resolve Engineering SIMCO Internship Certificate',
        caption: 'Official Certificate of Trainee Engineer — Resolve Engineering Services & SIMCO on NSTP Commercial Tower Project.',
        tag: 'Trainee Certificate',
      },
      {
        title: 'Lift Core Walls',
        kind: 'image',
        src: '/media/work-experience/03 - Trainee Engineer — Resolve Engineering - SIMCO (NSTP Tower)/Lift Core Walls.jpg',
        alt: 'Lift Core Walls Reinforcement and Climbing Formwork',
        caption: 'Central elevator core wall reinforcement cages, embedded electrical conduits, and formwork alignment.',
        tag: 'Core Walls',
      },
      {
        title: 'Shear Wall Rebar',
        kind: 'image',
        src: '/media/work-experience/03 - Trainee Engineer — Resolve Engineering - SIMCO (NSTP Tower)/Shear Wall.jpg',
        alt: 'Core Shear Wall Boundary Element Reinforcement',
        caption: 'High-density vertical bar cages, cross ties, and boundary element confinement at shear wall ends.',
        tag: 'Shear Wall',
      },
      {
        title: 'Site Overview',
        kind: 'image',
        src: '/media/work-experience/03 - Trainee Engineer — Resolve Engineering - SIMCO (NSTP Tower)/Site View.jpg',
        alt: 'NSTP Commercial Tower Site Overview',
        caption: 'Multi-storey commercial frame overview showing structural bay grids and tower crane reach.',
        tag: 'Site Overview',
      },
      {
        title: 'Slab Concrete Pouring',
        kind: 'image',
        src: '/media/work-experience/03 - Trainee Engineer — Resolve Engineering - SIMCO (NSTP Tower)/Slab Pouring.JPG',
        alt: 'Slab Concrete Pouring and Vibration Inspection',
        caption: 'Ready-mix concrete placement, needle vibration, and screed leveling on suspended commercial floor.',
        tag: 'Concrete Pouring',
      },
      {
        title: 'Slab Reinforcement Mat',
        kind: 'image',
        src: '/media/work-experience/03 - Trainee Engineer — Resolve Engineering - SIMCO (NSTP Tower)/Slab Reinforcement.JPG',
        alt: 'Two-Way Slab Rebar Mat and Conduit Routing',
        caption: 'Top and bottom rebar reinforcement mats, column drop panels, and mechanical sleeve placements.',
        tag: 'Reinforcement Mat',
      },
      {
        title: 'Stairs Concrete Pouring',
        kind: 'image',
        src: '/media/work-experience/03 - Trainee Engineer — Resolve Engineering - SIMCO (NSTP Tower)/Stairs Concrete Pouring.jpg',
        alt: 'Staircase Concrete Placement',
        caption: 'Staircase waist slab and tread/riser concrete pour with edge vibration.',
        tag: 'Staircase Pouring',
      },
      {
        title: 'Stairs Reinforcement',
        kind: 'image',
        src: '/media/work-experience/03 - Trainee Engineer — Resolve Engineering - SIMCO (NSTP Tower)/Stairs Reinforcement.jpg',
        alt: 'Staircase Rebar Detailing and Landing Anchors',
        caption: 'Staircase longitudinal rebar bent up into intermediate landings with full development length.',
        tag: 'Staircase Rebar',
      },
    ],
  },

  // =========================================================================
  // RESEARCH
  // =========================================================================
  'bim-to-ar-research': {
    title: 'BIM-to-AR Integration for Construction Layout Visualization',
    sectionTitle: 'Research Experience',
    items: [
      {
        title: 'Ground Plane — Structural',
        kind: 'image',
        src: '/media/research/01 - BIM to Augmented Reality (FYP Preprint & Framework)/Ground Plane - Structural Module.jpg',
        alt: 'Augmented Reality Ground Plane Tracking — Structural Module',
        caption: 'Surface plane detection in Unity/AR Foundation projecting 1:1 scale reinforced concrete frame onto real-world ground.',
        tag: 'AR Ground Plane',
      },
      {
        title: 'Location-Based — Architecture',
        kind: 'image',
        src: '/media/research/01 - BIM to Augmented Reality (FYP Preprint & Framework)/Location Based - Architecture Module.jpg',
        alt: 'Augmented Reality Location-Based GPS Tracking — Architectural Envelope',
        caption: 'Georeferenced spatial tracking overlaying full BIM architectural model on site coordinates via mobile AR.',
        tag: 'Location-Based AR',
      },
      {
        title: 'Marker-Based — Architecture',
        kind: 'image',
        src: '/media/research/01 - BIM to Augmented Reality (FYP Preprint & Framework)/Marker Based - Architecture Module.JPG',
        alt: 'Augmented Reality Marker Tracking — Architectural Envelope',
        caption: 'High-precision 2D floorplan image target tracking rendering interactive exterior facades and interior partitions.',
        tag: 'Marker Tracking',
      },
      {
        title: 'Marker-Based — MEP Systems',
        kind: 'image',
        src: '/media/research/01 - BIM to Augmented Reality (FYP Preprint & Framework)/Marker Based - MEP Module.jpg',
        alt: 'Augmented Reality Marker Tracking — MEP Ductwork & Piping',
        caption: 'Subsystem visibility toggling displaying complex mechanical ductwork and plumbing runs to identify spatial clashes.',
        tag: 'MEP Coordination',
      },
      {
        title: 'Marker-Based — Structural Frame',
        kind: 'image',
        src: '/media/research/01 - BIM to Augmented Reality (FYP Preprint & Framework)/Marker Based - Structural Module.jpg',
        alt: 'Augmented Reality Marker Tracking — Concrete Columns and Beams',
        caption: 'Target-registered visualization isolating structural concrete elements for pre-pour placement verification.',
        tag: 'Structural AR',
      },
    ],
  },

  // =========================================================================
  // PROJECTS
  // =========================================================================
  'structural-design': {
    title: 'Structural Analysis & Design of Commercial Building',
    sectionTitle: 'Academic Projects',
    items: [
      {
        title: 'Complete Design Report',
        kind: 'pdf',
        src: '/media/projects/01 - Structural Analysis & Design of Commercial Building/DOS-G2-(55,05,28,31,59).pdf',
        downloadUrl: '/media/projects/01 - Structural Analysis & Design of Commercial Building/DOS-G2-(55,05,28,31,59).pdf',
        downloadLabel: 'Download Full Structural Report (PDF)',
        caption: 'Comprehensive capstone structural design report: 3D ETABS modeling, lateral seismic load analysis (BCP-2021), ACI 318-19 member design, and foundation sizing.',
        tag: 'Design Report (PDF)',
      },
      {
        title: 'Footing Calculation Sheet',
        kind: 'excel',
        downloadUrl: '/media/projects/01 - Structural Analysis & Design of Commercial Building/FOOTING SIZE CALCULATION.xlsx',
        downloadLabel: 'Download Footing Calculation Workbook (.xlsx)',
        caption: 'Parametric Excel calculation suite for foundation sizing, soil bearing capacity checks, one-way shear, and two-way punching shear verification.',
        tag: 'Excel Spreadsheet',
        excelFiles: [
          {
            filename: 'FOOTING SIZE CALCULATION.xlsx',
            fileUrl: '/media/projects/01 - Structural Analysis & Design of Commercial Building/FOOTING SIZE CALCULATION.xlsx',
            description: 'Automated footing sizing sheet computing net allowable soil pressure, footing dimensions, flexural reinforcement, and punching shear stress per ACI 318-19.',
          },
        ],
      },
    ],
  },
  'school-building-design': {
    title: 'Three-Story RC School Building Design',
    sectionTitle: 'Academic Projects',
    items: [
      {
        title: 'Complete RCD CEP Report',
        kind: 'pdf',
        src: '/media/projects/02 - Three-Story RC School Building Design/complete-report-rcd-cep.pdf',
        downloadUrl: '/media/projects/02 - Three-Story RC School Building Design/complete-report-rcd-cep.pdf',
        downloadLabel: 'Download Complete School Building Report (PDF)',
        caption: 'Comprehensive manual and CAD-verified reinforced concrete design report for an institutional school building per ACI 318-14 and ASCE 7-10.',
        tag: 'Complete Report (PDF)',
      },
    ],
  },
  'retaining-walls': {
    title: 'Design of Gravity and Cantilever Retaining Walls',
    sectionTitle: 'Academic Projects',
    items: [
      {
        title: 'Cantilever Wall Calculations',
        kind: 'excel',
        downloadUrl: '/media/projects/03 - Design of Gravity and Cantilever Retaining Walls/cantilever-retaining-wall.xlsx',
        downloadLabel: 'Download Cantilever Wall Workbook (.xlsx)',
        caption: 'Interactive Excel design tool evaluating Rankine lateral earth pressure, factor of safety against overturning and sliding, soil bearing pressure, and stem/toe/heel rebar detailing with and without shear key.',
        tag: 'Cantilever Wall (XLSX)',
        excelFiles: [
          {
            filename: 'cantilever-retaining-wall.xlsx',
            fileUrl: '/media/projects/03 - Design of Gravity and Cantilever Retaining Walls/cantilever-retaining-wall.xlsx',
            description: 'Calculates active earth thrust, overturning & resisting moments, factors of safety against sliding (FS > 1.5) and overturning (FS > 2.0), stem vertical flexural steel, and temperature reinforcement.',
          },
        ],
      },
      {
        title: 'Gravity Wall Calculations',
        kind: 'excel',
        downloadUrl: '/media/projects/03 - Design of Gravity and Cantilever Retaining Walls/gravity-retaining-wall.xlsx',
        downloadLabel: 'Download Gravity Wall Workbook (.xlsx)',
        caption: 'Parametric stability suite for mass concrete gravity retaining walls, checking base pressure eccentricity, overturning, sliding, and shear key resistance.',
        tag: 'Gravity Wall (XLSX)',
        excelFiles: [
          {
            filename: 'gravity-retaining-wall.xlsx',
            fileUrl: '/media/projects/03 - Design of Gravity and Cantilever Retaining Walls/gravity-retaining-wall.xlsx',
            description: 'Evaluates trapezoidal gravity wall sections, self-weight stability, resultant base eccentricity within middle third (kern), and sliding resistance with shear key.',
          },
        ],
      },
    ],
  },
  'quantity-surveying': {
    title: 'Quantity Surveying & Complete Building Quantity Takeoff',
    sectionTitle: 'Academic Projects',
    items: [
      {
        title: 'Complete Quantity Surveying Report',
        kind: 'pdf',
        src: '/media/projects/04 - Quantity Surveying & Complete Building Quantity Takeoff/CEP.pdf',
        downloadUrl: '/media/projects/04 - Quantity Surveying & Complete Building Quantity Takeoff/CEP.pdf',
        downloadLabel: 'Download Quantity Surveying Report (PDF)',
        caption: 'Comprehensive building quantity takeoff and Bill of Quantities (BOQ) technical report covering all structural members, concrete, reinforcement, and masonry.',
        tag: 'Complete Report (PDF)',
      },
      {
        title: 'Member-Wise Excel Workbooks',
        kind: 'excel',
        caption: 'Suite of 6 structured Microsoft Excel workbooks covering all structural and masonry takeoff components.',
        tag: 'Excel Workbooks (6 Sheets)',
        excelFiles: [
          {
            filename: 'Beam.xlsx',
            fileUrl: '/media/projects/04 - Quantity Surveying & Complete Building Quantity Takeoff/Beam.xlsx',
            description: 'Beam concrete volume, shuttering area, and longitudinal/shear reinforcement takeoff.',
          },
          {
            filename: 'Column.xlsx',
            fileUrl: '/media/projects/04 - Quantity Surveying & Complete Building Quantity Takeoff/Column.xlsx',
            description: 'Column concrete volumes, vertical rebar, lateral ties, and cost calculations.',
          },
          {
            filename: 'Slabs.xlsx',
            fileUrl: '/media/projects/04 - Quantity Surveying & Complete Building Quantity Takeoff/Slabs.xlsx',
            description: 'One-way and two-way slab concrete takeoffs and top/bottom reinforcement schedules.',
          },
          {
            filename: 'Shear Walls.xlsx',
            fileUrl: '/media/projects/04 - Quantity Surveying & Complete Building Quantity Takeoff/Shear Walls.xlsx',
            description: 'Core shear wall concrete volumes and boundary element reinforcement takeoff.',
          },
          {
            filename: 'Brick Wall.xlsx',
            fileUrl: '/media/projects/04 - Quantity Surveying & Complete Building Quantity Takeoff/Brick Wall.xlsx',
            description: 'Masonry brickwork, mortar, cement, sand, and plastering quantity calculations.',
          },
          {
            filename: 'Stair Case.xlsx',
            fileUrl: '/media/projects/04 - Quantity Surveying & Complete Building Quantity Takeoff/Stair Case.xlsx',
            description: 'Staircase waist slab, step concrete volumes, and riser/tread reinforcement schedule.',
          },
        ],
      },
    ],
  },
  'construction-planning': {
    title: 'Primavera P6 Construction Scheduling — Residential Villa',
    sectionTitle: 'Academic Projects',
    items: [
      {
        title: 'Primavera P6 Baseline Report',
        kind: 'pdf',
        src: '/media/projects/05 - Primavera P6 Construction Scheduling — Residential Villa/ppm-report.pdf',
        downloadUrl: '/media/projects/05 - Primavera P6 Construction Scheduling — Residential Villa/ppm-report.pdf',
        downloadLabel: 'Download Primavera P6 Report (PDF)',
        caption: 'Comprehensive project management report: 12-month baseline CPM schedule, Work Breakdown Structure (WBS), resource allocation, and Earned Value Analysis.',
        tag: 'PPM Baseline (PDF)',
      },
    ],
  },
  'tahir-residency': {
    title: 'Code Based BIM Modelling & Documentation',
    sectionTitle: 'Academic Projects',
    items: [
      {
        title: 'BIM Portfolio Document',
        kind: 'pdf',
        src: '/media/projects/06 - Tahir Residency — BIM & Architectural Modeling/Collaboration Project - Tahir Residency.pdf',
        downloadUrl: '/media/projects/06 - Tahir Residency — BIM & Architectural Modeling/Collaboration Project - Tahir Residency.pdf',
        downloadLabel: 'Download BIM Portfolio (PDF)',
        caption: 'Full collaborative BIM portfolio: multi-level residential architectural modeling, structural frame coordination, solar radiation studies, and drawing sheets.',
        tag: 'BIM Portfolio (PDF)',
      },
    ],
  },
  'epa-swmm-sewerage-design': {
    title: 'Hydraulic Design of Combined Sewerage System',
    sectionTitle: 'Academic Projects',
    items: [
      {
        title: 'EPA-SWMM Design Report',
        kind: 'pdf',
        src: '/media/projects/07 - Hydraulic Design of Combined Sewerage System/REPORT.pdf',
        downloadUrl: '/media/projects/07 - Hydraulic Design of Combined Sewerage System/REPORT.pdf',
        downloadLabel: 'Download EPA-SWMM Report (PDF)',
        caption: 'Hydraulic simulation and optimization report for a 102-hectare catchment in Wah Cantt, evaluating conduits, drop manholes, and self-cleansing velocity under 30 mm/hr and 60 mm/hr storms.',
        tag: 'Hydraulics Report (PDF)',
      },
    ],
  },
  'recycled-aggregate-concrete': {
    title: 'Evaluation of Recycled Aggregate Concrete',
    sectionTitle: 'Academic Projects',
    items: [
      {
        title: 'Laboratory Research Report',
        kind: 'pdf',
        src: '/media/projects/08 - Evaluation of Recycled Aggregate Concrete/poc-cep-oel-report.pdf',
        downloadUrl: '/media/projects/08 - Evaluation of Recycled Aggregate Concrete/poc-cep-oel-report.pdf',
        downloadLabel: 'Download Concrete Research Report (PDF)',
        caption: 'Experimental investigation into the compressive strength, slump, density, and sustainability benefits of concrete with 50% recycled coarse aggregates.',
        tag: 'Laboratory Report (PDF)',
      },
    ],
  },
  'indeterminate-analysis': {
    title: 'Indeterminate Structural Analysis (RISA-2D vs. Manual)',
    sectionTitle: 'Academic Projects',
    items: [
      {
        title: 'Comparative Analysis Report',
        kind: 'pdf',
        src: '/media/projects/09 - Indeterminate Structural Analysis & Computation/comparison-cep-isa.pdf',
        downloadUrl: '/media/projects/09 - Indeterminate Structural Analysis & Computation/comparison-cep-isa.pdf',
        downloadLabel: 'Download Structural Analysis Report (PDF)',
        caption: 'Detailed computational study comparing manual moment distribution / slope-deflection methods against RISA-2D finite element frame analysis.',
        tag: 'Structural Report (PDF)',
      },
    ],
  },
  'soil-bearing-capacity': {
    title: 'Soil Bearing Capacity & Direct Shear Testing',
    sectionTitle: 'Academic Projects',
    items: [
      {
        title: 'Geotechnical OEL Report',
        kind: 'pdf',
        src: '/media/projects/10 - Soil Bearing Capacity & Direct Shear Testing/oel-geotech.pdf',
        downloadUrl: '/media/projects/10 - Soil Bearing Capacity & Direct Shear Testing/oel-geotech.pdf',
        downloadLabel: 'Download Geotechnical Report (PDF)',
        caption: 'ASTM D3080 direct shear testing report, determining soil cohesion (c), angle of internal friction (phi), and Terzaghi allowable bearing capacity for shallow footings.',
        tag: 'Geotechnical Report (PDF)',
      },
    ],
  },
  'water-treatment': {
    title: 'Water Treatment Sedimentation & Jar Testing',
    sectionTitle: 'Academic Projects',
    items: [
      {
        title: 'Water Treatment Report',
        kind: 'pdf',
        src: '/media/projects/11 - Water Treatment & Environmental Engineering/cep-water-report.pdf',
        downloadUrl: '/media/projects/11 - Water Treatment & Environmental Engineering/cep-water-report.pdf',
        downloadLabel: 'Download Water Treatment Report (PDF)',
        caption: 'Environmental engineering design report: laboratory jar testing for optimum alum coagulant dosage and sizing of continuous-flow sedimentation-cum-coagulation tank per WASA standards.',
        tag: 'Treatment Report (PDF)',
      },
    ],
  },
  'colorado-river-hydrology': {
    title: 'Hydrological Analysis of Colorado River Catchment',
    sectionTitle: 'Academic Projects',
    items: [
      {
        title: 'Hydrology CEP Report',
        kind: 'pdf',
        src: '/media/projects/12 - Surface Water Hydrology & Catchment Runoff/hydology-cep.pdf',
        downloadUrl: '/media/projects/12 - Surface Water Hydrology & Catchment Runoff/hydology-cep.pdf',
        downloadLabel: 'Download Hydrology Report (PDF)',
        caption: 'Watershed precipitation modeling across 6 rain gauges, SCS Curve Number runoff depth calculation, and synthetic/S-curve unit hydrographs for a 600 sq-km catchment.',
        tag: 'Hydrology Report (PDF)',
      },
    ],
  },
  'geometric-design-taxila-gt-road': {
    title: 'Geometric Design & Road Safety Assessment of Taxila GT Road',
    sectionTitle: 'Academic Projects',
    items: [
      {
        title: 'Complete CEP Report',
        kind: 'pdf',
        src: '/media/projects/13 - Geometric Design & Road Safety Assessment of Taxila GT Road/geometric-cep.pdf',
        downloadUrl: '/media/projects/13 - Geometric Design & Road Safety Assessment of Taxila GT Road/geometric-cep.pdf',
        downloadLabel: 'Download Highway Design Report (PDF)',
        caption: 'Comprehensive 30-page engineering report: AutoCAD Civil 3D DTM modeling, horizontal curvature audit against AASHTO Green Book, vertical profile analysis, and road safety remediation.',
        tag: 'Highway Design (PDF)',
      },
    ],
  },
}

// Map aliases to primary catalog keys
const slugAliases: Record<string, string> = {
  'structural-commercial-building': 'structural-design',
  'three-story-school-building': 'school-building-design',
  'retaining-walls-design': 'retaining-walls',
  'quantity-surveying-takeoff': 'quantity-surveying',
  'primavera-p6-scheduling': 'construction-planning',
  'tahir-residency-bim': 'tahir-residency',
  'indeterminate-frame-analysis': 'indeterminate-analysis',
  'soil-bearing-capacity-analysis': 'soil-bearing-capacity',
  'water-treatment-jar-testing': 'water-treatment',
  'taxila-gt-road-geometric-design': 'geometric-design-taxila-gt-road',
  'highway-geometric-design-cep': 'geometric-design-taxila-gt-road',
}

export function getMediaArchive(slug: string): MediaArchiveEntry | null {
  const resolved = slugAliases[slug] || slug
  return mediaArchiveCatalog[resolved] || null
}


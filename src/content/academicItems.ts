export interface AcademicItem {
  sectionId: string
  sectionTitle: string
  slug: string
  title: string
  period: string
  subtitle?: string
  domain?: string
  organization?: string
  badge?: string
  summary: string
  details: string[]
  tools?: string[]
  link?: string
  linkLabel?: string
}

export const academicItems: AcademicItem[] = [
  // ----------------------------------------------------
  // RESEARCH EXPERIENCE
  // ----------------------------------------------------
  {
    sectionId: 'research-experience',
    sectionTitle: 'Research Experience',
    slug: 'bim-to-ar-research',
    title: 'BIM to Augmented Reality: A Standardized Multimodal Deployment Framework',
    period: '2025 – 2026',
    subtitle: 'Research Manuscript & Preprint',
    domain: 'Augmented Reality, Building Information Modeling, Construction Layout',
    organization: 'Department of Civil Engineering, COMSATS University Islamabad, Wah Campus',
    summary:
      'Standardized BIM-to-AR mobile deployment framework converting Autodesk Revit geometries into real-time Android AR applications for on-site layout verification and constructability checks.',
    details: [
      'Authored research preprint published on SSRN (DOI: 10.2139/ssrn.6884926) developed from undergraduate capstone inquiry with co-authors Hassan Ashraf, Faizan Manshad, and Faiz Fareed.',
      'Formulated an end-to-end translation pipeline transferring BIM geometries (Autodesk Revit) into mobile AR engines via FBX and Unity.',
      'Marker-based mode: Uses planar fiducial image markers to anchor full-scale BIM components directly onto physical benchmarks on-site.',
      'Ground-plane mode: Detects real-time horizontal plane surfaces (slabs, floors, grade) via SLAM point clouds for rapid tabletop and walkthrough exploration.',
      'Location-based mode: Leverages geospatial GPS coordinates and Cesium for Unity for large-scale infrastructure alignment.',
      'Integrated model scaling, transparency control, and component-level visibility toggling for structural, architectural, and MEP inspection without specialist hardware.',
      'Secured 3rd Position at the Departmental Open House & Job Fair Spring 2026.',
    ],
    tools: ['Autodesk Revit', 'Unity 3D', 'Vuforia SDK', 'ARCore', 'Cesium for Unity', 'C#', 'FBX'],
    link: 'https://dx.doi.org/10.2139/ssrn.6884926',
    linkLabel: 'Read SSRN Preprint ↗',
  },

  // ----------------------------------------------------
  // ----------------------------------------------------
  // WORK EXPERIENCE
  // ----------------------------------------------------
  {
    sectionId: 'work-experience',
    sectionTitle: 'Work Experience',
    slug: 'archnetix-scan-to-bim',
    title: 'BIM Modeler – Junior',
    period: 'Jul 2026 – Present',
    subtitle: 'Scan-to-BIM & As-Built Documentation',
    domain: 'Scan-to-BIM, Point Cloud Registration, LOD 300/350, Multi-Disciplinary Coordination',
    organization: 'Archnetix, Islamabad',
    summary:
      'Worked on Scan-to-BIM projects converting raw point cloud data into coordinated 3D Revit models to LOD 300/350 across Structural, Architectural, and MEP disciplines.',
    details: [
      'Worked on Scan-to-BIM projects, converting point cloud data into coordinated 3D Revit models to LOD 300/350.',
      'Verified model accuracy against scan data and coordinated deliverables across Structural, Architectural, and MEP disciplines.',
      'Worked alongside the registration team on registering raw point cloud data using Leica Cyclone, with some exposure to Autodesk ReCap.',
      'Responsible for building accurate BIM models in Autodesk Revit in line with modeling standards and project specifications.',
    ],
    tools: ['Autodesk Revit', 'Point Cloud Data', 'Leica Cyclone', 'Autodesk ReCap', 'LOD 300/350', 'BIM Coordination'],
  },
  {
    sectionId: 'work-experience',
    sectionTitle: 'Work Experience',
    slug: 'mount-khalid-high-rise-bim',
    title: 'Engineering Internee',
    period: 'Jul 2025 – Aug 2025',
    subtitle: 'High-Rise Construction & BIM Coordination',
    domain: 'High-Rise Structures, Post-Tensioned Slabs, LOD 300, Clash Detection',
    organization: 'Mount Khalid, Islamabad',
    summary:
      'Field engineering and structural BIM modeling on a landmark 45-storey high-rise residential tower in Islamabad.',
    details: [
      'Supported field and technical teams on a 45-storey high-rise residential tower, coordinating BIM information with site execution requirements.',
      'Modeled 70,000+ structural and architectural elements to LOD 300 in Autodesk Revit, including RC columns, beams, posttensioned slabs, and facades.',
      'Gained hands-on exposure to post-tensioned slab construction, including coordination of PT slab elements with structural and architectural requirements.',
      'Reviewed clash-detection outputs and supported Structural–Architectural coordination for a post-tensioned, high-strength concrete building using concrete strengths of approximately 5,000–10,600 psi.',
      'Extracted model-based quantities and area take-offs from Revit to support BOQ verification and project cost-estimation workflows.',
    ],
    tools: ['Autodesk Revit', 'PT Slab Coordination', 'LOD 300', 'Clash Detection', 'High-Rise Construction', 'BOQ Verification'],
  },
  {
    sectionId: 'work-experience',
    sectionTitle: 'Work Experience',
    slug: 'resolve-nstp-tower-intern',
    title: 'Engineering Internee',
    period: 'Jul 2024',
    subtitle: 'Site Management & Field Execution',
    domain: 'Field Execution, Drawing Interpretation, QA/QC, BOQ Reconciliation',
    organization: 'Resolve & NSTP Tower, NUST University Islamabad',
    summary:
      'Site engineering supervision, drawing interpretation, QA/QC inspection, and quantity take-offs on live NUST construction projects.',
    details: [
      'Interpreted and cross-checked structural, architectural, and site-layout drawings against live construction activities, identifying discrepancies for engineer review.',
      'Supported field execution and inspection activities, including slab-related construction exposure, reinforcement, formwork, and concrete works.',
      'Performed QA/QC checks on concrete curing, formwork, and rebar cover and reported observations to improve compliance with construction requirements.',
      'Calculated full-floor steel reinforcement weights and performed quantity take-offs for bricks, steel, and concrete, supporting material requisition and BOQ reconciliation.',
      'Coordinated with site personnel and gained cross-functional exposure to site management, project documentation, and cost estimation on live NUST projects.',
    ],
    tools: ['Drawing Interpretation', 'Site QA/QC', 'Reinforcement Inspection', 'Quantity Take-offs', 'BOQ Reconciliation', 'Site Management'],
  },

  // ----------------------------------------------------
  // ACADEMIC PROJECTS
  // ----------------------------------------------------
  {
    sectionId: 'projects',
    sectionTitle: 'Academic Projects',
    slug: 'structural-commercial-building',
    title: 'Structural Analysis & Design of Commercial Building',
    period: '2026',
    subtitle: 'Structural Engineering Project',
    domain: 'Finite Element Modeling, Seismic Lateral Loads, RC Design',
    organization: 'COMSATS University Islamabad, Wah Campus',
    summary:
      '3D finite element structural modeling and seismic analysis for a multi-story moment-resisting RC building with shear walls.',
    details: [
      'Modeled building frame in ETABS under gravity and lateral seismic forces compliant with Building Code of Pakistan (BCP-2021) and UBC-97.',
      'Carried out member design for reinforced concrete columns, beams, two-way slabs, and core shear walls per ACI 318-19.',
      'Performed manual footing sizing with one-way and two-way punching shear calculations and verified foundation settlement in SAFE.',
    ],
    tools: ['ETABS', 'SAFE', 'ACI 318-19', 'BCP-2021', 'Shear Walls'],
  },
  {
    sectionId: 'projects',
    sectionTitle: 'Academic Projects',
    slug: 'three-story-school-building',
    title: 'Three-Story RC School Building Design',
    period: '2025',
    subtitle: 'Complex Engineering Problem (CEP)',
    domain: 'ACI 318-14, ASCE 7-10, Concrete Member Sizing',
    organization: 'COMSATS University Islamabad, Wah Campus',
    summary:
      'Complete structural analysis and manual reinforcement design for a 3-story reinforced concrete school building on a 120 x 180 ft plot.',
    details: [
      'Designed one-way solid slabs, singly reinforced continuous beams, and doubly reinforced critical span beams per ACI 318-14.',
      'Sized exterior square columns (12" x 12") and interior circular spiral columns (12" dia) under axial and moment loads.',
      'Produced complete architectural and structural AutoCAD drafts with bar bending details.',
    ],
    tools: ['ACI 318-14', 'ASCE 7-10', 'AutoCAD', 'Autodesk Revit', 'RC Design'],
  },
  {
    sectionId: 'projects',
    sectionTitle: 'Academic Projects',
    slug: 'retaining-walls-design',
    title: 'Design of Gravity and Cantilever Retaining Walls',
    period: '2025',
    subtitle: 'Geotechnical & Structural Design',
    domain: 'Rankine Earth Pressure, Parametric Spreadsheets, Stability Analysis',
    organization: 'COMSATS University Islamabad, Wah Campus',
    summary:
      'Automated Excel calculation suite for stability analysis and structural detailing of gravity and cantilever retaining walls.',
    details: [
      'Programmed stability checks against overturning, sliding, and bearing capacity failure under Rankine active earth pressure.',
      'Automated structural reinforcement design for stem, toe, and heel slabs, including shear keys and development length curtailment.',
    ],
    tools: ['Parametric Excel', 'Stability Analysis', 'Rankine Earth Pressure', 'Retaining Walls'],
  },
  {
    sectionId: 'projects',
    sectionTitle: 'Academic Projects',
    slug: 'quantity-surveying-takeoff',
    title: 'Quantity Surveying & Complete Building Quantity Takeoff',
    period: '2025',
    subtitle: 'Cost Engineering & Estimation',
    domain: 'Bar Bending Schedules (BBS), Material Takeoffs, Cost Analysis',
    organization: 'COMSATS University Islamabad, Wah Campus',
    summary:
      'Exhaustive itemized building quantity takeoff and bar bending schedule calculating 112 tons of structural reinforcement steel.',
    details: [
      'Calculated concrete volumes for raft foundations, columns, beams, shear walls, retaining walls, and slabs.',
      'Formulated wet-to-dry conversions, shrinkage factors, and mix proportions for brick masonry, plaster, and mortar.',
      'Computed bar lengths, lap lengths, and steel weights across various rebar diameters totaling 111,854 kg of steel.',
    ],
    tools: ['Microsoft Excel', 'Bar Bending Schedules (BBS)', 'BOQ Formulation', 'Costing'],
  },
  {
    sectionId: 'projects',
    sectionTitle: 'Academic Projects',
    slug: 'tahir-residency-bim',
    title: 'Tahir Residency — BIM & Architectural Modeling',
    period: '2025',
    subtitle: 'Residential Architecture & BIM (Collaborative Project)',
    domain: 'Autodesk Revit, Insight 360, Structural Coordination, Solar Analysis',
    organization: 'COMSATS University Islamabad, Wah Campus',
    badge: 'Collaborative Project',
    summary:
      'Collaborative project contributed by Faizan Manshad and Haider Ali. Executed end-to-end parametric modeling, structural coordination, solar orientation analysis, and technical documentation for a contemporary multi-level residential dwelling.',
    details: [
      'Collaborative Project: Developed in collaboration and contributed by Faizan Manshad and Haider Ali.',
      'Parametric Architectural Modeling: Developed architectural envelopes, internal layouts, curtain glazing, and custom families in Autodesk Revit.',
      'Structural Coordination: Aligned reinforced concrete columns, beams, and slab systems in 3D to resolve spatial clashes prior to construction.',
      'Solar Path & Insolation Studies: Performed dynamic solar trajectory simulations in Insight 360 to optimize passive daylighting and shading louvers.',
      'Drawing Documentation: Generated tagged floor plans, building elevations, callout wall sections, and itemized material takeoff schedules.',
    ],
    tools: ['Autodesk Revit', 'Insight 360', 'BIM Coordination', 'Solar Path Analysis', 'Drawing Documentation', 'BOQ Schedules'],
    link: 'https://faizanmanshad.com/projects/tahir-residency/',
    linkLabel: 'View Live Project Details ↗',
  },
  {
    sectionId: 'projects',
    sectionTitle: 'Academic Projects',
    slug: 'primavera-p6-scheduling',
    title: 'Primavera P6 Construction Scheduling — Residential Villa',
    period: '2025',
    subtitle: 'Project Planning & Management',
    domain: 'Primavera P6, WBS/OBS, Critical Path Method (CPM)',
    organization: 'COMSATS University Islamabad, Wah Campus',
    summary:
      'One-year baseline construction schedule and resource allocation model developed in Primavera P6.',
    details: [
      'Constructed Enterprise Project Structure (EPS), Organizational Breakdown Structure (OBS), and Work Breakdown Structure (WBS).',
      'Assigned resources and generated Gantt charts, critical path analyses, S-curves, and Earned Value tracking metrics.',
    ],
    tools: ['Primavera P6', 'CPM Scheduling', 'WBS/OBS', 'Earned Value Analysis'],
  },
  {
    sectionId: 'projects',
    sectionTitle: 'Academic Projects',
    slug: 'epa-swmm-sewerage-design',
    title: 'Hydraulic Design of Combined Sewerage System',
    period: '2025',
    subtitle: 'Water Resources & Municipal Hydraulics',
    domain: 'EPA SWMM, Dynamic Wave Routing, Urban Catchments',
    organization: 'COMSATS University Islamabad, Wah Campus',
    summary:
      'Hydrodynamic modeling of a combined sanitary and stormwater sewerage network for a 102-hectare urban catchment in Wah Cantt.',
    details: [
      'Modeled runoff flows under extreme precipitation events up to 60 mm/hr using EPA SWMM dynamic wave hydraulic routing.',
      'Addressed 47-foot elevation drops through drop manhole optimization and pipe slope control to ensure self-cleansing velocity (>= 0.6 m/s).',
    ],
    tools: ['EPA-SWMM', 'Dynamic Wave Routing', 'Drop Manholes', 'Sewerage Networks'],
  },
  {
    sectionId: 'projects',
    sectionTitle: 'Academic Projects',
    slug: 'recycled-aggregate-concrete',
    title: 'Evaluation of Recycled Aggregate Concrete',
    period: '2024',
    subtitle: 'Materials Science & Sustainable Concrete',
    domain: 'Properties of Concrete, Mix Design, Compressive Testing',
    organization: 'COMSATS University Islamabad, Wah Campus',
    summary:
      'Experimental study investigating the mechanical behavior of structural concrete incorporating 50% recycled coarse aggregate.',
    details: [
      'Prepared concrete test specimens at varying water-cement ratios and tested workability, slump, and density.',
      'Conducted destructive compressive strength tests at 7 and 28 days to formulate sustainable concrete replacement guidelines.',
    ],
    tools: ['Compressive Testing', 'Workability Tests', 'Recycled Aggregates', 'Sustainable Concrete'],
  },
  {
    sectionId: 'projects',
    sectionTitle: 'Academic Projects',
    slug: 'indeterminate-frame-analysis',
    title: 'Indeterminate Structural Analysis (RISA-2D vs. Manual)',
    period: '2024',
    subtitle: 'Structural Mechanics & Computation',
    domain: 'Matrix Displacement Method, Slope Deflection, RISA-2D',
    organization: 'COMSATS University Islamabad, Wah Campus',
    summary:
      'Verification of indeterminate frame behavior comparing hand matrix slope-deflection solutions against RISA-2D computer models.',
    details: [
      'Computed support reactions, axial force diagrams (AFD), shear force diagrams (SFD), and bending moment diagrams (BMD).',
      'Achieved close correlation between hand calculations and numerical simulations across non-sway and sway frames.',
    ],
    tools: ['RISA-2D', 'Manual Calculations', 'Matrix Methods', 'SFD & BMD'],
  },
  {
    sectionId: 'projects',
    sectionTitle: 'Academic Projects',
    slug: 'soil-bearing-capacity-analysis',
    title: 'Soil Bearing Capacity & Direct Shear Testing',
    period: '2024',
    subtitle: 'Geotechnical Engineering',
    domain: 'ASTM D3080, Terzaghi Equations, Shear Strength',
    organization: 'COMSATS University Islamabad, Wah Campus',
    summary:
      'Laboratory determination of soil cohesion and internal friction angle to establish safe bearing capacity for column footings.',
    details: [
      'Conducted direct shear lab testing on three soil specimens under normal stresses of 50, 100, and 150 kPa.',
      'Applied Terzaghi bearing capacity equations to determine ultimate and allowable bearing pressures for shallow footing design.',
    ],
    tools: ['ASTM D3080', 'Terzaghi Theory', 'Direct Shear Test', 'Bearing Capacity'],
  },
  {
    sectionId: 'projects',
    sectionTitle: 'Academic Projects',
    slug: 'water-treatment-jar-testing',
    title: 'Water Treatment Sedimentation & Jar Testing',
    period: '2025',
    subtitle: 'Environmental Engineering',
    domain: 'Coagulation, Jar Testing, Municipal Treatment Sizing',
    organization: 'COMSATS University Islamabad, Wah Campus',
    summary:
      'Raw water characterization and jar test optimization to design a scalable municipal sedimentation tank for Faisal Hills.',
    details: [
      'Analyzed raw water parameters (pH 7.23, TDS 413 mg/L, TSS 2 mg/L).',
      'Identified optimum alum coagulant dosage of 2 mg/L achieving 250 FTU turbidity reduction and scaled tank dimensions per WASA standards.',
    ],
    tools: ['Jar Testing', 'Alum Dosage', 'Sedimentation Design', 'WASA Guidelines'],
  },
  {
    sectionId: 'projects',
    sectionTitle: 'Academic Projects',
    slug: 'colorado-river-hydrology',
    title: 'Hydrological Analysis of Colorado River Catchment',
    period: '2024',
    subtitle: 'Surface Water Hydrology',
    domain: 'SCS-CN Method, Unit Hydrographs, Catchment Modeling',
    organization: 'COMSATS University Islamabad, Wah Campus',
    summary:
      'Precipitation and stream discharge modeling for a 600 sq-km watershed in the Colorado River Grand Valley.',
    details: [
      'Applied Thiessen polygon weighting across 6 rain gauge stations, derived synthetic and S-curve unit hydrographs, and estimated peak runoff discharges.',
    ],
    tools: ['SCS-CN Method', 'Hydrographs', 'Discharge Estimation', 'Hydrology'],
  },

  // ----------------------------------------------------
  // CERTIFICATIONS
  // ----------------------------------------------------
  {
    sectionId: 'certifications',
    sectionTitle: 'Certifications',
    slug: 'master-structural-design',
    title: 'Master Structural Design of Buildings',
    period: '2026',
    subtitle: 'Certification',
    domain: 'ETABS Modeling, SAFE Foundation Design, Member Detailing',
    organization: 'Young Engineers Forum (YEF)',
    summary:
      'Comprehensive structural engineering course covering 3D modeling, gravity and lateral load application, frame design, and foundation detailing.',
    details: [
      'Hands-on training in ETABS for reinforced concrete moment frames and shear walls.',
      'Detailed slab and mat foundation design in SAFE with code-compliant reinforcement schedules.',
      'Issued with Certificate ID YEF-MSD-0937 on May 10, 2026.',
    ],
    tools: ['ETABS', 'SAFE', 'ACI Codes', 'Structural Design'],
    link: 'https://drive.google.com/file/d/1j9RUpx5MMwkCiRClTR1IqOeb9s6hflsr/view?usp=sharing',
    linkLabel: 'View Certificate (PDF) ↗',
  },
  {
    sectionId: 'certifications',
    sectionTitle: 'Certifications',
    slug: 'bim-management-revit-maintenance',
    title: 'BIM Management: Revit Model Maintenance',
    period: '2025',
    subtitle: 'Certification',
    domain: 'BIM Coordination, Model Health, Worksharing',
    organization: 'LinkedIn Learning',
    summary:
      'Techniques for managing worksets, linked files, audit protocols, and model hygiene in large multi-discipline Revit projects.',
    details: [
      'Best practices for compacting Revit project files, purging unused families, and managing CAD imports.',
      'Maintaining stable, clash-free collaborative workshared project files (.rvt).',
    ],
    tools: ['Autodesk Revit', 'BIM Management', 'Worksets', 'Model Maintenance'],
    link: 'https://www.linkedin.com/learning/certificates/5d0ab33cc4a43036d165e9f6e8ed04483b65f8cf1d473311f33721b0e422a6b9',
    linkLabel: 'View Certificate ↗',
  },
  {
    sectionId: 'certifications',
    sectionTitle: 'Certifications',
    slug: 'revit-beginners-architecture-structure-mep',
    title: 'Revit For Beginners: Architecture, Structure and MEP',
    period: '2025',
    subtitle: 'Certification',
    domain: 'Multi-discipline BIM Modeling, Parametric Families',
    organization: 'VIS Management Consulting Inc., Canada & CISD',
    summary:
      'Two-month technical certification spanning architectural modeling, structural framing, and MEP systems in Autodesk Revit.',
    details: [
      'Completed 2 months (07/03/25 – 04/05/25) of coursework with official verification OCN 2315732.',
      'Developed parametric families, coordinated multidisciplinary plans, and produced sheet documentation.',
    ],
    tools: ['Autodesk Revit Architecture', 'Revit Structure', 'Revit MEP', 'Family Creation'],
    link: 'https://drive.google.com/file/d/1Fb6-7TqBEhUImUxV9cBBm0OnMCvPKBSF/view?usp=sharing',
    linkLabel: 'View Certificate (PDF) ↗',
  },
  {
    sectionId: 'certifications',
    sectionTitle: 'Certifications',
    slug: 'learning-revit-2023',
    title: 'Learning Revit 2023',
    period: '2025',
    subtitle: 'Certification',
    domain: 'Building Information Modeling, 2D/3D Drafting',
    organization: 'LinkedIn Learning',
    summary:
      'Core Revit tools, parametric constraints, 3D modeling, schedule extraction, and technical drafting standards.',
    details: [
      'Covered views, levels, grids, structural elements, compound wall assemblies, and door/window schedules.',
      'Completed on Nov 02, 2025 with official LinkedIn Learning certificate.',
    ],
    tools: ['Autodesk Revit 2023', 'Schedules', '3D Views', 'Drafting'],
    link: 'https://www.linkedin.com/learning/certificates/e6a5ba422b1ffb7cf0da5fd91001ef9336326185b0a3e1fa4b3aabc22eef1cc1',
    linkLabel: 'View Certificate ↗',
  },
  {
    sectionId: 'certifications',
    sectionTitle: 'Certifications',
    slug: 'excel-essential-training',
    title: 'Excel Essential Training (Microsoft 365)',
    period: '2025',
    subtitle: 'Certification',
    domain: 'Engineering Calculations, Data Analysis',
    organization: 'LinkedIn Learning / NASBA CPE',
    summary:
      'CPE-accredited training in Microsoft Excel for data analysis, complex engineering calculation workbooks, lookups, and structured financial/takeoff tables.',
    details: [
      'Completed NASBA-accredited Continuing Professional Education (CPE) course on advanced Microsoft Excel workflows, functions, logic formulas, and analytical spreadsheet design.',
      'Covered dynamic array formulas, XLOOKUP, pivot tables, and engineering data validation.',
    ],
    tools: ['Microsoft Excel', 'Data Analysis', 'Engineering Spreadsheets', 'Formulas'],
    link: 'https://www.linkedin.com/learning/certificates/478842037430d0dff9eb6fd276e7c600d985d5fe1779f9fe0eef92ccdd0bd0ed',
    linkLabel: 'View Certificate ↗',
  },
  {
    sectionId: 'certifications',
    sectionTitle: 'Certifications',
    slug: 'english-career-development',
    title: 'English for Career Development MOOC',
    period: '2025',
    subtitle: 'Professional Credential',
    domain: 'Professional Communication, Networking, Technical Writing',
    organization: 'U.S. Department of State / FHI 360',
    summary:
      'Credentialed professional communication course covering international resumes, cover letter drafting, and technical interview strategies.',
    details: [
      'Completed coursework through the Online Professional English Network (OPEN) funded by the U.S. Department of State.',
      'Focus on technical engineering writing, international resume design, and cross-cultural communication.',
    ],
    tools: ['Technical Writing', 'Communication', 'Career Development'],
    link: 'https://badges.parchment.com/public/assertions/BeVOZH94RU-G_z9Nm9WIgw',
    linkLabel: 'View Credential Badge ↗',
  },
  {
    sectionId: 'certifications',
    sectionTitle: 'Certifications',
    slug: 'understanding-ar-vr',
    title: 'Understanding Augmented and Virtual Reality: An Introduction',
    period: '2025',
    subtitle: 'Certification',
    domain: 'Extended Reality (XR), Spatial Computing, Immersion',
    organization: 'LinkedIn Learning',
    summary:
      'Core spatial computing, hardware, and tracking technologies foundational to BIM-to-AR construction applications.',
    details: [
      'Explored computer vision tracking, SLAM, mobile AR frameworks (ARCore/Vuforia), and user interaction mechanics in virtual environments.',
      'Directly applied knowledge to undergraduate BIM-to-AR research development.',
    ],
    tools: ['Augmented Reality', 'Virtual Reality', 'Spatial Computing', 'XR'],
    link: 'https://www.linkedin.com/learning/certificates/1ef8f65861d44c5211ab728cc9ee99bc7eeaab7591b59f17d0b98010cfa9ecba',
    linkLabel: 'View Certificate ↗',
  },

  // ----------------------------------------------------
  // PROFESSIONAL TRAINING & CPD
  // ----------------------------------------------------
  {
    sectionId: 'professional-trainings',
    sectionTitle: 'Professional training & CPD',
    slug: 'cpd-fem-structural-analysis',
    title: 'Finite Element Method: A Modern Tool for Structural Analysis in Civil Engineering',
    period: '2025',
    subtitle: 'PEC-Accredited CPD Seminar (1.0 Credit Point)',
    domain: 'Finite Element Modeling, Structural Mechanics',
    organization: 'Civil Engineering Department, COMSATS University Islamabad, Wah Campus',
    summary:
      'PEC-accredited seminar on finite element theory, discretization methods, and numerical modeling applications in modern structural engineering.',
    details: [
      'Delivered by Dr. Engr. Zahid Shabir on May 15, 2025.',
      'Covered stiffness matrix formulation, element meshing considerations, boundary conditions, and FEA interpretation in engineering practice.',
    ],
    tools: ['Finite Element Method (FEM)', 'Structural Analysis', 'Numerical Modeling'],
    link: 'https://drive.google.com/file/d/1LNap1LuGvWt-hezr-q3R4-YNzVEC2G7k/view?usp=sharing',
    linkLabel: 'View Certificate (PDF) ↗',
  },
  {
    sectionId: 'professional-trainings',
    sectionTitle: 'Professional training & CPD',
    slug: 'cpd-ml-civil-engineering',
    title: 'Impact of Machine Learning in the Field of Civil Engineering',
    period: '2022',
    subtitle: 'PEC-Accredited CPD Seminar (0.5 Credit Point)',
    domain: 'Machine Learning, Predictive Modeling, Concrete Optimization',
    organization: 'Civil Engineering Department, COMSATS University Islamabad, Wah Campus',
    summary:
      'PEC-accredited seminar examining machine learning applications in material strength prediction, structural health monitoring, and construction safety.',
    details: [
      'Keynote lecture by Dr. Muhammad Faisal Javed on October 13, 2022.',
      'Explored regression and neural network applications for predicting concrete compressive strength from mix design datasets.',
    ],
    tools: ['Machine Learning', 'Data Science', 'Civil Engineering'],
    link: 'https://drive.google.com/file/d/1K2QLNO9ofBrE-9ePgWVLkK-pKHoMjmD9/view?usp=sharing',
    linkLabel: 'View Certificate (PDF) ↗',
  },
  {
    sectionId: 'professional-trainings',
    sectionTitle: 'Professional training & CPD',
    slug: 'cpd-integrating-technologies',
    title: 'Integrating Technologies in Civil Engineering',
    period: '2023',
    subtitle: 'PEC-Accredited CPD Seminar (0.5 Credit Point)',
    domain: 'Digital Construction, Technology Integration, Smart Infrastructure',
    organization: 'Civil Engineering Department, COMSATS University Islamabad, Wah Campus',
    summary:
      'Seminar exploring technology adoption in infrastructure projects, from sensor networks to integrated BIM project delivery.',
    details: [
      'Delivered by Dr. Naveed Anwar on September 27, 2023.',
      'Focused on technology integration roadmaps, data interoperability, and automated construction verification.',
    ],
    tools: ['Digital Construction', 'Technology Integration', 'Smart Infrastructure'],
    link: 'https://drive.google.com/file/d/1_BuWOnIMk3DTXkhCPAZAhcSuBluB00Zr/view?usp=sharing',
    linkLabel: 'View Certificate (PDF) ↗',
  },
  {
    sectionId: 'professional-trainings',
    sectionTitle: 'Professional training & CPD',
    slug: 'cpd-national-heritages',
    title: 'Contemporary Strategies for the Restoration and Preservation of National Heritages',
    period: '2025',
    subtitle: 'PEC-Accredited CPD Seminar (1.0 Credit Point)',
    domain: 'Structural Restoration, Heritage Preservation, Historic Materials',
    organization: 'Civil Engineering Department, COMSATS University Islamabad, Wah Campus',
    summary:
      'Advanced seminar on structural retrofitting, non-destructive testing, and materials conservation for historic and heritage buildings.',
    details: [
      'Delivered by Prof. Dr. Anwar Khitab on February 20, 2025.',
      'Analyzed non-invasive inspection techniques, compatible lime mortar mixes, and seismic retrofitting methods for cultural monuments.',
    ],
    tools: ['Heritage Conservation', 'Structural Restoration', 'Non-Destructive Testing'],
    link: 'https://drive.google.com/file/d/1MUAemqSaowgMKSIV7xFlarj4PZNP-U2D/view?usp=sharing',
    linkLabel: 'View Certificate (PDF) ↗',
  },
  {
    sectionId: 'professional-trainings',
    sectionTitle: 'Professional training & CPD',
    slug: 'cpd-ndt-concrete-bridges',
    title: 'Non-Destructive Test Methods for Concrete Bridge',
    period: '2024',
    subtitle: 'PEC-Accredited CPD Seminar (1.0 Credit Point)',
    domain: 'Bridge Inspection, Non-Destructive Testing (NDT), Structural Health',
    organization: 'Civil Engineering Department, COMSATS University Islamabad, Wah Campus',
    summary:
      'Practical seminar covering field NDT techniques for evaluating concrete strength, corrosion, and internal voids in bridge structures.',
    details: [
      'Delivered by Dr. Sardar Kashif ur Rehman on May 30, 2024.',
      'Examined Schmidt rebound hammer testing, ultrasonic pulse velocity (UPV), half-cell potential rebar corrosion detection, and ground-penetrating radar.',
    ],
    tools: ['NDT Methods', 'Schmidt Hammer', 'Ultrasonic Pulse Velocity', 'Bridge Inspection'],
    link: 'https://drive.google.com/file/d/1_jv4n32isZyCARbVg_eJ7QQiFS2GsOS2/view?usp=sharing',
    linkLabel: 'View Certificate (PDF) ↗',
  },
  {
    sectionId: 'professional-trainings',
    sectionTitle: 'Professional training & CPD',
    slug: 'cpd-rut-depth-asphalt',
    title: 'Modeling and Analyzing Rut Depth in Asphalt Mixtures for Sustainable Road Performance',
    period: '2024',
    subtitle: 'PEC-Accredited CPD Seminar (1.0 Credit Point)',
    domain: 'Pavement Design, Asphalt Rheology, Rutting Resistance',
    organization: 'Civil Engineering Department, COMSATS University Islamabad, Wah Campus',
    summary:
      'Technical seminar focusing on wheel-tracking simulations, temperature susceptibility, and rut depth prediction for high-traffic pavements.',
    details: [
      'Delivered by Dr. Sabahat Hassan on December 12, 2024.',
      'Covered visco-elastic pavement modeling, modifier additives, and sustainable asphalt mix optimization.',
    ],
    tools: ['Pavement Mechanics', 'Asphalt Design', 'Rutting Analysis'],
    link: 'https://drive.google.com/file/d/1kz4RBRwWZuscXXqaSLyNtTrfSr4aKkqx/view?usp=sharing',
    linkLabel: 'View Certificate (PDF) ↗',
  },
  {
    sectionId: 'professional-trainings',
    sectionTitle: 'Professional training & CPD',
    slug: 'cpd-sustainable-urban-planning',
    title: 'Sustainable Urban Planning and Design',
    period: '2025',
    subtitle: 'PEC-Accredited CPD Seminar (1.0 Credit Point)',
    domain: 'Urban Infrastructure, Transit-Oriented Design, Climate Resilience',
    organization: 'Civil Engineering Department, COMSATS University Islamabad, Wah Campus',
    summary:
      'Framework seminar on sustainable urban growth, green stormwater infrastructure, and resilient municipal engineering design.',
    details: [
      'Delivered by Ms. Fauzia Rizwan on September 24, 2025.',
      'Analyzed low-impact urban drainage, walkable community layouts, and transit integration strategies.',
    ],
    tools: ['Sustainable Planning', 'Urban Design', 'Green Infrastructure'],
    link: 'https://drive.google.com/file/d/12EN9hVUo4pIIEXHoD42JODfV4SnJweIa/view?usp=sharing',
    linkLabel: 'View Certificate (PDF) ↗',
  },
  {
    sectionId: 'professional-trainings',
    sectionTitle: 'Professional training & CPD',
    slug: 'cpd-gis-remote-sensing',
    title: 'Application of GIS and Remote Sensing in Civil Engineering',
    period: '2026',
    subtitle: 'PEC-Accredited CPD Seminar (1.0 Credit Point)',
    domain: 'GIS, Remote Sensing, Geospatial Infrastructure Analysis',
    organization: 'Civil Engineering Department, COMSATS University Islamabad, Wah Campus',
    summary:
      'Seminar exploring satellite imagery, digital elevation models, and spatial analytics for terrain modeling, highway route alignment, and flood mapping.',
    details: [
      'Delivered by Engr. Dr. M. Usman Arshid on February 12, 2026.',
      'Demonstrated spatial multi-criteria evaluations for route selection, catchment delineation, and asset management.',
    ],
    tools: ['GIS', 'Remote Sensing', 'Geospatial Modeling'],
    link: 'https://drive.google.com/file/d/1RoCqKQ3vyjRd73AMPWbMT_N29kiMX-81/view?usp=sharing',
    linkLabel: 'View Certificate (PDF) ↗',
  },
  {
    sectionId: 'professional-trainings',
    sectionTitle: 'Professional training & CPD',
    slug: 'cpd-fidic-variation-orders',
    title: 'Variation Order as per FIDIC Conditions of Contract',
    period: '2025',
    subtitle: 'PEC-Accredited CPD Seminar (1.0 Credit Point)',
    domain: 'Construction Law, FIDIC Contracts, Contract Administration',
    organization: 'Civil Engineering Department, COMSATS University Islamabad, Wah Campus',
    summary:
      'Professional training on contract administration, variation valuation clauses, and claims mitigation under FIDIC Red and Yellow Books.',
    details: [
      'Delivered by Engr. Sadaqat Hussain on October 8, 2025.',
      'Explored engineer determination procedures, daywork provisions, delay notices, and dispute adjudication boards.',
    ],
    tools: ['FIDIC Contracts', 'Variation Orders', 'Claims Management'],
    link: 'https://drive.google.com/file/d/1e0KIXDgLJ5XrxpWqdjG0VwkgX0OlTsSL/view?usp=sharing',
    linkLabel: 'View Certificate (PDF) ↗',
  },
  {
    sectionId: 'professional-trainings',
    sectionTitle: 'Professional training & CPD',
    slug: 'workshop-introduction-r',
    title: 'One Day Workshop on Introduction to R',
    period: '2023',
    subtitle: 'Technical Workshop',
    domain: 'Statistical Computing, Data Analysis, Engineering Hydrology',
    organization: 'UNESCO Chair on Knowledge Systems for IWRM, CUI Wah Campus',
    summary:
      'Intensive hands-on workshop on R programming syntax, data frames, statistical visualization, and hydrology analytics.',
    details: [
      'Conducted under the direction of Prof. Dr. Muhammad Abid on November 23, 2023.',
      'Developed R scripts for rainfall trend analysis, probability distribution fitting, and hydrological time-series charting.',
    ],
    tools: ['R Language', 'Data Analysis', 'Hydrology Statistics'],
    link: 'https://drive.google.com/file/d/1_ZmipWgwsPNcgC6HoDpWtbLZnLk4t9_Z/view?usp=sharing',
    linkLabel: 'View Certificate (PDF) ↗',
  },
  {
    sectionId: 'professional-trainings',
    sectionTitle: 'Professional training & CPD',
    slug: 'webinar-ai-ml-civil-pef',
    title: 'Application of AI/ML in Civil Engineering Webinar',
    period: '2024',
    subtitle: 'Professional Webinar',
    domain: 'Artificial Intelligence, Machine Learning, Automation',
    organization: 'Pakistan Engineers Forum (PEF - KP/GB)',
    summary:
      'Webinar highlighting current industrial applications of artificial intelligence in structural optimization and automated inspection.',
    details: [
      'Attended on September 12, 2024.',
      'Explored computer vision for crack detection, genetic algorithms for structural weight optimization, and AI predictive maintenance.',
    ],
    tools: ['Artificial Intelligence', 'Structural Optimization', 'Computer Vision'],
    link: 'https://drive.google.com/file/d/1V6_vM5n-f9t9H0J5z9j3c-8-k1-X1y2z/view?usp=sharing',
    linkLabel: 'View Certificate (PDF) ↗',
  },

  // ----------------------------------------------------
  // CONFERENCES
  // ----------------------------------------------------
  {
    sectionId: 'conferences',
    sectionTitle: 'Conferences',
    slug: 'conference-cacio-2024',
    title: '4th UW-POFs Joint Conference (CACIO-2024)',
    period: '2024',
    subtitle: 'Academic & Industrial Conference',
    domain: 'Industrial Academia Collaboration, Advanced Manufacturing, Materials',
    organization: 'University of Wah & Pakistan Ordnance Factories (POF)',
    summary:
      'Participated in the 4th Joint Conference on Academia\'s Collaboration with Industrial Organizations held on December 18, 2024.',
    details: [
      'Explored industry-sponsored research, materials testing, and university-defense sector knowledge transfer.',
    ],
    tools: ['Industrial Collaboration', 'Research Innovation', 'Conference'],
    link: 'https://drive.google.com/file/d/1B7i9qQ4w9yRt3AMPWbMT_N29kiMX-81/view?usp=sharing',
    linkLabel: 'View Certificate (PDF) ↗',
  },


  // ----------------------------------------------------
  // HONOURS & AWARDS
  // ----------------------------------------------------
  {
    sectionId: 'honors-awards',
    sectionTitle: 'Honours & Awards',
    slug: 'award-gold-medalist',
    title: 'Gold Medalist',
    period: '2026',
    subtitle: 'Highest Academic Honor',
    domain: 'Academic Excellence, Summa Cum Laude Standing',
    organization: 'COMSATS University Islamabad, Wah Campus',
    summary:
      'Awarded the University Gold Medal on July 6, 2026 for graduating first in class with a Cumulative GPA of 3.95 / 4.00 (98% aggregate) across all 8 semesters.',
    details: [
      'Maintained the highest cumulative grade point average in the Department of Civil Engineering across the entire 2022–2026 graduating class.',
      'Completed 137 registered credit hours with 541.26 total quality points, achieving straight A/A- grades throughout all advanced structural and civil engineering courses.',
    ],
    tools: ['Gold Medal', 'CGPA 3.95/4.00', '1st Position', 'Academic Distinction'],
    link: 'https://drive.google.com/file/d/1X5X9m7p5K9l3c-8-k1-X1y2z/view?usp=sharing',
    linkLabel: 'View Degree & Gold Medal Record ↗',
  },
  {
    sectionId: 'honors-awards',
    sectionTitle: 'Honours & Awards',
    slug: 'award-aspire-skill-advancement-grant',
    title: 'Skill Advancement Grant Winner — Aspire Institute',
    period: '2026',
    subtitle: 'International Academic & Skill Grant ($155)',
    domain: 'GFRP Reinforced Concrete Design, ACI 440.11-22, Structural Innovation',
    organization: 'Aspire Institute (Founded at Harvard University) & Aspire Leaders Program',
    badge: 'International Merit Grant',
    summary:
      'Awarded the competitive Skill Advancement Grant ($155) by Aspire Institute to support specialized professional training in "Designing Concrete Structures Reinforced with GFRP Bars Using the ACI CODE-440.11-22".',
    details: [
      'Selected as a Skill Advancement Grant winner by Aspire Institute among international alumni of the Aspire Leaders Program (Cohort 01, 2026).',
      'Grant funding ($155) allocated towards advanced specialized credentialing in designing structural concrete elements reinforced with Glass Fiber Reinforced Polymer (GFRP) bars per ACI 440.11-22 code standards.',
      'Recognized by Aspire Leaders Program - Pakistan for turning leadership and engineering learning into impactful technical practice and community contribution.',
      'Featured by Aspire Institute in an official alumni spotlight celebrating leadership growth, technical advancement, and social impact.',
    ],
    tools: ['Aspire Institute', 'Skill Advancement Grant', 'GFRP Concrete', 'ACI 440.11-22', '$155 Grant'],
  },
  {
    sectionId: 'honors-awards',
    sectionTitle: 'Honours & Awards',
    slug: 'award-pof-scholarship',
    title: 'Pakistan Ordnance Factory (POF) Merit Scholarship',
    period: '2022 – 2026',
    subtitle: 'Competitive Academic Scholarship',
    domain: 'Tuition Fee Waiver, Campus-Wide Merit Ranking',
    organization: 'COMSATS University Islamabad & POF',
    summary:
      'Awarded competitive 50% tuition waiver merit scholarship across 5 out of 8 undergraduate semesters based on top academic ranking.',
    details: [
      'Highly competitive merit-based scholarship strictly limited to the top 20 students per semester across the entire campus.',
      'Awarded in Semesters 1, 3, 4, 5, and 7 based on departmental academic standing.',
    ],
    tools: ['POF Scholarship', '50% Tuition Waiver', 'Merit Award'],
  },
  {
    sectionId: 'honors-awards',
    sectionTitle: 'Honours & Awards',
    slug: 'award-english-access-scholarship',
    title: 'U.S. Embassy English Access Scholarship Program',
    period: '2024 – 2025',
    subtitle: 'Competitive International Scholarship',
    domain: 'English Proficiency, Leadership, Public Diplomacy',
    organization: 'Regional English Language Office (RELO), U.S. Embassy in Islamabad',
    summary:
      'Selected through a competitive merit screening for this prestigious 18-month U.S. Department of State scholarship program completing 400 intensive hours of advanced English language, leadership development, and cultural diplomacy.',
    details: [
      'Competitive merit-based scholarship sponsored by the Regional English Language Office (RELO), U.S. Embassy in Islamabad, executed at COMSATS University Islamabad, Wah Campus.',
      'Completed 400 intensive contact hours covering English language mastery (B2 CEFR level), leadership, media literacy, critical thinking, and cultural exchange.',
      'Selected to co-host the Eid Mingle Day cultural celebration and created public service advocacy videos for World Day Against Child Labour.',
      'Awarded official Certificate of Completion signed by Dr. Bradley Horn (Regional English Language Officer) and Dr. Ambreen Shehnaz (Program Director).',
    ],
    tools: ['U.S. Embassy Scholarship', '400 Hours', 'Leadership', 'Public Diplomacy', 'B2 Proficiency'],
    link: 'https://drive.google.com/file/d/1vUxU9ipBcn6r4T50_VGCD2Ru37p2OaUp/view?usp=sharing',
    linkLabel: 'View U.S. Embassy Scholarship Certificate ↗',
  },
  {
    sectionId: 'honors-awards',
    sectionTitle: 'Honours & Awards',
    slug: 'award-pm-laptop-scheme',
    title: 'Prime Minister’s National Laptop Scheme Award',
    period: '2023',
    subtitle: 'National Academic Merit Grant',
    domain: 'Academic Merit Ranking, Higher Education Commission',
    organization: 'Higher Education Commission (HEC) & Government of Pakistan',
    summary:
      'Awarded a high-performance laptop under the Prime Minister’s National Laptop Scheme (Phase-III) in 2023, granted strictly on academic merit and top CGPA departmental standing at COMSATS University Islamabad, Wah Campus.',
    details: [
      'Selected on competitive academic merit criteria established by the Higher Education Commission (HEC) Pakistan.',
      'Granted to high-achieving undergraduate students maintaining top-tier CGPA rankings in accredited engineering disciplines.',
      'Recognized for exceptional academic consistency across early undergraduate semesters at COMSATS University Islamabad, Wah Campus.',
    ],
    tools: ['PM Laptop Scheme', 'HEC Pakistan', 'Merit Award', 'Academic Excellence'],
  },
  {
    sectionId: 'honors-awards',
    sectionTitle: 'Honours & Awards',
    slug: 'award-semester-merit-certificates',
    title: 'Departmental Semester Merit Position Certificates (8 Awards)',
    period: '2022 – 2026',
    subtitle: 'Semester Academic Honors',
    domain: 'Semester Academic Performance Awards',
    organization: 'COMSATS University Islamabad, Wah Campus',
    summary:
      'Earned 8 official merit certificates from the Director and Controller of Examinations for securing top positions across all 8 undergraduate semesters.',
    details: [
      'Fall 2022 (Semester 1): Second Position (SGPA: 3.83/4.00, Cert CUI/WAH/22/2055)',
      'Spring 2023 (Semester 2): Third Position (SGPA: 3.85/4.00, Cert CUI/WAH/23/2155)',
      'Fall 2023 (Semester 3): First Position (SGPA: 4.00/4.00, Cert CUI/WAH/23/2289)',
      'Spring 2024 (Semester 4): First Position (SGPA: 4.00/4.00, Cert CUI/WAH/24/2375)',
      'Fall 2024 (Semester 5): Second Position (SGPA: 4.00/4.00, Cert CUI/WAH/24/2509)',
      'Spring 2025 (Semester 6): Second Position (SGPA: 3.94/4.00, Cert CUI/WAH/25/2648)',
      'Fall 2025 (Semester 7): First Position (SGPA: 4.00/4.00, Cert CUI/WAH/26/2794)',
      'Spring 2026 (Semester 8): First Position (SGPA: 4.00/4.00, Cert CUI/WAH/26/2910)',
    ],
    tools: ['1st Position', '2nd Position', '3rd Position', 'Dean\'s Honor'],
  },
  {
    sectionId: 'honors-awards',
    sectionTitle: 'Honours & Awards',
    slug: 'award-fyp-open-house-3rd',
    title: '3rd Position Winner — Final Year Project (Open House 2026)',
    period: '2026',
    subtitle: 'Engineering Design Competition Award',
    domain: 'BIM-to-AR Integration, Capstone Project Competition',
    organization: 'Department of Civil Engineering, COMSATS University Islamabad',
    summary:
      'Awarded 3rd Position among all graduating capstone projects at the Departmental Open House & Job Fair Spring 2026.',
    details: [
      'Evaluated by external industrial judges, faculty panels, and director Prof. Dr. Muhammad Junaid Mughal.',
      'Demonstrated real-time interactive BIM models anchored to physical scale using mobile augmented reality.',
    ],
    tools: ['FYP Award', 'Open House 2026', '3rd Position', 'BIM-to-AR'],
  },
  {
    sectionId: 'honors-awards',
    sectionTitle: 'Honours & Awards',
    slug: 'award-sfd-bmd-competition',
    title: '1st Position Winner — SFD & BMD Competition (Civil Mania 2024)',
    period: '2024',
    subtitle: 'Competitive Engineering Award',
    domain: 'Structural Mechanics, Shear Force & Bending Moment Analysis',
    organization: 'ASCE Student Chapter, Wah Engineering College (University of Wah)',
    summary:
      'Secured 1st Position in the inter-university Shear Force and Bending Moment Diagram analytical speed and accuracy challenge.',
    details: [
      'Solved complex determinate and indeterminate beam loading diagrams under timed competitive conditions.',
      'Awarded 1st Position Winner certificate sponsored by NTS Marketing.',
    ],
    tools: ['1st Position', 'SFD & BMD', 'Structural Mechanics', 'Competition'],
  },
  {
    sectionId: 'honors-awards',
    sectionTitle: 'Honours & Awards',
    slug: 'award-best-survey-group-2024',
    title: 'Best Survey Group Award — Annual Survey Camp 2024',
    period: '2024',
    subtitle: 'Field Engineering Distinction',
    domain: 'Total Station Control, Contouring, Topographic Surveying',
    organization: 'Civil Engineering Department, COMSATS University Islamabad',
    summary:
      'Awarded Best Survey Group (Batch FA22) during the 15-day intensive undergraduate survey camp held in Abbottabad / Harnoi.',
    details: [
      'Completed closed traverse, road alignment, cross-sectional leveling, and total station digital contour surveys in mountainous terrain.',
      'Commended for field drawing accuracy, team coordination, and topographic mapping quality.',
    ],
    tools: ['Survey Camp', 'Best Group Award', 'Total Station', 'Topography'],
  },
  {
    sectionId: 'honors-awards',
    sectionTitle: 'Honours & Awards',
    slug: 'award-ice-truss-bridge-2nd',
    title: '2nd Position Winner — ICE Truss Bridge Competition 2022',
    period: '2022',
    subtitle: 'Competitive Engineering Award',
    domain: 'Structural Modeling, Truss Mechanics, Load-to-Weight Ratio',
    organization: 'ICE Student Chapter, COMSATS University Islamabad, Wah Campus',
    summary:
      'Won 2nd Position in the model truss bridge design and destructive load-testing competition.',
    details: [
      'Designed and fabricated a scaled model truss bridge evaluated for efficiency, deflection, and ultimate collapse load.',
      'Achieved the second-highest load-to-self-weight ratio in the competition.',
    ],
    tools: ['2nd Position', 'Truss Bridge', 'ICE Competition', 'Load Testing'],
  },
  {
    sectionId: 'honors-awards',
    sectionTitle: 'Honours & Awards',
    slug: 'award-grade-8-position',
    title: '3rd Position in Class — Grade 8 Annual Examination',
    period: '2018',
    subtitle: 'Middle School Academic Distinction',
    domain: 'Class Merit Standing, General Science & Mathematics',
    organization: 'Sir Syed College, Wah Cantt',
    summary:
      'Secured 3rd Position in class in the Grade 8 annual academic examinations, demonstrating strong foundational aptitude in science and mathematics.',
    details: [
      'Achieved 3rd Position among the entire cohort in the Grade 8 annual institutional examinations at Sir Syed College, Wah Cantt.',
      'Demonstrated high academic aggregate across general sciences, mathematics, and English language.',
      'Formed the foundational springboard for entry into the Matriculation (SSC) Science Group with distinction.',
    ],
    tools: ['3rd Position', 'Grade 8', 'Academic Distinction', 'Sir Syed College'],
  },
  {
    sectionId: 'honors-awards',
    sectionTitle: 'Honours & Awards',
    slug: 'award-grade-4-position',
    title: '3rd Position in Class — Grade 4 Annual Examination',
    period: '2014',
    subtitle: 'Primary School Academic Distinction',
    domain: 'Early Academic Excellence, Class Merit Standing',
    organization: 'Sir Syed School, Wah Cantt',
    summary:
      'Secured 3rd Position in the Grade 4 annual examinations, reflecting consistent academic dedication from early primary education.',
    details: [
      'Earned 3rd Position in class in the Grade 4 annual school examinations at Sir Syed School, Wah Cantt.',
      'Recognized for outstanding early coursework performance, mathematical problem solving, and analytical focus.',
      'Marked the early trajectory of sustained academic distinction maintained through middle school, high school, and university.',
    ],
    tools: ['3rd Position', 'Grade 4', 'Academic Distinction', 'Primary School'],
  },

  // ----------------------------------------------------
  // VOLUNTEERING
  // ----------------------------------------------------
  {
    sectionId: 'volunteering',
    sectionTitle: 'Volunteering',
    slug: 'volunteering-alkhidmat-foundation',
    title: 'Alkhidmat Foundation Professional Volunteer',
    period: 'Valid through 2028',
    subtitle: 'Humanitarian & Community Service',
    domain: 'Disaster Relief, Social Welfare, Community Development',
    organization: 'Alkhidmat Foundation Pakistan',
    summary:
      'Registered professional volunteer (Membership ID: AKF-V-98153) supporting social welfare and humanitarian response initiatives.',
    details: [
      'Active community participant in relief donation drives, youth educational outreach, and winter aid packages for vulnerable families.',
    ],
    tools: ['Humanitarian Relief', 'Community Welfare', 'Youth Outreach'],
  },
  {
    sectionId: 'volunteering',
    sectionTitle: 'Volunteering',
    slug: 'volunteering-community-service-orphans',
    title: 'Community Service for Orphans — Educational Support',
    period: '2024',
    subtitle: 'Volunteer Initiative',
    domain: 'Child Welfare, Educational Donations, Mentorship',
    organization: 'Community Services Committee, CUI Wah Civil Dept',
    summary:
      'Organized donation drives and distributed school supplies, bags, and books for orphan children in Wah Cantt.',
    details: [
      'Collaborated with civil engineering student societies to arrange academic kits and interactive learning sessions for underprivileged students.',
      'Awarded official community service recognition signed by HoD and society conveners.',
    ],
    tools: ['Community Service', 'Orphan Care', 'Social Responsibility'],
  },
  {
    sectionId: 'volunteering',
    sectionTitle: 'Volunteering',
    slug: 'volunteering-academic-resource-database',
    title: 'Academic Resource Database Initiative',
    period: '2022 – 2026',
    subtitle: 'Academic Community Project',
    domain: 'Open-Access Educational Repository, Curated Civil Engineering Notes',
    organization: 'Peer-to-Peer Academic Knowledge Sharing',
    summary:
      'Co-founded and maintained an open-access cloud database of 4-year Civil Engineering course syllabi, lecture notes, lab manuals, and past solutions for junior students.',
    details: [
      'Curated comprehensive study guides across all 8 undergraduate semesters to assist junior cohorts with challenging core coursework.',
      'Organized and digitized reference material for ETABS, SAFE, Revit, and numerical analysis problem sets.',
    ],
    tools: ['Open Access Repository', 'Knowledge Sharing', 'Peer Mentoring'],
  },
  {
    sectionId: 'volunteering',
    sectionTitle: 'Volunteering',
    slug: 'volunteering-child-labour-advocacy',
    title: 'Awareness Video on World Day Against Child Labour',
    period: '2024',
    subtitle: 'Social Advocacy Initiative',
    domain: 'Digital Storytelling, Social Awareness, Human Rights',
    organization: 'Access Program Community Impact Initiative',
    summary:
      'Scripted, directed, and narrated a video advocacy campaign addressing the plight of child laborers in local brick kilns and workshops.',
    details: [
      'Raised community awareness on the importance of universal basic education and child protection legislation.',
    ],
    tools: ['Digital Storytelling', 'Advocacy', 'Child Protection'],
  },

  // ----------------------------------------------------
  // EXTRACURRICULAR ACTIVITIES & LEADERSHIP
  // ----------------------------------------------------
  {
    sectionId: 'extracurricular',
    sectionTitle: 'Extracurricular Activities & Leadership',
    slug: 'extra-aspire-leaders-program',
    title: 'Aspire Leaders Program',
    period: '2026',
    subtitle: 'Global Leadership Program',
    domain: 'Global Social Impact, Critical Thinking, Leadership',
    organization: 'Aspire Institute (Founded at Harvard University Faculty)',
    summary:
      'Successfully completed all modules of the 40-hour 2026 Aspire Leaders Program.',
    details: [
      'Selected for and completed the 40-hour intensive international leadership curriculum focused on social innovation and cross-cultural leadership.',
      'Engaged in interactive masterclasses led by Harvard Business School and Harvard Kennedy School faculty.',
      'Explored self-assessment, social impact project design, and leading high-performing teams.',
    ],
    tools: ['Aspire Institute', 'Harvard Faculty', 'Global Leadership'],
    link: 'https://engage.aspireleaders.org/profile/certificates',
    linkLabel: 'View Verified Certificate ↗',
  },
  {
    sectionId: 'extracurricular',
    sectionTitle: 'Extracurricular Activities & Leadership',
    slug: 'extra-wfeo-hackathon-2026',
    title: 'WED 2026 Hackathon',
    period: '2026',
    subtitle: 'Global Engineering Hackathon',
    domain: 'Infrastructure Resilience, Sustainable Engineering',
    organization: 'World Federation of Engineering Organizations (WFEO) & UNESCO',
    summary:
      'Participant in the WFEO Hackathon at World Engineering Day for Sustainable Development 2026.',
    details: [
      'Competed in the global WFEO Hackathon addressing engineering challenges under the leadership of WFEO past and current presidents.',
      'Presented BIM-to-AR research as a sustainable solution addressing SDG 12: Responsible Consumption and Production by reducing rework and construction waste.',
      'Evaluated by international engineering panels for multidisciplinary technical feasibility and climate adaptation impact.',
    ],
    tools: ['WFEO', 'UNESCO', 'Hackathon 2026', 'Climate Adaptation'],
    link: 'https://www.youtube.com/watch?v=z70xaKYh1ps',
    linkLabel: 'Watch Presentation (YouTube) ↗',
  },
  {
    sectionId: 'extracurricular',
    sectionTitle: 'Extracurricular Activities & Leadership',
    slug: 'extra-omlas-fellowship-2025',
    title: 'OMLAS Fellowship',
    period: '2025',
    subtitle: 'International Sustainability Fellowship',
    domain: 'Sustainable Development Goals (SDGs), Environmental Stewardship',
    organization: "NELIS Global (Next Leaders' Initiative for Sustainability)",
    summary:
      'Completed the OMLAS Fellowship Program 2025 for Champions, showing excellent commitment.',
    details: [
      'Selected as an OMLAS Fellow / Champion across Asia, completing intensive training on sustainability-driven project frameworks.',
      'Awarded official fellowship certificate on December 19, 2025 signed by NELIS Global leadership.',
      'Formulated regional sustainability initiatives aligned with UN Sustainable Development Goals (SDGs 6, 9, and 11).',
    ],
    tools: ['OMLAS Fellow', 'NELIS Global', 'UN SDGs', 'Sustainability'],
    link: 'https://asia.omlglobal.org/Certificates/Validate/kashankashi27@gmail.com',
    linkLabel: 'Verify OMLAS Fellowship ↗',
  },
  {
    sectionId: 'extracurricular',
    sectionTitle: 'Extracurricular Activities & Leadership',
    slug: 'extra-lgs-panel-discussion',
    title: 'LGS Panel Discussion',
    period: '2025',
    subtitle: 'Leadership & Social Impact Dialogue',
    domain: 'Leadership, Youth Empowerment, Sustainability',
    organization: 'Lahore Grammar School (LGS) & OMLAS',
    summary:
      'Actively participated in the Panel Discussion with OMLAS Champions and Fellow, organized by LGS.',
    details: [
      'Invited speaker and panelist representing OMLAS Fellows, sharing insights on youth leadership and sustainability initiatives.',
      'Engaged in interactive discussions with students and educators on ethical leadership and driving local community impact.',
    ],
    tools: ['Panel Discussion', 'LGS', 'OMLAS Champions', 'Public Speaking'],
    link: 'https://drive.google.com/file/d/1GmNmxcFWTbMpbFelIVyxEeByvsLweTig/view?usp=sharing',
    linkLabel: 'View Participation Certificate (PDF) ↗',
  },
  {
    sectionId: 'extracurricular',
    sectionTitle: 'Extracurricular Activities & Leadership',
    slug: 'extra-constructx-giki',
    title: 'CONSTRUCTX-3.0 (ICE GIK)',
    period: '2025',
    subtitle: 'National Engineering Competition',
    domain: 'Civil Engineering Competitions, Structural Modeling',
    organization: 'ICE Student Chapter, Ghulam Ishaq Khan Institute (GIKI)',
    summary:
      "Participated in the 3-day All Pak Event 'CONSTRUCTX-3.0' organized by ICE GIK Student Chapter.",
    details: [
      'Represented university at the 3-day nationwide civil engineering competitive festival held at GIK Institute.',
      'Contributed to lightweight concrete design, load-bridging challenges, and flume sink modules, plus technical workshops.',
      'Gained practical exposure to innovative construction techniques and competitive multidisciplinary teamwork.',
    ],
    tools: ['GIKI', 'CONSTRUCTX-3.0', 'ICE Chapter', 'All-Pak Event'],
    link: 'https://drive.google.com/file/d/10fVRUCY1fct-Y7zASTGMGHf6e2GC0DzE/view?usp=sharing',
    linkLabel: 'View Participation Certificate (PDF) ↗',
  },
  {
    sectionId: 'extracurricular',
    sectionTitle: 'Extracurricular Activities & Leadership',
    slug: 'extra-wed-hackathon-2025',
    title: 'WED 2025',
    period: '2025',
    subtitle: 'Global UNESCO Hackathon',
    domain: 'Engineering Innovation, Water Solutions, Climate Action',
    organization: 'UNESCO / World Engineering Day for Sustainable Development',
    summary:
      'Actively participated in World Environment Day 2025 initiatives, contributing to environmental awareness.',
    details: [
      'Participated in the global UNESCO engineering hackathon designing innovative solutions for sustainable community resilience.',
      'Collaborated on engineering concept designs tackling urban stormwater conservation and water circularity.',
    ],
    tools: ['UNESCO', 'World Engineering Day', 'Global Hackathon'],
    link: 'https://youtu.be/nDrsA6qMuOY?si=L8VNC9_oocDwSA2w',
    linkLabel: 'View Presentation Video ↗',
  },
  {
    sectionId: 'extracurricular',
    sectionTitle: 'Extracurricular Activities & Leadership',
    slug: 'extra-mental-wellbeing-speaker',
    title: 'Lead Organizer & Speaker — "The Happy Brain" Seminar',
    period: '2025',
    subtitle: 'Mental Well-Being Outreach',
    domain: 'Youth Education, Mental Health Awareness, Public Speaking',
    organization: 'Pehla Qadam School & Community Welfare Society',
    summary:
      'Organized and delivered an interactive mental well-being workshop for school students on positive thinking and coping techniques.',
    details: [
      'Planned the complete event agenda, interactive exercises, and visual presentation for students.',
      'Delivered keynote on cognitive habits, emotional resilience, and constructive peer support.',
    ],
    tools: ['Keynote Speaker', 'Mental Well-being', 'Youth Mentorship'],
    link: 'https://www.facebook.com/share/v/1GDLYfzHTW/',
    linkLabel: 'View Seminar Recording (Facebook) ↗',
  },
  {
    sectionId: 'extracurricular',
    sectionTitle: 'Extracurricular Activities & Leadership',
    slug: 'extra-unesco-water-day-2025',
    title: 'World Water Day 2025 Video Competition (UNESCO / CUI)',
    period: '2025',
    subtitle: 'Awareness Competition',
    domain: 'Glacier Preservation, Integrated Water Resources Management (IWRM)',
    organization: 'UNESCO Chair on IWRM & PCRWR',
    summary:
      'Co-produced group awareness video presenting legal and engineering solutions for glacier preservation and clean water protection.',
    details: [
      'Featured international treaty frameworks and community pollution mitigation techniques to protect fragile Himalayan glacial basins.',
      'Addressed climate policy, transboundary water agreements, and regional conservation benchmarks.',
    ],
    tools: ['UNESCO Chair on IWRM', 'PCRWR', 'Water Day 2025'],
    link: 'https://drive.google.com/file/d/1FhGL5GjQOtfxDr2127F2Rca69Hn9kfAZ/view?usp=sharing',
    linkLabel: 'Watch Competition Entry (Drive) ↗',
  },
  {
    sectionId: 'extracurricular',
    sectionTitle: 'Extracurricular Activities & Leadership',
    slug: 'extra-civil-nexus-2025',
    title: 'Civil Nexus 2025',
    period: '2025',
    subtitle: 'Engineering Collaboration & Symposium',
    domain: 'Technical Collaboration, ASCE Student Chapter',
    organization: 'ASCE Student Chapter & University of Wah',
    summary:
      'Participated in a multi-society collaborative civil engineering event organized by ASCE with five societies of University of Wah.',
    details: [
      'Engaged with regional engineering societies on innovative civil infrastructure solutions and cross-institutional networking.',
    ],
    tools: ['ASCE', 'University of Wah', 'Civil Nexus'],
    link: 'https://drive.google.com/file/d/18zENPzmPJSIYG5UHTtEiPuSJVMeX1bEY/view?usp=sharing',
    linkLabel: 'View Certificate (PDF) ↗',
  },
  {
    sectionId: 'extracurricular',
    sectionTitle: 'Extracurricular Activities & Leadership',
    slug: 'extra-eid-mingle-cohost',
    title: 'Co-Host — Eid Mingle Day Cultural Celebration',
    period: '2024',
    subtitle: 'Cultural & Community Engagement',
    domain: 'Cross-Cultural Celebration, Event Management',
    organization: 'English Access Micro-Scholarship Program (U.S. Embassy)',
    summary:
      'Co-hosted and coordinated cultural celebration event for regional scholars and program alumni at CUI Wah.',
    details: [
      'Facilitated stage proceedings, guest reception, interactive cultural showcases, and group discussions.',
    ],
    tools: ['Event Co-Host', 'Cultural Exchange', 'Community Leadership'],
    link: 'https://www.facebook.com/share/v/1EXxwLwiMq/',
    linkLabel: 'View Event Highlights (Facebook) ↗',
  },
  {
    sectionId: 'extracurricular',
    sectionTitle: 'Extracurricular Activities & Leadership',
    slug: 'extra-speech-competition',
    title: 'Speech Competition — Taqareer-e-Silsila Sir Syed',
    period: '2010',
    subtitle: 'Oratory & Public Speaking',
    domain: 'Public Speaking, Oratory, Communication',
    organization: 'Sir Syed Memorial Society',
    summary:
      'Participated in a school-level speech competition series ("Taqareer-e-Silsila Sir Syed").',
    details: [
      'Demonstrated oratory delivery, stage presence, and persuasive articulation on historic and educational themes.',
    ],
    tools: ['Public Speaking', 'Oratory', 'Sir Syed Series'],
    link: 'https://drive.google.com/file/d/1F1FidzbkugyrkO2oig6FMURn8BWDtUsM/view?usp=sharing',
    linkLabel: 'View Participation Certificate (PDF) ↗',
  },
  {
    sectionId: 'extracurricular',
    sectionTitle: 'Extracurricular Activities & Leadership',
    slug: 'extra-shelter-for-all',
    title: 'Shelter For All — Energy-Efficient Housing Concept',
    period: '2025',
    subtitle: 'Sustainable Housing Solution',
    domain: 'Informal Housing, Solar Energy, Rainwater Harvesting, SDG 11',
    organization: 'World Engineering Day for Sustainable Development',
    summary:
      'Proposed an energy-efficient informal-housing solution with solar power and rainwater harvesting for sustainable communities.',
    details: [
      'Designed self-sustaining community cluster models integrating decentralized solar photovoltaic panels and roof rainwater collection cisterns.',
      'Formulated public-private partnership execution frameworks for scalable, resilient low-cost residential expansion.',
    ],
    tools: ['Sustainable Housing', 'Solar Integration', 'Rainwater Harvesting', 'SDG 11'],
  },
]

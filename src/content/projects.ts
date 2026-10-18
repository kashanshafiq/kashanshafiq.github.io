import type { Project } from '../types/content'

export const projects: Project[] = [
  {
    slug: 'structural-design',
    title: 'Structural Analysis & Design of Commercial Building',
    category: 'Structures',
    period: '2026',
    subtitle: 'Structural Engineering Project',
    domain: 'Finite Element Modeling, Seismic Lateral Loads, RC Design',
    organization: 'COMSATS University Islamabad, Wah Campus',
    badge: 'Featured Engineering Project',
    tools: ['ETABS', 'SAFE', 'ACI 318-19', 'BCP-2021', 'Shear Walls'],
    diagram: 'structure',
    summary:
      '3D finite element structural modeling and seismic analysis for a multi-story moment-resisting RC building with shear walls.',
    context:
      'A comprehensive capstone project for Design of Structures, modeling and analyzing a multi-story commercial reinforced-concrete building under gravity and lateral seismic forces compliant with BCP-2021 and UBC-97.',
    scope: [
      'Modeled building frame in ETABS under gravity and lateral seismic forces compliant with Building Code of Pakistan (BCP-2021) and UBC-97.',
      'Carried out member design for reinforced concrete columns, beams, two-way slabs, and core shear walls per ACI 318-19.',
      'Performed manual footing sizing with one-way and two-way punching shear calculations and verified foundation settlement in SAFE.',
    ],
    details: [
      'Modeled building frame in ETABS under gravity and lateral seismic forces compliant with Building Code of Pakistan (BCP-2021) and UBC-97.',
      'Carried out member design for reinforced concrete columns, beams, two-way slabs, and core shear walls per ACI 318-19.',
      'Performed manual footing sizing with one-way and two-way punching shear calculations and verified foundation settlement in SAFE.',
    ],
    outcome:
      'A comprehensive structural design report connecting modeling decisions with analysis output, member sizing, and foundation checks.',
    contribution:
      'Team structural project with Adil Ayub Khan, M. Maaz Khan, Marfood Mutaal, and Usama Arif under supervision of Dr. Shahzadi Irum.',
    source: ['Documents/Semester Projects/DOS CEP.pdf'],
  },
  {
    slug: 'school-building-design',
    title: 'Three-Story RC School Building Design',
    category: 'Structures',
    period: '2025',
    subtitle: 'Complex Engineering Problem (CEP)',
    domain: 'ACI 318-14, ASCE 7-10, Concrete Member Sizing',
    organization: 'COMSATS University Islamabad, Wah Campus',
    badge: 'Featured Engineering Project',
    tools: ['ACI 318-14', 'ASCE 7-10', 'AutoCAD', 'Autodesk Revit', 'RC Design'],
    diagram: 'structure',
    summary:
      'Complete structural analysis and manual reinforcement design for a 3-story reinforced concrete school building on a 120 x 180 ft plot.',
    context:
      'A Complex Engineering Problem (CEP) for Reinforced Concrete Design I (CEE308), covering full structural analysis and manual member sizing for an institutional educational facility.',
    scope: [
      'Designed one-way solid slabs, singly reinforced continuous beams, and doubly reinforced critical span beams per ACI 318-14.',
      'Sized exterior square columns (12" x 12") and interior circular spiral columns (12" dia) under axial and moment loads.',
      'Produced complete architectural and structural AutoCAD drafts with bar bending details.',
    ],
    details: [
      'Designed one-way solid slabs, singly reinforced continuous beams, and doubly reinforced critical span beams per ACI 318-14.',
      'Sized exterior square columns (12" x 12") and interior circular spiral columns (12" dia) under axial and moment loads.',
      'Produced complete architectural and structural AutoCAD drafts with bar bending details.',
    ],
    outcome:
      'An exhaustive calculation report and structural detailing drawings for code-compliant institutional construction.',
    contribution:
      'Collaborative team project with Faizan Manshad, Fahad Bin Rasheed, and Muhammad Maaz under supervision of Dr. Adnan Nawaz.',
    source: ['Documents/Semester Projects/Complete Report RCD CEP.pdf'],
  },
  {
    slug: 'retaining-walls',
    title: 'Design of Gravity and Cantilever Retaining Walls',
    category: 'Structures',
    period: '2025',
    subtitle: 'Geotechnical & Structural Design',
    domain: 'Rankine Earth Pressure, Parametric Spreadsheets, Stability Analysis',
    organization: 'COMSATS University Islamabad, Wah Campus',
    badge: 'Featured Engineering Project',
    tools: ['Parametric Excel', 'Stability Analysis', 'Rankine Earth Pressure', 'Retaining Walls'],
    diagram: 'wall',
    summary:
      'Automated Excel calculation suite for stability analysis and structural detailing of gravity and cantilever retaining walls.',
    context:
      'A Reinforced Concrete Design II (CEE406) semester project examining earth pressure stability and reinforcement sizing through automated parametric spreadsheets.',
    scope: [
      'Programmed stability checks against overturning, sliding, and bearing capacity failure under Rankine active earth pressure.',
      'Automated structural reinforcement design for stem, toe, and heel slabs, including shear keys and development length curtailment.',
    ],
    details: [
      'Programmed stability checks against overturning, sliding, and bearing capacity failure under Rankine active earth pressure.',
      'Automated structural reinforcement design for stem, toe, and heel slabs, including shear keys and development length curtailment.',
    ],
    outcome:
      'Automated calculation spreadsheets connecting adopted dimensions with governing stability, shear, and flexural checks.',
    contribution:
      'Developed parametric design calculation spreadsheets as documented in the project records.',
    source: [
      'Documents/Semester Projects/RCD 2/Retaining Wall Design Excel Sheets (RCD-2).txt',
      'Documents/Semester Projects/RCD 2/Gravity Retaining Wall .xlsx',
      'Documents/Semester Projects/RCD 2/Cantilever Retaining Wall.xlsx',
    ],
  },
  {
    slug: 'quantity-surveying',
    title: 'Quantity Surveying & Complete Building Quantity Takeoff',
    category: 'Planning',
    period: '2025',
    subtitle: 'Cost Engineering & Estimation',
    domain: 'Bar Bending Schedules (BBS), Material Takeoffs, Cost Analysis',
    organization: 'COMSATS University Islamabad, Wah Campus',
    badge: 'Featured Engineering Project',
    tools: ['Microsoft Excel', 'Bar Bending Schedules (BBS)', 'BOQ Formulation', 'Costing'],
    diagram: 'quantity',
    summary:
      'Exhaustive itemized building quantity takeoff and bar bending schedule calculating 112 tons of structural reinforcement steel.',
    context:
      'A Quantity Surveying and Cost Estimation (CEE304) semester project translating building engineering drawings into precise, itemized procurement schedules and bar bending schedules.',
    scope: [
      'Calculated concrete volumes for raft foundations, columns, beams, shear walls, retaining walls, and slabs.',
      'Formulated wet-to-dry conversions, shrinkage factors, and mix proportions for brick masonry, plaster, and mortar.',
      'Computed bar lengths, lap lengths, and steel weights across various rebar diameters totaling 111,854 kg of steel.',
    ],
    details: [
      'Calculated concrete volumes for raft foundations, columns, beams, shear walls, retaining walls, and slabs.',
      'Formulated wet-to-dry conversions, shrinkage factors, and mix proportions for brick masonry, plaster, and mortar.',
      'Computed bar lengths, lap lengths, and steel weights across various rebar diameters totaling 111,854 kg of steel.',
    ],
    outcome:
      'Comprehensive itemized bill of quantities (BOQ) and bar bending schedules prepared in Microsoft Excel.',
    contribution:
      'Comprehensive quantity surveying project as detailed in the course documentation.',
    source: ['Documents/Semester Projects/Quantity/Quantity Surveying Semester Project.txt'],
  },
  {
    slug: 'construction-planning',
    title: 'Primavera P6 Construction Scheduling — Residential Villa',
    category: 'Planning',
    period: '2025',
    subtitle: 'Project Planning & Management',
    domain: 'Primavera P6, WBS/OBS, Critical Path Method (CPM)',
    organization: 'COMSATS University Islamabad, Wah Campus',
    badge: 'Featured Engineering Project',
    tools: ['Primavera P6', 'CPM Scheduling', 'WBS/OBS', 'Earned Value Analysis'],
    diagram: 'schedule',
    summary:
      'One-year baseline construction schedule and resource allocation model developed in Primavera P6.',
    context:
      'A Project Planning and Management (MGT462) project establishing a professional project controls baseline under a labor-only residential contract in Primavera P6.',
    scope: [
      'Constructed Enterprise Project Structure (EPS), Organizational Breakdown Structure (OBS), and Work Breakdown Structure (WBS).',
      'Assigned resources and generated Gantt charts, critical path analyses, S-curves, and Earned Value tracking metrics.',
    ],
    details: [
      'Constructed Enterprise Project Structure (EPS), Organizational Breakdown Structure (OBS), and Work Breakdown Structure (WBS).',
      'Assigned resources and generated Gantt charts, critical path analyses, S-curves, and Earned Value tracking metrics.',
    ],
    outcome:
      'A comprehensive project management baseline report featuring Gantt charts, resource usage profiles, and budget allocations.',
    contribution:
      'Team project with Faizan Manshad, Fahad Bin Rasheed, and Muhammad Ali under supervision of Dr. Hassan Ashraf.',
    source: ['Documents/Semester Projects/PPM CEP.pdf'],
  },
]

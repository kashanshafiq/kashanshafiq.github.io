import type { Project } from '../types/content'

export const projects: Project[] = [
  {
    slug: 'structural-design',
    aliases: ['structural-commercial-building'],
    title: 'Structural Analysis & Design of Commercial Building',
    category: 'Structures',
    categoryBadge: 'STRUCTURES',
    filterCategories: ['Featured Projects', 'Structural Engineering'],
    featured: true,
    period: '2026',
    subtitle: 'Structural Engineering',
    domain: 'Finite Element Modeling, Seismic Lateral Loads, RC Design',
    organization: 'CUI Wah Campus',
    badge: 'Featured Engineering Project',
    tools: ['ETABS', 'SAFE', 'ACI 318-19', 'BCP-2021', 'Shear Walls'],
    diagram: 'structure',
    summary:
      '3D finite element modeling and seismic design for a multi-story RC commercial building.',
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
    aliases: ['three-story-school-building'],
    title: 'Three-Story RC School Building Design',
    category: 'Structures',
    categoryBadge: 'STRUCTURES',
    filterCategories: ['Featured Projects', 'Structural Engineering'],
    featured: true,
    period: '2025',
    subtitle: 'Structural Engineering',
    domain: 'ACI 318-14, ASCE 7-10, Concrete Member Sizing',
    organization: 'CUI Wah Campus',
    badge: 'Featured Engineering Project',
    tools: ['ACI 318-14', 'ASCE 7-10', 'AutoCAD', 'Autodesk Revit', 'RC Design'],
    diagram: 'structure',
    summary:
      'Complete structural analysis and manual reinforcement design for a 3-story RC school building.',
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
    aliases: ['retaining-walls-design'],
    title: 'Design of Gravity and Cantilever Retaining Walls',
    category: 'Structures',
    categoryBadge: 'STRUCTURES',
    filterCategories: ['Featured Projects', 'Structural Engineering', 'Geotechnical & Materials'],
    featured: true,
    period: '2025',
    subtitle: 'Structural Engineering',
    domain: 'Rankine Earth Pressure, Parametric Spreadsheets, Stability Analysis',
    organization: 'CUI Wah Campus',
    badge: 'Featured Engineering Project',
    tools: ['Parametric Excel', 'Stability Analysis', 'Rankine Earth Pressure', 'Retaining Walls'],
    diagram: 'wall',
    summary:
      'Automated calculation suite for stability analysis and design of RC retaining walls.',
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
    aliases: ['quantity-surveying-takeoff'],
    title: 'Quantity Surveying & Complete Building Quantity Takeoff',
    category: 'Planning',
    categoryBadge: 'PLANNING',
    filterCategories: ['Featured Projects', 'Construction Planning'],
    featured: true,
    period: '2025',
    subtitle: 'Cost Engineering & Estimation',
    domain: 'Bar Bending Schedules (BBS), Material Takeoffs, Cost Analysis',
    organization: 'CUI Wah Campus',
    badge: 'Featured Engineering Project',
    tools: ['Microsoft Excel', 'BBS Formulation', 'Quantity Takeoff', 'Costing'],
    diagram: 'quantity',
    summary:
      'Itemized building quantity takeoff and bar bending schedule for 112 tons of structural steel.',
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
    aliases: ['primavera-p6-scheduling'],
    title: 'Primavera P6 Construction Scheduling — Residential Villa',
    category: 'Planning',
    categoryBadge: 'PLANNING',
    filterCategories: ['Featured Projects', 'Construction Planning'],
    featured: true,
    period: '2025',
    subtitle: 'Project Planning & Management',
    domain: 'Primavera P6, WBS/OBS, Critical Path Method (CPM)',
    organization: 'CUI Wah Campus',
    badge: 'Featured Engineering Project',
    tools: ['Primavera P6', 'CPM Scheduling', 'WBS/OBS', 'Earned Value Analysis'],
    diagram: 'schedule',
    summary:
      'One-year baseline construction schedule and resource allocation model in Primavera P6.',
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
  {
    slug: 'tahir-residency-bim',
    aliases: ['haroon-residence-bim'],
    title: 'Tahir Residency — BIM & Architectural Modeling',
    category: 'BIM & Modeling',
    categoryBadge: 'BIM & MODELING',
    filterCategories: ['BIM & Modeling'],
    featured: false,
    period: '2025',
    subtitle: 'Residential Architecture & BIM',
    domain: 'Autodesk Revit, Insight 360, Structural Coordination, Solar Analysis',
    organization: 'CUI Wah Campus',
    badge: 'Collaborative Project',
    tools: ['Autodesk Revit', 'Insight 360', 'BIM Coordination', 'Solar Path Analysis', 'Drawing Documentation', 'BOQ Schedules'],
    diagram: 'structure',
    summary:
      'Collaborative BIM modeling, structural coordination, and solar analysis for a modern dwelling.',
    context:
      'Comprehensive BIM development and multi-disciplinary coordination project for a multi-story residential building, resolving spatial clashes and optimizing solar exposure.',
    scope: [
      'Collaborative Project: Developed in collaboration and contributed by Faizan Manshad and Haider Ali.',
      'Parametric Architectural Modeling: Developed architectural envelopes, internal layouts, curtain glazing, and custom families in Autodesk Revit.',
      'Structural Coordination: Aligned reinforced concrete columns, beams, and slab systems in 3D to resolve spatial clashes prior to construction.',
      'Solar Path & Insolation Studies: Performed dynamic solar trajectory simulations in Insight 360 to optimize passive daylighting and shading louvers.',
      'Drawing Documentation: Generated tagged floor plans, building elevations, callout wall sections, and itemized material takeoff schedules.',
    ],
    details: [
      'Collaborative Project: Developed in collaboration and contributed by Faizan Manshad and Haider Ali.',
      'Parametric Architectural Modeling: Developed architectural envelopes, internal layouts, curtain glazing, and custom families in Autodesk Revit.',
      'Structural Coordination: Aligned reinforced concrete columns, beams, and slab systems in 3D to resolve spatial clashes prior to construction.',
      'Solar Path & Insolation Studies: Performed dynamic solar trajectory simulations in Insight 360 to optimize passive daylighting and shading louvers.',
      'Drawing Documentation: Generated tagged floor plans, building elevations, callout wall sections, and itemized material takeoff schedules.',
    ],
    outcome:
      'Full architectural and structural BIM models, solar analysis reports, and verified drawing sets ready for construction documentation.',
    contribution:
      'Collaborative project contributed by Faizan Manshad and Haider Ali.',
    source: ['https://faizanmanshad.com/projects/tahir-residency/'],
    link: 'https://faizanmanshad.com/projects/tahir-residency/',
    linkLabel: 'View Live Project Details ↗',
  },
  {
    slug: 'epa-swmm-sewerage-design',
    title: 'Hydraulic Design of Combined Sewerage System',
    category: 'Water',
    categoryBadge: 'WATER & ENV',
    filterCategories: ['Water & Environmental'],
    featured: false,
    period: '2025',
    subtitle: 'Water Resources & Municipal Hydraulics',
    domain: 'EPA SWMM, Dynamic Wave Routing, Urban Catchments',
    organization: 'CUI Wah Campus',
    badge: 'Municipal Hydraulics Project',
    tools: ['EPA-SWMM', 'Dynamic Wave Routing', 'Drop Manholes', 'Sewerage Networks'],
    diagram: 'water',
    summary:
      'Hydrodynamic modeling of a combined sewerage network for a 102-hectare catchment in Wah Cantt.',
    context:
      'A municipal hydraulic engineering project modeling combined gravity sewer networks under intense precipitation events using EPA SWMM.',
    scope: [
      'Modeled runoff flows under extreme precipitation events up to 60 mm/hr using EPA SWMM dynamic wave hydraulic routing.',
      'Addressed 47-foot elevation drops through drop manhole optimization and pipe slope control to ensure self-cleansing velocity (>= 0.6 m/s).',
      'Checked pipe capacity, surcharge risks, and outfall hydraulic parameters across the urban subcatchment.',
    ],
    details: [
      'Modeled runoff flows under extreme precipitation events up to 60 mm/hr using EPA SWMM dynamic wave hydraulic routing.',
      'Addressed 47-foot elevation drops through drop manhole optimization and pipe slope control to ensure self-cleansing velocity (>= 0.6 m/s).',
      'Checked pipe capacity, surcharge risks, and outfall hydraulic parameters across the urban subcatchment.',
    ],
    outcome:
      'A validated hydraulic model and conduit profile ensuring zero flooding under design storm recurrence intervals.',
    contribution:
      'Hydraulic modeling and network simulation project as part of municipal water engineering coursework.',
    source: ['Documents/Semester Projects/SWMM Sewerage Network Report.pdf'],
  },
  {
    slug: 'recycled-aggregate-concrete',
    title: 'Evaluation of Recycled Aggregate Concrete',
    category: 'Materials',
    categoryBadge: 'MATERIALS',
    filterCategories: ['Geotechnical & Materials'],
    featured: false,
    period: '2024',
    subtitle: 'Materials Science & Sustainable Concrete',
    domain: 'Properties of Concrete, Mix Design, Compressive Testing',
    organization: 'CUI Wah Campus',
    badge: 'Materials Science Project',
    tools: ['Compressive Testing', 'Workability Tests', 'Recycled Aggregates', 'Sustainable Concrete'],
    diagram: 'wall',
    summary:
      'Experimental investigation into the mechanical behavior of 50% recycled aggregate concrete.',
    context:
      'Concrete materials laboratory research evaluating the viability of demolished concrete rubble as coarse aggregates in structural concrete.',
    scope: [
      'Prepared concrete test specimens at varying water-cement ratios and tested workability, slump, and density.',
      'Conducted destructive compressive strength tests at 7 and 28 days to formulate sustainable concrete replacement guidelines.',
      'Analyzed stress-strain behavior, failure modes, and density trade-offs of recycled aggregate concrete.',
    ],
    details: [
      'Prepared concrete test specimens at varying water-cement ratios and tested workability, slump, and density.',
      'Conducted destructive compressive strength tests at 7 and 28 days to formulate sustainable concrete replacement guidelines.',
      'Analyzed stress-strain behavior, failure modes, and density trade-offs of recycled aggregate concrete.',
    ],
    outcome:
      'Empirical recommendations for optimizing water-cement ratios and target strengths when substituting 50% virgin aggregates with recycled concrete.',
    contribution:
      'Laboratory experimental investigation conducted at the Civil Engineering Concrete Laboratory.',
    source: ['Documents/Semester Projects/Recycled Aggregate Concrete Testing.pdf'],
  },
  {
    slug: 'indeterminate-frame-analysis',
    title: 'Indeterminate Structural Analysis (RISA-2D vs. Manual)',
    category: 'Structures',
    categoryBadge: 'STRUCTURES',
    filterCategories: ['Structural Engineering'],
    featured: false,
    period: '2024',
    subtitle: 'Structural Mechanics & Computation',
    domain: 'Matrix Displacement Method, Slope Deflection, RISA-2D',
    organization: 'CUI Wah Campus',
    badge: 'Structural Mechanics Project',
    tools: ['RISA-2D', 'Manual Calculations', 'Matrix Methods', 'SFD & BMD'],
    diagram: 'structure',
    summary:
      'Verification of indeterminate frame mechanics comparing manual solutions against RISA-2D models.',
    context:
      'Advanced structural analysis project comparing classical hand methods (slope deflection and moment distribution) against computerized matrix stiffness modeling.',
    scope: [
      'Computed support reactions, axial force diagrams (AFD), shear force diagrams (SFD), and bending moment diagrams (BMD).',
      'Achieved close correlation between hand calculations and numerical simulations across non-sway and sway frames.',
      'Evaluated joint rotations and member end displacements under combined vertical and lateral load patterns.',
    ],
    details: [
      'Computed support reactions, axial force diagrams (AFD), shear force diagrams (SFD), and bending moment diagrams (BMD).',
      'Achieved close correlation between hand calculations and numerical simulations across non-sway and sway frames.',
      'Evaluated joint rotations and member end displacements under combined vertical and lateral load patterns.',
    ],
    outcome:
      'Comprehensive verification comparative report establishing exact precision between theoretical matrix formulations and software outputs.',
    contribution:
      'Analytical mechanics project completed under Structural Analysis II curriculum.',
    source: ['Documents/Semester Projects/RISA-2D Structural Analysis.pdf'],
  },
  {
    slug: 'soil-bearing-capacity-analysis',
    title: 'Soil Bearing Capacity & Direct Shear Testing',
    category: 'Geotechnical',
    categoryBadge: 'GEOTECHNICAL',
    filterCategories: ['Geotechnical & Materials'],
    featured: false,
    period: '2024',
    subtitle: 'Geotechnical Engineering',
    domain: 'ASTM D3080, Terzaghi Equations, Shear Strength',
    organization: 'CUI Wah Campus',
    badge: 'Geotechnical Testing Project',
    tools: ['ASTM D3080', 'Terzaghi Theory', 'Direct Shear Test', 'Bearing Capacity'],
    diagram: 'wall',
    summary:
      'Laboratory soil testing to determine shear parameters and safe bearing capacity for footings.',
    context:
      'Geotechnical engineering lab investigation deriving shear strength parameters (c, φ) to calculate shallow foundation bearing capacities under Terzaghi failure theory.',
    scope: [
      'Conducted direct shear lab testing on three soil specimens under normal stresses of 50, 100, and 150 kPa.',
      'Applied Terzaghi bearing capacity equations to determine ultimate and allowable bearing pressures for shallow footing design.',
      'Evaluated settlement limitations and factor of safety criteria for square and strip foundation profiles.',
    ],
    details: [
      'Conducted direct shear lab testing on three soil specimens under normal stresses of 50, 100, and 150 kPa.',
      'Applied Terzaghi bearing capacity equations to determine ultimate and allowable bearing pressures for shallow footing design.',
      'Evaluated settlement limitations and factor of safety criteria for square and strip foundation profiles.',
    ],
    outcome:
      'Allowable soil bearing pressure curves and recommendations for foundation depth and dimensions.',
    contribution:
      'Laboratory testing and geotechnical calculation report executed in Soil Mechanics laboratory.',
    source: ['Documents/Semester Projects/Soil Bearing Capacity Analysis.pdf'],
  },
  {
    slug: 'water-treatment-jar-testing',
    title: 'Water Treatment Sedimentation & Jar Testing',
    category: 'Water',
    categoryBadge: 'WATER & ENV',
    filterCategories: ['Water & Environmental'],
    featured: false,
    period: '2025',
    subtitle: 'Environmental Engineering',
    domain: 'Coagulation, Jar Testing, Municipal Treatment Sizing',
    organization: 'CUI Wah Campus',
    badge: 'Environmental Engineering Project',
    tools: ['Jar Testing', 'Alum Dosage', 'Sedimentation Design', 'WASA Guidelines'],
    diagram: 'water',
    summary:
      'Raw water characterization and jar testing to design a municipal sedimentation tank for Faisal Hills.',
    context:
      'Environmental engineering project examining physical-chemical water treatment, coagulation dynamics, and sedimentation tank geometry.',
    scope: [
      'Analyzed raw water parameters (pH 7.23, TDS 413 mg/L, TSS 2 mg/L).',
      'Identified optimum alum coagulant dosage of 2 mg/L achieving 250 FTU turbidity reduction and scaled tank dimensions per WASA standards.',
      'Calculated surface overflow rates, weir loading rates, and detention times for rapid settling basins.',
    ],
    details: [
      'Analyzed raw water parameters (pH 7.23, TDS 413 mg/L, TSS 2 mg/L).',
      'Identified optimum alum coagulant dosage of 2 mg/L achieving 250 FTU turbidity reduction and scaled tank dimensions per WASA standards.',
      'Calculated surface overflow rates, weir loading rates, and detention times for rapid settling basins.',
    ],
    outcome:
      'Design package for a municipal clarification tank with optimal coagulant dosing protocol.',
    contribution:
      'Environmental laboratory testing and process design report.',
    source: ['Documents/Semester Projects/Jar Testing & Sedimentation Design.pdf'],
  },
  {
    slug: 'colorado-river-hydrology',
    title: 'Hydrological Analysis of Colorado River Catchment',
    category: 'Water',
    categoryBadge: 'WATER & ENV',
    filterCategories: ['Water & Environmental'],
    featured: false,
    period: '2024',
    subtitle: 'Surface Water Hydrology',
    domain: 'SCS-CN Method, Unit Hydrographs, Catchment Modeling',
    organization: 'CUI Wah Campus',
    badge: 'Hydrological Modeling Project',
    tools: ['SCS-CN Method', 'Hydrographs', 'Discharge Estimation', 'Hydrology'],
    diagram: 'water',
    summary:
      'Precipitation and stream discharge modeling for a 600 sq-km watershed in Colorado River Valley.',
    context:
      'Hydrological watershed modeling assessing spatial rainfall distribution and streamflow hydrographs across a major river catchment.',
    scope: [
      'Applied Thiessen polygon weighting across 6 rain gauge stations, derived synthetic and S-curve unit hydrographs, and estimated peak runoff discharges.',
      'Calculated cumulative runoff depths and time of concentration using the SCS Curve Number (CN) methodology.',
      'Formulated peak discharge hydrographs for design storm events to evaluate downstream flood mitigation requirements.',
    ],
    details: [
      'Applied Thiessen polygon weighting across 6 rain gauge stations, derived synthetic and S-curve unit hydrographs, and estimated peak runoff discharges.',
      'Calculated cumulative runoff depths and time of concentration using the SCS Curve Number (CN) methodology.',
      'Formulated peak discharge hydrographs for design storm events to evaluate downstream flood mitigation requirements.',
    ],
    outcome:
      'A synthetic hydrograph model and discharge estimation suite for flood forecasting and hydraulic infrastructure planning.',
    contribution:
      'Catchment hydrological study completed under Engineering Hydrology coursework.',
    source: ['Documents/Semester Projects/Colorado River Catchment Hydrology.pdf'],
  },
]

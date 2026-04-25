// export interface Product {
//   id: string;
//   name: string;
//   category: string;
//   shortDescription: string;
//   description: string[];
//   specifications: {
//     label: string;
//     value: string;
//   }[];
//   applications: string[];
//   benefits: string[];
//   relatedProducts: string[];
// }

// export const products: Record<string, Product> = {
//   "pressboard-3mm": {
//     id: "pressboard-3mm",
//     name: "Electrical Grade Pressboard – 3 mm",
//     category: "Pressboard",
//     shortDescription:
//       "Electrical grade cellulose pressboard used as solid insulation in oil-immersed power and distribution transformers",

//     description: [
//       "Electrical grade pressboard is a solid insulation material manufactured from high-purity, long-fibre cellulose pulp. The 3 mm thickness is one of the most commonly used variants in transformer construction due to its balanced electrical, mechanical, and fabrication properties.",
//       "This pressboard is widely used in oil-immersed power and distribution transformers as solid insulation barriers, spacers, and structural insulation elements. Its porous fibre structure enables excellent oil impregnation, which significantly enhances dielectric strength during operation.",
//       "The material is produced under strictly controlled manufacturing conditions to ensure uniform density, low shrinkage, and consistent thickness. These characteristics are critical for maintaining electrical clearances and long-term mechanical stability inside transformer assemblies.",
//       "3 mm pressboard can be supplied as full sheets or further processed into machined components depending on the transformer design requirements.",
//     ],

//     specifications: [
//       { label: "Base Material", value: "High-purity cellulose fibres (electrical grade)" },
//       { label: "Nominal Thickness", value: "3.0 mm" },
//       { label: "Thickness Tolerance", value: "± 0.1 mm" },
//       { label: "Density", value: "0.9 – 1.2 g/cm³" },
//       { label: "Dielectric Strength (in oil)", value: "≥ 15 kV/mm" },
//       { label: "Operating Temperature Class", value: "Class A – 105°C" },
//       { label: "Moisture Content", value: "≤ 6%" },
//       { label: "Oil Compatibility", value: "Excellent (mineral transformer oil)" },
//       { label: "Surface Finish", value: "Smooth / calendered" },
//       { label: "Standard Sheet Sizes", value: "1000 × 2000 mm (custom sizes available)" },
//       { label: "Processing Options", value: "Cut-to-size sheets, machining, drilling" },
//     ],

//     applications: [
//       "Solid insulation barriers in power transformers",
//       "Phase and winding separation in distribution transformers",
//       "Structural insulation blocks and spacers",
//       "Electrical clearance insulation in HV equipment",
//       "Insulation supports for transformer leads and bushings",
//     ],

//     benefits: [
//       "High dielectric strength after oil impregnation",
//       "Good mechanical rigidity with low deformation",
//       "Uniform thickness ensures reliable electrical clearances",
//       "Compatible with standard transformer insulation systems",
//       "Easily machinable for custom transformer components",
//     ],

//     relatedProducts: ["pre-compressed-pressboard", "presspaper", "crepe-paper"],
//   },

//   "pre-compressed-pressboard": {
//     id: "pre-compressed-pressboard",
//     name: "Pre-Compressed Pressboard",
//     category: "Pressboard",
//     shortDescription:
//       "High-density pressboard for critical transformer insulation and load-bearing applications",

//     description: [
//       "Pre-compressed pressboard is a high-density insulation material produced by compressing cellulose-based pressboards under controlled pressure and temperature conditions. This process significantly improves dimensional stability, mechanical strength, and resistance to shrinkage.",
//       "This material is specifically intended for demanding transformer applications where standard pressboard may not meet mechanical or long-term stability requirements. It is commonly used in large power transformers and high-voltage insulation systems.",
//       "Due to its higher density, pre-compressed pressboard offers superior resistance to mechanical stresses caused by short-circuit forces while maintaining excellent dielectric properties after oil impregnation.",
//       "It is suitable for thick sections, load-bearing insulation parts, and machined transformer components.",
//     ],

//     specifications: [
//       { label: "Base Material", value: "Pre-compressed high-purity cellulose fibres" },
//       { label: "Thickness Range", value: "3 mm – 75 mm" },
//       { label: "Density", value: "1.3 – 1.4 g/cm³" },
//       { label: "Dielectric Strength (in oil)", value: "≥ 18 kV/mm" },
//       { label: "Operating Temperature Class", value: "Class A – 105°C" },
//       { label: "Dimensional Stability", value: "Very high (low shrinkage)" },
//       { label: "Mechanical Strength", value: "High, suitable for load-bearing insulation" },
//       { label: "Oil Compatibility", value: "Excellent (mineral transformer oil)" },
//       { label: "Supply Form", value: "Sheets, blocks, machined parts" },
//       { label: "Fabrication Options", value: "CNC machining, milling, drilling" },
//     ],

//     applications: [
//       "High-voltage and extra-high-voltage power transformers",
//       "Main insulation barriers and spacers",
//       "Load-bearing structural insulation components",
//       "Transformer cylinders, rings, and support blocks",
//       "Insulation components exposed to high mechanical stress",
//     ],

//     benefits: [
//       "Superior dimensional stability compared to standard pressboard",
//       "High resistance to mechanical stresses during short circuits",
//       "Reduced shrinkage during transformer service life",
//       "Improved reliability in critical insulation zones",
//       "Ideal for thick and precision-machined components",
//     ],

//     relatedProducts: ["pressboard-3mm", "presspaper", "crepe-paper"],
//   },

//   presspaper: {
//     id: "presspaper",
//     name: "Multiply Electrical Presspaper",
//     category: "Presspaper",
//     shortDescription:
//       "High-purity cellulose presspaper for transformer, motor, and electrical insulation systems",

//     description: [
//       "Multiply presspaper is manufactured from carefully selected cellulose fibres using multi-vat cylinder machines and subsequently calendered to obtain a smooth and uniform surface.",
//       "The paper consists of homogeneous layers with excellent mechanical strength, dielectric performance, and ageing resistance, making it suitable for use in transformer and motor insulation systems.",
//       "Thermally upgraded variants are available for applications requiring improved thermal endurance. Diamond-dotted epoxy resin coatings can be applied on one or both sides for inter-layer bonding in transformer windings.",
//     ],

//     specifications: [
//       { label: "Grades Available", value: "KP 4.1, K2, Grade 4, Thermally Upgraded" },
//       { label: "Raw Material", value: "High-purity cellulose fibres" },
//       { label: "Manufacturing Process", value: "Multi-vat cylinder machine" },
//       { label: "Surface Finish", value: "Calendered smooth finish" },
//       { label: "Resin Options", value: "Plain or diamond-dotted epoxy (B-stage)" },
//       { label: "Thermal Class", value: "Class A / upgraded variants available" },
//     ],

//     applications: [
//       "Transformer winding insulation",
//       "Inter-layer insulation in coils",
//       "Motor slot insulation",
//       "Capacitor insulation",
//       "High-voltage electrical components",
//     ],

//     benefits: [
//       "High electrical and mechanical strength",
//       "Excellent ageing resistance",
//       "Uniform thickness and surface quality",
//       "Compatible with transformer oils and resins",
//     ],

//     relatedProducts: ["pressboard-3mm", "pre-compressed-pressboard", "crepe-paper"],
//   },

//   "crepe-paper": {
//     id: "crepe-paper",
//     name: "Electrical Crepe Paper",
//     category: "Crepe Paper",
//     shortDescription:
//       "Flexible creped insulation paper for transformer windings and conductor insulation",

//     description: [
//       "Electrical crepe paper is produced by mechanically creping electrical grade kraft paper, resulting in improved flexibility and elongation compared to plain paper.",
//       "This material is widely used in transformer windings, lead insulation, and conductor covering where bending, stretching, and oil retention are required.",
//       "Crepe paper provides increased surface area, which improves oil absorption and helps reduce operating temperatures inside transformers.",
//       "Regular, thermally upgraded, and semi-conducting black crepe paper variants are available depending on insulation requirements.",
//     ],

//     specifications: [
//       { label: "Base Material", value: "Electrical grade kraft paper" },
//       { label: "Elongation Range", value: "10% – 300%" },
//       { label: "Base Paper Thickness", value: "40 – 150 microns" },
//       { label: "Supply Forms", value: "Rolls, pads, flexible tubes" },
//       { label: "Thermal Class", value: "Class A (upgraded variants available)" },
//     ],

//     applications: [
//       "Transformer winding insulation",
//       "Copper conductor covering",
//       "Lead and terminal insulation",
//       "Electrical shielding (semi-conducting crepe)",
//     ],

//     benefits: [
//       "High flexibility and tear resistance",
//       "Improved oil retention",
//       "Enhanced mechanical strength",
//       "Suitable for complex winding geometries",
//     ],

//     relatedProducts: ["presspaper", "pressboard-3mm", "pre-compressed-pressboard"],
//   },
//   /* ===================== MACHINED COMPONENTS ===================== */

//   "machined-pressboard-components": {
//     id: "machined-pressboard-components",
//     name: "Machined Pressboard Components",
//     category: "Machined Components",
//     shortDescription:
//       "Precision machined pressboard insulation components for oil-immersed transformers",

//     description: [
//       "Machined pressboard components are manufactured from electrical grade pressboard and pre-compressed pressboard using precision machining processes.",
//       "These components are used extensively in power and distribution transformers where accurate dimensions, smooth edges, and tight tolerances are critical to insulation performance and assembly.",
//       "All components are produced to be burr-free with controlled thickness tolerances, ensuring reliable electrical clearances and mechanical stability inside transformer assemblies.",
//       "Components can be supplied as individual parts or as complete insulation kits based on transformer design drawings.",
//     ],

//     specifications: [
//       { label: "Base Materials", value: "Pressboard / Pre-compressed pressboard" },
//       { label: "Manufacturing Method", value: "CNC machining, milling, drilling" },
//       { label: "Edge Finish", value: "Burr-free, rounded edges" },
//       { label: "Dimensional Tolerance", value: "Low tolerance as per drawing" },
//       { label: "Oil Compatibility", value: "Excellent (transformer oil)" },
//       { label: "Supply Form", value: "Individual components or assembled kits" },
//     ],

//     applications: [
//       "Oil-immersed power transformers",
//       "Distribution transformers",
//       "HV and EHV transformer insulation systems",
//       "Transformer refurbishment and repair",
//     ],

//     benefits: [
//       "High dimensional accuracy",
//       "Reduced assembly errors",
//       "Consistent insulation clearances",
//       "Ready-to-install transformer components",
//       "Improved reliability under electrical and mechanical stress",
//     ],

//     relatedProducts: ["pressboard-3mm", "pre-compressed-pressboard", "presspaper"],
//   },

//   /* ===================== MACHINED COMPONENT TYPES ===================== */

//   "machined-component-types": {
//     id: "machined-component-types",
//     name: "Machined Insulation Component Types",
//     category: "Machined Components",
//     shortDescription: "Standard machined insulation components manufactured from pressboard",

//     description: [
//       "A wide range of standard machined insulation components are manufactured from pressboard and pre-compressed pressboard based on transformer design requirements.",
//       "These components are commonly used to provide insulation spacing, mechanical support, and electrical clearance control inside transformers.",
//     ],

//     specifications: [
//       { label: "Typical Components", value: "Spacers, runners, wedges, rings, cylinders" },
//       { label: "Profiles", value: "Rectangular, trapezoidal, rounded-edge profiles" },
//       { label: "Customization", value: "As per customer drawings and specifications" },
//     ],

//     applications: [
//       "Winding spacers and supports",
//       "End insulation rings",
//       "Clamping and pressure components",
//       "Transformer internal insulation assemblies",
//     ],

//     benefits: [
//       "Standardized and custom profiles available",
//       "Consistent electrical clearances",
//       "High mechanical integrity",
//     ],

//     relatedProducts: ["machined-pressboard-components"],
//   },

//   /* ===================== MOULDED COMPONENTS ===================== */

//   "moulded-pressboard-components": {
//     id: "moulded-pressboard-components",
//     name: "Moulded Pressboard Components",
//     category: "Moulded Components",
//     shortDescription:
//       "Hot-moulded pressboard insulation components for complex transformer geometries",

//     description: [
//       "Moulded pressboard components are produced by forming electrical grade pressboard under heat and pressure using precision moulds.",
//       "This process allows the manufacture of complex three-dimensional insulation parts that cannot be produced efficiently through machining alone.",
//       "Moulded components provide excellent mechanical strength, dimensional stability, and dielectric performance after oil impregnation.",
//     ],

//     specifications: [
//       { label: "Base Material", value: "Electrical grade mouldable pressboard" },
//       { label: "Manufacturing Process", value: "Hot moulding under controlled pressure" },
//       { label: "Shape Capability", value: "Complex 3D geometries" },
//       { label: "Oil Impregnation", value: "Excellent compatibility" },
//       { label: "Dimensional Stability", value: "High after curing and oil impregnation" },
//     ],

//     applications: [
//       "Oil-filled power transformers",
//       "Distribution transformers",
//       "High-voltage insulation assemblies",
//     ],

//     benefits: [
//       "Complex shapes without machining joints",
//       "Improved mechanical integrity",
//       "Better electric field distribution",
//       "Reduced number of insulation parts",
//     ],

//     relatedProducts: ["pressboard-3mm", "pre-compressed-pressboard"],
//   },

//   /* ===================== MOULDED COMPONENT TYPES ===================== */

//   "moulded-component-types": {
//     id: "moulded-component-types",
//     name: "Standard Moulded Insulation Components",
//     category: "Moulded Components",
//     shortDescription: "Common moulded pressboard insulation components used in transformers",

//     description: [
//       "Moulded pressboard components are designed to adapt insulation structures to electric field conditions within transformers.",
//       "These components are critical in controlling stress distribution and improving insulation reliability in high-voltage zones.",
//     ],

//     specifications: [
//       {
//         label: "Typical Components",
//         value: "Angle rings, snouts, lead exits, collars, washers",
//       },
//       { label: "Design Basis", value: "Transformer insulation system design" },
//     ],

//     applications: [
//       "High-field insulation zones",
//       "Lead exit insulation",
//       "Transformer winding ends",
//       "Critical electrical stress areas",
//     ],

//     benefits: [
//       "Optimized electric field control",
//       "Improved dielectric reliability",
//       "Long service life under oil and heat",
//     ],

//     relatedProducts: ["moulded-pressboard-components"],
//   },

//   /* ===================== INSULATION KITS ===================== */

//   "transformer-insulation-kits": {
//     id: "transformer-insulation-kits",
//     name: "Transformer Insulation Component Kits",
//     category: "Machined Components",
//     shortDescription: "Pre-assembled pressboard insulation kits for transformer manufacturing",

//     description: [
//       "Transformer insulation kits consist of a complete set of machined and moulded insulation components required for a specific transformer design.",
//       "These kits are supplied as per customer drawings and reduce handling, cutting errors, and assembly time on the shop floor.",
//       "Each kit is verified for dimensional accuracy before dispatch.",
//     ],

//     specifications: [
//       { label: "Included Items", value: "Machined and moulded pressboard components" },
//       { label: "Customization", value: "Fully as per transformer design" },
//       { label: "Supply Mode", value: "Tagged and grouped kits" },
//     ],

//     applications: [
//       "Distribution transformer manufacturing",
//       "Power transformer manufacturing",
//       "Transformer refurbishment projects",
//     ],

//     benefits: [
//       "Reduced production time",
//       "Lower material wastage",
//       "Consistent assembly quality",
//       "Simplified inventory management",
//     ],

//     relatedProducts: ["machined-pressboard-components", "moulded-pressboard-components"],
//   },

//   "fr4-epoxy-sheet": {
//     id: "fr4-epoxy-sheet",
//     name: "Fiberglass Epoxy Sheet FR4 - General Purpose Grade",
//     category: "Epoxy Sheets",
//     shortDescription: "Superior mechanical strength epoxy sheets for demanding applications",
//     description: [
//       "FR4 fiberglass epoxy sheets are the industry standard for electrical and mechanical applications. Composed of woven fiberglass cloth impregnated with epoxy resin, this material offers excellent strength, dimensional stability, and electrical insulation.",
//       "Our FR4 sheets meet international standards and are perfect for manufacturing printed circuit boards, electrical insulation components, and mechanical parts that require high strength-to-weight ratio.",
//       "Available in multiple thicknesses and sizes, FR4 sheets can be easily machined, drilled, and punched to create custom components for your specific application.",
//     ],
//     specifications: [
//       { label: "Material", value: "Epoxy resin + Fiberglass cloth" },
//       { label: "Thickness", value: "0.5mm - 100mm" },
//       { label: "Tensile Strength", value: "≥340 MPa" },
//       { label: "Dielectric Strength", value: "≥16 kV/mm" },
//       { label: "Temperature Rating", value: "-40°C to 130°C" },
//       { label: "Available Sizes", value: "1020x1220mm, 1020x2040mm" },
//       { label: "Custom Options", value: "CNC machining, Laser cutting" },
//     ],
//     applications: [
//       "Printed circuit board substrates",
//       "Electrical insulation barriers",
//       "Structural components for electronics",
//       "Test fixtures and jigs",
//       "Motor and generator insulation",
//     ],
//     benefits: [
//       "Excellent electrical insulation properties",
//       "High mechanical strength and rigidity",
//       "Easy to machine and fabricate",
//       "Flame retardant properties (FR4 grade)",
//     ],
//     relatedProducts: ["g10-epoxy-sheet", "epoxy-rods", "paper-phenolic"],
//   },

//   "g10-epoxy-sheet": {
//     id: "g10-epoxy-sheet",
//     name: "Epoxy Sheet G10 - High Mechanical Strength Variant",
//     category: "Epoxy Sheets",
//     shortDescription: "Premium G10 grade for maximum strength and durability",
//     description: [
//       "G10 epoxy sheets provide even higher mechanical strength than FR4, making them ideal for applications requiring maximum structural integrity. The continuous filament fiberglass reinforcement creates a material with superior impact resistance and dimensional stability.",
//       "This material excels in applications where FR4 would be insufficient. G10 maintains its properties across a wide temperature range and resists moisture absorption better than many alternatives.",
//       "Choose G10 when your application demands the highest quality epoxy laminate. Our G10 sheets are manufactured to strict tolerances and inspected for consistency.",
//     ],
//     specifications: [
//       { label: "Material", value: "Epoxy resin + Continuous fiberglass" },
//       { label: "Thickness", value: "0.5mm - 100mm" },
//       { label: "Tensile Strength", value: "≥380 MPa" },
//       { label: "Dielectric Strength", value: "≥18 kV/mm" },
//       { label: "Temperature Rating", value: "-60°C to 140°C" },
//       { label: "Available Sizes", value: "1020x1220mm, 1020x2040mm" },
//       {
//         label: "Custom Options",
//         value: "Precision machining, Custom dimensions",
//       },
//     ],
//     applications: [
//       "High-strength structural components",
//       "Aerospace and defense applications",
//       "Cryogenic insulation systems",
//       "High-performance electrical insulation",
//       "Precision mechanical parts",
//     ],
//     benefits: [
//       "Maximum mechanical strength in epoxy laminates",
//       "Excellent low-temperature properties",
//       "Superior moisture resistance",
//       "Maintains properties under extreme conditions",
//     ],
//     relatedProducts: ["fr4-epoxy-sheet", "epoxy-rods", "delrin-sheet"],
//   },

//   "paper-phenolic": {
//     id: "paper-phenolic",
//     name: "Paper Phenolic Laminate - NEMA XX Grade",
//     category: "Phenolic Laminates",
//     shortDescription: "Paper-based phenolic laminate for electrical applications",
//     description: [
//       "Paper phenolic laminates combine kraft paper with phenolic resin to create an economical material with good electrical insulation properties. This material is widely used in electrical equipment where high mechanical strength is not critical.",
//       "NEMA XX grade paper phenolic offers consistent quality at a competitive price point. It machines easily and provides reliable electrical insulation for a variety of applications.",
//       "This material is the go-to choice for manufacturers who need cost-effective electrical insulation without compromising on quality standards.",
//     ],
//     specifications: [
//       { label: "Material", value: "Phenolic resin + Kraft paper" },
//       { label: "Thickness", value: "0.5mm - 50mm" },
//       { label: "Tensile Strength", value: "≥60 MPa" },
//       { label: "Dielectric Strength", value: "≥12 kV/mm" },
//       { label: "Temperature Rating", value: "-40°C to 120°C" },
//       { label: "Available Sizes", value: "1020x1220mm, Custom sizes" },
//       { label: "Custom Options", value: "Punching, Die-cutting, Machining" },
//     ],
//     applications: [
//       "Terminal boards and strips",
//       "Electrical panel insulation",
//       "Switch and relay components",
//       "Transformer barriers",
//       "General electrical insulation",
//     ],
//     benefits: [
//       "Cost-effective electrical insulation",
//       "Easy to machine and fabricate",
//       "Good dielectric properties",
//       "Consistent quality and availability",
//     ],
//     relatedProducts: ["cotton-phenolic", "bakelite-sheet", "fr4-epoxy-sheet"],
//   },

//   "cotton-phenolic": {
//     id: "cotton-phenolic",
//     name: "Cotton Phenolic Laminate - NEMA CE Grade",
//     category: "Phenolic Laminates",
//     shortDescription: "Cotton-based phenolic for mechanical applications",
//     description: [
//       "Cotton phenolic laminates use cotton fabric reinforcement for applications requiring higher impact resistance than paper-based laminates. NEMA CE grade material offers excellent machinability and wear resistance.",
//       "This material is ideal for mechanical components that also require electrical insulation properties. The cotton fabric reinforcement provides better impact strength and toughness compared to paper phenolic.",
//       "Manufacturers choose cotton phenolic when they need a material that can withstand mechanical stress while maintaining electrical insulation.",
//     ],
//     specifications: [
//       { label: "Material", value: "Phenolic resin + Cotton fabric" },
//       { label: "Thickness", value: "1mm - 75mm" },
//       { label: "Tensile Strength", value: "≥90 MPa" },
//       { label: "Dielectric Strength", value: "≥10 kV/mm" },
//       { label: "Temperature Rating", value: "-40°C to 120°C" },
//       { label: "Available Sizes", value: "1020x1220mm, 1020x2040mm" },
//       { label: "Custom Options", value: "CNC machining, Custom shapes" },
//     ],
//     applications: [
//       "Gears and mechanical components",
//       "Washers and spacers",
//       "Electrical motor parts",
//       "Machinery insulation",
//       "Wear-resistant components",
//     ],
//     benefits: [
//       "Superior impact resistance",
//       "Excellent machinability",
//       "Good wear resistance",
//       "Combined electrical and mechanical properties",
//     ],
//     relatedProducts: ["paper-phenolic", "bakelite-sheet", "delrin-sheet"],
//   },

//   "bakelite-sheet": {
//     id: "bakelite-sheet",
//     name: "Bakelite Sheet - General Phenolic Applications",
//     category: "Phenolic Laminates",
//     shortDescription: "Versatile bakelite sheets for diverse industrial uses",
//     description: [
//       "Bakelite sheets are versatile phenolic laminates suitable for both electrical and mechanical applications. Available in paper and cotton grades, these sheets offer reliable performance across a wide range of uses.",
//       "As one of the earliest synthetic materials, bakelite has proven its reliability over decades of industrial use. Our bakelite sheets maintain the traditional quality while meeting modern manufacturing standards.",
//       "Whether you need electrical insulation, mechanical components, or heat-resistant parts, our bakelite sheets deliver consistent performance at competitive prices.",
//     ],
//     specifications: [
//       { label: "Material", value: "Phenolic resin + Paper/Cotton" },
//       { label: "Thickness", value: "0.5mm - 100mm" },
//       { label: "Tensile Strength", value: "60-90 MPa (grade dependent)" },
//       { label: "Dielectric Strength", value: "10-12 kV/mm" },
//       { label: "Temperature Rating", value: "-40°C to 130°C" },
//       { label: "Available Sizes", value: "1020x1220mm, Custom sizes" },
//       { label: "Custom Options", value: "Multiple grades, Custom fabrication" },
//     ],
//     applications: [
//       "Electrical switchgear components",
//       "Industrial machinery parts",
//       "Heat-resistant handles and knobs",
//       "Terminal blocks and connectors",
//       "General purpose insulation",
//     ],
//     benefits: [
//       "Proven reliability over decades",
//       "Available in multiple grades",
//       "Heat and chemical resistance",
//       "Cost-effective for many applications",
//     ],
//     relatedProducts: ["paper-phenolic", "cotton-phenolic", "fr4-epoxy-sheet"],
//   },

//   "kraft-paper": {
//     id: "kraft-paper",
//     name: "Electrical Grade Kraft Paper",
//     category: "Insulation Paper",
//     shortDescription: "Premium kraft paper for transformer winding insulation",
//     description: [
//       "Electrical grade kraft paper is essential for transformer winding insulation. Our kraft paper is manufactured to precise thickness tolerances and undergoes rigorous testing to ensure consistent electrical properties.",
//       "This specialized paper provides reliable insulation between transformer windings while allowing proper oil flow for cooling. The high dielectric strength prevents electrical breakdown while maintaining flexibility for easy winding.",
//       "Transformer manufacturers trust our kraft paper for both small distribution transformers and large power transformers. Every roll is tested and certified before shipping.",
//     ],
//     specifications: [
//       { label: "Material", value: "Pure cellulose kraft pulp" },
//       { label: "Thickness", value: "0.05mm - 0.5mm" },
//       { label: "Density", value: "0.7 - 0.9 g/cm³" },
//       { label: "Dielectric Strength", value: "≥20 kV/mm (in oil)" },
//       { label: "Temperature Rating", value: "105°C continuous" },
//       {
//         label: "Available Sizes",
//         value: "Rolls: 1000mm width, Custom lengths",
//       },
//       { label: "Custom Options", value: "Custom thickness, Slit widths" },
//     ],
//     applications: [
//       "Transformer winding insulation",
//       "Layer insulation in coils",
//       "Cable wrapping and insulation",
//       "Capacitor dielectric",
//       "Electrical equipment insulation",
//     ],
//     benefits: [
//       "High dielectric strength in transformer oil",
//       "Excellent flexibility for winding",
//       "Precise thickness control",
//       "Low moisture content for reliability",
//     ],
//     relatedProducts: ["pressboard-3mm", "nomex-paper", "polyester-film"],
//   },

//   "delrin-sheet": {
//     id: "delrin-sheet",
//     name: "Delrin Sheet (POM) - Engineering Grade Acetal",
//     category: "Engineering Plastics",
//     shortDescription: "High-performance acetal sheets for precision components",
//     description: [
//       "Delrin (POM - Polyoxymethylene) sheets offer exceptional mechanical properties, low friction, and excellent dimensional stability. This engineering thermoplastic is ideal for precision parts that require tight tolerances.",
//       "The material's natural lubricity makes it perfect for wear-resistant components like gears, bearings, and sliding parts. Delrin machines beautifully, producing smooth surfaces without extensive finishing.",
//       "When your application demands precision and reliability, Delrin delivers. Our sheets are manufactured to consistent quality standards and available in multiple thicknesses.",
//     ],
//     specifications: [
//       { label: "Material", value: "Polyoxymethylene (Acetal)" },
//       { label: "Thickness", value: "1mm - 100mm" },
//       { label: "Tensile Strength", value: "≥60 MPa" },
//       { label: "Dielectric Strength", value: "Moderate (not primary use)" },
//       { label: "Temperature Rating", value: "-40°C to 90°C" },
//       { label: "Available Sizes", value: "1000x2000mm, Custom sizes" },
//       {
//         label: "Custom Options",
//         value: "Precision CNC machining, Custom parts",
//       },
//     ],
//     applications: [
//       "Precision gears and bearings",
//       "Conveyor components",
//       "Food processing equipment parts",
//       "Automotive components",
//       "Medical device components",
//     ],
//     benefits: [
//       "Excellent dimensional stability",
//       "Low friction and self-lubricating",
//       "Superior machinability",
//       "High fatigue resistance",
//     ],
//     relatedProducts: ["g10-epoxy-sheet", "cotton-phenolic", "ptfe-sheet"],
//   },

//   "fiberglass-tubes": {
//     id: "fiberglass-tubes",
//     name: "Fiberglass Tubes - Industrial Grade",
//     category: "Fiberglass Products",
//     shortDescription: "Robust insulation tubes for high-stress environments",
//     description: [
//       "Fiberglass tubes provide excellent electrical insulation with mechanical strength for industrial applications. Made from continuous fiberglass filaments and resin, these tubes resist heat, chemicals, and mechanical stress.",
//       "Our fiberglass tubes are used in electrical equipment, motor windings, and industrial machinery where both insulation and structural support are required. The tubes maintain their properties across a wide temperature range.",
//       "Available in multiple diameters and wall thicknesses, we can supply standard sizes or custom-made tubes to your exact specifications.",
//     ],
//     specifications: [
//       { label: "Material", value: "Fiberglass + Epoxy/Polyester resin" },
//       { label: "Diameter Range", value: "3mm - 200mm" },
//       { label: "Wall Thickness", value: "0.5mm - 10mm" },
//       { label: "Dielectric Strength", value: "≥15 kV/mm" },
//       { label: "Temperature Rating", value: "-40°C to 155°C" },
//       { label: "Available Lengths", value: "Up to 3000mm, Custom cut" },
//       { label: "Custom Options", value: "Custom diameters, Special resins" },
//     ],
//     applications: [
//       "Motor and generator slot insulation",
//       "Electrical bus bar sleeves",
//       "High-voltage equipment insulation",
//       "Structural supports in electrical gear",
//       "Industrial machinery components",
//     ],
//     benefits: [
//       "Excellent electrical insulation",
//       "High mechanical strength",
//       "Chemical and heat resistant",
//       "Long service life in harsh conditions",
//     ],
//     relatedProducts: ["fr4-epoxy-sheet", "syndanio-sheet", "g10-epoxy-sheet"],
//   },

//   "syndanio-sheet": {
//     id: "syndanio-sheet",
//     name: "Syndanio Sheets - Thermal Insulation",
//     category: "Thermal Insulation",
//     shortDescription: "High-temperature insulation boards for foundries and furnaces",
//     description: [
//       "Syndanio sheets are specialized thermal insulation materials designed for high-temperature industrial applications. These boards withstand extreme heat while providing both thermal and electrical insulation properties.",
//       "Commonly used in foundries, furnaces, and high-temperature electrical equipment, Syndanio sheets prevent heat transfer while maintaining structural integrity. The material resists thermal shock and repeated heating cycles.",
//       "When your application involves high temperatures, Syndanio sheets deliver the insulation performance you need without degrading over time.",
//     ],
//     specifications: [
//       { label: "Material", value: "Calcium silicate composite" },
//       { label: "Thickness", value: "3mm - 75mm" },
//       { label: "Density", value: "0.9 - 1.1 g/cm³" },
//       { label: "Thermal Conductivity", value: "Low (0.06 W/mK)" },
//       { label: "Temperature Rating", value: "Up to 1000°C" },
//       { label: "Available Sizes", value: "1000x1000mm, Custom sizes" },
//       { label: "Custom Options", value: "Custom thickness, Die-cut shapes" },
//     ],
//     applications: [
//       "Foundry mold insulation",
//       "Furnace lining and insulation",
//       "High-temperature electrical equipment",
//       "Induction heating systems",
//       "Metal casting operations",
//     ],
//     benefits: [
//       "Withstands extreme temperatures",
//       "Excellent thermal insulation",
//       "Resistant to thermal shock",
//       "Both thermal and electrical insulation",
//     ],
//     relatedProducts: ["mica-sheets", "fiberglass-tubes", "ptfe-sheet"],
//   },

//   "ptfe-cloth-non-adhesive": {
//     id: "ptfe-cloth-non-adhesive",
//     name: "PTFE Cloth Non-Adhesive - Brown and White",
//     category: "PTFE Products",
//     shortDescription: "Premium Teflon cloth for extreme conditions",
//     description: [
//       "PTFE (Teflon) cloth without adhesive backing offers exceptional chemical resistance and non-stick properties. Available in brown and white variants, this material handles extreme temperatures and aggressive chemicals.",
//       "The fiberglass fabric base provides mechanical strength while the PTFE coating delivers the unique properties that make Teflon famous. This cloth is perfect for applications requiring heat resistance and release properties.",
//       "Use PTFE cloth in food processing, packaging machinery, heat sealing, and anywhere you need a material that resists sticking and chemical attack.",
//     ],
//     specifications: [
//       { label: "Material", value: "PTFE-coated fiberglass fabric" },
//       { label: "Thickness", value: "0.08mm - 0.5mm" },
//       { label: "Tensile Strength", value: "≥1500 N/5cm" },
//       { label: "Temperature Rating", value: "-70°C to 260°C continuous" },
//       { label: "Colors Available", value: "Brown, White" },
//       { label: "Available Widths", value: "1000mm, 1270mm, Custom widths" },
//       { label: "Custom Options", value: "Custom widths, Lengths, Colors" },
//     ],
//     applications: [
//       "Heat sealing and packaging",
//       "Conveyor belts for high temperatures",
//       "Release sheets for molding",
//       "Food processing equipment",
//       "Chemical processing applications",
//     ],
//     benefits: [
//       "Extreme temperature resistance",
//       "Non-stick surface properties",
//       "Excellent chemical resistance",
//       "Long service life in harsh conditions",
//     ],
//     relatedProducts: ["ptfe-cloth-adhesive", "ptfe-sheet", "polyester-film"],
//   },

//   "ptfe-cloth-adhesive": {
//     id: "ptfe-cloth-adhesive",
//     name: "PTFE Cloth Adhesive - Cream and Dark Brown",
//     category: "PTFE Products",
//     shortDescription: "Self-adhesive Teflon cloth for easy installation",
//     description: [
//       "PTFE cloth with adhesive backing combines the exceptional properties of Teflon with the convenience of pressure-sensitive adhesive. Simply peel and stick to create non-stick surfaces on existing equipment.",
//       "Available in cream and dark brown colors, this material makes it easy to upgrade machinery with PTFE surfaces without complex installation. The silicone adhesive withstands high temperatures while providing strong bonding.",
//       "Perfect for retrofitting existing equipment or temporary applications where you need PTFE properties without permanent modifications.",
//     ],
//     specifications: [
//       { label: "Material", value: "PTFE cloth + Silicone adhesive" },
//       { label: "Thickness", value: "0.13mm - 0.25mm (total)" },
//       { label: "Tensile Strength", value: "≥1400 N/5cm" },
//       { label: "Temperature Rating", value: "-70°C to 260°C" },
//       { label: "Colors Available", value: "Cream, Dark brown" },
//       { label: "Available Widths", value: "1000mm, Custom widths" },
//       { label: "Custom Options", value: "Die-cut shapes, Custom sizes" },
//     ],
//     applications: [
//       "Heat seal bar covering",
//       "Chute and hopper lining",
//       "Packaging machinery upgrades",
//       "Mold release surfaces",
//       "Food processing equipment",
//     ],
//     benefits: [
//       "Easy peel-and-stick application",
//       "No special installation tools needed",
//       "High-temperature adhesive",
//       "Instant PTFE surface creation",
//     ],
//     relatedProducts: ["ptfe-cloth-non-adhesive", "ptfe-sheet", "polyester-film"],
//   },

//   "ptfe-sheet": {
//     id: "ptfe-sheet",
//     name: "PTFE Virgin Sheets - Pure Teflon",
//     category: "PTFE Products",
//     shortDescription: "Pure PTFE sheets for demanding applications",
//     description: [
//       "Virgin PTFE sheets offer the full range of Teflon properties in solid sheet form. Made from 100% pure PTFE resin, these sheets provide unmatched chemical resistance, low friction, and temperature stability.",
//       "Unlike filled PTFE, virgin material delivers the best possible performance for critical applications. The material remains stable from cryogenic temperatures to well above 200°C.",
//       "When your application cannot compromise on PTFE properties, choose virgin sheets. Available in various thicknesses and supplied in rolls or cut sheets.",
//     ],
//     specifications: [
//       { label: "Material", value: "100% Virgin PTFE resin" },
//       { label: "Thickness", value: "0.5mm - 10mm" },
//       { label: "Tensile Strength", value: "≥27 MPa" },
//       { label: "Dielectric Strength", value: "≥60 kV/mm" },
//       { label: "Temperature Rating", value: "-200°C to 260°C" },
//       { label: "Available Sizes", value: "Rolls and sheets, Custom cut" },
//       { label: "Custom Options", value: "Skived sheets, Custom thickness" },
//     ],
//     applications: [
//       "Chemical processing gaskets",
//       "Pharmaceutical equipment seals",
//       "Food industry components",
//       "High-purity electrical insulation",
//       "Cryogenic sealing applications",
//     ],
//     benefits: [
//       "Maximum chemical resistance",
//       "Lowest coefficient of friction",
//       "Wide temperature capability",
//       "FDA compliant for food contact",
//     ],
//     relatedProducts: ["ptfe-cloth-non-adhesive", "custom-gaskets", "delrin-sheet"],
//   },

//   "epoxy-rods": {
//     id: "epoxy-rods",
//     name: "Epoxy Rods - Fiberglass Round Bars",
//     category: "Epoxy Products",
//     shortDescription: "Solid epoxy rods for precision machining",
//     description: [
//       "Fiberglass epoxy rods provide excellent electrical insulation in a machinable round bar form. These rods are perfect for creating custom components through turning, milling, and drilling operations.",
//       "Made with the same quality epoxy resin and fiberglass as our sheets, these rods offer consistent properties throughout their diameter. They machine cleanly without delamination.",
//       "Use epoxy rods when you need to produce cylindrical insulation components, spacers, standoffs, or any round parts requiring electrical insulation and mechanical strength.",
//     ],
//     specifications: [
//       { label: "Material", value: "Epoxy resin + Fiberglass" },
//       { label: "Diameter Range", value: "3mm - 200mm" },
//       { label: "Tensile Strength", value: "≥350 MPa" },
//       { label: "Dielectric Strength", value: "≥16 kV/mm" },
//       { label: "Temperature Rating", value: "-40°C to 130°C" },
//       { label: "Available Lengths", value: "Up to 3000mm, Custom cut" },
//       {
//         label: "Custom Options",
//         value: "Custom diameters, Precision machining",
//       },
//     ],
//     applications: [
//       "Electrical standoffs and spacers",
//       "Insulating shafts and rods",
//       "Mechanical and structural supports",
//       "Custom machined components",
//       "High-voltage equipment parts",
//     ],
//     benefits: [
//       "Excellent machinability",
//       "Consistent properties throughout",
//       "High strength-to-weight ratio",
//       "Electrical insulation in round form",
//     ],
//     relatedProducts: ["fr4-epoxy-sheet", "g10-epoxy-sheet", "fiberglass-tubes"],
//   },

//   "nomex-paper": {
//     id: "nomex-paper",
//     name: "Nomex Paper - Aramid Fiber Insulation",
//     category: "Advanced Insulation",
//     shortDescription: "High-performance aramid insulation for extreme conditions",
//     description: [
//       "Nomex paper is a premium insulation material made from aramid fibers. This advanced material offers superior thermal stability, mechanical strength, and electrical insulation compared to traditional kraft paper.",
//       "The meta-aramid fiber structure gives Nomex exceptional heat resistance and the ability to maintain properties at temperatures where cellulose materials would fail. It's the choice for high-performance motors and transformers.",
//       "When equipment operates under extreme conditions or requires maximum reliability, Nomex paper delivers. Though more expensive than kraft paper, it provides insurance against premature failure.",
//     ],
//     specifications: [
//       { label: "Material", value: "Meta-aramid (Nomex) fibers" },
//       { label: "Thickness", value: "0.05mm - 0.76mm" },
//       { label: "Density", value: "0.6 - 0.8 g/cm³" },
//       { label: "Dielectric Strength", value: "≥24 kV/mm" },
//       { label: "Temperature Rating", value: "220°C continuous, 240°C peak" },
//       { label: "Available Sizes", value: "Rolls and sheets, Custom sizes" },
//       { label: "Custom Options", value: "Die-cut shapes, Custom thickness" },
//     ],
//     applications: [
//       "High-temperature motor insulation",
//       "Premium transformer insulation",
//       "Aerospace and defense applications",
//       "Industrial motors in harsh environments",
//       "High-reliability electrical equipment",
//     ],
//     benefits: [
//       "Exceptional thermal stability",
//       "Superior mechanical strength",
//       "Maintains properties at high temperatures",
//       "Extended equipment service life",
//     ],
//     relatedProducts: ["kraft-paper", "polyester-film", "mica-sheets"],
//   },

//   "polyester-film": {
//     id: "polyester-film",
//     name: "Polyester Film - Electrical Grade Mylar",
//     category: "Insulation Films",
//     shortDescription: "Thin, flexible electrical insulation film",
//     description: [
//       "Electrical grade polyester film (Mylar) provides excellent insulation in a thin, flexible format. This material combines good electrical properties with mechanical strength and dimensional stability.",
//       "Polyester film is essential for slot insulation in motors, transformer layer insulation, and any application requiring thin but reliable electrical barriers. The film resists moisture and maintains properties across temperature changes.",
//       "Available in various thicknesses from ultra-thin to heavier gauges, our polyester film meets international standards for electrical insulation applications.",
//     ],
//     specifications: [
//       { label: "Material", value: "Biaxially oriented polyester (BOPET)" },
//       { label: "Thickness", value: "0.012mm - 0.35mm" },
//       { label: "Tensile Strength", value: "≥170 MPa" },
//       { label: "Dielectric Strength", value: "≥280 kV/mm" },
//       { label: "Temperature Rating", value: "-70°C to 130°C" },
//       {
//         label: "Available Widths",
//         value: "Rolls up to 1000mm, Custom slitting",
//       },
//       { label: "Custom Options", value: "Custom widths, Corona treatment" },
//     ],
//     applications: [
//       "Motor slot insulation",
//       "Transformer layer insulation",
//       "Capacitor dielectric",
//       "Cable wrapping and insulation",
//       "Flexible printed circuits",
//     ],
//     benefits: [
//       "Excellent dielectric strength",
//       "Thin profile saves space",
//       "Good mechanical properties",
//       "Moisture resistant",
//     ],
//     relatedProducts: ["kraft-paper", "nomex-paper", "ptfe-cloth-non-adhesive"],
//   },

//   "mica-sheets": {
//     id: "mica-sheets",
//     name: "Mica Sheets - Natural and Phlogopite",
//     category: "Mica Products",
//     shortDescription: "High-temperature mineral insulation",
//     description: [
//       "Mica sheets offer exceptional thermal and electrical insulation properties derived from natural mineral sources. Available in muscovite (natural) and phlogopite variants, mica withstands extreme temperatures while providing excellent electrical insulation.",
//       "The unique layered structure of mica allows it to be split into thin sheets while maintaining strength. This material is irreplaceable in high-temperature electrical applications where organic materials would decompose.",
//       "Our mica sheets are carefully selected and processed to ensure consistent quality. Choose mica when your application involves temperatures beyond the capability of conventional insulation materials.",
//     ],
//     specifications: [
//       { label: "Material", value: "Natural/Phlogopite mica" },
//       { label: "Thickness", value: "0.1mm - 2mm" },
//       { label: "Tensile Strength", value: "Moderate (brittle material)" },
//       { label: "Dielectric Strength", value: "≥60 kV/mm" },
//       { label: "Temperature Rating", value: "Up to 600°C (Phlogopite)" },
//       { label: "Available Sizes", value: "1000x1200mm, Custom sizes" },
//       {
//         label: "Custom Options",
//         value: "Mica paper, Flexible mica, Custom cuts",
//       },
//     ],
//     applications: [
//       "High-temperature furnace insulation",
//       "Electric heating element insulation",
//       "Foundry and metallurgical applications",
//       "Commutator segment insulation",
//       "High-voltage electrical insulation",
//     ],
//     benefits: [
//       "Extreme temperature capability",
//       "Excellent electrical insulation",
//       "Natural mineral durability",
//       "Resistant to chemicals and arc",
//     ],
//     relatedProducts: ["syndanio-sheet", "nomex-paper", "ptfe-sheet"],
//   },

//   "custom-gaskets": {
//     id: "custom-gaskets",
//     name: "Custom Gaskets & Precision Components",
//     category: "Custom Fabrication",
//     shortDescription: "Precision-cut parts from any material we supply",
//     description: [
//       "Our custom fabrication service turns any material we supply into precision components for your specific application. Using CNC machining, laser cutting, water jet cutting, and die stamping, we produce parts to your exact specifications.",
//       "Whether you need simple gaskets or complex multi-layer assemblies, our engineering team works with you to optimize designs for manufacturability and performance. We handle everything from prototypes to production volumes.",
//       "Stop struggling with in-house fabrication of specialized materials. Send us your drawings and let our experts produce components that meet your tolerance requirements consistently.",
//     ],
//     specifications: [
//       { label: "Materials Available", value: "All materials we supply" },
//       { label: "Tolerance", value: "±0.05mm (depending on material)" },
//       { label: "Size Range", value: "Small gaskets to 2000mm panels" },
//       { label: "Thickness Range", value: "As thin as 0.05mm to 100mm+" },
//       { label: "Production Volume", value: "Prototype to high volume" },
//       {
//         label: "Processing Methods",
//         value: "CNC, Laser, Water jet, Die cutting",
//       },
//       {
//         label: "Custom Options",
//         value: "Multi-layer assemblies, Special shapes",
//       },
//     ],
//     applications: [
//       "Electrical equipment gaskets and barriers",
//       "Transformer insulation components",
//       "Motor and generator parts",
//       "Custom mechanical components",
//       "Specialized electrical insulation assemblies",
//     ],
//     benefits: [
//       "Expert fabrication of difficult materials",
//       "Consistent quality across production runs",
//       "Engineering support for design optimization",
//       "Single-source solution from material to finished part",
//     ],
//     relatedProducts: ["transformer-kits", "ptfe-sheet", "fr4-epoxy-sheet"],
//   },

//   "transformer-kits": {
//     id: "transformer-kits",
//     name: "Transformer Insulation Kits - Complete Solutions",
//     category: "Complete Assemblies",
//     shortDescription: "Pre-cut insulation component kits for transformer assembly",
//     description: [
//       "Transformer insulation kits provide all the pressboard, kraft paper, and other insulation components you need for transformer assembly in one convenient package. Each kit is engineered for specific transformer designs and pre-cut to exact dimensions.",
//       "Eliminate cutting errors and material waste by ordering complete kits instead of raw materials. Our engineering team works from your transformer design to create kits that include every insulation component needed.",
//       "These kits dramatically reduce assembly time and ensure consistency across multiple transformers. Perfect for manufacturers who want to streamline production and eliminate in-house cutting operations.",
//     ],
//     specifications: [
//       {
//         label: "Included Materials",
//         value: "Pressboard, Kraft paper, Custom components",
//       },
//       {
//         label: "Kit Types",
//         value: "Distribution, Power, Specialty transformers",
//       },
//       { label: "Customization", value: "Fully custom to your design" },
//       { label: "Quality Control", value: "Pre-assembly verification" },
//       { label: "Packaging", value: "Organized by assembly sequence" },
//       { label: "Lead Time", value: "Depends on complexity" },
//       { label: "Volume Pricing", value: "Available for recurring orders" },
//     ],
//     applications: [
//       "Distribution transformer assembly",
//       "Power transformer manufacturing",
//       "Specialty transformer production",
//       "Repair and remanufacturing",
//       "High-volume transformer production",
//     ],
//     benefits: [
//       "Eliminate material cutting operations",
//       "Reduce assembly errors and waste",
//       "Consistent quality across production",
//       "Engineering support included",
//     ],
//     relatedProducts: ["pressboard-3mm", "kraft-paper", "custom-gaskets"],
//   },
// };

// export const productCategories = [
//   "Pressboard",
//   "Presspaper",
//   "Crepe Paper",
//   "Machined Components",
//   "Moulded Components",
//   "Epoxy Sheets",
//   "Epoxy Products",
//   "Phenolic Laminates",
//   "Insulation Paper",
//   "Engineering Plastics",
//   "Fiberglass Products",
//   "Thermal Insulation",
//   "PTFE Products",
//   "Advanced Insulation",
//   "Insulation Films",
//   "Mica Products",
//   "Custom Fabrication",
//   "Complete Assemblies",
//   "Other Products",
// ];

// export const featuredProducts = [
//   "pressboard-3mm",
//   "pre-compressed-pressboard",
//   "fr4-epoxy-sheet",
//   "paper-phenolic",
//   "kraft-paper",
//   "delrin-sheet",
//   "fiberglass-tubes",
//   "syndanio-sheet",
// ];

// export const otherProducts: Record<string, Product> = {
//   "mica-tape": {
//     id: "mica-tape",
//     name: "Mica Tapes & Mica Sheets",
//     category: "Other Products",
//     shortDescription: "High-temperature mica insulation tapes and sheets",
//     description: [
//       "Mica tapes and sheets are used in critical high-temperature electrical insulation applications where organic materials fail. Manufactured using muscovite and phlogopite mica, these products provide excellent dielectric strength and thermal endurance.",
//       "Widely used in motors, generators, and heating equipment, mica insulation maintains stability under extreme thermal stress.",
//     ],
//     specifications: [
//       { label: "Material", value: "Muscovite / Phlogopite mica" },
//       { label: "Temperature Rating", value: "Up to 600°C" },
//       { label: "Form", value: "Tape, Sheet, Flexible laminate" },
//     ],
//     applications: [
//       "Motor winding insulation",
//       "Heating element insulation",
//       "High-voltage equipment",
//     ],
//     benefits: ["Excellent thermal resistance", "High dielectric strength", "Long service life"],
//     relatedProducts: ["syndanio-sheet", "nomex-paper"],
//   },

//   "glass-fibre-tapes": {
//     id: "glass-fibre-tapes",
//     name: "Glass Fibre, Polyester & Cotton Tapes",
//     category: "Other Products",
//     shortDescription: "Electrical insulation tapes for motors and transformers",
//     description: [
//       "Glass fibre, polyester, and cotton tapes are extensively used in electrical insulation systems for binding, reinforcement, and protection.",
//       "These tapes provide mechanical strength, thermal resistance, and compatibility with varnishes and resins.",
//     ],
//     specifications: [
//       { label: "Material", value: "Glass fibre / Polyester / Cotton" },
//       { label: "Temperature Rating", value: "Up to 155°C" },
//       { label: "Form", value: "Woven tapes" },
//     ],
//     applications: ["Motor winding binding", "Transformer insulation", "Electrical reinforcement"],
//     benefits: ["Excellent tensile strength", "Resin compatibility", "Flexible and durable"],
//     relatedProducts: ["mica-tape", "polyester-film"],
//   },

//   "adhesive-tapes": {
//     id: "adhesive-tapes",
//     name: "Adhesive Insulation Tapes",
//     category: "Other Products",
//     shortDescription: "Kapton, Polyester, and Fiberglass adhesive tapes",
//     description: [
//       "Adhesive insulation tapes are pressure-sensitive tapes designed for quick application in electrical insulation systems.",
//       "Includes Kapton tapes, polyester adhesive tapes, and fiberglass adhesive tapes for high-temperature and electrical applications.",
//     ],
//     specifications: [
//       { label: "Adhesive Type", value: "Silicone / Acrylic" },
//       { label: "Temperature Rating", value: "Up to 260°C (Kapton)" },
//       { label: "Form", value: "Rolls" },
//     ],
//     applications: ["Slot insulation", "Electrical masking", "Thermal protection"],
//     benefits: ["Easy application", "High temperature resistance", "Strong adhesion"],
//     relatedProducts: ["ptfe-cloth-adhesive", "polyester-film"],
//   },

//   "cork-sheets": {
//     id: "cork-sheets",
//     name: "Cork Sheets",
//     category: "Other Products",
//     shortDescription: "Compressible cork sheets for vibration and sealing",
//     description: [
//       "Cork sheets are used for vibration damping, sealing, and insulation in electrical and mechanical systems.",
//       "They offer excellent compressibility and recovery properties.",
//     ],
//     specifications: [
//       { label: "Material", value: "Natural cork" },
//       { label: "Thickness", value: "1mm – 25mm" },
//     ],
//     applications: ["Transformer vibration damping", "Sealing applications"],
//     benefits: ["Excellent compressibility", "Thermal and acoustic insulation"],
//     relatedProducts: ["custom-gaskets"],
//   },

//   "hylam-sheets": {
//     id: "hylam-sheets",
//     name: "Hylam Sheets",
//     category: "Phenolic Laminates",
//     shortDescription: "Electrical grade laminated phenolic sheets",
//     description: [
//       "Hylam sheets are laminated phenolic materials used extensively in electrical and mechanical insulation.",
//       "They offer good dielectric strength and mechanical rigidity.",
//     ],
//     specifications: [
//       { label: "Material", value: "Phenolic laminate" },
//       { label: "Temperature Rating", value: "Up to 120°C" },
//     ],
//     applications: ["Electrical panels", "Switchgear components"],
//     benefits: ["Cost-effective insulation", "Good machinability"],
//     relatedProducts: ["bakelite-sheet"],
//   },

//   "epoxy-cast-insulators": {
//     id: "epoxy-cast-insulators",
//     name: "Epoxy Cast Insulators",
//     category: "Other Products",
//     shortDescription: "High-strength epoxy cast electrical insulators",
//     description: [
//       "Epoxy cast insulators are used in medium and high-voltage electrical systems for structural and insulation purposes.",
//       "Manufactured using high-grade epoxy resin systems to ensure mechanical strength and electrical reliability.",
//     ],
//     specifications: [
//       { label: "Material", value: "Cast epoxy resin" },
//       { label: "Voltage Class", value: "Up to 36 kV" },
//     ],
//     applications: ["Switchgear insulation", "Busbar supports"],
//     benefits: ["High mechanical strength", "Excellent electrical insulation"],
//     relatedProducts: ["epoxy-rods", "custom-gaskets"],
//   },

//   "crepe-paper-range": {
//     id: "crepe-paper-range",
//     name: "Crepe Paper & Tubes",
//     category: "Other Products",
//     shortDescription: "Electrical crepe papers and insulation tubes",
//     description: [
//       "Electrical crepe papers include semi-conducting black crepe, aluminium foil crepe, and thermally upgraded crepe paper tubes.",
//       "Used extensively in transformer winding insulation systems.",
//     ],
//     specifications: [
//       { label: "Material", value: "Electrical grade cellulose" },
//       { label: "Temperature Rating", value: "105°C – 120°C" },
//     ],
//     applications: ["Transformer winding insulation", "Electrical shielding"],
//     benefits: ["Flexible insulation", "High dielectric strength"],
//     relatedProducts: ["kraft-paper", "pressboard-3mm"],
//   },

//   "frp-products": {
//     id: "frp-products",
//     name: "FRP Rods, Tubes & Components",
//     category: "Other Products",
//     shortDescription: "FRP structural and insulation components",
//     description: [
//       "FRP rods, dog bones, tubes, corners, and threaded rods are used in electrical and mechanical structures.",
//       "These products offer high strength-to-weight ratio and corrosion resistance.",
//     ],
//     specifications: [
//       { label: "Material", value: "Fiberglass Reinforced Plastic" },
//       { label: "Form", value: "Rods, Tubes, Corners, Threaded rods" },
//     ],
//     applications: ["Electrical supports", "Structural insulation"],
//     benefits: ["Corrosion resistant", "High mechanical strength"],
//     relatedProducts: ["fiberglass-tubes", "epoxy-rods"],
//   },
// };

// export const allProducts: Record<string, Product> = {
//   ...products,
//   ...otherProducts,
// };

export interface Product {
  id: string;
  name: string;
  category: string;
  shortDescription: string;
  description: string[];
  specifications: {
    label: string;
    value: string;
  }[];
  applications: string[];
  benefits: string[];
  relatedProducts: string[];
}

export const products: Record<string, Product> = {
  /* ===================== PRESSBOARD ===================== */

  // "pressboard-3mm": {
  //   id: "pressboard-3mm",
  //   name: "Electrical Grade Pressboard – 3 mm",
  //   category: "Pressboard",
  //   shortDescription:
  //     "Electrical grade cellulose pressboard used as solid insulation in oil-immersed power and distribution transformers",
  //   description: [
  //     "Electrical grade pressboard is a solid insulation material manufactured from high-purity, long-fibre cellulose pulp. The 3 mm thickness is one of the most commonly used variants in transformer construction due to its balanced electrical, mechanical, and fabrication properties.",
  //     "This pressboard is widely used in oil-immersed power and distribution transformers as solid insulation barriers, spacers, and structural insulation elements. Its porous fibre structure enables excellent oil impregnation, which significantly enhances dielectric strength during operation.",
  //     "The material is produced under strictly controlled manufacturing conditions to ensure uniform density, low shrinkage, and consistent thickness. These characteristics are critical for maintaining electrical clearances and long-term mechanical stability inside transformer assemblies.",
  //     "3 mm pressboard can be supplied as full sheets or further processed into machined components depending on the transformer design requirements.",
  //   ],
  //   specifications: [
  //     { label: "Base Material", value: "High-purity cellulose fibres (electrical grade)" },
  //     { label: "Nominal Thickness", value: "3.0 mm" },
  //     { label: "Thickness Tolerance", value: "± 0.1 mm" },
  //     { label: "Density", value: "0.9 – 1.2 g/cm³" },
  //     { label: "Dielectric Strength (in oil)", value: "≥ 15 kV/mm" },
  //     { label: "Operating Temperature Class", value: "Class A – 105°C" },
  //     { label: "Moisture Content", value: "≤ 6%" },
  //     { label: "Oil Compatibility", value: "Excellent (mineral transformer oil)" },
  //     { label: "Surface Finish", value: "Smooth / calendered" },
  //     { label: "Standard Sheet Sizes", value: "1000 × 2000 mm (custom sizes available)" },
  //     { label: "Processing Options", value: "Cut-to-size sheets, machining, drilling" },
  //   ],
  //   applications: [
  //     "Solid insulation barriers in power transformers",
  //     "Phase and winding separation in distribution transformers",
  //     "Structural insulation blocks and spacers",
  //     "Electrical clearance insulation in HV equipment",
  //     "Insulation supports for transformer leads and bushings",
  //   ],
  //   benefits: [
  //     "High dielectric strength after oil impregnation",
  //     "Good mechanical rigidity with low deformation",
  //     "Uniform thickness ensures reliable electrical clearances",
  //     "Compatible with standard transformer insulation systems",
  //     "Easily machinable for custom transformer components",
  //   ],
  //   relatedProducts: [
  //     "pre-compressed-pressboard",
  //     "transformer-insulation-kits",
  //     "moulded-pressboard-components",
  //   ],
  // },

  "pre-compressed-pressboard": {
    id: "pre-compressed-pressboard",
    name: "Pre-Compressed Pressboard",
    category: "Pressboard",
    shortDescription:
      "High-density pressboard for critical transformer insulation and load-bearing applications",
    description: [
      "Pre-compressed pressboard is a high-density insulation material produced by compressing cellulose-based pressboard under controlled pressure and temperature conditions. This process significantly improves dimensional stability, mechanical strength, and resistance to shrinkage.",
      "This material is specifically intended for demanding transformer applications where standard pressboard may not meet mechanical or long-term stability requirements. It is commonly used in large power transformers and high-voltage insulation systems.",
      "Due to its higher density, pre-compressed pressboard offers superior resistance to mechanical stresses caused by short-circuit forces while maintaining excellent dielectric properties after oil impregnation.",
      "It is suitable for thick sections, load-bearing insulation parts, and machined transformer components.",
    ],
    specifications: [
      { label: "Base Material", value: "Pre-compressed high-purity cellulose fibres" },
      { label: "Thickness Range", value: "3 mm – 75 mm" },
      { label: "Density", value: "1.3 – 1.4 g/cm³" },
      { label: "Dielectric Strength (in oil)", value: "≥ 18 kV/mm" },
      { label: "Operating Temperature Class", value: "Class A – 105°C" },
      { label: "Dimensional Stability", value: "Very high (low shrinkage)" },
      { label: "Mechanical Strength", value: "High, suitable for load-bearing insulation" },
      { label: "Oil Compatibility", value: "Excellent (mineral transformer oil)" },
      { label: "Supply Form", value: "Sheets, blocks, machined parts" },
      { label: "Fabrication Options", value: "CNC machining, milling, drilling" },
    ],
    applications: [
      "High-voltage and extra-high-voltage power transformers",
      "Main insulation barriers and spacers",
      "Load-bearing structural insulation components",
      "Transformer cylinders, rings, and support blocks",
      "Insulation components exposed to high mechanical stress",
    ],
    benefits: [
      "Superior dimensional stability compared to standard pressboard",
      "High resistance to mechanical stresses during short circuits",
      "Reduced shrinkage during transformer service life",
      "Improved reliability in critical insulation zones",
      "Ideal for thick and precision-machined components",
    ],
    relatedProducts: [
      "pressboard-3mm",
      "transformer-insulation-kits",
      "moulded-pressboard-components",
    ],
  },

  "transformer-insulation-kits": {
    id: "transformer-insulation-kits",
    name: "Transformer Insulation Component Kits",
    category: "Pressboard",
    shortDescription: "Pre-assembled pressboard insulation kits for transformer manufacturing",
    description: [
      "Transformer insulation kits consist of a complete set of machined and moulded insulation components required for a specific transformer design.",
      "These kits are supplied as per customer drawings and reduce handling, cutting errors, and assembly time on the shop floor.",
      "Each kit is organised by assembly sequence, verified for dimensional accuracy, and tagged before dispatch to ensure consistent and error-free transformer assembly.",
      "Suitable for distribution transformer manufacturing, power transformer manufacturing, and transformer refurbishment projects.",
    ],
    specifications: [
      { label: "Included Items", value: "Machined and moulded pressboard components" },
      { label: "Base Materials", value: "Electrical grade pressboard, pre-compressed pressboard" },
      { label: "Customisation", value: "Fully as per transformer design drawings" },
      { label: "Dimensional Tolerance", value: "As per drawing specifications" },
      { label: "Supply Mode", value: "Tagged and grouped kits, organised by assembly sequence" },
      { label: "Quality Control", value: "Pre-dispatch dimensional verification" },
    ],
    applications: [
      "Distribution transformer manufacturing",
      "Power transformer manufacturing",
      "Transformer refurbishment and repair projects",
      "High-volume transformer production lines",
    ],
    benefits: [
      "Eliminates in-house material cutting operations",
      "Reduces assembly errors and material wastage",
      "Consistent quality across production runs",
      "Simplified inventory management",
      "Faster shop floor assembly",
    ],
    relatedProducts: [
      "pressboard-3mm",
      "pre-compressed-pressboard",
      "moulded-pressboard-components",
    ],
  },

  "moulded-pressboard-components": {
    id: "moulded-pressboard-components",
    name: "Moulded Pressboard Components",
    category: "Pressboard",
    shortDescription:
      "Hot-moulded pressboard insulation components for complex transformer geometries",
    description: [
      "Moulded pressboard components are produced by forming electrical grade pressboard under heat and pressure using precision moulds. This process allows the manufacture of complex three-dimensional insulation parts that cannot be produced efficiently through machining alone.",
      "Typical components include angle rings, snouts, lead exits, collars, and washers. These are designed to adapt insulation structures to electric field conditions within transformers and are critical in controlling stress distribution in high-voltage zones.",
      "Moulded components provide excellent mechanical strength, dimensional stability, and dielectric performance after oil impregnation. They offer better electric field distribution compared to assembled multi-part alternatives.",
      "Components can be supplied individually or as part of complete insulation kits based on transformer design requirements.",
    ],
    specifications: [
      { label: "Base Material", value: "Electrical grade mouldable pressboard" },
      {
        label: "Manufacturing Process",
        value: "Hot moulding under controlled pressure and temperature",
      },
      { label: "Typical Components", value: "Angle rings, snouts, lead exits, collars, washers" },
      { label: "Shape Capability", value: "Complex 3D geometries" },
      { label: "Oil Impregnation", value: "Excellent compatibility with mineral transformer oil" },
      { label: "Dimensional Stability", value: "High after curing and oil impregnation" },
      { label: "Supply Form", value: "Individual components or complete insulation kits" },
    ],
    applications: [
      "High-field insulation zones in power transformers",
      "Lead exit insulation",
      "Transformer winding ends",
      "Critical electrical stress areas in HV and EHV transformers",
      "Distribution transformer insulation assemblies",
    ],
    benefits: [
      "Complex shapes without machining joints",
      "Optimised electric field control",
      "Improved mechanical integrity",
      "Better dielectric reliability in high-stress zones",
      "Reduced number of individual insulation parts",
    ],
    relatedProducts: ["pressboard-3mm", "pre-compressed-pressboard", "transformer-insulation-kits"],
  },

  /* ===================== EPOXY SHEETS ===================== */

  // "fr4-epoxy-sheet": {
  //   id: "fr4-epoxy-sheet",
  //   name: "Fiberglass Epoxy Sheet – FR4 General Purpose Grade",
  //   category: "Epoxy Sheets",
  //   shortDescription:
  //     "Flame retardant fiberglass epoxy laminate sheets for electrical insulation and structural applications",
  //   description: [
  //     "FR4 fiberglass epoxy sheets are the industry standard for electrical insulation and mechanical structural applications. Composed of woven fiberglass cloth impregnated with epoxy resin, this material offers excellent mechanical strength, dimensional stability, and electrical insulation performance.",
  //     "FR4 sheets meet international standards and are widely used in the manufacture of printed circuit boards, electrical insulation components, and structural mechanical parts that require a high strength-to-weight ratio.",
  //     "Available in multiple thicknesses and sheet sizes, FR4 can be machined, drilled, punched, and laser cut to produce custom components for specific application requirements.",
  //   ],
  //   specifications: [
  //     { label: "Material", value: "Woven fiberglass cloth + Epoxy resin" },
  //     { label: "Grade", value: "FR4 (Flame Retardant)" },
  //     { label: "Thickness Range", value: "0.5 mm – 100 mm" },
  //     { label: "Tensile Strength", value: "≥ 340 MPa" },
  //     { label: "Dielectric Strength", value: "≥ 16 kV/mm" },
  //     { label: "Temperature Rating", value: "-40°C to 130°C" },
  //     { label: "Standard Sheet Sizes", value: "1020 × 1220 mm, 1020 × 2040 mm" },
  //     { label: "Colour", value: "Green / Natural" },
  //     { label: "Fabrication Options", value: "CNC machining, laser cutting, drilling, punching" },
  //   ],
  //   applications: [
  //     "Printed circuit board substrates",
  //     "Electrical insulation barriers and panels",
  //     "Motor and generator insulation",
  //     "Structural components for electrical equipment",
  //     "Test fixtures and jigs",
  //   ],
  //   benefits: [
  //     "Excellent electrical insulation properties",
  //     "High mechanical strength and rigidity",
  //     "Flame retardant – meets FR4 classification",
  //     "Easy to machine and fabricate",
  //     "Wide availability in multiple thicknesses",
  //   ],
  //   relatedProducts: ["g10-epoxy-sheet", "esd-epoxy-sheet", "paper-phenolic"],
  // },

  "g10-epoxy-sheet": {
    id: "g10-epoxy-sheet",
    name: "Epoxy Sheet G10 / G11 – High Mechanical Strength Variant",
    category: "Epoxy Sheets",
    shortDescription:
      "High-strength G10/G11 fiberglass epoxy laminates for demanding electrical and structural applications",
    description: [
      "G10 and G11 epoxy sheets provide higher mechanical strength than standard FR4, making them ideal for applications requiring maximum structural integrity. Manufactured using continuous filament fiberglass reinforcement and high-grade epoxy resin, these laminates deliver superior impact resistance and dimensional stability.",
      "G10 is the standard high-strength variant suitable for structural and electrical insulation applications. G11 offers improved performance at elevated temperatures, making it suitable for applications where thermal endurance is critical.",
      "Both grades maintain their properties across wide temperature ranges and resist moisture absorption effectively. They are used where standard FR4 grade does not meet the mechanical or thermal requirements of the application.",
    ],
    specifications: [
      { label: "Material", value: "Continuous filament fiberglass + Epoxy resin" },
      { label: "Grades Available", value: "G10, G11" },
      { label: "Thickness Range", value: "0.5 mm – 100 mm" },
      { label: "Tensile Strength (G10)", value: "≥ 380 MPa" },
      { label: "Tensile Strength (G11)", value: "≥ 400 MPa" },
      { label: "Dielectric Strength", value: "≥ 18 kV/mm" },
      { label: "Temperature Rating (G10)", value: "-60°C to 140°C" },
      { label: "Temperature Rating (G11)", value: "Up to 170°C" },
      { label: "Standard Sheet Sizes", value: "1020 × 1220 mm, 1020 × 2040 mm" },
      { label: "Fabrication Options", value: "Precision CNC machining, custom dimensions" },
    ],
    applications: [
      "High-strength structural insulation components",
      "Cryogenic insulation systems",
      "Aerospace and defence applications",
      "High-performance electrical insulation",
      "Precision mechanical parts requiring tight tolerances",
    ],
    benefits: [
      "Superior mechanical strength compared to FR4",
      "G11 offers excellent high-temperature endurance",
      "Superior moisture resistance",
      "Excellent performance under extreme mechanical conditions",
      "Suitable for precision machined components",
    ],
    relatedProducts: ["fr4-epoxy-sheet", "esd-epoxy-sheet", "paper-phenolic"],
  },

  "esd-epoxy-sheet": {
    id: "esd-epoxy-sheet",
    name: "ESD Grade Fiberglass Epoxy Sheets",
    category: "Epoxy Sheets",
    shortDescription:
      "Electrostatic dissipative fiberglass epoxy laminate sheets for ESD-sensitive environments",
    description: [
      "ESD grade fiberglass epoxy sheets are specially formulated fiberglass epoxy laminates designed to safely dissipate electrostatic charges. They combine the structural and insulation properties of standard FR4 with controlled surface and volume resistivity to prevent static build-up.",
      "These sheets are used in environments where electrostatic discharge (ESD) poses a risk to sensitive electronic components, assemblies, or processes. They provide a controlled discharge path without creating a conductive short circuit.",
      "ESD epoxy sheets are available in standard FR4 base material with ESD-modified resin systems and meet standard ESD classification requirements for surface resistivity.",
    ],
    specifications: [
      { label: "Material", value: "Fiberglass cloth + ESD-modified epoxy resin" },
      { label: "Surface Resistivity", value: "10⁶ – 10⁹ Ω/sq (ESD dissipative range)" },
      { label: "Volume Resistivity", value: "10⁶ – 10⁹ Ω·cm" },
      { label: "Thickness Range", value: "1 mm – 25 mm" },
      { label: "Tensile Strength", value: "≥ 320 MPa" },
      { label: "Temperature Rating", value: "-40°C to 130°C" },
      { label: "Standard Sheet Sizes", value: "1020 × 1220 mm, custom sizes available" },
      { label: "Colour", value: "Black (standard)" },
      { label: "Fabrication Options", value: "CNC machining, drilling, laser cutting" },
    ],
    applications: [
      "ESD-safe work surface panels and fixtures",
      "PCB handling trays and assembly jigs",
      "Electronics manufacturing environments",
      "Semiconductor and cleanroom tooling",
      "ESD-sensitive component storage and transport fixtures",
    ],
    benefits: [
      "Prevents electrostatic charge build-up",
      "Safe controlled discharge path for ESD-sensitive processes",
      "Combines structural strength with ESD performance",
      "Dimensionally stable for precision components",
      "Easily fabricated using standard machining methods",
    ],
    relatedProducts: ["fr4-epoxy-sheet", "g10-epoxy-sheet", "bakelite-sheet"],
  },

  /* ===================== PHENOLIC LAMINATES ===================== */

  "paper-phenolic": {
    id: "paper-phenolic",
    name: "Hylam & Paper Phenolic Laminate",
    category: "Phenolic Laminates",
    shortDescription:
      "Paper-based phenolic laminates (Hylam) for electrical insulation applications",
    description: [
      "Paper phenolic laminates, commonly known as Hylam, are manufactured by bonding multiple layers of kraft paper with phenolic resin under heat and pressure. The result is an economical laminate material with reliable electrical insulation properties.",
      "These laminates are widely used in electrical equipment such as terminal boards, switchgear panels, and transformer barriers where high mechanical strength is not a primary requirement but consistent electrical insulation is essential.",
      "Hylam sheets machine easily and are available in a variety of thicknesses and sheet sizes. They offer consistent dielectric performance at a competitive price, making them the preferred choice for general electrical insulation applications.",
    ],
    specifications: [
      { label: "Material", value: "Phenolic resin + Kraft paper layers" },
      { label: "Grade", value: "NEMA XX / Hylam equivalent" },
      { label: "Thickness Range", value: "0.5 mm – 50 mm" },
      { label: "Tensile Strength", value: "≥ 60 MPa" },
      { label: "Dielectric Strength", value: "≥ 12 kV/mm" },
      { label: "Temperature Rating", value: "-40°C to 120°C" },
      { label: "Standard Sheet Sizes", value: "1020 × 1220 mm, custom sizes available" },
      { label: "Colour", value: "Brown / Light yellow" },
      { label: "Fabrication Options", value: "Punching, die-cutting, CNC machining" },
    ],
    applications: [
      "Terminal boards and terminal strips",
      "Electrical panel insulation",
      "Switch and relay components",
      "Transformer barriers and insulation",
      "General electrical insulation components",
    ],
    benefits: [
      "Cost-effective electrical insulation solution",
      "Easy to machine, punch, and die-cut",
      "Good and consistent dielectric properties",
      "Readily available in multiple thicknesses",
      "Suitable for high-volume production requirements",
    ],
    relatedProducts: ["bakelite-sheet", "esd-bakelite-sheet", "fr4-epoxy-sheet"],
  },

  "bakelite-sheet": {
    id: "bakelite-sheet",
    name: "Bakelite Sheet",
    category: "Phenolic Laminates",
    shortDescription:
      "Versatile phenolic laminate sheets for electrical and mechanical industrial applications",
    description: [
      "Bakelite sheets are phenolic laminate materials available in both paper-based and cotton fabric-based grades. They offer reliable electrical insulation performance and moderate mechanical properties for a wide range of industrial applications.",
      "Paper grade bakelite is suitable for electrical insulation, terminal blocks, and switchgear components. Cotton grade bakelite offers higher impact resistance and superior machinability, making it the preferred choice for mechanical components that also require electrical insulation.",
      "As a proven industrial material with decades of reliable service, bakelite sheets combine heat resistance, chemical resistance, and consistent quality at a competitive price point.",
    ],
    specifications: [
      { label: "Material", value: "Phenolic resin + Paper (Grade 1) or Cotton fabric (Grade 2)" },
      { label: "Thickness Range", value: "0.5 mm – 100 mm" },
      { label: "Tensile Strength", value: "60 – 90 MPa (grade dependent)" },
      { label: "Dielectric Strength", value: "10 – 12 kV/mm" },
      { label: "Temperature Rating", value: "-40°C to 130°C" },
      { label: "Standard Sheet Sizes", value: "1020 × 1220 mm, custom sizes available" },
      { label: "Grades Available", value: "Paper grade, Cotton grade" },
      { label: "Fabrication Options", value: "CNC machining, custom fabrication" },
    ],
    applications: [
      "Electrical switchgear components",
      "Industrial machinery parts",
      "Heat-resistant handles and knobs",
      "Terminal blocks and connectors",
      "General purpose electrical insulation",
    ],
    benefits: [
      "Proven reliability over decades of industrial use",
      "Available in paper and cotton reinforced grades",
      "Heat and chemical resistance",
      "Cost-effective for diverse applications",
      "Good machinability and fabrication characteristics",
    ],
    relatedProducts: ["paper-phenolic", "esd-bakelite-sheet", "fr4-epoxy-sheet"],
  },

  "esd-bakelite-sheet": {
    id: "esd-bakelite-sheet",
    name: "ESD Bakelite Sheet",
    category: "Phenolic Laminates",
    shortDescription:
      "Electrostatic dissipative bakelite phenolic sheets for ESD-controlled environments",
    description: [
      "ESD Bakelite sheets are phenolic laminate materials modified with ESD-dissipative additives to control electrostatic charge in manufacturing environments. They combine the familiar mechanical properties of standard bakelite with controlled surface resistivity for ESD protection.",
      "These sheets are used in electronics manufacturing, PCB assembly, and any industrial process where static electricity poses a risk to components or processes. They provide a safe, controlled discharge path without being fully conductive.",
      "ESD bakelite sheets can be machined, cut, and drilled using standard equipment and are available in a range of thicknesses for different application requirements.",
    ],
    specifications: [
      { label: "Material", value: "ESD-modified phenolic resin + Paper/Cotton" },
      { label: "Surface Resistivity", value: "10⁶ – 10⁹ Ω/sq (ESD dissipative range)" },
      { label: "Volume Resistivity", value: "10⁶ – 10⁹ Ω·cm" },
      { label: "Thickness Range", value: "3 mm – 50 mm" },
      { label: "Temperature Rating", value: "Up to 120°C" },
      { label: "Standard Sheet Sizes", value: "1020 × 1220 mm, custom sizes available" },
      { label: "Colour", value: "Black (standard)" },
      { label: "Fabrication Options", value: "CNC machining, die-cutting, drilling" },
    ],
    applications: [
      "ESD-safe jigs and fixtures for electronics assembly",
      "PCB handling and assembly tooling",
      "Electronics manufacturing work surfaces",
      "Component handling trays in ESD-controlled zones",
      "Semiconductor process equipment components",
    ],
    benefits: [
      "Prevents static charge accumulation",
      "Controlled dissipation protects ESD-sensitive components",
      "Retains standard bakelite mechanical properties",
      "Easy to machine with standard tools",
      "Cost-effective ESD protection solution",
    ],
    relatedProducts: ["bakelite-sheet", "paper-phenolic", "esd-epoxy-sheet"],
  },

  /* ===================== ELECTRICAL GRADE PRESSPAPER ===================== */

  presspaper: {
    id: "presspaper",
    name: "Electrical Grade Presspaper",
    category: "Electrical Grade Presspaper",
    shortDescription:
      "High-purity cellulose presspaper for transformer winding and motor insulation systems",
    description: [
      "Multiply presspaper is manufactured from carefully selected high-purity cellulose fibres using multi-vat cylinder machines and subsequently calendered to achieve a smooth, uniform surface with consistent thickness.",
      "The paper consists of homogeneous layers with excellent mechanical strength, dielectric performance, and ageing resistance. It is suitable for use as winding insulation in transformers and as inter-layer insulation in coils and motors.",
      "Thermally upgraded variants are available for applications requiring improved thermal endurance beyond the standard Class A rating. Diamond-dotted epoxy resin coatings can be applied on one or both sides to provide inter-layer bonding in transformer windings, preventing layer movement under short-circuit forces.",
    ],
    specifications: [
      { label: "Grades Available", value: "KP 4.1, K2, Grade 4, Thermally Upgraded" },
      { label: "Raw Material", value: "High-purity cellulose fibres" },
      { label: "Manufacturing Process", value: "Multi-vat cylinder machine, calendered finish" },
      { label: "Surface Finish", value: "Smooth / plain or diamond-dotted epoxy coated" },
      {
        label: "Resin Coating Options",
        value: "Plain, Diamond-dotted epoxy (B-stage) – one or both sides",
      },
      { label: "Thermal Class", value: "Class A (105°C) / Thermally upgraded variants available" },
      { label: "Oil Compatibility", value: "Excellent (mineral transformer oil)" },
    ],
    applications: [
      "Transformer winding insulation",
      "Inter-layer insulation in coils",
      "Motor slot insulation",
      "Capacitor insulation",
      "High-voltage electrical insulation systems",
    ],
    benefits: [
      "High electrical and mechanical strength",
      "Excellent ageing resistance",
      "Uniform thickness and consistent surface quality",
      "Diamond-dotted variant prevents layer movement under fault conditions",
      "Compatible with transformer oils and epoxy resin systems",
    ],
    relatedProducts: ["kraft-paper", "pressboard-3mm", "pre-compressed-pressboard"],
  },

  "kraft-paper": {
    id: "kraft-paper",
    name: "Electrical Grade Kraft Paper",
    category: "Electrical Grade Presspaper",
    shortDescription:
      "Premium electrical grade kraft paper for transformer winding and cable insulation",
    description: [
      "Electrical grade kraft paper is manufactured from pure cellulose kraft pulp to precise thickness tolerances. It is rigorously tested to ensure consistent electrical properties and is a fundamental insulation material in transformer winding construction.",
      "This paper provides reliable dielectric insulation between transformer windings while allowing proper oil flow for cooling. Its combination of high dielectric strength and flexibility makes it suitable for both machine winding and hand winding operations.",
      "Transformer manufacturers rely on electrical grade kraft paper for small distribution transformers through to large power transformers. It is available in rolls in standard widths with custom slitting options to meet specific winding requirements.",
    ],
    specifications: [
      { label: "Material", value: "Pure cellulose kraft pulp" },
      { label: "Thickness Range", value: "0.05 mm – 0.5 mm" },
      { label: "Density", value: "0.7 – 0.9 g/cm³" },
      { label: "Dielectric Strength (in oil)", value: "≥ 20 kV/mm" },
      { label: "Operating Temperature Class", value: "105°C continuous" },
      { label: "Moisture Content", value: "Controlled and certified" },
      { label: "Standard Roll Width", value: "1000 mm (custom slit widths available)" },
      { label: "Fabrication Options", value: "Custom thickness, custom slit widths" },
    ],
    applications: [
      "Transformer winding insulation",
      "Layer insulation in transformer coils",
      "Cable wrapping and cable insulation",
      "Capacitor dielectric insulation",
      "Electrical equipment insulation",
    ],
    benefits: [
      "High dielectric strength in transformer oil",
      "Excellent flexibility for machine and hand winding",
      "Precise thickness control for consistent electrical clearances",
      "Low moisture content for improved insulation reliability",
      "Available in custom slit widths for specific winding requirements",
    ],
    relatedProducts: ["presspaper", "pressboard-3mm", "pre-compressed-pressboard"],
  },

  /* ===================== FRP PRODUCTS ===================== */

  "frp-tubes": {
    id: "frp-tubes",
    name: "FRP Tubes",
    category: "FRP Products",
    shortDescription:
      "Fiberglass reinforced plastic tubes for electrical insulation and structural support",
    description: [
      "FRP (Fiberglass Reinforced Plastic) tubes are manufactured from continuous fiberglass filaments and resin systems, providing excellent electrical insulation combined with high mechanical strength and corrosion resistance.",
      "These tubes are used extensively in electrical equipment, motor windings, and industrial structures where both insulation and structural support are required simultaneously. They maintain their dimensional and electrical properties across a wide temperature range.",
      "Available in a range of standard diameters and wall thicknesses, with custom sizes manufactured to order.",
    ],
    specifications: [
      { label: "Material", value: "Fiberglass + Epoxy or Polyester resin" },
      { label: "Diameter Range", value: "3 mm – 200 mm" },
      { label: "Wall Thickness", value: "0.5 mm – 10 mm" },
      { label: "Dielectric Strength", value: "≥ 15 kV/mm" },
      { label: "Temperature Rating", value: "-40°C to 155°C" },
      { label: "Standard Lengths", value: "Up to 3000 mm (custom cut available)" },
      { label: "Fabrication Options", value: "Custom diameters, special resin systems" },
    ],
    applications: [
      "Motor and generator slot insulation",
      "Electrical bus bar sleeves and insulation",
      "High-voltage equipment insulation",
      "Structural supports in electrical switchgear",
      "Industrial machinery components",
    ],
    benefits: [
      "Excellent electrical insulation properties",
      "High mechanical strength and rigidity",
      "Chemical and moisture resistant",
      "Long service life in demanding environments",
      "Available in custom sizes",
    ],
    relatedProducts: ["frp-rods", "frp-threaded-rods", "frp-components"],
  },

  "frp-rods": {
    id: "frp-rods",
    name: "FRP Rods",
    category: "FRP Products",
    shortDescription:
      "Solid fiberglass reinforced plastic rods for electrical insulation and structural applications",
    description: [
      "FRP solid rods are manufactured from fiberglass reinforced plastic and offer a combination of high tensile strength, electrical insulation, and corrosion resistance in a round bar form.",
      "These rods are used in electrical equipment structures, transformer components, and industrial applications where conductive metallic rods are unsuitable. They are easily cut to required lengths on site.",
      "Available in standard diameters, with custom lengths and diameters available for specific application requirements.",
    ],
    specifications: [
      { label: "Material", value: "Fiberglass Reinforced Plastic (FRP)" },
      { label: "Diameter Range", value: "3 mm – 100 mm" },
      { label: "Tensile Strength", value: "≥ 350 MPa" },
      { label: "Dielectric Strength", value: "≥ 16 kV/mm" },
      { label: "Temperature Rating", value: "-40°C to 155°C" },
      { label: "Standard Lengths", value: "Up to 3000 mm (custom cut available)" },
      { label: "Fabrication Options", value: "Custom diameters, custom lengths" },
    ],
    applications: [
      "Electrical equipment structural supports",
      "Insulating connecting rods and tie rods",
      "High-voltage equipment components",
      "Transformer internal supports",
      "Industrial machinery insulation shafts",
    ],
    benefits: [
      "Non-conductive structural support",
      "High tensile strength-to-weight ratio",
      "Corrosion and moisture resistant",
      "Lightweight compared to metallic equivalents",
      "Easy to cut and install on site",
    ],
    relatedProducts: ["frp-tubes", "frp-threaded-rods", "frp-components"],
  },

  "frp-threaded-rods": {
    id: "frp-threaded-rods",
    name: "FRP Threaded Rods & Nuts",
    category: "FRP Products",
    shortDescription:
      "Non-conductive fiberglass threaded rods and matching nuts for electrical assemblies",
    description: [
      "FRP threaded rods and matching nuts provide fully non-conductive fastening solutions for electrical assemblies and high-voltage equipment. They combine the mechanical fastening functionality of conventional threaded rods with the electrical insulation properties of fiberglass reinforced plastic.",
      "These are used wherever metallic fasteners would create unacceptable electrical conduction paths, ground faults, or eddy current losses in electrical assemblies.",
      "Supplied as matched sets of threaded rods and FRP nuts. Available in standard metric thread sizes.",
    ],
    specifications: [
      { label: "Material", value: "Fiberglass Reinforced Plastic (FRP)" },
      { label: "Thread Standard", value: "Metric (M6 to M30, custom sizes available)" },
      { label: "Dielectric Strength", value: "≥ 16 kV/mm" },
      { label: "Tensile Strength", value: "≥ 300 MPa" },
      { label: "Temperature Rating", value: "-40°C to 155°C" },
      { label: "Standard Lengths", value: "Up to 3000 mm (custom cut available)" },
      { label: "Supply Form", value: "Threaded rods with matching FRP nuts" },
    ],
    applications: [
      "High-voltage equipment assembly and fastening",
      "Transformer clamping assemblies",
      "Electrical panel and switchgear assembly",
      "Applications requiring non-conductive fasteners",
      "Busbar support structures",
    ],
    benefits: [
      "Fully non-conductive fastening solution",
      "Eliminates ground fault and short circuit risks from fasteners",
      "Corrosion and chemical resistant",
      "Lightweight compared to metallic threaded rods",
      "Available with matching FRP nuts for complete assemblies",
    ],
    relatedProducts: ["frp-rods", "frp-tubes", "frp-components"],
  },

  "frp-components": {
    id: "frp-components",
    name: "FRP Components",
    category: "FRP Products",
    shortDescription:
      "Fabricated FRP structural and insulation components including dog bones, corners, and brackets",
    description: [
      "FRP structural components include a range of fabricated and moulded shapes such as dog bones, corner sections, angle profiles, brackets, and custom moulded parts. These combine the structural strength of fiberglass reinforced plastic with electrical insulation properties.",
      "These components are used in electrical equipment frames, transformer structures, and switchgear assemblies where structural integrity and electrical insulation are both required.",
      "Custom components can be manufactured to drawing, and standard profiles are available from stock.",
    ],
    specifications: [
      { label: "Material", value: "Fiberglass Reinforced Plastic (FRP)" },
      { label: "Typical Profiles", value: "Dog bones, angles, corners, brackets, custom shapes" },
      { label: "Dielectric Strength", value: "≥ 15 kV/mm" },
      { label: "Temperature Rating", value: "-40°C to 155°C" },
      { label: "Corrosion Resistance", value: "Excellent" },
      { label: "Fabrication Options", value: "Custom moulded or machined to drawing" },
    ],
    applications: [
      "Electrical equipment structural frames",
      "Transformer support components",
      "Switchgear and panel assembly structures",
      "High-voltage equipment non-conductive brackets",
      "Industrial corrosion-resistant structures",
    ],
    benefits: [
      "Non-conductive structural components",
      "High strength-to-weight ratio",
      "Excellent corrosion and chemical resistance",
      "Custom profiles available to drawing",
      "Long service life in harsh environments",
    ],
    relatedProducts: ["frp-rods", "frp-tubes", "frp-threaded-rods"],
  },

  /* ===================== MICA PRODUCTS ===================== */

  "mica-sheets": {
    id: "mica-sheets",
    name: "Mica Sheets",
    category: "Mica Products",
    shortDescription:
      "Natural muscovite and phlogopite mica sheets for high-temperature electrical insulation",
    description: [
      "Mica sheets provide exceptional thermal and electrical insulation derived from natural mineral sources. Available in muscovite (natural) and phlogopite grades, mica withstands extreme temperatures while maintaining excellent dielectric performance.",
      "The unique layered crystal structure of mica allows it to be split into thin, smooth sheets. Muscovite mica offers superior electrical insulation and is used in standard high-temperature applications. Phlogopite mica is preferred where extremely high temperatures are encountered, tolerating up to 600°C.",
      "Mica sheets are irreplaceable in high-temperature electrical applications where organic and polymeric insulation materials would decompose or degrade.",
    ],
    specifications: [
      { label: "Material", value: "Natural muscovite or phlogopite mica" },
      { label: "Thickness Range", value: "0.1 mm – 2 mm" },
      { label: "Dielectric Strength", value: "≥ 60 kV/mm" },
      { label: "Temperature Rating (Muscovite)", value: "Up to 400°C" },
      { label: "Temperature Rating (Phlogopite)", value: "Up to 600°C" },
      { label: "Standard Sheet Sizes", value: "1000 × 1200 mm, custom sizes available" },
      { label: "Forms Available", value: "Mica paper, flexible mica laminates, custom cut sheets" },
    ],
    applications: [
      "High-temperature furnace and kiln insulation",
      "Electric heating element insulation",
      "Commutator segment insulation in motors",
      "High-voltage electrical insulation",
      "Foundry and metallurgical applications",
    ],
    benefits: [
      "Extreme temperature capability up to 600°C",
      "Excellent electrical insulation and arc resistance",
      "Natural mineral durability and chemical stability",
      "Thin profile with high dielectric strength",
      "Available in both muscovite and phlogopite grades",
    ],
    relatedProducts: ["mica-tape", "nomex-paper", "syndanio-sheets"],
  },

  "mica-tape": {
    id: "mica-tape",
    name: "Mica Tapes",
    category: "Mica Products",
    shortDescription: "High-temperature mica insulation tapes for motor and generator windings",
    description: [
      "Mica tapes are manufactured using muscovite or phlogopite mica paper laminated with glass cloth or polyester film backing and bonded with resin systems. They provide reliable high-temperature electrical insulation in tape form for wrapping and winding applications.",
      "Mica tapes are extensively used in the insulation of motor and generator windings, particularly in applications that require fire-resistant or flame-retardant insulation. They maintain insulation integrity at temperatures where organic materials fail.",
      "Available in resin-rich and resin-poor variants. Resin-rich tapes are used in global vacuum pressure impregnation (VPI) systems.",
    ],
    specifications: [
      {
        label: "Material",
        value: "Mica paper (muscovite / phlogopite) + Glass cloth or polyester backing",
      },
      { label: "Tape Width", value: "Standard widths available; custom widths to order" },
      { label: "Temperature Rating", value: "Up to 600°C (phlogopite grade)" },
      { label: "Mica Content", value: "≥ 50% (grade dependent)" },
      { label: "Resin Options", value: "Resin-rich, resin-poor" },
      { label: "Supply Form", value: "Rolls" },
    ],
    applications: [
      "Motor and generator winding insulation",
      "Fire-resistant electrical cable insulation",
      "High-temperature transformer insulation",
      "Heating element insulation",
      "Fire-resistant coil wrapping",
    ],
    benefits: [
      "Excellent thermal and electrical insulation at extreme temperatures",
      "Maintains insulation integrity under fire conditions",
      "High dielectric strength",
      "Available in resin-rich and resin-poor variants",
      "Long service life in high-temperature environments",
    ],
    relatedProducts: ["mica-sheets", "nomex-paper", "syndanio-sheets"],
  },

  /* ===================== ENGINEERING PLASTICS ===================== */

  "polycarbonate-sheet": {
    id: "polycarbonate-sheet",
    name: "Polycarbonate Sheet",
    category: "Engineering Plastics",
    shortDescription:
      "High-impact transparent engineering plastic sheets for electrical and structural applications",
    description: [
      "Polycarbonate sheets offer an exceptional combination of optical clarity, high impact resistance, and good electrical insulation properties. They are significantly stronger than standard acrylic and retain their properties across a wide temperature range.",
      "These sheets are used in electrical enclosures, machine guards, protective covers, and sight glasses where transparency combined with strength and electrical insulation is required.",
      "Available in clear and tinted variants, polycarbonate sheets can be cold bent, machined, and fabricated without specialist equipment.",
    ],
    specifications: [
      { label: "Material", value: "Polycarbonate (PC)" },
      { label: "Thickness Range", value: "1 mm – 25 mm" },
      { label: "Tensile Strength", value: "≥ 60 MPa" },
      { label: "Impact Resistance", value: "Very high (250 times stronger than glass)" },
      { label: "Light Transmission", value: "Up to 88% (clear grade)" },
      { label: "Temperature Rating", value: "-40°C to 120°C" },
      { label: "Standard Sheet Sizes", value: "1000 × 2000 mm, custom sizes available" },
      { label: "Fabrication Options", value: "CNC machining, cold bending, drilling" },
    ],
    applications: [
      "Electrical enclosure windows and covers",
      "Machine safety guards and panels",
      "Protective sight glasses for equipment",
      "Electrical insulation panels",
      "Display and signage applications",
    ],
    benefits: [
      "Exceptional impact resistance",
      "High optical clarity in transparent grade",
      "Good electrical insulation properties",
      "Wide operating temperature range",
      "Easy to fabricate and cold bend",
    ],
    relatedProducts: ["acrylic-sheet", "delrin-sheet", "pp-sheet"],
  },

  "acrylic-sheet": {
    id: "acrylic-sheet",
    name: "Acrylic Sheet",
    category: "Engineering Plastics",
    shortDescription:
      "Optically clear acrylic sheets for displays, covers, and light insulation applications",
    description: [
      "Acrylic sheets (PMMA – Polymethyl Methacrylate) offer excellent optical clarity, good UV resistance, and weather resistance. They provide a cost-effective transparent material solution for applications not requiring the impact resistance of polycarbonate.",
      "Acrylic is widely used for display panels, protective covers, light diffusers, and transparent insulation applications. It is easily machined, polished, and bonded with appropriate adhesives.",
      "Available in clear and a range of standard colours, with cast and extruded grades available depending on the required optical and mechanical properties.",
    ],
    specifications: [
      { label: "Material", value: "Polymethyl Methacrylate (PMMA / Acrylic)" },
      { label: "Thickness Range", value: "1.5 mm – 50 mm" },
      { label: "Tensile Strength", value: "≥ 70 MPa" },
      { label: "Light Transmission", value: "Up to 92% (clear grade)" },
      { label: "Temperature Rating", value: "Up to 80°C continuous" },
      { label: "Standard Sheet Sizes", value: "1000 × 2000 mm, 1220 × 2440 mm, custom sizes" },
      { label: "Grades", value: "Cast, Extruded" },
      { label: "Fabrication Options", value: "CNC machining, laser cutting, polishing" },
    ],
    applications: [
      "Display panels and signage",
      "Machine protective covers and guards",
      "Light diffusers and covers",
      "Aquarium and water feature panels",
      "General transparent insulation panels",
    ],
    benefits: [
      "Excellent optical clarity – up to 92% light transmission",
      "Good UV and weather resistance",
      "Easy to machine, polish, and bond",
      "Cost-effective transparent material",
      "Available in a range of standard colours",
    ],
    relatedProducts: ["polycarbonate-sheet", "delrin-sheet", "pp-sheet"],
  },

  "delrin-sheet": {
    id: "delrin-sheet",
    name: "Delrin Sheet (POM)",
    category: "Engineering Plastics",
    shortDescription: "Engineering grade acetal (POM) sheets for precision mechanical components",
    description: [
      "Delrin sheets are manufactured from Polyoxymethylene (POM), also known as acetal. This engineering thermoplastic offers exceptional dimensional stability, low friction, and excellent machinability, making it ideal for precision mechanical components.",
      "The natural lubricity of POM makes it particularly well suited to wear-resistant applications such as gears, bearings, bushings, and sliding components. It produces smooth, precise surfaces when machined without extensive secondary finishing.",
      "Delrin/POM sheets are available in natural (white) and black grades and in a range of thicknesses to suit different component requirements.",
    ],
    specifications: [
      { label: "Material", value: "Polyoxymethylene (POM / Acetal)" },
      { label: "Thickness Range", value: "1 mm – 100 mm" },
      { label: "Tensile Strength", value: "≥ 60 MPa" },
      { label: "Temperature Rating", value: "-40°C to 90°C" },
      { label: "Coefficient of Friction", value: "Very low (self-lubricating)" },
      { label: "Standard Sheet Sizes", value: "1000 × 2000 mm, custom sizes available" },
      { label: "Colour", value: "Natural (white), Black" },
      { label: "Fabrication Options", value: "Precision CNC machining, custom parts" },
    ],
    applications: [
      "Precision gears and gear components",
      "Bearings and bushings",
      "Conveyor system components",
      "Food processing equipment parts",
      "Precision mechanical components requiring tight tolerances",
    ],
    benefits: [
      "Excellent dimensional stability for precision components",
      "Self-lubricating – low friction without added lubricants",
      "Superior machinability with excellent surface finish",
      "High fatigue and wear resistance",
      "Suitable for food contact applications",
    ],
    relatedProducts: ["nylon-sheet-rod", "peek-sheet-rod", "pp-sheet"],
  },

  "pp-sheet": {
    id: "pp-sheet",
    name: "PP Sheet (Polypropylene)",
    category: "Engineering Plastics",
    shortDescription:
      "Chemical-resistant polypropylene sheets for industrial and electrical insulation applications",
    description: [
      "Polypropylene (PP) sheets offer excellent chemical resistance, low density, and good electrical insulation properties at a competitive price. They are widely used in chemical processing equipment, storage tanks, and electrical insulation applications where chemical exposure is a concern.",
      "PP sheets are lightweight, easy to weld using hot gas welding, and can be fabricated into tanks, liners, ducting, and structural components for corrosive environments.",
      "Available in natural (white/grey) and black grades, PP sheets are suitable for both indoor and outdoor applications.",
    ],
    specifications: [
      { label: "Material", value: "Polypropylene (PP)" },
      { label: "Thickness Range", value: "1 mm – 30 mm" },
      { label: "Tensile Strength", value: "≥ 30 MPa" },
      { label: "Chemical Resistance", value: "Excellent (acids, alkalis, solvents)" },
      { label: "Temperature Rating", value: "-20°C to 90°C" },
      { label: "Standard Sheet Sizes", value: "1000 × 2000 mm, custom sizes available" },
      { label: "Fabrication Options", value: "Hot gas welding, CNC machining, thermoforming" },
    ],
    applications: [
      "Chemical storage tanks and liners",
      "Acid and alkali-resistant ducting",
      "Electrical insulation in corrosive environments",
      "Laboratory equipment components",
      "Industrial equipment liners and guards",
    ],
    benefits: [
      "Excellent chemical and corrosion resistance",
      "Lightweight and easy to handle",
      "Good electrical insulation properties",
      "Hot gas weldable for tank and structure fabrication",
      "Cost-effective solution for chemical environments",
    ],
    relatedProducts: ["delrin-sheet", "nylon-sheet-rod", "ptfe-sheet"],
  },

  "nylon-sheet-rod": {
    id: "nylon-sheet-rod",
    name: "Nylon Sheets / Rods",
    category: "Engineering Plastics",
    shortDescription:
      "High-strength nylon engineering plastic sheets and rods for mechanical and insulation applications",
    description: [
      "Nylon sheets and rods (Polyamide – PA6 / PA66) are versatile engineering thermoplastics combining good mechanical strength, moderate chemical resistance, and reasonable electrical insulation properties. They are widely used for mechanical components in electrical and industrial equipment.",
      "Nylon has good abrasion resistance and toughness. Rods are used for machining custom bushings, spacers, gears, and structural components. Sheets are used for insulation panels, wear plates, and structural components.",
      "Available in natural (ivory), black, and glass-filled grades for enhanced stiffness and strength.",
    ],
    specifications: [
      { label: "Material", value: "Polyamide (PA6 / PA66)" },
      { label: "Sheet Thickness Range", value: "2 mm – 100 mm" },
      { label: "Rod Diameter Range", value: "10 mm – 200 mm" },
      { label: "Tensile Strength", value: "≥ 75 MPa" },
      { label: "Temperature Rating", value: "-40°C to 100°C (continuous)" },
      { label: "Moisture Absorption", value: "Moderate (affects dimensions)" },
      { label: "Grades", value: "PA6, PA66, Glass-filled" },
      { label: "Fabrication Options", value: "CNC machining, turning, milling" },
    ],
    applications: [
      "Gears and mechanical power transmission components",
      "Bearings, bushings, and wear-resistant components",
      "Electrical equipment spacers and structural parts",
      "Industrial machinery components",
      "Structural insulation panels",
    ],
    benefits: [
      "Good mechanical strength and toughness",
      "Excellent abrasion and wear resistance",
      "Available as sheets and rods for versatile machining",
      "Glass-filled grade available for enhanced stiffness",
      "Widely available in standard sizes",
    ],
    relatedProducts: ["delrin-sheet", "peek-sheet-rod", "pp-sheet"],
  },

  "peek-sheet-rod": {
    id: "peek-sheet-rod",
    name: "PEEK Sheets / Rods",
    category: "Engineering Plastics",
    shortDescription:
      "High-performance PEEK engineering plastic for extreme temperature and chemical resistance applications",
    description: [
      "PEEK (Polyether Ether Ketone) sheets and rods represent the highest performance category of engineering thermoplastics. They offer exceptional mechanical strength at elevated temperatures, excellent chemical resistance, and good electrical insulation properties.",
      "PEEK maintains its mechanical properties at continuous operating temperatures up to 250°C, making it suitable for applications where lower-performance engineering plastics would fail. It also offers inherent flame resistance without the use of additives.",
      "Used in aerospace, medical, semiconductor, and high-performance industrial applications where extreme conditions require material performance that standard engineering plastics cannot provide.",
    ],
    specifications: [
      { label: "Material", value: "Polyether Ether Ketone (PEEK)" },
      { label: "Sheet Thickness Range", value: "1 mm – 50 mm" },
      { label: "Rod Diameter Range", value: "6 mm – 150 mm" },
      { label: "Tensile Strength", value: "≥ 100 MPa" },
      { label: "Temperature Rating", value: "Up to 250°C continuous" },
      {
        label: "Chemical Resistance",
        value: "Excellent (resistant to most solvents and chemicals)",
      },
      { label: "Flame Resistance", value: "Inherent (UL94 V-0)" },
      { label: "Fabrication Options", value: "Precision CNC machining, turning, milling" },
    ],
    applications: [
      "Aerospace and defence precision components",
      "Medical device and surgical instrument components",
      "Semiconductor process equipment parts",
      "High-temperature electrical insulation components",
      "Oil and gas equipment seals and structural parts",
    ],
    benefits: [
      "Exceptional high-temperature mechanical performance up to 250°C",
      "Outstanding chemical and solvent resistance",
      "Inherent flame resistance – UL94 V-0",
      "Excellent dimensional stability for precision components",
      "Biocompatible grades available for medical applications",
    ],
    relatedProducts: ["delrin-sheet", "nylon-sheet-rod", "ptfe-sheet"],
  },

  "ptfe-sheet": {
    id: "ptfe-sheet",
    name: "PTFE / Teflon Sheets",
    category: "Engineering Plastics",
    shortDescription:
      "Virgin PTFE (Teflon) sheets with outstanding chemical resistance and electrical insulation",
    description: [
      "Virgin PTFE (Polytetrafluoroethylene / Teflon) sheets offer the broadest chemical resistance of any plastic material, combined with a very low coefficient of friction, excellent electrical insulation, and an exceptionally wide operating temperature range.",
      "PTFE sheets are inert to virtually all industrial chemicals and solvents. They are used in chemical processing, pharmaceutical, food processing, and high-purity electrical insulation applications where no other plastic provides adequate performance.",
      "Available as skived sheets in various thicknesses. Supplied in rolls or cut sheets depending on thickness.",
    ],
    specifications: [
      { label: "Material", value: "100% Virgin PTFE resin" },
      { label: "Thickness Range", value: "0.5 mm – 10 mm" },
      { label: "Tensile Strength", value: "≥ 27 MPa" },
      { label: "Dielectric Strength", value: "≥ 60 kV/mm" },
      { label: "Temperature Rating", value: "-200°C to 260°C" },
      { label: "Coefficient of Friction", value: "Lowest of any solid material" },
      { label: "Chemical Resistance", value: "Resistant to virtually all chemicals and solvents" },
      { label: "Supply Form", value: "Rolls and sheets, custom cut" },
    ],
    applications: [
      "Chemical processing gaskets and seals",
      "Pharmaceutical and food industry components",
      "High-purity electrical insulation",
      "Cryogenic sealing applications",
      "Non-stick lining and release surfaces",
    ],
    benefits: [
      "Broadest chemical resistance of any plastic material",
      "Lowest coefficient of friction",
      "Exceptional temperature range – cryogenic to 260°C",
      "Excellent electrical insulation properties",
      "FDA and food-grade compliant",
    ],
    relatedProducts: ["ptfe-cloth-non-adhesive", "ptfe-cloth-adhesive", "peek-sheet-rod"],
  },

  "ptfe-cloth-non-adhesive": {
    id: "ptfe-cloth-non-adhesive",
    name: "PTFE Cloth – Non-Adhesive",
    category: "Engineering Plastics",
    shortDescription:
      "PTFE-coated fiberglass cloth without adhesive for high-temperature release and conveyor applications",
    description: [
      "PTFE non-adhesive cloth is manufactured from woven fiberglass fabric with a PTFE coating applied to provide non-stick and high-temperature resistant surfaces. It combines the mechanical strength of fiberglass with the chemical and thermal properties of PTFE.",
      "Available in brown and white colour variants depending on PTFE coating weight and application requirements. Used in applications requiring a durable, reusable non-stick surface that can withstand repeated heating cycles.",
    ],
    specifications: [
      { label: "Material", value: "PTFE-coated fiberglass fabric" },
      { label: "Thickness Range", value: "0.08 mm – 0.5 mm" },
      { label: "Temperature Rating", value: "-70°C to 260°C continuous" },
      { label: "Tensile Strength", value: "≥ 1500 N/5cm" },
      { label: "Colours Available", value: "Brown, White" },
      { label: "Standard Widths", value: "1000 mm, 1270 mm, custom widths available" },
    ],
    applications: [
      "Heat sealing and packaging machinery release sheets",
      "High-temperature conveyor belts",
      "Moulding and laminating release sheets",
      "Food processing equipment surfaces",
      "Chemical processing applications",
    ],
    benefits: [
      "Extreme temperature resistance",
      "Durable non-stick surface properties",
      "Reusable for repeated production cycles",
      "Excellent chemical resistance",
      "Flexible and conformable",
    ],
    relatedProducts: ["ptfe-cloth-adhesive", "ptfe-sheet", "peek-sheet-rod"],
  },

  "ptfe-cloth-adhesive": {
    id: "ptfe-cloth-adhesive",
    name: "PTFE Cloth – Adhesive Backed",
    category: "Engineering Plastics",
    shortDescription: "Self-adhesive PTFE cloth for easy conversion of existing equipment surfaces",
    description: [
      "PTFE adhesive cloth combines the non-stick and heat-resistant properties of PTFE-coated fiberglass fabric with a high-temperature silicone pressure-sensitive adhesive backing. This allows direct application to existing equipment surfaces without complex installation.",
      "Available in cream and dark brown colour variants. The silicone adhesive system maintains strong bonding at elevated operating temperatures, making it suitable for heat sealing equipment, packaging machinery, and food processing applications.",
    ],
    specifications: [
      { label: "Material", value: "PTFE cloth + Silicone pressure-sensitive adhesive" },
      { label: "Total Thickness", value: "0.13 mm – 0.25 mm" },
      { label: "Temperature Rating", value: "-70°C to 260°C" },
      { label: "Tensile Strength", value: "≥ 1400 N/5cm" },
      { label: "Colours Available", value: "Cream, Dark brown" },
      { label: "Standard Widths", value: "1000 mm, custom widths available" },
      { label: "Fabrication Options", value: "Die-cut shapes, custom sizes" },
    ],
    applications: [
      "Heat seal bar covering in packaging equipment",
      "Chute and hopper lining",
      "Packaging machinery surface upgrades",
      "Mould release surfaces",
      "Food processing equipment non-stick surfaces",
    ],
    benefits: [
      "Simple peel-and-stick installation",
      "No specialist tools or bonding agents required",
      "High-temperature silicone adhesive for reliable bonding",
      "Instantly converts surfaces to non-stick PTFE",
      "Available die-cut to custom shapes",
    ],
    relatedProducts: ["ptfe-cloth-non-adhesive", "ptfe-sheet", "peek-sheet-rod"],
  },

  /* ===================== OTHER PRODUCTS ===================== */

  "glass-fibre-tapes": {
    id: "glass-fibre-tapes",
    name: "Fibre Glass Tapes",
    category: "Other Products",
    shortDescription:
      "Woven fiberglass tapes for electrical insulation binding and reinforcement in motors and transformers",
    description: [
      "Fiberglass woven tapes provide mechanical binding, reinforcement, and protection in electrical insulation systems. They offer excellent tensile strength, thermal resistance, and compatibility with varnishes and resin impregnation systems.",
      "Used extensively in motor winding binding, transformer insulation, and coil reinforcement. Available in different widths and weave densities to suit specific application requirements.",
    ],
    specifications: [
      { label: "Material", value: "Woven fiberglass" },
      { label: "Temperature Rating", value: "Up to 155°C" },
      { label: "Tensile Strength", value: "Excellent" },
      {
        label: "Resin Compatibility",
        value: "Compatible with epoxy, polyester, and varnish systems",
      },
      { label: "Supply Form", value: "Rolls" },
    ],
    applications: [
      "Motor winding binding and reinforcement",
      "Transformer insulation taping",
      "Coil and winding reinforcement",
      "Electrical equipment insulation systems",
    ],
    benefits: [
      "High tensile and tear strength",
      "Excellent compatibility with impregnation resins and varnishes",
      "Good thermal endurance",
      "Flexible and conformable for winding applications",
    ],
    relatedProducts: ["adhesive-tapes", "mica-tape", "nomex-paper"],
  },

  "adhesive-tapes": {
    id: "adhesive-tapes",
    name: "Adhesive Insulation Tapes",
    category: "Other Products",
    shortDescription:
      "Kapton, polyester, and fiberglass adhesive insulation tapes for electrical applications",
    description: [
      "Adhesive insulation tapes include Kapton (polyimide) adhesive tapes, polyester adhesive tapes, and fiberglass adhesive tapes. Each type offers different combinations of temperature resistance, dielectric strength, and adhesive performance for specific electrical insulation applications.",
      "Kapton tapes offer the highest temperature resistance and are used in aerospace and high-performance motor insulation. Polyester tapes offer good electrical performance at lower cost for general electrical applications. Fiberglass adhesive tapes provide additional mechanical strength.",
    ],
    specifications: [
      { label: "Types Available", value: "Kapton (polyimide), Polyester, Fiberglass" },
      { label: "Adhesive System", value: "Silicone (Kapton / Fiberglass), Acrylic (Polyester)" },
      { label: "Temperature Rating", value: "Up to 260°C (Kapton), up to 130°C (Polyester)" },
      { label: "Supply Form", value: "Rolls" },
    ],
    applications: [
      "Motor and transformer slot insulation",
      "Electrical masking for varnish and coating processes",
      "High-temperature electrical component protection",
      "Coil and winding insulation and protection",
    ],
    benefits: [
      "Easy pressure-sensitive application",
      "High-temperature resistance (Kapton grade)",
      "Strong adhesion with clean removal",
      "Multiple types for different performance requirements",
    ],
    relatedProducts: ["glass-fibre-tapes", "ptfe-cloth-adhesive", "polyester-film"],
  },

  "cork-sheets": {
    id: "cork-sheets",
    name: "Cork Sheets",
    category: "Other Products",
    shortDescription:
      "Compressible natural cork sheets for vibration damping and sealing applications",
    description: [
      "Cork sheets are manufactured from natural cork granules and are used for vibration damping, acoustic insulation, sealing, and gasketing in electrical and mechanical systems. They offer excellent compressibility and recovery properties.",
      "Commonly used under transformer tanks and electrical equipment to reduce vibration transmission. Also used as compressible gasket material and for thermal and acoustic insulation panels.",
    ],
    specifications: [
      { label: "Material", value: "Natural cork granules" },
      { label: "Thickness Range", value: "1 mm – 25 mm" },
      { label: "Density", value: "200 – 400 kg/m³ (grade dependent)" },
      { label: "Compressibility", value: "Excellent" },
      { label: "Standard Sheet Sizes", value: "1000 × 1000 mm, custom sizes available" },
    ],
    applications: [
      "Transformer vibration damping and anti-vibration pads",
      "Electrical equipment sealing and gasketing",
      "Acoustic and thermal insulation panels",
      "Anti-vibration flooring and equipment mounts",
    ],
    benefits: [
      "Natural compressibility and recovery",
      "Vibration and acoustic damping",
      "Lightweight and easy to cut and fabricate",
      "Good sealing properties",
    ],
    relatedProducts: ["custom-gaskets", "glass-fibre-tapes"],
  },

  "epoxy-cast-insulators": {
    id: "epoxy-cast-insulators",
    name: "Epoxy Cast Insulators",
    category: "Other Products",
    shortDescription:
      "High-strength cast epoxy insulators for medium and high-voltage electrical systems",
    description: [
      "Epoxy cast insulators are manufactured using high-grade epoxy resin casting systems to produce structural insulators for medium voltage and high-voltage electrical applications. They provide both mechanical support and electrical insulation in switchgear, busbar systems, and transformer assemblies.",
      "These insulators are designed to withstand mechanical loads, electrical stress, and environmental exposure in indoor and outdoor electrical installations. Manufactured to customer specifications and tested to applicable standards.",
    ],
    specifications: [
      { label: "Material", value: "High-grade cast epoxy resin" },
      { label: "Voltage Class", value: "Up to 36 kV" },
      { label: "Dielectric Strength", value: "High (grade dependent)" },
      { label: "Mechanical Strength", value: "High compressive and tensile strength" },
      { label: "Fabrication", value: "Custom moulded to drawing" },
    ],
    applications: [
      "Switchgear insulation supports",
      "Busbar support insulators",
      "Transformer internal support insulators",
      "Medium-voltage electrical equipment insulation",
    ],
    benefits: [
      "High mechanical compressive and tensile strength",
      "Excellent electrical insulation up to 36 kV",
      "Manufactured to custom drawings and specifications",
      "Suitable for both indoor and outdoor installations",
    ],
    relatedProducts: ["fr4-epoxy-sheet", "g10-epoxy-sheet", "custom-gaskets"],
  },

  "crepe-paper-range": {
    id: "crepe-paper-range",
    name: "Crepe Paper & Tubes",
    category: "Other Products",
    shortDescription:
      "Electrical grade crepe papers and insulation tubes for transformer winding insulation",
    description: [
      "Electrical crepe paper is produced by mechanically creping electrical grade kraft paper, resulting in improved flexibility, elongation, and oil retention compared to plain paper. It is used in transformer windings, lead insulation, and conductor covering where flexibility and oil absorption are required.",
      "The crepe paper range includes regular electrical grade crepe, thermally upgraded crepe paper, semi-conducting black crepe paper for electrical shielding, and aluminium foil crepe paper. Crepe paper tubes are manufactured from the same base materials and are used for lead insulation and bushing insulation in transformers.",
    ],
    specifications: [
      { label: "Base Material", value: "Electrical grade kraft paper" },
      { label: "Elongation Range", value: "10% – 300% (grade dependent)" },
      { label: "Base Paper Thickness", value: "40 – 150 microns" },
      { label: "Thermal Class", value: "Class A (105°C); thermally upgraded variants available" },
      {
        label: "Variants Available",
        value: "Standard, Thermally upgraded, Semi-conducting black, Aluminium foil crepe",
      },
      { label: "Supply Forms", value: "Rolls, pads, formed tubes" },
    ],
    applications: [
      "Transformer winding insulation and conductor covering",
      "Lead and terminal insulation in transformers",
      "Electrical shielding using semi-conducting crepe",
      "Bushing insulation using crepe tubes",
    ],
    benefits: [
      "High flexibility and tear resistance",
      "Improved oil retention and absorption",
      "Multiple variants for different insulation system requirements",
      "Compatible with standard transformer oil insulation systems",
    ],
    relatedProducts: ["kraft-paper", "presspaper", "pressboard-3mm"],
  },

  "nomex-paper": {
    id: "nomex-paper",
    name: "Nomex Paper",
    category: "Other Products",
    shortDescription:
      "High-performance aramid fibre insulation paper for elevated temperature electrical applications",
    description: [
      "Nomex paper is a premium electrical insulation material manufactured from meta-aramid fibres. It offers superior thermal stability, mechanical strength, and dielectric performance compared to cellulose-based insulation papers, making it the material of choice for high-performance and high-temperature electrical equipment.",
      "Nomex maintains its electrical and mechanical properties at continuous operating temperatures up to 220°C, well above the capability of standard kraft paper and presspaper. It is used in motors, transformers, and electrical equipment where extended service life at elevated temperatures is required.",
    ],
    specifications: [
      { label: "Material", value: "Meta-aramid (Nomex) fibres" },
      { label: "Thickness Range", value: "0.05 mm – 0.76 mm" },
      { label: "Density", value: "0.6 – 0.8 g/cm³" },
      { label: "Dielectric Strength", value: "≥ 24 kV/mm" },
      { label: "Temperature Rating", value: "220°C continuous, 240°C peak" },
      { label: "Supply Forms", value: "Rolls, sheets, die-cut shapes" },
    ],
    applications: [
      "High-temperature motor winding insulation",
      "Premium transformer insulation systems",
      "Aerospace and defence electrical applications",
      "Industrial motors operating in elevated temperature environments",
    ],
    benefits: [
      "Exceptional thermal stability up to 220°C continuous",
      "Superior dielectric strength compared to kraft paper",
      "Maintains mechanical properties at high temperatures",
      "Extends electrical equipment service life",
    ],
    relatedProducts: ["kraft-paper", "presspaper", "mica-tape"],
  },

  "polyester-film": {
    id: "polyester-film",
    name: "Polyester Film – Electrical Grade",
    category: "Other Products",
    shortDescription:
      "Thin flexible electrical grade polyester film (Mylar) for motor and transformer insulation",
    description: [
      "Electrical grade polyester film (Biaxially Oriented Polyester – BOPET, commonly known as Mylar) provides excellent electrical insulation in a thin, flexible format. It combines high dielectric strength with good mechanical strength and dimensional stability.",
      "Polyester film is widely used for motor slot insulation, transformer layer insulation, capacitor dielectric, and cable wrapping where thin but reliable electrical barriers are required. It resists moisture absorption and maintains its properties across temperature changes.",
    ],
    specifications: [
      { label: "Material", value: "Biaxially oriented polyester (BOPET)" },
      { label: "Thickness Range", value: "0.012 mm – 0.35 mm" },
      { label: "Tensile Strength", value: "≥ 170 MPa" },
      { label: "Dielectric Strength", value: "≥ 280 kV/mm" },
      { label: "Temperature Rating", value: "-70°C to 130°C" },
      { label: "Standard Roll Widths", value: "Up to 1000 mm (custom slitting available)" },
    ],
    applications: [
      "Motor slot insulation",
      "Transformer layer insulation",
      "Capacitor dielectric insulation",
      "Cable wrapping and insulation",
      "Flexible printed circuit substrates",
    ],
    benefits: [
      "Excellent dielectric strength",
      "Thin profile conserves space in windings",
      "Good mechanical strength and flexibility",
      "Moisture resistant",
    ],
    relatedProducts: ["nomex-paper", "kraft-paper", "adhesive-tapes"],
  },

  "syndanio-sheets": {
    id: "syndanio-sheets",
    name: "Syndanio Sheets",
    category: "Other Products",
    shortDescription:
      "High-temperature calcium silicate insulation boards for furnace and foundry applications",
    description: [
      "Syndanio sheets are calcium silicate composite thermal insulation boards designed for high-temperature industrial applications. They provide both thermal and electrical insulation while withstanding extreme temperatures and repeated thermal cycling.",
      "Used in foundries, furnaces, induction heating systems, and high-temperature electrical equipment where conventional insulation materials would fail. Syndanio sheets resist thermal shock and maintain structural integrity over long service periods at elevated temperatures.",
    ],
    specifications: [
      { label: "Material", value: "Calcium silicate composite" },
      { label: "Thickness Range", value: "3 mm – 75 mm" },
      { label: "Density", value: "0.9 – 1.1 g/cm³" },
      { label: "Thermal Conductivity", value: "Low (0.06 W/mK)" },
      { label: "Maximum Temperature", value: "Up to 1000°C" },
      { label: "Standard Sheet Sizes", value: "1000 × 1000 mm, custom sizes available" },
      { label: "Fabrication Options", value: "Custom thickness, die-cut and custom shapes" },
    ],
    applications: [
      "Foundry mould insulation",
      "Furnace and kiln lining and insulation",
      "Induction heating system insulation",
      "High-temperature electrical equipment insulation",
      "Metal casting operations",
    ],
    benefits: [
      "Withstands extreme temperatures up to 1000°C",
      "Excellent thermal insulation with low thermal conductivity",
      "Resistant to thermal shock and repeated heating cycles",
      "Provides both thermal and electrical insulation",
    ],
    relatedProducts: ["mica-sheets", "mica-tape", "nomex-paper"],
  },

  /* ===================== CUSTOM FABRICATION ===================== */

  "custom-gaskets": {
    id: "custom-gaskets",
    name: "Custom Gaskets & Precision Components",
    category: "Custom Fabrication",
    shortDescription:
      "Precision-cut gaskets and custom components fabricated from any material we supply",
    description: [
      "Our custom fabrication service produces precision components from any insulation or engineering material we supply. Using CNC machining, laser cutting, water jet cutting, and die stamping, we manufacture parts to your exact drawings and specifications.",
      "Whether you need simple flat gaskets, complex multi-layer assemblies, or precision machined insulation components, our engineering team works with you to optimise designs for manufacturability and performance. We support prototype quantities through to full production volumes.",
      "Stop managing in-house cutting and machining of specialised materials. Send us your drawings and receive finished, ready-to-install components that consistently meet your dimensional requirements.",
    ],
    specifications: [
      { label: "Materials Available", value: "All insulation and engineering materials we supply" },
      { label: "Dimensional Tolerance", value: "± 0.05 mm (depending on material)" },
      { label: "Size Range", value: "Small gaskets to 2000 mm panels" },
      { label: "Thickness Range", value: "As thin as 0.05 mm to 100 mm+" },
      { label: "Production Volume", value: "Prototype to high volume production" },
      {
        label: "Processing Methods",
        value: "CNC machining, laser cutting, water jet cutting, die cutting",
      },
      {
        label: "Custom Options",
        value: "Multi-layer assemblies, complex profiles, special shapes",
      },
    ],
    applications: [
      "Electrical equipment gaskets and insulation barriers",
      "Transformer insulation components and kits",
      "Motor and generator insulation parts",
      "Custom mechanical components for industrial equipment",
      "Specialised electrical insulation assemblies",
    ],
    benefits: [
      "Expert fabrication of all insulation and engineering materials",
      "Consistent quality and dimensional accuracy across production runs",
      "Engineering support for component design optimisation",
      "Single-source solution from raw material to finished part",
      "Reduces in-house cutting, machining, and material wastage",
    ],
    relatedProducts: ["transformer-insulation-kits", "fr4-epoxy-sheet", "ptfe-sheet"],
  },
};

export const productCategories = [
  "Pressboard",
  "Epoxy Sheets",
  "Phenolic Laminates",
  "Electrical Grade Presspaper",
  "FRP Products",
  "Mica Products",
  "Engineering Plastics",
  "Other Products",
  "Custom Fabrication",
];

export const featuredProducts = [
  // "pressboard-3mm",
  "pre-compressed-pressboard",
  "fr4-epoxy-sheet",
  "g10-epoxy-sheet",
  "paper-phenolic",
  "kraft-paper",
  "frp-tubes",
  "mica-sheets",
];

// Product image mapping - maps product IDs to curated image paths in /public/products
export const productImages: Record<string, string> = {
  // "pressboard-3mm": "/products/pressboardsheet-2.jpg",
  "pre-compressed-pressboard": "/products/precompressed-pressboard.jpg",
  "transformer-insulation-kits": "/products/transformer-insulation-kits.png",
  "moulded-pressboard-components": "/products/mouldable-press-boards.jpg",
  // "fr4-epoxy-sheet": "/products/fr4-fiberglass-sheet-color-options.jpg",
  "g10-epoxy-sheet": "/products/epoxy-glass-fabric-570x400.jpg",
  "esd-epoxy-sheet": "/products/fr4-fiberglass-sheet-color-options.jpg",
  "paper-phenolic": "/products/hylam-sheets-1.jpg",
  "bakelite-sheet": "/products/bakelite-sheets.jpg",
  "esd-bakelite-sheet": "/products/bakelite-sheets.jpg",
  presspaper: "/products/electrical-grade-press-paper.webp",
  "kraft-paper": "/products/electrical-grade-kraft-paper.jpg",
  "frp-tubes": "/products/fiberglass-tube-2-5mm-500x500.webp",
  "frp-rods": "/products/frp-components-500x500.webp",
  "frp-threaded-rods": "/products/fgthreaded-2.jpg",
  "frp-components": "/products/frp-components-500x500.webp",
  "mica-sheets": "/products/mica-natural-phlogopite-sheets.jpg",
  "mica-tape": "/products/Resin-Rich-Glass-Mica-Tape.jpg",
  "polycarbonate-sheet": "/products/pressboardsheet-2-570x400.jpg",
  "acrylic-sheet": "/products/pressboardsheet-2-570x400.jpg",
  "delrin-sheet": "/products/delrin-sheets.webp",
  "pp-sheet": "/products/pressboardsheet-2-570x400.jpg",
  "nylon-sheet-rod": "/products/pressboardsheet-2-570x400.jpg",
  "peek-sheet-rod": "/products/pressboardsheet-2-570x400.jpg",
  "ptfe-sheet": "/products/ptfe-sheet-virgin-500x500.webp",
  "ptfe-cloth-non-adhesive": "/products/non-adhesive-teflon-cloth.png",
  "ptfe-cloth-adhesive": "/products/ptfe-cloth-adhesive-500x500.webp",
  "glass-fibre-tapes": "/products/fibre-glass-tapes.jpg",
  "adhesive-tapes": "/products/adhesive-tapes.jpg",
  "cork-sheets": "/products/corksheets.jpg",
  "epoxy-cast-insulators": "/products/33kv-epoxy-cast-insulator-546.jpg",
  "crepe-paper-range": "/products/crepe-paper-tubes-1.jpg",
  "nomex-paper": "/products/nomex-paper-aramid-paper-500x500.webp",
  "polyester-film": "/products/electrical-insulation-polyester-film.jpg",
  "syndanio-sheets": "/products/SYNDANIO-SHEET.jpeg",
  "custom-gaskets": "/products/custom-gaskets.jpg",
};

// Fallback image for products without specific images
export const defaultProductImage = "/products/pressboardsheet-2-570x400.jpg";

// Get product image with fallback
export function getProductImage(productId: string): string {
  return productImages[productId] || defaultProductImage;
}

// Alias kept for backwards compatibility with existing page imports
export const allProducts: Record<string, Product> = products;

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
  "pressboard-3mm": {
    id: "pressboard-3mm",
    name: "Electrical Grade Pressboard – 3 mm",
    category: "Pressboard",
    shortDescription:
      "Electrical grade cellulose pressboard used as solid insulation in oil-immersed power and distribution transformers",

    description: [
      "Electrical grade pressboard is a solid insulation material manufactured from high-purity, long-fibre cellulose pulp. The 3 mm thickness is one of the most commonly used variants in transformer construction due to its balanced electrical, mechanical, and fabrication properties.",
      "This pressboard is widely used in oil-immersed power and distribution transformers as solid insulation barriers, spacers, and structural insulation elements. Its porous fibre structure enables excellent oil impregnation, which significantly enhances dielectric strength during operation.",
      "The material is produced under strictly controlled manufacturing conditions to ensure uniform density, low shrinkage, and consistent thickness. These characteristics are critical for maintaining electrical clearances and long-term mechanical stability inside transformer assemblies.",
      "3 mm pressboard can be supplied as full sheets or further processed into machined components depending on the transformer design requirements.",
    ],

    specifications: [
      { label: "Base Material", value: "High-purity cellulose fibres (electrical grade)" },
      { label: "Nominal Thickness", value: "3.0 mm" },
      { label: "Thickness Tolerance", value: "± 0.1 mm" },
      { label: "Density", value: "0.9 – 1.2 g/cm³" },
      { label: "Dielectric Strength (in oil)", value: "≥ 15 kV/mm" },
      { label: "Operating Temperature Class", value: "Class A – 105°C" },
      { label: "Moisture Content", value: "≤ 6%" },
      { label: "Oil Compatibility", value: "Excellent (mineral transformer oil)" },
      { label: "Surface Finish", value: "Smooth / calendered" },
      { label: "Standard Sheet Sizes", value: "1000 × 2000 mm (custom sizes available)" },
      { label: "Processing Options", value: "Cut-to-size sheets, machining, drilling" },
    ],

    applications: [
      "Solid insulation barriers in power transformers",
      "Phase and winding separation in distribution transformers",
      "Structural insulation blocks and spacers",
      "Electrical clearance insulation in HV equipment",
      "Insulation supports for transformer leads and bushings",
    ],

    benefits: [
      "High dielectric strength after oil impregnation",
      "Good mechanical rigidity with low deformation",
      "Uniform thickness ensures reliable electrical clearances",
      "Compatible with standard transformer insulation systems",
      "Easily machinable for custom transformer components",
    ],

    relatedProducts: ["pre-compressed-pressboard", "presspaper", "crepe-paper"],
  },

  "pre-compressed-pressboard": {
    id: "pre-compressed-pressboard",
    name: "Pre-Compressed Electrical Pressboard",
    category: "Pressboard",
    shortDescription:
      "High-density pressboard for critical transformer insulation and load-bearing applications",

    description: [
      "Pre-compressed pressboard is a high-density insulation material produced by compressing cellulose-based pressboards under controlled pressure and temperature conditions. This process significantly improves dimensional stability, mechanical strength, and resistance to shrinkage.",
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

    relatedProducts: ["pressboard-3mm", "presspaper", "crepe-paper"],
  },

  presspaper: {
    id: "presspaper",
    name: "Multiply Electrical Presspaper",
    category: "Presspaper",
    shortDescription:
      "High-purity cellulose presspaper for transformer, motor, and electrical insulation systems",

    description: [
      "Multiply presspaper is manufactured from carefully selected cellulose fibres using multi-vat cylinder machines and subsequently calendered to obtain a smooth and uniform surface.",
      "The paper consists of homogeneous layers with excellent mechanical strength, dielectric performance, and ageing resistance, making it suitable for use in transformer and motor insulation systems.",
      "Thermally upgraded variants are available for applications requiring improved thermal endurance. Diamond-dotted epoxy resin coatings can be applied on one or both sides for inter-layer bonding in transformer windings.",
    ],

    specifications: [
      { label: "Grades Available", value: "KP 4.1, K2, Grade 4, Thermally Upgraded" },
      { label: "Raw Material", value: "High-purity cellulose fibres" },
      { label: "Manufacturing Process", value: "Multi-vat cylinder machine" },
      { label: "Surface Finish", value: "Calendered smooth finish" },
      { label: "Resin Options", value: "Plain or diamond-dotted epoxy (B-stage)" },
      { label: "Thermal Class", value: "Class A / upgraded variants available" },
    ],

    applications: [
      "Transformer winding insulation",
      "Inter-layer insulation in coils",
      "Motor slot insulation",
      "Capacitor insulation",
      "High-voltage electrical components",
    ],

    benefits: [
      "High electrical and mechanical strength",
      "Excellent ageing resistance",
      "Uniform thickness and surface quality",
      "Compatible with transformer oils and resins",
    ],

    relatedProducts: ["pressboard-3mm", "pre-compressed-pressboard", "crepe-paper"],
  },

  "crepe-paper": {
    id: "crepe-paper",
    name: "Electrical Crepe Paper",
    category: "Crepe Paper",
    shortDescription:
      "Flexible creped insulation paper for transformer windings and conductor insulation",

    description: [
      "Electrical crepe paper is produced by mechanically creping electrical grade kraft paper, resulting in improved flexibility and elongation compared to plain paper.",
      "This material is widely used in transformer windings, lead insulation, and conductor covering where bending, stretching, and oil retention are required.",
      "Crepe paper provides increased surface area, which improves oil absorption and helps reduce operating temperatures inside transformers.",
      "Regular, thermally upgraded, and semi-conducting black crepe paper variants are available depending on insulation requirements.",
    ],

    specifications: [
      { label: "Base Material", value: "Electrical grade kraft paper" },
      { label: "Elongation Range", value: "10% – 300%" },
      { label: "Base Paper Thickness", value: "40 – 150 microns" },
      { label: "Supply Forms", value: "Rolls, pads, flexible tubes" },
      { label: "Thermal Class", value: "Class A (upgraded variants available)" },
    ],

    applications: [
      "Transformer winding insulation",
      "Copper conductor covering",
      "Lead and terminal insulation",
      "Electrical shielding (semi-conducting crepe)",
    ],

    benefits: [
      "High flexibility and tear resistance",
      "Improved oil retention",
      "Enhanced mechanical strength",
      "Suitable for complex winding geometries",
    ],

    relatedProducts: ["presspaper", "pressboard-3mm", "pre-compressed-pressboard"],
  },
  /* ===================== MACHINED COMPONENTS ===================== */

  "machined-pressboard-components": {
    id: "machined-pressboard-components",
    name: "Machined Pressboard Components",
    category: "Machined Components",
    shortDescription:
      "Precision machined pressboard insulation components for oil-immersed transformers",

    description: [
      "Machined pressboard components are manufactured from electrical grade pressboard and pre-compressed pressboard using precision machining processes.",
      "These components are used extensively in power and distribution transformers where accurate dimensions, smooth edges, and tight tolerances are critical to insulation performance and assembly.",
      "All components are produced to be burr-free with controlled thickness tolerances, ensuring reliable electrical clearances and mechanical stability inside transformer assemblies.",
      "Components can be supplied as individual parts or as complete insulation kits based on transformer design drawings.",
    ],

    specifications: [
      { label: "Base Materials", value: "Pressboard / Pre-compressed pressboard" },
      { label: "Manufacturing Method", value: "CNC machining, milling, drilling" },
      { label: "Edge Finish", value: "Burr-free, rounded edges" },
      { label: "Dimensional Tolerance", value: "Low tolerance as per drawing" },
      { label: "Oil Compatibility", value: "Excellent (transformer oil)" },
      { label: "Supply Form", value: "Individual components or assembled kits" },
    ],

    applications: [
      "Oil-immersed power transformers",
      "Distribution transformers",
      "HV and EHV transformer insulation systems",
      "Transformer refurbishment and repair",
    ],

    benefits: [
      "High dimensional accuracy",
      "Reduced assembly errors",
      "Consistent insulation clearances",
      "Ready-to-install transformer components",
      "Improved reliability under electrical and mechanical stress",
    ],

    relatedProducts: ["pressboard-3mm", "pre-compressed-pressboard", "presspaper"],
  },

  /* ===================== MACHINED COMPONENT TYPES ===================== */

  "machined-component-types": {
    id: "machined-component-types",
    name: "Machined Insulation Component Types",
    category: "Machined Components",
    shortDescription: "Standard machined insulation components manufactured from pressboard",

    description: [
      "A wide range of standard machined insulation components are manufactured from pressboard and pre-compressed pressboard based on transformer design requirements.",
      "These components are commonly used to provide insulation spacing, mechanical support, and electrical clearance control inside transformers.",
    ],

    specifications: [
      { label: "Typical Components", value: "Spacers, runners, wedges, rings, cylinders" },
      { label: "Profiles", value: "Rectangular, trapezoidal, rounded-edge profiles" },
      { label: "Customization", value: "As per customer drawings and specifications" },
    ],

    applications: [
      "Winding spacers and supports",
      "End insulation rings",
      "Clamping and pressure components",
      "Transformer internal insulation assemblies",
    ],

    benefits: [
      "Standardized and custom profiles available",
      "Consistent electrical clearances",
      "High mechanical integrity",
    ],

    relatedProducts: ["machined-pressboard-components"],
  },

  /* ===================== MOULDED COMPONENTS ===================== */

  "moulded-pressboard-components": {
    id: "moulded-pressboard-components",
    name: "Moulded Pressboard Components",
    category: "Moulded Components",
    shortDescription:
      "Hot-moulded pressboard insulation components for complex transformer geometries",

    description: [
      "Moulded pressboard components are produced by forming electrical grade pressboard under heat and pressure using precision moulds.",
      "This process allows the manufacture of complex three-dimensional insulation parts that cannot be produced efficiently through machining alone.",
      "Moulded components provide excellent mechanical strength, dimensional stability, and dielectric performance after oil impregnation.",
    ],

    specifications: [
      { label: "Base Material", value: "Electrical grade mouldable pressboard" },
      { label: "Manufacturing Process", value: "Hot moulding under controlled pressure" },
      { label: "Shape Capability", value: "Complex 3D geometries" },
      { label: "Oil Impregnation", value: "Excellent compatibility" },
      { label: "Dimensional Stability", value: "High after curing and oil impregnation" },
    ],

    applications: [
      "Oil-filled power transformers",
      "Distribution transformers",
      "High-voltage insulation assemblies",
    ],

    benefits: [
      "Complex shapes without machining joints",
      "Improved mechanical integrity",
      "Better electric field distribution",
      "Reduced number of insulation parts",
    ],

    relatedProducts: ["pressboard-3mm", "pre-compressed-pressboard"],
  },

  /* ===================== MOULDED COMPONENT TYPES ===================== */

  "moulded-component-types": {
    id: "moulded-component-types",
    name: "Standard Moulded Insulation Components",
    category: "Moulded Components",
    shortDescription: "Common moulded pressboard insulation components used in transformers",

    description: [
      "Moulded pressboard components are designed to adapt insulation structures to electric field conditions within transformers.",
      "These components are critical in controlling stress distribution and improving insulation reliability in high-voltage zones.",
    ],

    specifications: [
      {
        label: "Typical Components",
        value: "Angle rings, snouts, lead exits, collars, washers",
      },
      { label: "Design Basis", value: "Transformer insulation system design" },
    ],

    applications: [
      "High-field insulation zones",
      "Lead exit insulation",
      "Transformer winding ends",
      "Critical electrical stress areas",
    ],

    benefits: [
      "Optimized electric field control",
      "Improved dielectric reliability",
      "Long service life under oil and heat",
    ],

    relatedProducts: ["moulded-pressboard-components"],
  },

  /* ===================== INSULATION KITS ===================== */

  "transformer-insulation-kits": {
    id: "transformer-insulation-kits",
    name: "Transformer Insulation Component Kits",
    category: "Machined Components",
    shortDescription: "Pre-assembled pressboard insulation kits for transformer manufacturing",

    description: [
      "Transformer insulation kits consist of a complete set of machined and moulded insulation components required for a specific transformer design.",
      "These kits are supplied as per customer drawings and reduce handling, cutting errors, and assembly time on the shop floor.",
      "Each kit is verified for dimensional accuracy before dispatch.",
    ],

    specifications: [
      { label: "Included Items", value: "Machined and moulded pressboard components" },
      { label: "Customization", value: "Fully as per transformer design" },
      { label: "Supply Mode", value: "Tagged and grouped kits" },
    ],

    applications: [
      "Distribution transformer manufacturing",
      "Power transformer manufacturing",
      "Transformer refurbishment projects",
    ],

    benefits: [
      "Reduced production time",
      "Lower material wastage",
      "Consistent assembly quality",
      "Simplified inventory management",
    ],

    relatedProducts: ["machined-pressboard-components", "moulded-pressboard-components"],
  },

  "fr4-epoxy-sheet": {
    id: "fr4-epoxy-sheet",
    name: "Fiberglass Epoxy Sheet FR4 - General Purpose Grade",
    category: "Epoxy Sheets",
    shortDescription: "Superior mechanical strength epoxy sheets for demanding applications",
    description: [
      "FR4 fiberglass epoxy sheets are the industry standard for electrical and mechanical applications. Composed of woven fiberglass cloth impregnated with epoxy resin, this material offers excellent strength, dimensional stability, and electrical insulation.",
      "Our FR4 sheets meet international standards and are perfect for manufacturing printed circuit boards, electrical insulation components, and mechanical parts that require high strength-to-weight ratio.",
      "Available in multiple thicknesses and sizes, FR4 sheets can be easily machined, drilled, and punched to create custom components for your specific application.",
    ],
    specifications: [
      { label: "Material", value: "Epoxy resin + Fiberglass cloth" },
      { label: "Thickness", value: "0.5mm - 100mm" },
      { label: "Tensile Strength", value: "≥340 MPa" },
      { label: "Dielectric Strength", value: "≥16 kV/mm" },
      { label: "Temperature Rating", value: "-40°C to 130°C" },
      { label: "Available Sizes", value: "1020x1220mm, 1020x2040mm" },
      { label: "Custom Options", value: "CNC machining, Laser cutting" },
    ],
    applications: [
      "Printed circuit board substrates",
      "Electrical insulation barriers",
      "Structural components for electronics",
      "Test fixtures and jigs",
      "Motor and generator insulation",
    ],
    benefits: [
      "Excellent electrical insulation properties",
      "High mechanical strength and rigidity",
      "Easy to machine and fabricate",
      "Flame retardant properties (FR4 grade)",
    ],
    relatedProducts: ["g10-epoxy-sheet", "epoxy-rods", "paper-phenolic"],
  },

  "g10-epoxy-sheet": {
    id: "g10-epoxy-sheet",
    name: "Epoxy Sheet G10 - High Mechanical Strength Variant",
    category: "Epoxy Sheets",
    shortDescription: "Premium G10 grade for maximum strength and durability",
    description: [
      "G10 epoxy sheets provide even higher mechanical strength than FR4, making them ideal for applications requiring maximum structural integrity. The continuous filament fiberglass reinforcement creates a material with superior impact resistance and dimensional stability.",
      "This material excels in applications where FR4 would be insufficient. G10 maintains its properties across a wide temperature range and resists moisture absorption better than many alternatives.",
      "Choose G10 when your application demands the highest quality epoxy laminate. Our G10 sheets are manufactured to strict tolerances and inspected for consistency.",
    ],
    specifications: [
      { label: "Material", value: "Epoxy resin + Continuous fiberglass" },
      { label: "Thickness", value: "0.5mm - 100mm" },
      { label: "Tensile Strength", value: "≥380 MPa" },
      { label: "Dielectric Strength", value: "≥18 kV/mm" },
      { label: "Temperature Rating", value: "-60°C to 140°C" },
      { label: "Available Sizes", value: "1020x1220mm, 1020x2040mm" },
      {
        label: "Custom Options",
        value: "Precision machining, Custom dimensions",
      },
    ],
    applications: [
      "High-strength structural components",
      "Aerospace and defense applications",
      "Cryogenic insulation systems",
      "High-performance electrical insulation",
      "Precision mechanical parts",
    ],
    benefits: [
      "Maximum mechanical strength in epoxy laminates",
      "Excellent low-temperature properties",
      "Superior moisture resistance",
      "Maintains properties under extreme conditions",
    ],
    relatedProducts: ["fr4-epoxy-sheet", "epoxy-rods", "delrin-sheet"],
  },

  "paper-phenolic": {
    id: "paper-phenolic",
    name: "Paper Phenolic Laminate - NEMA XX Grade",
    category: "Phenolic Laminates",
    shortDescription: "Paper-based phenolic laminate for electrical applications",
    description: [
      "Paper phenolic laminates combine kraft paper with phenolic resin to create an economical material with good electrical insulation properties. This material is widely used in electrical equipment where high mechanical strength is not critical.",
      "NEMA XX grade paper phenolic offers consistent quality at a competitive price point. It machines easily and provides reliable electrical insulation for a variety of applications.",
      "This material is the go-to choice for manufacturers who need cost-effective electrical insulation without compromising on quality standards.",
    ],
    specifications: [
      { label: "Material", value: "Phenolic resin + Kraft paper" },
      { label: "Thickness", value: "0.5mm - 50mm" },
      { label: "Tensile Strength", value: "≥60 MPa" },
      { label: "Dielectric Strength", value: "≥12 kV/mm" },
      { label: "Temperature Rating", value: "-40°C to 120°C" },
      { label: "Available Sizes", value: "1020x1220mm, Custom sizes" },
      { label: "Custom Options", value: "Punching, Die-cutting, Machining" },
    ],
    applications: [
      "Terminal boards and strips",
      "Electrical panel insulation",
      "Switch and relay components",
      "Transformer barriers",
      "General electrical insulation",
    ],
    benefits: [
      "Cost-effective electrical insulation",
      "Easy to machine and fabricate",
      "Good dielectric properties",
      "Consistent quality and availability",
    ],
    relatedProducts: ["cotton-phenolic", "bakelite-sheet", "fr4-epoxy-sheet"],
  },

  "cotton-phenolic": {
    id: "cotton-phenolic",
    name: "Cotton Phenolic Laminate - NEMA CE Grade",
    category: "Phenolic Laminates",
    shortDescription: "Cotton-based phenolic for mechanical applications",
    description: [
      "Cotton phenolic laminates use cotton fabric reinforcement for applications requiring higher impact resistance than paper-based laminates. NEMA CE grade material offers excellent machinability and wear resistance.",
      "This material is ideal for mechanical components that also require electrical insulation properties. The cotton fabric reinforcement provides better impact strength and toughness compared to paper phenolic.",
      "Manufacturers choose cotton phenolic when they need a material that can withstand mechanical stress while maintaining electrical insulation.",
    ],
    specifications: [
      { label: "Material", value: "Phenolic resin + Cotton fabric" },
      { label: "Thickness", value: "1mm - 75mm" },
      { label: "Tensile Strength", value: "≥90 MPa" },
      { label: "Dielectric Strength", value: "≥10 kV/mm" },
      { label: "Temperature Rating", value: "-40°C to 120°C" },
      { label: "Available Sizes", value: "1020x1220mm, 1020x2040mm" },
      { label: "Custom Options", value: "CNC machining, Custom shapes" },
    ],
    applications: [
      "Gears and mechanical components",
      "Washers and spacers",
      "Electrical motor parts",
      "Machinery insulation",
      "Wear-resistant components",
    ],
    benefits: [
      "Superior impact resistance",
      "Excellent machinability",
      "Good wear resistance",
      "Combined electrical and mechanical properties",
    ],
    relatedProducts: ["paper-phenolic", "bakelite-sheet", "delrin-sheet"],
  },

  "bakelite-sheet": {
    id: "bakelite-sheet",
    name: "Bakelite Sheet - General Phenolic Applications",
    category: "Phenolic Laminates",
    shortDescription: "Versatile bakelite sheets for diverse industrial uses",
    description: [
      "Bakelite sheets are versatile phenolic laminates suitable for both electrical and mechanical applications. Available in paper and cotton grades, these sheets offer reliable performance across a wide range of uses.",
      "As one of the earliest synthetic materials, bakelite has proven its reliability over decades of industrial use. Our bakelite sheets maintain the traditional quality while meeting modern manufacturing standards.",
      "Whether you need electrical insulation, mechanical components, or heat-resistant parts, our bakelite sheets deliver consistent performance at competitive prices.",
    ],
    specifications: [
      { label: "Material", value: "Phenolic resin + Paper/Cotton" },
      { label: "Thickness", value: "0.5mm - 100mm" },
      { label: "Tensile Strength", value: "60-90 MPa (grade dependent)" },
      { label: "Dielectric Strength", value: "10-12 kV/mm" },
      { label: "Temperature Rating", value: "-40°C to 130°C" },
      { label: "Available Sizes", value: "1020x1220mm, Custom sizes" },
      { label: "Custom Options", value: "Multiple grades, Custom fabrication" },
    ],
    applications: [
      "Electrical switchgear components",
      "Industrial machinery parts",
      "Heat-resistant handles and knobs",
      "Terminal blocks and connectors",
      "General purpose insulation",
    ],
    benefits: [
      "Proven reliability over decades",
      "Available in multiple grades",
      "Heat and chemical resistance",
      "Cost-effective for many applications",
    ],
    relatedProducts: ["paper-phenolic", "cotton-phenolic", "fr4-epoxy-sheet"],
  },

  "kraft-paper": {
    id: "kraft-paper",
    name: "Electrical Grade Kraft Paper",
    category: "Insulation Paper",
    shortDescription: "Premium kraft paper for transformer winding insulation",
    description: [
      "Electrical grade kraft paper is essential for transformer winding insulation. Our kraft paper is manufactured to precise thickness tolerances and undergoes rigorous testing to ensure consistent electrical properties.",
      "This specialized paper provides reliable insulation between transformer windings while allowing proper oil flow for cooling. The high dielectric strength prevents electrical breakdown while maintaining flexibility for easy winding.",
      "Transformer manufacturers trust our kraft paper for both small distribution transformers and large power transformers. Every roll is tested and certified before shipping.",
    ],
    specifications: [
      { label: "Material", value: "Pure cellulose kraft pulp" },
      { label: "Thickness", value: "0.05mm - 0.5mm" },
      { label: "Density", value: "0.7 - 0.9 g/cm³" },
      { label: "Dielectric Strength", value: "≥20 kV/mm (in oil)" },
      { label: "Temperature Rating", value: "105°C continuous" },
      {
        label: "Available Sizes",
        value: "Rolls: 1000mm width, Custom lengths",
      },
      { label: "Custom Options", value: "Custom thickness, Slit widths" },
    ],
    applications: [
      "Transformer winding insulation",
      "Layer insulation in coils",
      "Cable wrapping and insulation",
      "Capacitor dielectric",
      "Electrical equipment insulation",
    ],
    benefits: [
      "High dielectric strength in transformer oil",
      "Excellent flexibility for winding",
      "Precise thickness control",
      "Low moisture content for reliability",
    ],
    relatedProducts: ["pressboard-3mm", "nomex-paper", "polyester-film"],
  },

  "delrin-sheet": {
    id: "delrin-sheet",
    name: "Delrin Sheet (POM) - Engineering Grade Acetal",
    category: "Engineering Plastics",
    shortDescription: "High-performance acetal sheets for precision components",
    description: [
      "Delrin (POM - Polyoxymethylene) sheets offer exceptional mechanical properties, low friction, and excellent dimensional stability. This engineering thermoplastic is ideal for precision parts that require tight tolerances.",
      "The material's natural lubricity makes it perfect for wear-resistant components like gears, bearings, and sliding parts. Delrin machines beautifully, producing smooth surfaces without extensive finishing.",
      "When your application demands precision and reliability, Delrin delivers. Our sheets are manufactured to consistent quality standards and available in multiple thicknesses.",
    ],
    specifications: [
      { label: "Material", value: "Polyoxymethylene (Acetal)" },
      { label: "Thickness", value: "1mm - 100mm" },
      { label: "Tensile Strength", value: "≥60 MPa" },
      { label: "Dielectric Strength", value: "Moderate (not primary use)" },
      { label: "Temperature Rating", value: "-40°C to 90°C" },
      { label: "Available Sizes", value: "1000x2000mm, Custom sizes" },
      {
        label: "Custom Options",
        value: "Precision CNC machining, Custom parts",
      },
    ],
    applications: [
      "Precision gears and bearings",
      "Conveyor components",
      "Food processing equipment parts",
      "Automotive components",
      "Medical device components",
    ],
    benefits: [
      "Excellent dimensional stability",
      "Low friction and self-lubricating",
      "Superior machinability",
      "High fatigue resistance",
    ],
    relatedProducts: ["g10-epoxy-sheet", "cotton-phenolic", "ptfe-sheet"],
  },

  "fiberglass-tubes": {
    id: "fiberglass-tubes",
    name: "Fiberglass Tubes - Industrial Grade",
    category: "Fiberglass Products",
    shortDescription: "Robust insulation tubes for high-stress environments",
    description: [
      "Fiberglass tubes provide excellent electrical insulation with mechanical strength for industrial applications. Made from continuous fiberglass filaments and resin, these tubes resist heat, chemicals, and mechanical stress.",
      "Our fiberglass tubes are used in electrical equipment, motor windings, and industrial machinery where both insulation and structural support are required. The tubes maintain their properties across a wide temperature range.",
      "Available in multiple diameters and wall thicknesses, we can supply standard sizes or custom-made tubes to your exact specifications.",
    ],
    specifications: [
      { label: "Material", value: "Fiberglass + Epoxy/Polyester resin" },
      { label: "Diameter Range", value: "3mm - 200mm" },
      { label: "Wall Thickness", value: "0.5mm - 10mm" },
      { label: "Dielectric Strength", value: "≥15 kV/mm" },
      { label: "Temperature Rating", value: "-40°C to 155°C" },
      { label: "Available Lengths", value: "Up to 3000mm, Custom cut" },
      { label: "Custom Options", value: "Custom diameters, Special resins" },
    ],
    applications: [
      "Motor and generator slot insulation",
      "Electrical bus bar sleeves",
      "High-voltage equipment insulation",
      "Structural supports in electrical gear",
      "Industrial machinery components",
    ],
    benefits: [
      "Excellent electrical insulation",
      "High mechanical strength",
      "Chemical and heat resistant",
      "Long service life in harsh conditions",
    ],
    relatedProducts: ["fr4-epoxy-sheet", "syndanio-sheet", "g10-epoxy-sheet"],
  },

  "syndanio-sheet": {
    id: "syndanio-sheet",
    name: "Syndanio Sheets - Thermal Insulation",
    category: "Thermal Insulation",
    shortDescription: "High-temperature insulation boards for foundries and furnaces",
    description: [
      "Syndanio sheets are specialized thermal insulation materials designed for high-temperature industrial applications. These boards withstand extreme heat while providing both thermal and electrical insulation properties.",
      "Commonly used in foundries, furnaces, and high-temperature electrical equipment, Syndanio sheets prevent heat transfer while maintaining structural integrity. The material resists thermal shock and repeated heating cycles.",
      "When your application involves high temperatures, Syndanio sheets deliver the insulation performance you need without degrading over time.",
    ],
    specifications: [
      { label: "Material", value: "Calcium silicate composite" },
      { label: "Thickness", value: "3mm - 75mm" },
      { label: "Density", value: "0.9 - 1.1 g/cm³" },
      { label: "Thermal Conductivity", value: "Low (0.06 W/mK)" },
      { label: "Temperature Rating", value: "Up to 1000°C" },
      { label: "Available Sizes", value: "1000x1000mm, Custom sizes" },
      { label: "Custom Options", value: "Custom thickness, Die-cut shapes" },
    ],
    applications: [
      "Foundry mold insulation",
      "Furnace lining and insulation",
      "High-temperature electrical equipment",
      "Induction heating systems",
      "Metal casting operations",
    ],
    benefits: [
      "Withstands extreme temperatures",
      "Excellent thermal insulation",
      "Resistant to thermal shock",
      "Both thermal and electrical insulation",
    ],
    relatedProducts: ["mica-sheets", "fiberglass-tubes", "ptfe-sheet"],
  },

  "ptfe-cloth-non-adhesive": {
    id: "ptfe-cloth-non-adhesive",
    name: "PTFE Cloth Non-Adhesive - Brown and White",
    category: "PTFE Products",
    shortDescription: "Premium Teflon cloth for extreme conditions",
    description: [
      "PTFE (Teflon) cloth without adhesive backing offers exceptional chemical resistance and non-stick properties. Available in brown and white variants, this material handles extreme temperatures and aggressive chemicals.",
      "The fiberglass fabric base provides mechanical strength while the PTFE coating delivers the unique properties that make Teflon famous. This cloth is perfect for applications requiring heat resistance and release properties.",
      "Use PTFE cloth in food processing, packaging machinery, heat sealing, and anywhere you need a material that resists sticking and chemical attack.",
    ],
    specifications: [
      { label: "Material", value: "PTFE-coated fiberglass fabric" },
      { label: "Thickness", value: "0.08mm - 0.5mm" },
      { label: "Tensile Strength", value: "≥1500 N/5cm" },
      { label: "Temperature Rating", value: "-70°C to 260°C continuous" },
      { label: "Colors Available", value: "Brown, White" },
      { label: "Available Widths", value: "1000mm, 1270mm, Custom widths" },
      { label: "Custom Options", value: "Custom widths, Lengths, Colors" },
    ],
    applications: [
      "Heat sealing and packaging",
      "Conveyor belts for high temperatures",
      "Release sheets for molding",
      "Food processing equipment",
      "Chemical processing applications",
    ],
    benefits: [
      "Extreme temperature resistance",
      "Non-stick surface properties",
      "Excellent chemical resistance",
      "Long service life in harsh conditions",
    ],
    relatedProducts: ["ptfe-cloth-adhesive", "ptfe-sheet", "polyester-film"],
  },

  "ptfe-cloth-adhesive": {
    id: "ptfe-cloth-adhesive",
    name: "PTFE Cloth Adhesive - Cream and Dark Brown",
    category: "PTFE Products",
    shortDescription: "Self-adhesive Teflon cloth for easy installation",
    description: [
      "PTFE cloth with adhesive backing combines the exceptional properties of Teflon with the convenience of pressure-sensitive adhesive. Simply peel and stick to create non-stick surfaces on existing equipment.",
      "Available in cream and dark brown colors, this material makes it easy to upgrade machinery with PTFE surfaces without complex installation. The silicone adhesive withstands high temperatures while providing strong bonding.",
      "Perfect for retrofitting existing equipment or temporary applications where you need PTFE properties without permanent modifications.",
    ],
    specifications: [
      { label: "Material", value: "PTFE cloth + Silicone adhesive" },
      { label: "Thickness", value: "0.13mm - 0.25mm (total)" },
      { label: "Tensile Strength", value: "≥1400 N/5cm" },
      { label: "Temperature Rating", value: "-70°C to 260°C" },
      { label: "Colors Available", value: "Cream, Dark brown" },
      { label: "Available Widths", value: "1000mm, Custom widths" },
      { label: "Custom Options", value: "Die-cut shapes, Custom sizes" },
    ],
    applications: [
      "Heat seal bar covering",
      "Chute and hopper lining",
      "Packaging machinery upgrades",
      "Mold release surfaces",
      "Food processing equipment",
    ],
    benefits: [
      "Easy peel-and-stick application",
      "No special installation tools needed",
      "High-temperature adhesive",
      "Instant PTFE surface creation",
    ],
    relatedProducts: ["ptfe-cloth-non-adhesive", "ptfe-sheet", "polyester-film"],
  },

  "ptfe-sheet": {
    id: "ptfe-sheet",
    name: "PTFE Virgin Sheets - Pure Teflon",
    category: "PTFE Products",
    shortDescription: "Pure PTFE sheets for demanding applications",
    description: [
      "Virgin PTFE sheets offer the full range of Teflon properties in solid sheet form. Made from 100% pure PTFE resin, these sheets provide unmatched chemical resistance, low friction, and temperature stability.",
      "Unlike filled PTFE, virgin material delivers the best possible performance for critical applications. The material remains stable from cryogenic temperatures to well above 200°C.",
      "When your application cannot compromise on PTFE properties, choose virgin sheets. Available in various thicknesses and supplied in rolls or cut sheets.",
    ],
    specifications: [
      { label: "Material", value: "100% Virgin PTFE resin" },
      { label: "Thickness", value: "0.5mm - 10mm" },
      { label: "Tensile Strength", value: "≥27 MPa" },
      { label: "Dielectric Strength", value: "≥60 kV/mm" },
      { label: "Temperature Rating", value: "-200°C to 260°C" },
      { label: "Available Sizes", value: "Rolls and sheets, Custom cut" },
      { label: "Custom Options", value: "Skived sheets, Custom thickness" },
    ],
    applications: [
      "Chemical processing gaskets",
      "Pharmaceutical equipment seals",
      "Food industry components",
      "High-purity electrical insulation",
      "Cryogenic sealing applications",
    ],
    benefits: [
      "Maximum chemical resistance",
      "Lowest coefficient of friction",
      "Wide temperature capability",
      "FDA compliant for food contact",
    ],
    relatedProducts: ["ptfe-cloth-non-adhesive", "custom-gaskets", "delrin-sheet"],
  },

  "epoxy-rods": {
    id: "epoxy-rods",
    name: "Epoxy Rods - Fiberglass Round Bars",
    category: "Epoxy Products",
    shortDescription: "Solid epoxy rods for precision machining",
    description: [
      "Fiberglass epoxy rods provide excellent electrical insulation in a machinable round bar form. These rods are perfect for creating custom components through turning, milling, and drilling operations.",
      "Made with the same quality epoxy resin and fiberglass as our sheets, these rods offer consistent properties throughout their diameter. They machine cleanly without delamination.",
      "Use epoxy rods when you need to produce cylindrical insulation components, spacers, standoffs, or any round parts requiring electrical insulation and mechanical strength.",
    ],
    specifications: [
      { label: "Material", value: "Epoxy resin + Fiberglass" },
      { label: "Diameter Range", value: "3mm - 200mm" },
      { label: "Tensile Strength", value: "≥350 MPa" },
      { label: "Dielectric Strength", value: "≥16 kV/mm" },
      { label: "Temperature Rating", value: "-40°C to 130°C" },
      { label: "Available Lengths", value: "Up to 3000mm, Custom cut" },
      {
        label: "Custom Options",
        value: "Custom diameters, Precision machining",
      },
    ],
    applications: [
      "Electrical standoffs and spacers",
      "Insulating shafts and rods",
      "Mechanical and structural supports",
      "Custom machined components",
      "High-voltage equipment parts",
    ],
    benefits: [
      "Excellent machinability",
      "Consistent properties throughout",
      "High strength-to-weight ratio",
      "Electrical insulation in round form",
    ],
    relatedProducts: ["fr4-epoxy-sheet", "g10-epoxy-sheet", "fiberglass-tubes"],
  },

  "nomex-paper": {
    id: "nomex-paper",
    name: "Nomex Paper - Aramid Fiber Insulation",
    category: "Advanced Insulation",
    shortDescription: "High-performance aramid insulation for extreme conditions",
    description: [
      "Nomex paper is a premium insulation material made from aramid fibers. This advanced material offers superior thermal stability, mechanical strength, and electrical insulation compared to traditional kraft paper.",
      "The meta-aramid fiber structure gives Nomex exceptional heat resistance and the ability to maintain properties at temperatures where cellulose materials would fail. It's the choice for high-performance motors and transformers.",
      "When equipment operates under extreme conditions or requires maximum reliability, Nomex paper delivers. Though more expensive than kraft paper, it provides insurance against premature failure.",
    ],
    specifications: [
      { label: "Material", value: "Meta-aramid (Nomex) fibers" },
      { label: "Thickness", value: "0.05mm - 0.76mm" },
      { label: "Density", value: "0.6 - 0.8 g/cm³" },
      { label: "Dielectric Strength", value: "≥24 kV/mm" },
      { label: "Temperature Rating", value: "220°C continuous, 240°C peak" },
      { label: "Available Sizes", value: "Rolls and sheets, Custom sizes" },
      { label: "Custom Options", value: "Die-cut shapes, Custom thickness" },
    ],
    applications: [
      "High-temperature motor insulation",
      "Premium transformer insulation",
      "Aerospace and defense applications",
      "Industrial motors in harsh environments",
      "High-reliability electrical equipment",
    ],
    benefits: [
      "Exceptional thermal stability",
      "Superior mechanical strength",
      "Maintains properties at high temperatures",
      "Extended equipment service life",
    ],
    relatedProducts: ["kraft-paper", "polyester-film", "mica-sheets"],
  },

  "polyester-film": {
    id: "polyester-film",
    name: "Polyester Film - Electrical Grade Mylar",
    category: "Insulation Films",
    shortDescription: "Thin, flexible electrical insulation film",
    description: [
      "Electrical grade polyester film (Mylar) provides excellent insulation in a thin, flexible format. This material combines good electrical properties with mechanical strength and dimensional stability.",
      "Polyester film is essential for slot insulation in motors, transformer layer insulation, and any application requiring thin but reliable electrical barriers. The film resists moisture and maintains properties across temperature changes.",
      "Available in various thicknesses from ultra-thin to heavier gauges, our polyester film meets international standards for electrical insulation applications.",
    ],
    specifications: [
      { label: "Material", value: "Biaxially oriented polyester (BOPET)" },
      { label: "Thickness", value: "0.012mm - 0.35mm" },
      { label: "Tensile Strength", value: "≥170 MPa" },
      { label: "Dielectric Strength", value: "≥280 kV/mm" },
      { label: "Temperature Rating", value: "-70°C to 130°C" },
      {
        label: "Available Widths",
        value: "Rolls up to 1000mm, Custom slitting",
      },
      { label: "Custom Options", value: "Custom widths, Corona treatment" },
    ],
    applications: [
      "Motor slot insulation",
      "Transformer layer insulation",
      "Capacitor dielectric",
      "Cable wrapping and insulation",
      "Flexible printed circuits",
    ],
    benefits: [
      "Excellent dielectric strength",
      "Thin profile saves space",
      "Good mechanical properties",
      "Moisture resistant",
    ],
    relatedProducts: ["kraft-paper", "nomex-paper", "ptfe-cloth-non-adhesive"],
  },

  "mica-sheets": {
    id: "mica-sheets",
    name: "Mica Sheets - Natural and Phlogopite",
    category: "Mica Products",
    shortDescription: "High-temperature mineral insulation",
    description: [
      "Mica sheets offer exceptional thermal and electrical insulation properties derived from natural mineral sources. Available in muscovite (natural) and phlogopite variants, mica withstands extreme temperatures while providing excellent electrical insulation.",
      "The unique layered structure of mica allows it to be split into thin sheets while maintaining strength. This material is irreplaceable in high-temperature electrical applications where organic materials would decompose.",
      "Our mica sheets are carefully selected and processed to ensure consistent quality. Choose mica when your application involves temperatures beyond the capability of conventional insulation materials.",
    ],
    specifications: [
      { label: "Material", value: "Natural/Phlogopite mica" },
      { label: "Thickness", value: "0.1mm - 2mm" },
      { label: "Tensile Strength", value: "Moderate (brittle material)" },
      { label: "Dielectric Strength", value: "≥60 kV/mm" },
      { label: "Temperature Rating", value: "Up to 600°C (Phlogopite)" },
      { label: "Available Sizes", value: "1000x1200mm, Custom sizes" },
      {
        label: "Custom Options",
        value: "Mica paper, Flexible mica, Custom cuts",
      },
    ],
    applications: [
      "High-temperature furnace insulation",
      "Electric heating element insulation",
      "Foundry and metallurgical applications",
      "Commutator segment insulation",
      "High-voltage electrical insulation",
    ],
    benefits: [
      "Extreme temperature capability",
      "Excellent electrical insulation",
      "Natural mineral durability",
      "Resistant to chemicals and arc",
    ],
    relatedProducts: ["syndanio-sheet", "nomex-paper", "ptfe-sheet"],
  },

  "custom-gaskets": {
    id: "custom-gaskets",
    name: "Custom Gaskets & Precision Components",
    category: "Custom Fabrication",
    shortDescription: "Precision-cut parts from any material we supply",
    description: [
      "Our custom fabrication service turns any material we supply into precision components for your specific application. Using CNC machining, laser cutting, water jet cutting, and die stamping, we produce parts to your exact specifications.",
      "Whether you need simple gaskets or complex multi-layer assemblies, our engineering team works with you to optimize designs for manufacturability and performance. We handle everything from prototypes to production volumes.",
      "Stop struggling with in-house fabrication of specialized materials. Send us your drawings and let our experts produce components that meet your tolerance requirements consistently.",
    ],
    specifications: [
      { label: "Materials Available", value: "All materials we supply" },
      { label: "Tolerance", value: "±0.05mm (depending on material)" },
      { label: "Size Range", value: "Small gaskets to 2000mm panels" },
      { label: "Thickness Range", value: "As thin as 0.05mm to 100mm+" },
      { label: "Production Volume", value: "Prototype to high volume" },
      {
        label: "Processing Methods",
        value: "CNC, Laser, Water jet, Die cutting",
      },
      {
        label: "Custom Options",
        value: "Multi-layer assemblies, Special shapes",
      },
    ],
    applications: [
      "Electrical equipment gaskets and barriers",
      "Transformer insulation components",
      "Motor and generator parts",
      "Custom mechanical components",
      "Specialized electrical insulation assemblies",
    ],
    benefits: [
      "Expert fabrication of difficult materials",
      "Consistent quality across production runs",
      "Engineering support for design optimization",
      "Single-source solution from material to finished part",
    ],
    relatedProducts: ["transformer-kits", "ptfe-sheet", "fr4-epoxy-sheet"],
  },

  "transformer-kits": {
    id: "transformer-kits",
    name: "Transformer Insulation Kits - Complete Solutions",
    category: "Complete Assemblies",
    shortDescription: "Pre-cut insulation component kits for transformer assembly",
    description: [
      "Transformer insulation kits provide all the pressboard, kraft paper, and other insulation components you need for transformer assembly in one convenient package. Each kit is engineered for specific transformer designs and pre-cut to exact dimensions.",
      "Eliminate cutting errors and material waste by ordering complete kits instead of raw materials. Our engineering team works from your transformer design to create kits that include every insulation component needed.",
      "These kits dramatically reduce assembly time and ensure consistency across multiple transformers. Perfect for manufacturers who want to streamline production and eliminate in-house cutting operations.",
    ],
    specifications: [
      {
        label: "Included Materials",
        value: "Pressboard, Kraft paper, Custom components",
      },
      {
        label: "Kit Types",
        value: "Distribution, Power, Specialty transformers",
      },
      { label: "Customization", value: "Fully custom to your design" },
      { label: "Quality Control", value: "Pre-assembly verification" },
      { label: "Packaging", value: "Organized by assembly sequence" },
      { label: "Lead Time", value: "Depends on complexity" },
      { label: "Volume Pricing", value: "Available for recurring orders" },
    ],
    applications: [
      "Distribution transformer assembly",
      "Power transformer manufacturing",
      "Specialty transformer production",
      "Repair and remanufacturing",
      "High-volume transformer production",
    ],
    benefits: [
      "Eliminate material cutting operations",
      "Reduce assembly errors and waste",
      "Consistent quality across production",
      "Engineering support included",
    ],
    relatedProducts: ["pressboard-3mm", "kraft-paper", "custom-gaskets"],
  },
};

export const productCategories = [
  "Pressboard",
  "Presspaper",
  "Crepe Paper",
  "Machined Components",
  "Moulded Components",
  "Epoxy Sheets",
  "Epoxy Products",
  "Phenolic Laminates",
  "Insulation Paper",
  "Engineering Plastics",
  "Fiberglass Products",
  "Thermal Insulation",
  "PTFE Products",
  "Advanced Insulation",
  "Insulation Films",
  "Mica Products",
  "Custom Fabrication",
  "Complete Assemblies",
  "Other Products",
];

export const featuredProducts = [
  "pressboard-3mm",
  "pre-compressed-pressboard",
  "fr4-epoxy-sheet",
  "paper-phenolic",
  "kraft-paper",
  "delrin-sheet",
  "fiberglass-tubes",
  "syndanio-sheet",
];

export const otherProducts: Record<string, Product> = {
  "mica-tape": {
    id: "mica-tape",
    name: "Mica Tapes & Mica Sheets",
    category: "Other Products",
    shortDescription: "High-temperature mica insulation tapes and sheets",
    description: [
      "Mica tapes and sheets are used in critical high-temperature electrical insulation applications where organic materials fail. Manufactured using muscovite and phlogopite mica, these products provide excellent dielectric strength and thermal endurance.",
      "Widely used in motors, generators, and heating equipment, mica insulation maintains stability under extreme thermal stress.",
    ],
    specifications: [
      { label: "Material", value: "Muscovite / Phlogopite mica" },
      { label: "Temperature Rating", value: "Up to 600°C" },
      { label: "Form", value: "Tape, Sheet, Flexible laminate" },
    ],
    applications: [
      "Motor winding insulation",
      "Heating element insulation",
      "High-voltage equipment",
    ],
    benefits: ["Excellent thermal resistance", "High dielectric strength", "Long service life"],
    relatedProducts: ["syndanio-sheet", "nomex-paper"],
  },

  "glass-fibre-tapes": {
    id: "glass-fibre-tapes",
    name: "Glass Fibre, Polyester & Cotton Tapes",
    category: "Other Products",
    shortDescription: "Electrical insulation tapes for motors and transformers",
    description: [
      "Glass fibre, polyester, and cotton tapes are extensively used in electrical insulation systems for binding, reinforcement, and protection.",
      "These tapes provide mechanical strength, thermal resistance, and compatibility with varnishes and resins.",
    ],
    specifications: [
      { label: "Material", value: "Glass fibre / Polyester / Cotton" },
      { label: "Temperature Rating", value: "Up to 155°C" },
      { label: "Form", value: "Woven tapes" },
    ],
    applications: ["Motor winding binding", "Transformer insulation", "Electrical reinforcement"],
    benefits: ["Excellent tensile strength", "Resin compatibility", "Flexible and durable"],
    relatedProducts: ["mica-tape", "polyester-film"],
  },

  "adhesive-tapes": {
    id: "adhesive-tapes",
    name: "Adhesive Insulation Tapes",
    category: "Other Products",
    shortDescription: "Kapton, Polyester, and Fiberglass adhesive tapes",
    description: [
      "Adhesive insulation tapes are pressure-sensitive tapes designed for quick application in electrical insulation systems.",
      "Includes Kapton tapes, polyester adhesive tapes, and fiberglass adhesive tapes for high-temperature and electrical applications.",
    ],
    specifications: [
      { label: "Adhesive Type", value: "Silicone / Acrylic" },
      { label: "Temperature Rating", value: "Up to 260°C (Kapton)" },
      { label: "Form", value: "Rolls" },
    ],
    applications: ["Slot insulation", "Electrical masking", "Thermal protection"],
    benefits: ["Easy application", "High temperature resistance", "Strong adhesion"],
    relatedProducts: ["ptfe-cloth-adhesive", "polyester-film"],
  },

  "cork-sheets": {
    id: "cork-sheets",
    name: "Cork Sheets",
    category: "Other Products",
    shortDescription: "Compressible cork sheets for vibration and sealing",
    description: [
      "Cork sheets are used for vibration damping, sealing, and insulation in electrical and mechanical systems.",
      "They offer excellent compressibility and recovery properties.",
    ],
    specifications: [
      { label: "Material", value: "Natural cork" },
      { label: "Thickness", value: "1mm – 25mm" },
    ],
    applications: ["Transformer vibration damping", "Sealing applications"],
    benefits: ["Excellent compressibility", "Thermal and acoustic insulation"],
    relatedProducts: ["custom-gaskets"],
  },

  "hylam-sheets": {
    id: "hylam-sheets",
    name: "Hylam Sheets",
    category: "Phenolic Laminates",
    shortDescription: "Electrical grade laminated phenolic sheets",
    description: [
      "Hylam sheets are laminated phenolic materials used extensively in electrical and mechanical insulation.",
      "They offer good dielectric strength and mechanical rigidity.",
    ],
    specifications: [
      { label: "Material", value: "Phenolic laminate" },
      { label: "Temperature Rating", value: "Up to 120°C" },
    ],
    applications: ["Electrical panels", "Switchgear components"],
    benefits: ["Cost-effective insulation", "Good machinability"],
    relatedProducts: ["bakelite-sheet"],
  },

  "epoxy-cast-insulators": {
    id: "epoxy-cast-insulators",
    name: "Epoxy Cast Insulators",
    category: "Other Products",
    shortDescription: "High-strength epoxy cast electrical insulators",
    description: [
      "Epoxy cast insulators are used in medium and high-voltage electrical systems for structural and insulation purposes.",
      "Manufactured using high-grade epoxy resin systems to ensure mechanical strength and electrical reliability.",
    ],
    specifications: [
      { label: "Material", value: "Cast epoxy resin" },
      { label: "Voltage Class", value: "Up to 36 kV" },
    ],
    applications: ["Switchgear insulation", "Busbar supports"],
    benefits: ["High mechanical strength", "Excellent electrical insulation"],
    relatedProducts: ["epoxy-rods", "custom-gaskets"],
  },

  "crepe-paper-range": {
    id: "crepe-paper-range",
    name: "Crepe Paper & Tubes",
    category: "Other Products",
    shortDescription: "Electrical crepe papers and insulation tubes",
    description: [
      "Electrical crepe papers include semi-conducting black crepe, aluminium foil crepe, and thermally upgraded crepe paper tubes.",
      "Used extensively in transformer winding insulation systems.",
    ],
    specifications: [
      { label: "Material", value: "Electrical grade cellulose" },
      { label: "Temperature Rating", value: "105°C – 120°C" },
    ],
    applications: ["Transformer winding insulation", "Electrical shielding"],
    benefits: ["Flexible insulation", "High dielectric strength"],
    relatedProducts: ["kraft-paper", "pressboard-3mm"],
  },

  "frp-products": {
    id: "frp-products",
    name: "FRP Rods, Tubes & Components",
    category: "Other Products",
    shortDescription: "FRP structural and insulation components",
    description: [
      "FRP rods, dog bones, tubes, corners, and threaded rods are used in electrical and mechanical structures.",
      "These products offer high strength-to-weight ratio and corrosion resistance.",
    ],
    specifications: [
      { label: "Material", value: "Fiberglass Reinforced Plastic" },
      { label: "Form", value: "Rods, Tubes, Corners, Threaded rods" },
    ],
    applications: ["Electrical supports", "Structural insulation"],
    benefits: ["Corrosion resistant", "High mechanical strength"],
    relatedProducts: ["fiberglass-tubes", "epoxy-rods"],
  },
};

export const allProducts: Record<string, Product> = {
  ...products,
  ...otherProducts,
};

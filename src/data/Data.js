import { Mountain, Factory, Truck, Leaf } from "lucide-react";

export const divisions = [
  {
    color: "#8B5E3C",
    key: "exploration",
    name: "Mineral Exploration",
    blurb:
      "Identifying and developing Africa’s mineral potential using advanced geological surveys and responsible exploration.",
    icon: Mountain,
    points: [
      "Geological surveys & mapping",
      "Stakeholder collaboration",
      "Responsible, safety-first fieldwork",
      "Early resource evaluation",
    ],
  },
  {
    color: "#6E6E6E",
    key: "processing",
    name: "Mineral Processing",
    blurb:
      "Value-add processing and beneficiation with efficiency and environmental stewardship at the core.",
    icon: Factory,
    points: [
      "Ore beneficiation & refining",
      "Gold, copper, manganese and more",
      "Tailings & water management",
      "Continuous process optimization",
    ],
  },
  {
    color: "#003366",
    key: "logistics",
    name: "Logistics & Transport",
    blurb:
      "Cross-border road & rail, warehousing and distribution—linking mine and farm to market across Southern Africa.",
    icon: Truck,
    points: [
      "Road & rail transport",
      "Cross-border compliance",
      "Warehousing & storage",
      "Fleet management & tracking",
    ],
  },
  {
    color: "#2E8B57",
    key: "agri",
    name: "Agri-Commodities & Trading",
    blurb:
      "Sourcing and trading grains and oilseeds; connecting farmers to markets and supporting food security.",
    icon: Leaf,
    points: [
      "Maize, soybeans, wheat, rice",
      "Producer networks & cooperatives",
      "Import/export facilitation",
      "Fair, transparent trade",
    ],
  },
];

export const sustainabilityItems = [
  {
    title: "Environmental Stewardship",
    text: "Low‑impact exploration, water & tailings management, emission reduction, and progressive land rehabilitation.",
  },
  {
    title: "Community Development",
    text: "Local employment, skills transfer, supplier inclusion, and investments in health, education and livelihoods.",
  },
  {
    title: "Governance & Ethics",
    text: "Transparent reporting, compliance with national regulations, and robust ESG oversight across operations.",
  },
];

export const jobs = [
  {
    title: "Graduate Mining Engineer",
    location: "Lusaka, Zambia",
    type: "Full-time",
    summary:
      "Support field exploration programs, data logging and safety processes. Recent graduates encouraged to apply.",
  },
  {
    title: "Logistics Coordinator",
    location: "Ndola, Zambia",
    type: "Full-time",
    summary:
      "Coordinate cross‑border transport, documentation and fleet schedules across SADC corridors.",
  },
];

export const navs = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  {
    label: "Divisions",
    href: "#divisions",
    children: divisions.map((d) => ({ label: d.name, href: `#${d.key}` })),
  },
  { label: "Sustainability", href: "#sustainability" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
];

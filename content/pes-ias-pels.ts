// ═════════════════════════════════════════════════════════════
//  IEEE Rwanda PES / IAS / PELS Joint Chapter — WEBSITE CONTENT
//  Everything visitors read on pes.ieeerwanda.org lives here.
//  Edit the text between the quotes "like this", save, done.
//  Lines marked  placeholder: true  are samples — replace them.
// ═════════════════════════════════════════════════════════════
import type { SiteContent } from "./types";
import { COMMON_RESOURCES, SUBSECTION_EVENTS } from "./shared";

const content: SiteContent = {
  id: "pes-ias-pels",
  shortName: "IEEE Rwanda PES/IAS/PELS",
  fullName: "IEEE Rwanda PES / IAS / PELS Joint Chapter",
  identifierLabel: "IEEE Rwanda Joint Chapter",

  headerTitle: ["IEEE PES/IAS/PELS", "Rwanda Joint Chapter"],

  description:
    "The IEEE Power & Energy, Industry Applications and Power Electronics Societies Joint Chapter in Rwanda — connecting engineers, students and industry around Rwanda's energy transition.",
  siteUrl: "https://pes.ieeerwanda.org",

  // Colours from the IEEE PES Identity Guidelines (primary IEEE Blue, secondary
  // PES green #78BE20, background grey #E6E7E8). Green is also the IAS colour.
  colors: { brand: "#00629B", accent: "#78BE20", surface: "#E6E7E8" },

  // The photo, headline and button at the top of the home page.
  hero: {
    image: "/pes-ias-pels/hero/kigali-sunset.jpg",
    alt: "Kigali city skyline at sunset",
    title: "Powering Rwanda's energy transition.",
    cta: { label: "Join IEEE", href: "https://www.ieee.org/membership/join/index.html" },
    credit: { name: "Jean Claude Akarikumutima / Unsplash", url: "https://unsplash.com/photos/b-HnOOPRfTI" },
    focus: "center 60%",
  },

  // Shown beside "About us" on the home page. Remove to show the text on its own.
  aboutPhoto: {
    image: "/pes-ias-pels/hero/solar-install.jpg",
    alt: "An installer fixing solar panels in place",
    credit: { name: "Markus Spiske / Unsplash", url: "https://unsplash.com/photos/rNn_TU8dvoY" },
  },

  about: {
    heading: "About the chapter",
    intro: [
      "The IEEE Rwanda PES/IAS/PELS Joint Chapter is the local home of three IEEE technical societies: the Power & Energy Society (PES), the Industry Applications Society (IAS) and the Power Electronics Society (PELS). It operates under the IEEE Rwanda Subsection in IEEE Region 8.",
      "Rwanda is expanding electricity access, integrating solar and storage, and electrifying transport. The chapter connects the people doing that work — at utilities, start-ups, manufacturers, regulators and universities — with each other and with IEEE's global technical community.",
    ],
    mission:
      "To advance knowledge and practice in power and energy systems, power electronics and industrial applications in Rwanda, and to grow the engineers who will deliver a reliable, clean and affordable energy system.",
    vision: "A Rwandan power and energy community that is technically excellent, well connected and globally visible.",
    goals: [
      "Share up-to-date technical knowledge in power & energy, power electronics and industrial applications.",
      "Build lasting links between industry, academia, government and students.",
      "Encourage research, innovation and ethical engineering practice.",
    ],
    objectives: [
      "Run regular technical talks, workshops and Distinguished Lecturer visits.",
      "Organise industry visits and student–industry engagement programmes.",
      "Offer mentorship for students and young professionals entering the energy sector.",
      "Partner with utilities, start-ups, regulators and development organisations.",
    ],
    parent: ["IEEE", "IEEE Region 8", "IEEE Rwanda Subsection", "PES · IAS · PELS"],
  },

  whatWeDo: [
    "Distinguished Lecturer programmes with global experts",
    "Technical talks, workshops and hands-on training",
    "Industry visits to power plants, utilities and manufacturers",
    "Mentorship, internships and career readiness for students",
    "Support for the student branch chapters at Rwandan universities",
  ],

  focus: {
    heading: "One chapter, three IEEE societies",
    intro: "Members of any of the three societies — and anyone curious about power and energy — are welcome at our events.",
    cards: [
      {
        tag: "PES",
        image: "/pes-ias-pels/pes-logo.png",
        title: "Power & Energy Society",
        description:
          "Generation, transmission, distribution, grid integration of renewables, energy storage, markets and policy.",
        href: "https://www.ieee-pes.org",
        linkLabel: "ieee-pes.org",
      },
      {
        tag: "IAS",
        image: "/pes-ias-pels/ias-logo.png",
        title: "Industry Applications Society",
        description:
          "Electrical systems in industry — motors and drives, industrial power systems, automation, safety and manufacturing.",
        href: "https://ias.ieee.org",
        linkLabel: "ias.ieee.org",
      },
      {
        tag: "PELS",
        image: "/pes-ias-pels/pels-logo.png",
        title: "Power Electronics Society",
        description:
          "Converters, inverters, chargers and battery systems — the electronics behind solar, storage and electric mobility.",
        href: "https://www.ieee-pels.org",
        linkLabel: "ieee-pels.org",
      },
    ],
  },

  bodies: {
    heading: "The global organisations behind our chapter",
    intro: "Joining IEEE gives you a global professional home; adding a society connects you to the specialists in your field. Our chapter brings all of them to Rwanda.",
    items: [
      {
        name: "IEEE",
        question: "What is IEEE?",
        description:
          "IEEE is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity, with more than 400,000 members in over 160 countries.",
        logo: "/brand/ieee-mb-black.png",
        join: { label: "Join IEEE", href: "https://www.ieee.org/membership/join/index.html" },
        home: "https://www.ieee.org",
      },
      {
        name: "IEEE PES",
        question: "What is IEEE PES?",
        description:
          "The IEEE Power & Energy Society is the leading provider of scientific and engineering information on electric power and energy for the betterment of society — 42,000+ members and 800+ local chapters worldwide.",
        logo: "/pes-ias-pels/pes-logo.png",
        join: { label: "Join IEEE PES", href: "https://www.ieee-pes.org/membership/" },
        home: "https://www.ieee-pes.org",
      },
      {
        name: "IEEE PELS",
        question: "What is IEEE PELS?",
        description:
          "The IEEE Power Electronics Society advances the theory and practice of power electronics — converters, drives, renewable-energy integration and high-efficiency power systems.",
        logo: "/pes-ias-pels/pels-logo.png",
        join: { label: "Join IEEE PELS", href: "https://www.ieee-pels.org/membership/" },
        home: "https://www.ieee-pels.org",
      },
      {
        name: "IEEE IAS",
        question: "What is IEEE IAS?",
        description:
          "The IEEE Industry Applications Society supports the application of electrical and electronic systems in industry — automation, drives, industrial power systems and safety. Its tagline: Linking Research to Practice.",
        logo: "/pes-ias-pels/ias-logo.png",
        join: { label: "Join IEEE IAS", href: "https://ias.ieee.org/member-development/membership/" },
        home: "https://ias.ieee.org",
      },
    ],
  },

  extraPage: {
    slug: "societies",
    title: "Our societies",
    intro:
      "A joint chapter lets three IEEE societies share one local community. Here is what each one covers and how to join it.",
    cards: [
      {
        tag: "PES",
        image: "/pes-ias-pels/pes-logo.png",
        title: "IEEE Power & Energy Society",
        description:
          "The leading global community for power and energy professionals. Members get the PES Resource Center, IEEE Power & Energy Magazine, discounted conference registration and access to PES technical committees.",
        href: "https://www.ieee-pes.org",
        linkLabel: "Visit PES",
      },
      {
        tag: "IAS",
        image: "/pes-ias-pels/ias-logo.png",
        title: "IEEE Industry Applications Society",
        description:
          "Focused on the application of electrical and electronic systems in industry. Members get IAS publications, technical conferences and a network of industry practitioners.",
        href: "https://ias.ieee.org",
        linkLabel: "Visit IAS",
      },
      {
        tag: "PELS",
        image: "/pes-ias-pels/pels-logo.png",
        title: "IEEE Power Electronics Society",
        description:
          "The home of power-electronics engineering — from device physics to converters and system integration. Members get PELS transactions, webinars and student design competitions.",
        href: "https://www.ieee-pels.org",
        linkLabel: "Visit PELS",
      },
    ],
  },

  officers: [
    { group: "Executive Committee", name: "Akabway Rurangwa", role: "Chair", affiliation: "SLS Energy Ltd" },
    { group: "Executive Committee", name: "Samantha Mugeni Niyoyita", role: "Vice Chair" },
    { group: "Executive Committee", name: "Kayesu Ritah", role: "Secretary" },
    { group: "Executive Committee", name: "Adonijah Ogara", role: "Treasurer" },
  ],

  events: [
    {
      title: "Sample: Technical talk on grid integration of solar + storage",
      date: "2026-11-20",
      time: "17:30–19:00",
      location: "CMU-Africa, Kigali Innovation City",
      type: "Technical Talk",
      summary: "Replace this sample with your next real event. Put the vTools registration link in registerUrl.",
      placeholder: true,
    },
    {
      title: "Tartan Connect 2026",
      date: "2026-06-19",
      location: "CMU-Africa, Kigali",
      type: "Industry Engagement",
      organiser: "IEEE CMU-Africa PES/IAS/PELS Student Branch Chapter",
      summary:
        "Run under the IEEE Region 8 Student Activities Committee's Bridging Students with Industry programme, with SLS Energy as industry partner, connecting students directly with practitioners in Rwanda's energy sector.",
    },
    ...SUBSECTION_EVENTS,
  ],

  getInvolved: {
    intro:
      "Anyone with an interest in power, energy, power electronics or industrial systems can take part. Joining IEEE and one of our societies gives you full member benefits.",
    eligibility:
      "Students, young professionals and experienced engineers are all welcome at chapter events, whether or not they are IEEE members.",
    steps: [
      { title: "Join IEEE", text: "Create an IEEE account and choose student or professional membership.", link: { label: "ieee.org/join", href: "https://www.ieee.org/membership/join/index.html" } },
      { title: "Add a society", text: "Add PES, IAS or PELS to your membership. IEEE student members can add PES essential membership for just US$1.", link: { label: "Browse societies", href: "https://www.ieee.org/membership/societies/index.html" } },
      { title: "Show up", text: "Register for our next event on vTools and introduce yourself to the committee.", link: { label: "Our events", href: "/events/" } },
    ],
    benefits: [
      "Distinguished Lecturer talks and technical workshops",
      "Industry visits and networking with Rwanda's energy companies",
      "Mentorship and leadership opportunities on the committee",
      "Society magazines, webinars and the PES Resource Center",
      "Discounts on IEEE conferences and student competitions",
    ],
    volunteerText:
      "We are always looking for volunteers to help run events, write event reports, manage social media and keep this website up to date.",
    // volunteerFormUrl: "https://forms.gle/...",
  },

  resources: [
    {
      category: "Society resources",
      items: [
        { title: "IEEE PES", description: "Power & Energy Society home page.", url: "https://www.ieee-pes.org" },
        { title: "PES Resource Center", description: "Tutorials, webinars and technical reports.", url: "https://resourcecenter.ieee-pes.org" },
        { title: "IEEE IAS", description: "Industry Applications Society home page.", url: "https://ias.ieee.org" },
        { title: "IEEE PELS", description: "Power Electronics Society home page.", url: "https://www.ieee-pels.org" },
      ],
    },
    COMMON_RESOURCES,
  ],

  partners: [
    { name: "IEEE Rwanda Subsection", url: "https://www.ieeerwanda.org" },
    { name: "Carnegie Mellon University Africa", url: "https://www.africa.engineering.cmu.edu" },
    { name: "SLS Energy" },
  ],

  contact: {
    email: "CHANGE-ME@ieee.org",
    address: "Kigali, Rwanda",
    // formUrl: "https://forms.gle/...",
  },

  social: {
    linkedin: "https://www.linkedin.com/showcase/ieee-pes-ias-pels-rwanda-joint-chapter/",
  },
};

export default content;

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
    image: "/pes-ias-pels/hero/energy-poster.jpg",
    alt: "A hydroelectric dam, the first scene of the energy video",
    // Short muted background video following energy from source to use:
    // generation (hydro dam, solar farm) -> transmission (high-voltage lines) ->
    // distribution (substations) -> end use (Kigali, an electric car being plugged in to charge).
    // Remove this line to show only the photo.
    video: "/pes-ias-pels/hero/rwanda-energy.mp4",
    videoCredits: [
      { name: "CityXcape", url: "https://www.pexels.com/video/drone-footage-of-power-plant-dam-6132733/" },
      { name: "Henrique Carmo", url: "https://www.pexels.com/video/expansive-aerial-view-of-solar-power-farm-30583775/" },
      { name: "Athuman Komora Garisse", url: "https://www.pexels.com/video/power-lines-on-transmission-towers-9813696/" },
      { name: "Thanh Văn", url: "https://www.pexels.com/video/aerial-view-on-power-station-10416553/" },
      { name: "Rw_Creative", url: "https://www.pexels.com/video/aerial-view-of-kigali-convention-center-35145690/" },
      { name: "Gustavo Fring / Pexels", url: "https://www.pexels.com/video/charging-an-electric-car-4817952/" },
    ],
    title: "Powering what's next.",
    cta: { label: "Join IEEE", href: "https://www.ieee.org/membership/join/index.html" },
    credit: { name: "CityXcape / Pexels", url: "https://www.pexels.com/video/drone-footage-of-power-plant-dam-6132733/" },
  },

  // Box under the home page video. Remove this block to hide it.
  announcement: {
    label: "Grant awarded",
    title: "EPICS in IEEE funds our solar-powered smart irrigation project in Bugesera",
    text: "Our project was one of 30 from 15 countries selected for EPICS in IEEE funding in 2026, supported by the IEEE Industry Applications Society. Solar power will pump water into an elevated tank, and gravity will carry it through drip lines to a fruit cooperative's farm in Rilima, Bugesera, with sensors deciding when each zone needs water.",
    link: { label: "See the project", href: "/projects/#bugesera-smart-irrigation" },
  },

  // Shown beside "About us" on the home page. Remove to show the text on its own.
  aboutPhoto: {
    image: "/pes-ias-pels/about-substation.jpg",
    alt: "High-voltage equipment in an electrical substation",
    credit: { name: "Pixabay / Pexels", url: "https://www.pexels.com/photo/gray-and-black-power-transmission-station-236089/" },
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

  // Community projects. These fill the "Projects" page.
  projects: [
    {
      id: "bugesera-smart-irrigation",
      title: "Adaptive Solar-Powered Smart Irrigation System for Smallholder Fruit Farmers in Bugesera, Rwanda",
      status: "EPICS in IEEE grant · Getting started",
      location: "Rilima, Bugesera District, Eastern Province, Rwanda",
      summary:
        "A solar-powered pump lifts water into an elevated tank, and gravity carries it through drip lines to the farm of the KOTMIR fruit cooperative. Soil sensors and a student-built controller decide when each part of the field needs water, using only the solar energy available.",
      problem: [
        "Bugesera is Rwanda's most drought-prone district, with about 835 mm of rain a year against a national average of about 1,200 mm. Smallholder fruit farmers there lose an estimated 30 to 40 percent of their produce each year.",
        "Members of the KOTMIR cooperative still water their mango, avocado and vegetable plots by hand with buckets, which takes 4 to 6 hours a day and leaves some areas overwatered and others dry. The cooperative already runs a solar cold store funded through IEEE IAS, but in dry spells there is not enough good produce to fill it.",
      ],
      diagram: "solar-gravity-irrigation",
      howItWorks: [
        {
          title: "Solar pumping",
          text: "Two 400 W solar panels with a charge controller and a lithium (LiFePO4) battery run a DC pump that lifts water from the cooperative's borehole.",
        },
        {
          title: "Elevated tank",
          text: "The pump fills a 2,000 litre tank raised 4 to 5 metres on a concrete platform. The height gives the water enough pressure to flow on its own, with no extra pumping energy.",
        },
        {
          title: "Gravity-fed drip lines",
          text: "Gravity carries water from the tank through low-pressure drip lines to 0.5 hectares of crops, split into six zones that can each be switched on and off with a valve.",
        },
        {
          title: "Smart control and data",
          text: "Soil moisture sensors feed a student-built ESP32 controller that waters a zone only when the soil is dry and there is enough solar energy. A LoRa radio sends daily data to the cold store about 2 km away.",
        },
      ],
      facts: [
        { label: "Crop area", value: "0.5 ha" },
        { label: "Solar power", value: "800 W" },
        { label: "Water tank", value: "2,000 L" },
        { label: "Drip zones", value: "6" },
        { label: "Cooperative", value: "36 members" },
        { label: "Duration", value: "12 months" },
      ],
      timeline: [
        { period: "Months 1–2", phase: "Design", text: "Site survey and borehole testing, system design, and planning meetings with cooperative members." },
        { period: "Months 3–4", phase: "Prototype", text: "Buy parts from local suppliers, then build and bench-test the sensors, controller and radio link in the CMU-Africa lab." },
        { period: "Months 5–7", phase: "Install", text: "Install the solar pump, tank platform, drip lines and sensors on the farm, and connect the data link to the cold store." },
        { period: "Months 8–10", phase: "Test and train", text: "Fine-tune the watering schedule with field data, run three farmer training workshops in Kinyarwanda, and hold an open demonstration day." },
        { period: "Months 11–12", phase: "Evaluate", text: "Measure results against the starting point, report to EPICS in IEEE, and publish the designs and code as open source." },
      ],
      impact: [
        "Target: use 30 to 40 percent less water for each unit of crop produced.",
        "Target: raise mango, avocado and vegetable yields by 15 to 25 percent.",
        "Free cooperative members, two thirds of whom are women, from hours of daily hand-watering.",
        "Keep the cold store fuller and reduce produce lost while waiting for storage.",
        "Share an open-source design that other cooperatives in Bugesera can copy.",
        "Give 12 students hands-on experience in solar power, embedded systems and community engineering.",
      ],
      partners: [
        { name: "KOTMIR Cooperative", role: "Fruit farming cooperative in Rilima. Provides the farm and borehole, helps with installation, and will own and maintain the system." },
        { name: "Africa Development Promise (ADP)", role: "Community partner. Links the team with KOTMIR, organises farmer training, and hosts the data receiver at the cold store." },
        { name: "IEEE CMU-Africa IAS/PELS/PES Joint Student Branch Chapter", role: "Student members design, build, install and test the system." },
        { name: "IEEE Rwanda Subsection", role: "Manages the grant funds and connects the project to IEEE volunteers in Rwanda." },
      ],
      funding: {
        text: "Funded by EPICS in IEEE (Engineering Projects in Community Service), with support from the IEEE Industry Applications Society. It is one of 30 service-learning projects from 15 countries approved in 2026.",
        links: [
          { label: "EPICS in IEEE", href: "https://epics.ieee.org" },
          { label: "IEEE Industry Applications Society", href: "https://ias.ieee.org" },
        ],
      },
      team: [
        { name: "Kayesu Ritah", role: "Project Lead" },
        { name: "Akabway Rurangwa", role: "Co-Lead" },
        { name: "Gabriel Mpuhwenzimana", role: "Technical Lead" },
        { name: "Kipngeno Koech", role: "Treasurer" },
        { name: "Mariamawit Arega", role: "Secretary" },
        { name: "Simenya Jonathan", role: "Media Coordinator" },
      ],
    },
  ],

  officers: [
    { group: "Executive Committee", name: "Akabway Rurangwa", role: "Chair", photo: "/pes-ias-pels/team/akabway-rurangwa.jpg" },
    { group: "Executive Committee", name: "Samantha Mugeni Niyoyita", role: "Vice Chair", photo: "/pes-ias-pels/team/samantha-mugeni.jpg" },
    { group: "Executive Committee", name: "Kayesu Ritah", role: "Secretary", photo: "/pes-ias-pels/team/kayesu-ritah.jpg" },
    { group: "Executive Committee", name: "Adonijah Ogara", role: "Treasurer", photo: "/pes-ias-pels/team/adonijah-ogara.jpg" },
  ],

  events: [
    {
      title: "Charging Ahead: Making Sense of Rwanda's EV Battery Interoperability Mandate",
      date: "2026-11-06",
      time: "16:00–17:30",
      location: "Digital Transformation Center Rwanda, Kigali",
      type: "Panel Discussion",
      organiser: "IEEE Rwanda Young Professionals, with the PES/IAS/PELS Joint Chapter and SIGHT Group",
      summary: "In June 2026, Rwanda became the first African country to require battery-swapping interoperability. Panellists from government, e-mobility, charging infrastructure and finance discuss what it means in practice and how investment can support the transition, followed by Q&A and networking. Open to students, engineers and professionals.",
      registerUrl: "https://lnkd.in/dfx5kXuR",
    },
    {
      title: "Rwanda Simulation Synergy",
      date: "2026-05-22",
      time: "09:00",
      location: "Carnegie Mellon University Africa, Kigali",
      type: "Industry Workshop",
      organiser: "IEEE CMU-Africa IAS/PELS/PES Joint Student Branch Chapter",
      summary: "An industry networking workshop on numerical simulation and smart electrical systems, held with Ansys and the IEEE Industry Applications Society. 43 participants from 12 nationalities explored how digital modelling and smart technologies solve real engineering problems, through technical talks, a panel, a student showcase and a live Ansys Discovery demo. For many it was their first time using professional simulation software, and 12 joined IEEE IAS as student members.",
    },
    {
      title: "Tartan Synergy: Securing the Grid",
      date: "2026-04-29",
      time: "14:00–17:00",
      location: "Muhazi Conference Hall, University of Rwanda",
      type: "STEP Workshop",
      organiser: "IEEE CMU-Africa and IEEE University of Rwanda Student Branches, with IEEE Young Professionals",
      summary: "A workshop on cybersecurity for energy infrastructure in Rwanda and the region. It opened with a keynote by Musabyimana Josee on grid cybersecurity, followed by a panel with Muyombano Happy Axel, Chisom Ogbogu and Jamiu Dahunsi, moderated by Mariamawit Arega. Kipngeno Koech closed with IEEE opportunities for students and the vision of the new IEEE Rwanda Subsection.",
    },
    {
      title: "Introduction to IEEE Industry Applications Society (IAS)",
      date: "2026-04-15",
      time: "16:00–17:00",
      location: "Online (Zoom)",
      type: "Webinar",
      organiser: "IEEE CMU-Africa IAS/PELS/PES Joint Student Branch Chapter",
      summary: "IEEE IAS Ambassador Akabway Rurangwa introduced the Industry Applications Society and how it links engineering theory to real-world practice. Students and young professionals learned about the benefits of IAS membership, its global network, and opportunities to get involved locally.",
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
    // email: "unit-name@ieee.org",   <- add the unit email here when you have one
    address: "Kigali, Rwanda",
    // formUrl: "https://forms.gle/...",
  },

  social: {
    linkedin: "https://www.linkedin.com/showcase/ieee-pes-ias-pels-rwanda-joint-chapter/",
  },
};

export default content;

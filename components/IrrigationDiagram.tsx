// Simple drawing of the Bugesera smart irrigation system:
// solar panels power a pump that lifts water into an elevated tank, gravity carries it
// through drip lines to six zones, and a sensor-driven controller decides when to water.
// The numbered markers match the "How it works" steps on the Projects page.

const BLUE = "#00629B";
const NAVY = "#002855";
const GREEN = "#78BE20";
const LEAF = "#3F8F1F";
const SUN = "#E87722";
const WATER = "#477CA7";
const LIGHT = "#E6EFF5";
const SOIL = "#C9A27C";

function Marker({ x, y, n }: { x: number; y: number; n: number }) {
  return (
    <g>
      <circle cx={x} cy={y} r={13} fill={NAVY} />
      <text x={x} y={y + 5} textAnchor="middle" fontSize="14" fontWeight="700" fill="#fff">{n}</text>
    </g>
  );
}

function Tree({ x }: { x: number }) {
  return (
    <g>
      <rect x={x - 2} y={286} width={4} height={22} fill="#7A5230" />
      <circle cx={x} cy={278} r={13} fill={LEAF} />
      <circle cx={x - 8} cy={285} r={8} fill={GREEN} />
    </g>
  );
}

export default function IrrigationDiagram() {
  const zones = [0, 1, 2, 3, 4, 5];
  return (
    <figure className="overflow-x-auto rounded border border-rule bg-white p-3 sm:p-5">
      <svg
        viewBox="0 0 960 400"
        className="h-auto w-full min-w-[640px]"
        role="img"
        aria-labelledby="irr-title irr-desc"
        fontFamily="'Open Sans', Calibri, sans-serif"
      >
        <title id="irr-title">How the solar-powered smart irrigation system works</title>
        <desc id="irr-desc">
          Solar panels power a pump that lifts water into a 2,000 litre tank raised 4 to 5 metres on a platform.
          Gravity then pushes the water through drip lines to six crop zones. Soil moisture sensors report to a
          smart controller, which opens each zone's valve only when the soil is dry and there is enough solar energy.
          A LoRa radio sends daily data to the cold storage facility about 2 km away.
        </desc>

        {/* sky and ground */}
        <rect x="0" y="0" width="960" height="320" fill={LIGHT} />
        <rect x="0" y="320" width="960" height="80" fill={SOIL} opacity="0.35" />
        <line x1="0" y1="320" x2="960" y2="320" stroke={SOIL} strokeWidth="3" />

        {/* sun */}
        <circle cx="62" cy="58" r="22" fill={SUN} />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
          <line
            key={a}
            x1={62 + Math.cos((a * Math.PI) / 180) * 30}
            y1={58 + Math.sin((a * Math.PI) / 180) * 30}
            x2={62 + Math.cos((a * Math.PI) / 180) * 40}
            y2={58 + Math.sin((a * Math.PI) / 180) * 40}
            stroke={SUN}
            strokeWidth="3"
            strokeLinecap="round"
          />
        ))}

        {/* solar panels on ground racking */}
        <line x1="95" y1="320" x2="95" y2="248" stroke="#555" strokeWidth="4" />
        <line x1="150" y1="320" x2="150" y2="228" stroke="#555" strokeWidth="4" />
        <polygon points="60,262 180,214 192,236 72,284" fill={NAVY} />
        <polygon points="64,262 120,240 126,252 70,274" fill={BLUE} opacity="0.7" />
        <polygon points="124,238 180,216 186,228 130,250" fill={BLUE} opacity="0.7" />
        <text x="122" y="345" textAnchor="middle" fontSize="15" fontWeight="700" fill={NAVY}>Solar panels</text>
        <text x="122" y="363" textAnchor="middle" fontSize="13" fill="#333">2 × 400 W + battery</text>

        {/* power cable to pump */}
        <path d="M150 300 C 190 300, 200 300, 232 300" fill="none" stroke={SUN} strokeWidth="3" strokeDasharray="7 5" />

        {/* borehole and pump */}
        <rect x="246" y="320" width="20" height="70" fill={WATER} opacity="0.5" />
        <rect x="242" y="320" width="28" height="80" fill="none" stroke="#7A5230" strokeWidth="2" />
        <rect x="232" y="284" width="48" height="32" rx="4" fill={BLUE} />
        <text x="256" y="305" textAnchor="middle" fontSize="12" fontWeight="700" fill="#fff">PUMP</text>
        <text x="300" y="383" fontSize="13" fill="#333">Borehole</text>

        {/* rising pipe to tank */}
        <path d="M256 284 L256 96 L340 96" fill="none" stroke={WATER} strokeWidth="6" />
        <path d="M256 230 l-7 12 h14 z M256 160 l-7 12 h14 z" fill={NAVY} />

        {/* elevated tank on platform */}
        <rect x="340" y="62" width="110" height="78" rx="10" fill="#fff" stroke={NAVY} strokeWidth="3" />
        <rect x="343" y="92" width="104" height="45" rx="6" fill={WATER} opacity="0.75" />
        <line x1="352" y1="140" x2="352" y2="320" stroke="#666" strokeWidth="5" />
        <line x1="438" y1="140" x2="438" y2="320" stroke="#666" strokeWidth="5" />
        <line x1="352" y1="190" x2="438" y2="250" stroke="#999" strokeWidth="2" />
        <line x1="438" y1="190" x2="352" y2="250" stroke="#999" strokeWidth="2" />
        <text x="395" y="40" textAnchor="middle" fontSize="15" fontWeight="700" fill={NAVY}>Elevated tank</text>
        <text x="395" y="57" textAnchor="middle" fontSize="13" fill="#333">2,000 litres</text>
        {/* height arrow */}
        <line x1="322" y1="142" x2="322" y2="318" stroke={NAVY} strokeWidth="1.5" />
        <path d="M322 142 l-5 9 h10 z M322 318 l-5 -9 h10 z" fill={NAVY} />
        <text x="314" y="236" textAnchor="end" fontSize="13" fontWeight="700" fill={NAVY}>4–5 m</text>

        {/* gravity line down to field */}
        <path d="M450 128 L478 128 L478 312 L930 312" fill="none" stroke={WATER} strokeWidth="5" />
        <text x="488" y="200" fontSize="13" fontWeight="700" fill={BLUE}>Gravity flow</text>
        <path d="M478 185 l-7 -12 h14 z M478 265 l-7 -12 h14 z" fill={NAVY} />

        {/* six drip zones with valves and trees */}
        {zones.map((z) => {
          const x = 530 + z * 68;
          return (
            <g key={z}>
              <rect x={x - 6} y={305} width={12} height={14} fill={GREEN} stroke={NAVY} strokeWidth="1.5" />
              <Tree x={x + 22} />
              {/* drip drops */}
              <circle cx={x + 22} cy={326} r={2.5} fill={WATER} />
              <circle cx={x + 30} cy={331} r={2} fill={WATER} />
              {/* soil sensor */}
              <line x1={x + 40} y1={318} x2={x + 40} y2={340} stroke={NAVY} strokeWidth="3" />
              <circle cx={x + 40} cy={316} r={3.5} fill={SUN} />
            </g>
          );
        })}
        <text x="720" y="370" textAnchor="middle" fontSize="15" fontWeight="700" fill={NAVY}>Drip irrigation · 6 zones · 0.5 ha</text>
        <text x="720" y="388" textAnchor="middle" fontSize="13" fill="#333">mango, avocado and vegetables</text>

        {/* controller */}
        <rect x="610" y="150" width="170" height="62" rx="8" fill={NAVY} />
        <text x="695" y="176" textAnchor="middle" fontSize="14" fontWeight="700" fill="#fff">Smart controller</text>
        <text x="695" y="196" textAnchor="middle" fontSize="12" fill="#fff">ESP32 · sensors · valves</text>
        <path d="M695 212 L695 255 M600 255 L880 255" fill="none" stroke={SUN} strokeWidth="2" strokeDasharray="5 4" />
        {zones.map((z) => (
          <line key={z} x1={570 + z * 68} y1={255} x2={570 + z * 68} y2={308} stroke={SUN} strokeWidth="1.5" strokeDasharray="4 4" />
        ))}

        {/* LoRa link to cold storage */}
        <line x1="780" y1="165" x2="800" y2="150" stroke={NAVY} strokeWidth="2" />
        <line x1="800" y1="150" x2="800" y2="128" stroke={NAVY} strokeWidth="2" />
        <path d="M810 120 a12 12 0 0 1 0 16 M818 112 a22 22 0 0 1 0 32" fill="none" stroke={BLUE} strokeWidth="2" />
        <rect x="836" y="62" width="112" height="56" rx="6" fill="#fff" stroke={BLUE} strokeWidth="2" />
        <text x="892" y="85" textAnchor="middle" fontSize="13" fontWeight="700" fill={NAVY}>Cold storage</text>
        <text x="892" y="103" textAnchor="middle" fontSize="12" fill="#333">LoRa data · ~2 km</text>

        {/* step markers */}
        <Marker x={40} y={230} n={1} />
        <Marker x={395} y={160} n={2} />
        <Marker x={510} y={290} n={3} />
        <Marker x={592} y={150} n={4} />
      </svg>
      <figcaption className="mt-3 text-sm text-muted">
        Simplified drawing of the system. Numbers match the steps below.
        <span className="sm:hidden"> Swipe sideways to see the whole drawing.</span>
      </figcaption>
    </figure>
  );
}

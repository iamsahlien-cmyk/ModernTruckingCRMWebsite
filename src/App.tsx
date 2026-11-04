import { useMemo, useState } from "react"

type IconName = "activity" | "arrow" | "bell" | "building" | "calendar" | "chart" | "check" | "chevron" | "clock" | "download" | "filter" | "home" | "import" | "menu" | "more" | "pipeline" | "plus" | "search" | "settings" | "tasks" | "truck" | "users" | "x"

function Icon({ name, size = 20 }: { name: IconName size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    activity: (
      <>
        <path d="M3 12h4l2.5-6 4.5 12 2.5-6H21" />
      </>
    ),
    arrow: (
      <>
        <path d="M5 12h14M13 6l6 6-6 6" />
      </>
    ),
    bell: (
      <>
        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" />
      </>
    ),
    building: (
      <>
        <path d="M4 21V5l8-3 8 3v16M8 9h2m4 0h2M8 13h2m4 0h2M8 17h2m4 0h2M2 21h20" />
      </>
    ),
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M3 10h18" />
      </>
    ),
    chart: (
      <>
        <path d="M4 19V9m6 10V5m6 14v-7m6 7H2" />
      </>
    ),
    check: (
      <>
        <path d="m5 12 4 4L19 6" />
      </>
    ),
    chevron: (
      <>
        <path d="m9 18 6-6-6-6" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    download: (
      <>
        <path d="M12 3v12m-5-5 5 5 5-5M4 21h16" />
      </>
    ),
    filter: (
      <>
        <path d="M4 6h16M7 12h10m-7 6h4" />
      </>
    ),
    home: (
      <>
        <path d="m3 11 9-8 9 8v10h-6v-6H9v6H3z" />
      </>
    ),
    import: (
      <>
        <path d="M12 21V9m-5 5 5-5 5 5M5 3h14" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    ),
    more: (
      <>
        <circle cx="5" cy="12" r="1" fill="currentColor" stroke="none" />
        <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
        <circle cx="19" cy="12" r="1" fill="currentColor" stroke="none" />
      </>
    ),
    pipeline: (
      <>
        <path d="M4 5h16M7 5v7m10-7v4m-5-4v14M4 12h6M14 9h6M4 19h16" />
      </>
    ),
    plus: (
      <>
        <path d="M12 5v14M5 12h14" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </>
    ),
    settings: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1a1.7 1.7 0 0 0 1.9.3A1.7 1.7 0 0 0 10 3v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z" />
      </>
    ),
    tasks: (
      <>
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="m8 9 1.5 1.5L12 8m2 2h3M8 15h9" />
      </>
    ),
    truck: (
      <>
        <path d="M3 6h11v10H3zM14 10h4l3 3v3h-7z" />
        <circle cx="7" cy="18" r="2" />
        <circle cx="18" cy="18" r="2" />
      </>
    ),
    users: (
      <>
        <circle cx="9" cy="8" r="4" />
        <path d="M2 21a7 7 0 0 1 14 0M16 4a4 4 0 0 1 0 8m2 3a6 6 0 0 1 4 6" />
      </>
    ),
    x: (
      <>
        <path d="m6 6 12 12M18 6 6 18" />
      </>
    ),
  }
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

function Brand({ light = false }: { light?: boolean }) {
  return (
    <div className={`brand ${light ? "brand-light" : ""}`}>
      <div className="brand-mark">
        <Icon name="truck" size={24} />
      </div>
      <div>
        <strong>CLIENT COMMAND</strong>
        <span>HD</span>
      </div>
    </div>
  )
}

const accounts = [
  {
    company: "Cobalt Steelworks",
    initials: "CS",
    location: "Pittsburgh, PA",
    contact: "Maria Ortiz",
    stage: "Interested",
    tone: "orange",
    touch: "2h ago",
    next: "Call today, 2:30 PM",
    owner: "BM",
    industry: "Manufacturing",
  },
  {
    company: "Northstar Equipment",
    initials: "NE",
    location: "Columbus, OH",
    contact: "James Wu",
    stage: "Meeting Scheduled",
    tone: "purple",
    touch: "Yesterday",
    next: "Demo · Nov 5",
    owner: "AG",
    industry: "Heavy Equipment",
  },
  {
    company: "Forge & Field Supply",
    initials: "FF",
    location: "Lexington, KY",
    contact: "Tara Brooks",
    stage: "Qualified",
    tone: "blue",
    touch: "2 days ago",
    next: "Send rate sheet",
    owner: "BM",
    industry: "Agriculture",
  },
  {
    company: "Redline Industrial",
    initials: "RI",
    location: "Detroit, MI",
    contact: "Daniel Reed",
    stage: "Contact Attempted",
    tone: "gray",
    touch: "4 days ago",
    next: "Follow up · Nov 7",
    owner: "AG",
    industry: "Automotive",
  },
  {
    company: "Atlas Construction Co.",
    initials: "AC",
    location: "Nashville, TN",
    contact: "Nicole Grant",
    stage: "Registered",
    tone: "green",
    touch: "1 week ago",
    next: "First load check-in",
    owner: "BM",
    industry: "Construction",
  },
  {
    company: "Summit Cold Chain",
    initials: "SC",
    location: "Indianapolis, IN",
    contact: "Sam Carter",
    stage: "New Lead",
    tone: "navy",
    touch: "Never",
    next: "Make first contact",
    owner: "AG",
    industry: "Food & Beverage",
  },
]

const initialTasks = [
  {
    id: 1,
    title: "Follow up on steel lane pricing",
    company: "Cobalt Steelworks",
    time: "10:30 AM",
    priority: "High",
    assignee: "BM",
    overdue: true,
  },
  {
    id: 2,
    title: "Prepare platform demo",
    company: "Northstar Equipment",
    time: "1:00 PM",
    priority: "High",
    assignee: "AG",
    overdue: false,
  },
  {
    id: 3,
    title: "Send onboarding documents",
    company: "Atlas Construction Co.",
    time: "3:30 PM",
    priority: "Medium",
    assignee: "BM",
    overdue: false,
  },
  {
    id: 4,
    title: "Confirm shipping volume",
    company: "Forge & Field Supply",
    time: "Tomorrow",
    priority: "Medium",
    assignee: "AG",
    overdue: false,
  },
]

const stages = [
  {
    name: "New Lead",
    color: "#586783",
    kind: "active",
    cards: [
      accounts[5],
      { ...accounts[3], company: "Blue Ridge Materials", initials: "BR" },
    ],
  },
  {
    name: "Contact Attempted",
    color: "#3c82f6",
    kind: "active",
    cards: [
      accounts[3],
      {
        ...accounts[0],
        company: "Midwest Crane Group",
        initials: "MC",
        stage: "Contact Attempted",
      },
    ],
  },
  {
    name: "Contact Established",
    color: "#2776d8",
    kind: "active",
    cards: [
      {
        ...accounts[1],
        company: "Keystone Fleet Parts",
        initials: "KF",
        contact: "Robert Hayes",
        next: "Send overview · Today",
        stage: "Contact Established",
      },
    ],
  },
  {
    name: "Interested",
    color: "#ff6b35",
    kind: "active",
    cards: [
      accounts[0],
      {
        ...accounts[2],
        company: "Titan Packaging",
        initials: "TP",
        stage: "Interested",
      },
    ],
  },
  {
    name: "Meeting Scheduled",
    color: "#e95f2d",
    kind: "active",
    cards: [accounts[1]],
  },
  {
    name: "Qualified",
    color: "#8b5cf6",
    kind: "active",
    cards: [accounts[2]],
  },
  {
    name: "Registered",
    color: "#17a673",
    kind: "active",
    cards: [accounts[4]],
  },
  {
    name: "First Load Posted",
    color: "#0c9670",
    kind: "active",
    cards: [
      {
        ...accounts[4],
        company: "Cumberland Aggregates",
        initials: "CA",
        contact: "Marcus Lee",
        next: "Monitor pickup · Nov 6",
        stage: "First Load Posted",
      },
    ],
  },
  {
    name: "Active Customer",
    color: "#087457",
    kind: "active",
    cards: [
      {
        ...accounts[5],
        company: "Tri-State Components",
        initials: "TC",
        contact: "Erin Wallace",
        next: "Quarterly review · Nov 12",
        stage: "Active Customer",
        tone: "green",
      },
    ],
  },
  {
    name: "Nurture",
    color: "#d39b28",
    kind: "outcome",
    cards: [
      {
        ...accounts[2],
        company: "Horizon Farm Supply",
        initials: "HF",
        next: "Reconnect · Jan 15",
        stage: "Nurture",
      },
    ],
  },
  {
    name: "Not Interested",
    color: "#b66b5e",
    kind: "outcome",
    cards: [
      {
        ...accounts[3],
        company: "Metro Tool & Die",
        initials: "MT",
        next: "No next action",
        stage: "Not Interested",
      },
    ],
  },
  {
    name: "Disqualified",
    color: "#8b6471",
    kind: "outcome",
    cards: [
      {
        ...accounts[0],
        company: "Eastern Retail Group",
        initials: "ER",
        next: "Reason · Outside ICP",
        stage: "Disqualified",
      },
    ],
  },
]

const navItems: { id: string label: string icon: IconName }[] = [
  { id: "dashboard", label: "Dashboard", icon: "home" },
  { id: "marketplace", label: "Lead Marketplace", icon: "truck" },
  { id: "accounts", label: "Accounts", icon: "building" },
  { id: "pipeline", label: "Pipeline", icon: "pipeline" },
  { id: "tasks", label: "Tasks", icon: "tasks" },
  { id: "reports", label: "Reports", icon: "chart" },
]

function CrushCompetitionGraphic() {
  return (
    <div className="crush-graphic" aria-label="Animated industrial CRM crusher">
      <svg viewBox="0 0 760 680" role="img">
        <title>
          Client Command HD crushing the competition while business growth rises
        </title>
        <defs>
          <linearGradient id="steel" x1="0" x2="1">
            <stop offset="0" stopColor="#23365c" />
            <stop offset=".5" stopColor="#40547b" />
            <stop offset="1" stopColor="#17294d" />
          </linearGradient>
          <linearGradient id="orangeSteel" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ff8a5f" />
            <stop offset="1" stopColor="#ef4f19" />
          </linearGradient>
          <pattern
            id="grid"
            width="38"
            height="38"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M38 0H0V38"
              fill="none"
              stroke="#8392b2"
              strokeOpacity=".1"
            />
          </pattern>
        </defs>

        <rect width="760" height="680" fill="#091633" />
        <rect width="760" height="680" fill="url(#grid)" />
        <path
          d="M0 560 185 470l150 52 200-160 225 90v228H0Z"
          fill="#0d1e41"
          opacity=".8"
        />

        <g className="growth-system">
          <text x="536" y="95" className="graphic-kicker">
            BUSINESS GROWTH
          </text>
          {[95, 145, 205, 278].map((height, index) => (
            <rect
              className={`growth-bar growth-bar-${index + 1}`}
              key={height}
              x={520 + index * 48}
              y={485 - height}
              width="29"
              height={height}
              rx="3"
              fill={index === 3 ? "#ff6b35" : "#31476e"}
            />
          ))}
          <path
            className="growth-line"
            d="M525 417 568 375 615 336 663 265"
            fill="none"
            stroke="#ff6b35"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m650 270 18-14-1 23"
            fill="none"
            stroke="#ff6b35"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        <g className="crusher-frame">
          <rect
            x="72"
            y="82"
            width="36"
            height="472"
            rx="5"
            fill="url(#steel)"
          />
          <rect
            x="414"
            y="82"
            width="36"
            height="472"
            rx="5"
            fill="url(#steel)"
          />
          <rect
            x="55"
            y="64"
            width="412"
            height="54"
            rx="7"
            fill="url(#steel)"
          />
          <path d="M55 95h412" stroke="#7180a0" strokeWidth="3" opacity=".45" />
          <circle cx="86" cy="91" r="8" fill="#ff6b35" />
          <circle cx="435" cy="91" r="8" fill="#ff6b35" />
          <rect x="45" y="535" width="432" height="44" rx="6" fill="#1b2c51" />
          <path
            d="M75 535 45 579M447 535l30 44"
            stroke="#627293"
            strokeWidth="5"
          />
        </g>

        <g className="crusher-press">
          <rect x="235" y="103" width="50" height="135" fill="#31466e" />
          <rect
            x="202"
            y="205"
            width="116"
            height="55"
            rx="5"
            fill="url(#orangeSteel)"
          />
          <rect x="130" y="248" width="260" height="45" rx="4" fill="#ff6b35" />
          <path
            d="M145 271h230"
            stroke="#ffb397"
            strokeWidth="3"
            opacity=".7"
          />
          <text x="260" y="278" textAnchor="middle" className="press-label">
            CLIENT COMMAND HD
          </text>
        </g>

        <g className="competition-target">
          <path
            d="M190 400c0-48 30-84 70-84s70 36 70 84c0 27-12 43-30 54v45h-24v-28h-32v28h-24v-45c-18-11-30-27-30-54Z"
            fill="#d7deeb"
            stroke="#fff"
            strokeWidth="5"
          />
          <circle cx="230" cy="395" r="13" fill="#091633" />
          <circle cx="290" cy="395" r="13" fill="#091633" />
          <path d="m252 424 8-11 8 11Z" fill="#091633" />
          <path
            d="M228 451h64"
            stroke="#091633"
            strokeWidth="7"
            strokeDasharray="10 7"
          />
          <path
            d="m252 326 13 31-17 26 18 31-11 39"
            fill="none"
            stroke="#ff6b35"
            strokeWidth="6"
          />
          <text
            x="260"
            y="526"
            textAnchor="middle"
            className="competition-label"
          >
            THE COMPETITION
          </text>
        </g>

        <g
          className="crush-sparks"
          stroke="#ff9b77"
          strokeWidth="5"
          strokeLinecap="round"
        >
          <path d="m132 436-35-12" />
          <path d="m143 463-40 13" />
          <path d="m379 435 35-14" />
          <path d="m375 466 42 13" />
        </g>

        <g className="graphic-status">
          <rect
            x="72"
            y="607"
            width="378"
            height="42"
            rx="21"
            fill="#12264b"
            stroke="#2c4269"
          />
          <circle cx="96" cy="628" r="7" fill="#29cf96" />
          <text x="115" y="633" className="status-label">
            CRM LOADED • LEADS TARGETED • MARKET READY
          </text>
        </g>
      </svg>
      <div className="crusher-callout">
        <span>COMPETITIVE PRESSURE</span>
        <strong>MAXIMUM</strong>
      </div>
    </div>
  )
}

function Landing({ enterApp }: { enterApp: () => void }) {
  const [menu, setMenu] = useState(false)
  const [selectedLeads, setSelectedLeads] = useState<number[]>([1, 3])
  const [leadsPurchased, setLeadsPurchased] = useState(false)
  const demoLeads = [
    {
      id: 1,
      company: "Titan Equipment Group",
      industry: "Heavy Equipment",
      location: "Nashville, TN",
      signal: "Expanding fleet",
      price: 18,
      score: 98,
    },
    {
      id: 2,
      company: "Apex Fleet Service",
      industry: "Fleet Maintenance",
      location: "Louisville, KY",
      signal: "Opened new location",
      price: 14,
      score: 94,
    },
    {
      id: 3,
      company: "Ironclad Site Works",
      industry: "Construction",
      location: "Columbus, OH",
      signal: "Awarded new contracts",
      price: 16,
      score: 91,
    },
    {
      id: 4,
      company: "Redline Logistics",
      industry: "Trucking",
      location: "Indianapolis, IN",
      signal: "Hiring 15 drivers",
      price: 12,
      score: 88,
    },
  ]
  return (
    <div className="landing">
      <header className="site-header">
        <Brand light />
        <nav className={menu ? "landing-nav open" : "landing-nav"}>
          <a href="#platform" onClick={() => setMenu(false)}>
            Platform
          </a>
          <a href="#lead-store" onClick={() => setMenu(false)}>
            Buy leads
          </a>
          <a href="#plans" onClick={() => setMenu(false)}>
            Lead plans
          </a>
          <a href="#workflow" onClick={() => setMenu(false)}>
            Workflow
          </a>
          <a href="#security" onClick={() => setMenu(false)}>
            Security
          </a>
          <button className="link-button" onClick={enterApp}>
            Sign in
          </button>
          <button className="button orange small" onClick={enterApp}>
            Open CRM <Icon name="arrow" size={17} />
          </button>
        </nav>
        <button
          className="mobile-menu"
          onClick={() => setMenu(!menu)}
          aria-label="Toggle menu"
        >
          <Icon name={menu ? "x" : "menu"} />
        </button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">
                <span></span> THE HEAVY-DUTY BUSINESS GROWTH MACHINE
              </div>
              <h1>
                Crush the competition.
                <br />
                <em>Build the business.</em>
              </h1>
              <p>
                Stop chasing weak lists. Start with a CRM preloaded for your
                market, click the exact leads you want, and run every deal
                through one relentless sales machine.
              </p>
              <div className="hero-actions">
                <a className="button orange" href="#lead-store">
                  Start crushing your market <Icon name="arrow" />
                </a>
                <a className="text-link" href="#platform">
                  See the growth machine <Icon name="chevron" size={16} />
                </a>
              </div>
              <div className="hero-proof">
                <div>
                  <strong>8,215+</strong>
                  <span>Targets ready to pursue</span>
                </div>
                <div>
                  <strong>360°</strong>
                  <span>Command of every deal</span>
                </div>
                <div>
                  <strong>&lt; 10 sec</strong>
                  <span>To make the next move</span>
                </div>
              </div>
            </div>
            <div className="hero-visual">
              <CrushCompetitionGraphic />
              <div className="road-lines"></div>
            </div>
          </div>
          <div className="scroll-note">
            SCROLL TO EXPLORE <span></span>
          </div>
        </section>

        <section className="platform-section" id="platform">
          <div className="section-heading">
            <div>
              <div className="eyebrow dark">
                <span></span> ONE PLATFORM. TOTAL MARKET CONTROL.
              </div>
              <h2>
                Everything you need to
                <br />
                outwork and outperform.
              </h2>
            </div>
            <p>
              Buy the right leads, attack the right opportunities, and keep
              every next move visible. No weak spreadsheets. No wasted motion.
            </p>
          </div>
          <div className="feature-grid">
            {[
              [
                "truck",
                "Fresh leads for your industry",
                "Choose heavy-duty industries and service areas, then unlock verified prospects that fit your business.",
                "LEAD MARKETPLACE",
              ],
              [
                "pipeline",
                "A pipeline built to move",
                "See every opportunity at a glance. Drag, drop, and keep deals rolling toward the first load.",
                "VISUAL PIPELINE",
              ],
              [
                "tasks",
                "Never miss the next move",
                "Today, overdue, and upcoming follow-ups in one focused view. Complete and create the next step in a tap.",
                "SMART FOLLOW-UPS",
              ],
              [
                "chart",
                "Numbers that drive action",
                "Know what is working, who needs attention, and where your next active shipper is coming from.",
                "LIVE REPORTING",
              ],
            ].map(([icon, title, text, tag], i) => (
              <article className={`feature-card feature-${i + 1}`} key={title}>
                <div className="feature-number">0{i + 1}</div>
                <div className="feature-icon">
                  <Icon name={icon as IconName} size={25} />
                </div>
                <span className="feature-tag">{tag}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <button onClick={enterApp}>
                  See it in action <Icon name="arrow" size={17} />
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="lead-store-section" id="lead-store">
          <div className="lead-store-copy">
            <div className="eyebrow">
              <span></span> YOUR CRM. PRELOADED FOR BATTLE.
            </div>
            <h2>
              Click the leads.
              <br />
              <em>Own the opportunity.</em>
            </h2>
            <p>
              Open Client Command HD and your market is already waiting. Review
              the fit, buying signal, and location. Select only the leads worth
              attacking. One click loads every purchased contact directly into
              your sales pipeline.
            </p>
            <div className="store-steps">
              {[
                [
                  "01",
                  "Choose your industry",
                  "Start with the market you know.",
                ],
                ["02", "Select exact leads", "Buy the targets that fit."],
                ["03", "Run the playbook", "The CRM handles every next move."],
              ].map(([number, title, detail]) => (
                <div key={number}>
                  <i>{number}</i>
                  <span>
                    <strong>{title}</strong>
                    <small>{detail}</small>
                  </span>
                </div>
              ))}
            </div>
            <button className="button orange" onClick={enterApp}>
              Enter the lead marketplace <Icon name="arrow" />
            </button>
          </div>

          <div className="lead-store-demo">
            <header>
              <div>
                <span>PRELOADED CRM</span>
                <h3>Targets in your market</h3>
              </div>
              <div className="store-live">
                <i></i>
                LIVE INVENTORY
              </div>
            </header>
            <div className="store-filter-row">
              <button>
                <Icon name="building" size={15} /> All industries
              </button>
              <button>
                <Icon name="filter" size={15} /> Within 250 miles
              </button>
              <span>{demoLeads.length} top matches</span>
            </div>
            <div className="store-leads">
              {demoLeads.map((lead) => {
                const selected = selectedLeads.includes(lead.id)
                return (
                  <button
                    className={selected ? "selected" : ""}
                    key={lead.id}
                    onClick={() => {
                      setLeadsPurchased(false)
                      setSelectedLeads(
                        selected
                          ? selectedLeads.filter((id) => id !== lead.id)
                          : [...selectedLeads, lead.id],
                      )
                    }}
                  >
                    <span className="store-check">
                      {selected && <Icon name="check" size={15} />}
                    </span>
                    <span className="store-score">
                      <strong>{lead.score}</strong>
                      <small>MATCH</small>
                    </span>
                    <span className="store-company">
                      <small>{lead.industry}</small>
                      <strong>{lead.company}</strong>
                      <i>{lead.location}</i>
                    </span>
                    <span className="store-signal">
                      <small>BUYING SIGNAL</small>
                      <strong>
                        <i></i>
                        {lead.signal}
                      </strong>
                    </span>
                    <b>${lead.price}</b>
                  </button>
                )
              })}
            </div>
            <footer className={leadsPurchased ? "purchased" : ""}>
              {leadsPurchased ? (
                <div className="purchase-success">
                  <span>
                    <Icon name="check" size={20} />
                  </span>
                  <div>
                    <strong>Targets loaded into your CRM</strong>
                    <small>Your competitive attack plan is ready.</small>
                  </div>
                </div>
              ) : (
                <>
                  <div>
                    <span>{selectedLeads.length} leads selected</span>
                    <strong>
                      $
                      {demoLeads
                        .filter((lead) => selectedLeads.includes(lead.id))
                        .reduce((total, lead) => total + lead.price, 0)}
                    </strong>
                  </div>
                  <button
                    disabled={!selectedLeads.length}
                    onClick={() => setLeadsPurchased(true)}
                  >
                    Purchase selected leads <Icon name="arrow" size={17} />
                  </button>
                </>
              )}
            </footer>
          </div>
        </section>

        <section className="plans-section" id="plans">
          <div className="plans-heading">
            <div className="eyebrow dark">
              <span></span> FUEL FOR MARKET DOMINATION
            </div>
            <h2>
              Choose your arsenal.
              <br />
              Build your territory.
            </h2>
            <p>
              Lock in the industries and territories you want to own. Fresh
              verified leads keep your pipeline loaded every month.
            </p>
          </div>
          <div className="landing-plans">
            {[
              ["Starter", "25", "$149", "For focused local growth"],
              ["Growth", "75", "$349", "Best for growing sales teams"],
              ["Command", "200", "$749", "For multi-market coverage"],
            ].map(([name, leads, price, detail], index) => (
              <article className={index === 1 ? "featured" : ""} key={name}>
                {index === 1 && <b>MOST POPULAR</b>}
                <span>{name}</span>
                <h3>
                  {price}
                  <small>/month</small>
                </h3>
                <p>{detail}</p>
                <strong>{leads} verified leads / month</strong>
                <ul>
                  <li>
                    <Icon name="check" size={15} /> Choose your industries
                  </li>
                  <li>
                    <Icon name="check" size={15} /> Filter by state & radius
                  </li>
                  <li>
                    <Icon name="check" size={15} /> Direct contact details
                  </li>
                  <li>
                    <Icon name="check" size={15} /> CRM included
                  </li>
                </ul>
                <button
                  className={`button ${index === 1 ? "orange" : "outline"}`}
                  onClick={enterApp}
                >
                  View available leads <Icon name="arrow" size={17} />
                </button>
              </article>
            ))}
          </div>
          <div className="industry-strip">
            <span>BUILT FOR</span>
            {[
              "Heavy Equipment",
              "Trucking",
              "Construction",
              "Agriculture",
              "Industrial",
              "Fleet Service",
            ].map((item) => (
              <i key={item}>{item}</i>
            ))}
          </div>
        </section>

        <section className="preview-section" id="workflow">
          <div className="preview-copy">
            <div className="eyebrow">
              <span></span> YOUR SALES ATTACK PLAN, ALREADY PRIORITIZED
            </div>
            <h2>
              Open it. Attack
              <br />
              what comes next.
            </h2>
            <p>
              No hunting through weak spreadsheets or guessing who to call. Your
              dashboard puts the highest-value moves up front.
            </p>
            <ul>
              <li>
                <span>
                  <Icon name="check" size={16} />
                </span>
                Follow-ups ranked by urgency
              </li>
              <li>
                <span>
                  <Icon name="check" size={16} />
                </span>
                Untouched leads surfaced automatically
              </li>
              <li>
                <span>
                  <Icon name="check" size={16} />
                </span>
                Pipeline health at a glance
              </li>
            </ul>
            <button className="button orange" onClick={enterApp}>
              Explore the dashboard <Icon name="arrow" />
            </button>
          </div>
          <div className="app-mock">
            <div className="mock-top">
              <div className="mock-dots">
                <i></i>
                <i></i>
                <i></i>
              </div>
              <span>app.clientcommandhd.com</span>
            </div>
            <div className="mock-body">
              <div className="mock-side">
                <div className="mock-logo">M</div>
                {[1, 2, 3, 4, 5].map((x) => (
                  <i className={x === 1 ? "active" : ""} key={x}></i>
                ))}
              </div>
              <div className="mock-content">
                <div className="mock-welcome">
                  <div>
                    <small>MONDAY, NOVEMBER 2</small>
                    <h3>Good morning, Bret.</h3>
                    <p>Here’s where your attention is needed today.</p>
                  </div>
                  <button>+ Add activity</button>
                </div>
                <div className="mock-stats">
                  {[
                    "12|DUE TODAY",
                    "4|OVERDUE",
                    "38|NEW LEADS",
                    "7|MEETINGS",
                  ].map((x) => {
                    const [a, b] = x.split("|")
                    return (
                      <div key={b}>
                        <span>{b}</span>
                        <strong>{a}</strong>
                        <i></i>
                      </div>
                    )
                  })}
                </div>
                <div className="mock-panels">
                  <div>
                    <span>TODAY’S FOCUS</span>
                    {[1, 2, 3].map((x) => (
                      <p key={x}>
                        <i></i>
                        <b></b>
                        <em></em>
                      </p>
                    ))}
                  </div>
                  <div>
                    <span>PIPELINE</span>
                    <div className="mock-bars">
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="trust-section" id="security">
          <div>
            <div className="eyebrow dark">
              <span></span> BUILT FOR THE REAL WORLD
            </div>
            <h2>
              Powerful enough for the office.
              <br />
              Simple enough for the road.
            </h2>
          </div>
          <div className="trust-items">
            <div>
              <Icon name="users" />
              <strong>Role-based access</strong>
              <span>The right people see the right data.</span>
            </div>
            <div>
              <Icon name="activity" />
              <strong>Complete history</strong>
              <span>Every important change is accounted for.</span>
            </div>
            <div>
              <Icon name="truck" />
              <strong>Mobile by design</strong>
              <span>Full capability from desktop to jobsite.</span>
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="cta-lines"></div>
          <div className="eyebrow">
            <span></span> YOUR COMPETITION ISN’T WAITING
          </div>
          <h2>
            Stop playing defense.
            <br />
            Start taking the market.
          </h2>
          <p>
            Preloaded CRM. Precision leads. One command center built to win.
          </p>
          <button className="button orange" onClick={enterApp}>
            Build the business <Icon name="arrow" />
          </button>
        </section>
      </main>
      <footer>
        <Brand light />
        <span>CRM + Lead Marketplace · Client Command HD</span>
        <span>Built for the road ahead.</span>
      </footer>
    </div>
  )
}

function Header({
  title,
  subtitle,
  onMenu,
  onAdd,
}: {
  title: string
  subtitle: string
  onMenu: () => void
  onAdd: () => void
}) {
  return (
    <header className="app-header">
      <button
        className="app-menu"
        onClick={onMenu}
        aria-label="Open navigation"
      >
        <Icon name="menu" />
      </button>
      <div>
        <span>{subtitle}</span>
        <h1>{title}</h1>
      </div>
      <div className="header-actions">
        <button className="icon-button" aria-label="Notifications">
          <Icon name="bell" />
          <i></i>
        </button>
        <button className="button orange compact" onClick={onAdd}>
          <Icon name="plus" size={18} />
          <span>Add activity</span>
        </button>
        <button className="avatar">BM</button>
      </div>
    </header>
  )
}

function Sidebar({
  page,
  setPage,
  open,
  close,
  exit,
}: {
  page: string
  setPage: (p: string) => void
  open: boolean
  close: () => void
  exit: () => void
}) {
  return (
    <>
      {open && (
        <button
          className="sidebar-scrim"
          onClick={close}
          aria-label="Close navigation"
        />
      )}
      <aside className={`sidebar ${open ? "open" : ""}`}>
        <div className="side-brand" onClick={exit}>
          <Brand light />
        </div>
        <div className="workspace">
          <span className="avatar small">MT</span>
          <div>
            <strong>Client Command HD</strong>
            <span>Internal workspace</span>
          </div>
          <Icon name="chevron" size={16} />
        </div>
        <nav>
          <span className="nav-label">WORKSPACE</span>
          {navItems.map((n) => (
            <button
              className={page === n.id ? "active" : ""}
              key={n.id}
              onClick={() => {
                setPage(n.id)
                close()
              }}
            >
              <Icon name={n.icon} />
              <span>{n.label}</span>
              {n.id === "tasks" && <b>4</b>}
            </button>
          ))}
          <span className="nav-label">MANAGE</span>
          <button
            className={page === "imports" ? "active" : ""}
            onClick={() => {
              setPage("imports")
              close()
            }}
          >
            <Icon name="import" />
            <span>Imports</span>
          </button>
          <button
            className={page === "admin" ? "active" : ""}
            onClick={() => {
              setPage("admin")
              close()
            }}
          >
            <Icon name="settings" />
            <span>Admin</span>
          </button>
        </nav>
        <div className="side-help">
          <div>
            <Icon name="truck" />
          </div>
          <strong>Need a hand?</strong>
          <span>View the quick-start guide</span>
          <button>
            Open guide <Icon name="arrow" size={14} />
          </button>
        </div>
        <button className="user-card">
          <span className="avatar small">BM</span>
          <div>
            <strong>Bret Morgan</strong>
            <span>Administrator</span>
          </div>
          <Icon name="more" />
        </button>
      </aside>
    </>
  )
}

function Dashboard({
  setPage,
  onAdd,
}: {
  setPage: (p: string) => void
  onAdd: () => void
}) {
  const [tasks, setTasks] = useState(initialTasks)
  const complete = (id: number) => setTasks(tasks.filter((t) => t.id !== id))
  return (
    <>
      <Header
        title="Good morning, Bret."
        subtitle="MONDAY, NOVEMBER 2"
        onMenu={() => {}}
        onAdd={onAdd}
      />
      <div className="page-body dashboard">
        <div className="welcome-row">
          <p>Here’s where your attention is needed today.</p>
          <button className="date-filter">
            <Icon name="calendar" size={17} /> This week{" "}
            <Icon name="chevron" size={14} />
          </button>
        </div>
        <div className="kpi-grid">
          {[
            ["Due today", "12", "+3", "clock", "orange"],
            ["Overdue", "4", "Needs attention", "bell", "red"],
            ["New untouched leads", "38", "+12 this week", "users", "blue"],
            ["Meetings booked", "7", "+2 vs last week", "calendar", "purple"],
          ].map(([label, value, detail, icon, tone]) => (
            <article className="kpi-card" key={label}>
              <div className={`kpi-icon ${tone}`}>
                <Icon name={icon as IconName} />
              </div>
              <button>
                <Icon name="more" />
              </button>
              <span>{label}</span>
              <strong>{value}</strong>
              <small className={tone === "red" ? "danger" : ""}>{detail}</small>
            </article>
          ))}
        </div>
        <div className="dash-grid">
          <section className="panel focus-panel">
            <div className="panel-title">
              <div>
                <h2>Today’s focus</h2>
                <span>{tasks.length} open tasks</span>
              </div>
              <button onClick={() => setPage("tasks")}>
                View all <Icon name="arrow" size={15} />
              </button>
            </div>
            <div className="task-list">
              {tasks.slice(0, 4).map((task) => (
                <div className="task-row" key={task.id}>
                  <button
                    className="task-check"
                    onClick={() => complete(task.id)}
                    aria-label="Complete task"
                  >
                    <Icon name="check" size={14} />
                  </button>
                  <div className="task-main">
                    <strong>{task.title}</strong>
                    <span>
                      <Icon name="building" size={14} /> {task.company}
                    </span>
                  </div>
                  <span className={`priority ${task.priority.toLowerCase()}`}>
                    {task.priority}
                  </span>
                  <div className={`task-time ${task.overdue ? "overdue" : ""}`}>
                    <Icon name="clock" size={14} />
                    <span>{task.time}</span>
                  </div>
                  <span className="avatar tiny">{task.assignee}</span>
                  <button className="row-more">
                    <Icon name="more" />
                  </button>
                </div>
              ))}
              {!tasks.length && (
                <div className="empty-state">
                  <span>
                    <Icon name="check" />
                  </span>
                  <strong>You’re all caught up</strong>
                  <p>No more tasks due today.</p>
                </div>
              )}
            </div>
            <button className="add-task" onClick={onAdd}>
              <Icon name="plus" size={17} /> Add a task
            </button>
          </section>
          <section className="panel pipeline-snapshot">
            <div className="panel-title">
              <div>
                <h2>Pipeline snapshot</h2>
                <span>November 2026</span>
              </div>
              <button onClick={() => setPage("pipeline")}>
                View board <Icon name="arrow" size={15} />
              </button>
            </div>
            <div className="pipeline-total">
              <div>
                <span>OPEN OPPORTUNITIES</span>
                <strong>126</strong>
              </div>
              <div>
                <span>ESTIMATED VALUE</span>
                <strong>$438K</strong>
              </div>
            </div>
            <div className="stage-bars">
              {[
                ["New lead", 38, 30, "#64748b"],
                ["Contacted", 31, 25, "#3c82f6"],
                ["Interested", 24, 19, "#ff6b35"],
                ["Qualified", 18, 14, "#8b5cf6"],
                ["Registered", 15, 12, "#17a673"],
              ].map(([n, v, p, c]) => (
                <div key={String(n)}>
                  <span>{n}</span>
                  <div>
                    <i
                      style={{
                        width: `${Number(p) * 2.6}%`,
                        background: String(c),
                      }}
                    ></i>
                  </div>
                  <strong>{v}</strong>
                </div>
              ))}
            </div>
            <div className="conversion">
              <span>
                <i>
                  <Icon name="chart" size={15} />
                </i>{" "}
                Lead to registration
              </span>
              <strong>11.9%</strong>
              <small>+2.4%</small>
            </div>
          </section>
        </div>
        <div className="lower-grid">
          <section className="panel recent-panel">
            <div className="panel-title">
              <div>
                <h2>Recent activity</h2>
                <span>Across your team</span>
              </div>
              <button>
                View timeline <Icon name="arrow" size={15} />
              </button>
            </div>
            {[
              [
                "activity",
                "Call completed with Maria Ortiz",
                "Cobalt Steelworks · Positive conversation",
                "12 min ago",
                "BM",
              ],
              [
                "tasks",
                "Stage changed to Meeting Scheduled",
                "Northstar Equipment",
                "48 min ago",
                "AG",
              ],
              [
                "calendar",
                "Demo booked for November 5",
                "Northstar Equipment · James Wu",
                "1h ago",
                "AG",
              ],
              [
                "building",
                "New account added",
                "Summit Cold Chain",
                "2h ago",
                "BM",
              ],
            ].map(([icon, title, desc, time, user]) => (
              <div className="activity-row" key={title}>
                <span className="activity-icon">
                  <Icon name={icon as IconName} size={17} />
                </span>
                <div>
                  <strong>{title}</strong>
                  <span>{desc}</span>
                </div>
                <time>{time}</time>
                <span className="avatar tiny">{user}</span>
              </div>
            ))}
          </section>
          <section className="panel momentum">
            <div className="panel-title">
              <div>
                <h2>This week</h2>
                <span>Team momentum</span>
              </div>
              <Icon name="more" />
            </div>
            <div className="momentum-main">
              <div className="ring">
                <span>
                  <strong>72</strong>
                  <small>ACTIVITIES</small>
                </span>
              </div>
              <div className="legend">
                <span>
                  <i className="orange-bg"></i>Calls <b>32</b>
                </span>
                <span>
                  <i className="blue-bg"></i>Emails <b>24</b>
                </span>
                <span>
                  <i className="purple-bg"></i>LinkedIn <b>10</b>
                </span>
                <span>
                  <i className="green-bg"></i>Meetings <b>6</b>
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

function Accounts({
  onAdd,
  selectAccount,
}: {
  onAdd: () => void
  selectAccount: (a: typeof accounts[0]) => void
}) {
  const [query, setQuery] = useState("")
  const filtered = useMemo(
    () =>
      accounts.filter((a) =>
        `${a.company} ${a.contact} ${a.location}`
          .toLowerCase()
          .includes(query.toLowerCase()),
      ),
    [query],
  )
  return (
    <>
      <Header
        title="Accounts"
        subtitle="WORKSPACE"
        onMenu={() => {}}
        onAdd={onAdd}
      />
      <div className="page-body">
        <div className="page-intro">
          <div>
            <h2>Shipper accounts</h2>
            <p>
              Manage companies, contacts, and every relationship in one place.
            </p>
          </div>
          <div>
            <button className="button outline">
              <Icon name="import" size={17} /> Import
            </button>
            <button className="button orange" onClick={onAdd}>
              <Icon name="plus" size={17} /> Add account
            </button>
          </div>
        </div>
        <div className="toolbar">
          <label className="search-box">
            <Icon name="search" size={18} />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search company, contact, email, phone..."
            />
          </label>
          <button>
            <Icon name="filter" size={17} /> Filters <b>2</b>
          </button>
          <button>
            All owners <Icon name="chevron" size={13} />
          </button>
          <button>
            All stages <Icon name="chevron" size={13} />
          </button>
          <span>{filtered.length} of 8,215 accounts</span>
        </div>
        <div className="accounts-table panel">
          <div className="table-head">
            <span>
              <input type="checkbox" aria-label="Select all" />
            </span>
            <span>ACCOUNT</span>
            <span>PRIMARY CONTACT</span>
            <span>STAGE</span>
            <span>LAST TOUCH</span>
            <span>NEXT ACTION</span>
            <span>OWNER</span>
            <span></span>
          </div>
          {filtered.map((a) => (
            <button
              className="account-row"
              key={a.company}
              onClick={() => selectAccount(a)}
            >
              <span onClick={(e) => e.stopPropagation()}>
                <input type="checkbox" aria-label={`Select ${a.company}`} />
              </span>
              <span className="account-name">
                <i className={`company-avatar ${a.tone}`}>{a.initials}</i>
                <span>
                  <strong>{a.company}</strong>
                  <small>
                    {a.location} · {a.industry}
                  </small>
                </span>
              </span>
              <span>
                <strong>{a.contact}</strong>
                <small>Primary contact</small>
              </span>
              <span>
                <i className={`stage-pill ${a.tone}`}>{a.stage}</i>
              </span>
              <span>{a.touch}</span>
              <span>
                <Icon name="clock" size={14} /> {a.next}
              </span>
              <span className="avatar tiny">{a.owner}</span>
              <span>
                <Icon name="more" />
              </span>
            </button>
          ))}
        </div>
        <div className="mobile-account-list">
          {filtered.map((a) => (
            <button key={a.company} onClick={() => selectAccount(a)}>
              <div className="mobile-account-top">
                <i className={`company-avatar ${a.tone}`}>{a.initials}</i>
                <div>
                  <strong>{a.company}</strong>
                  <span>{a.location}</span>
                </div>
                <Icon name="chevron" />
              </div>
              <div>
                <i className={`stage-pill ${a.tone}`}>{a.stage}</i>
                <span>
                  <Icon name="clock" size={14} /> {a.next}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </>
  )
}

function Pipeline({ onAdd }: { onAdd: () => void }) {
  const [view, setView] = useState<"board" | "list">("board")
  const [boardPage, setBoardPage] = useState(0)
  const boardGroups = [
    { label: "1. Prospecting", detail: "New lead to connection" },
    { label: "2. Engagement", detail: "Interest to qualification" },
    { label: "3. Customer", detail: "Registration to active" },
    { label: "4. Outcomes", detail: "Nurture or closed" },
  ]
  return (
    <>
      <Header
        title="Pipeline"
        subtitle="WORKSPACE"
        onMenu={() => {}}
        onAdd={onAdd}
      />
      <div className="page-body">
        <div className="page-intro">
          <div>
            <h2>Sales pipeline</h2>
            <p>Move opportunities forward and keep the next action clear.</p>
          </div>
          <button className="button orange" onClick={onAdd}>
            <Icon name="plus" size={17} /> New opportunity
          </button>
        </div>
        <section className="sales-cycle-map" aria-label="Complete sales cycle">
          <div className="cycle-heading">
            <div>
              <span>COMPLETE SALES CYCLE</span>
              <strong>Lead to active customer</strong>
            </div>
            <small>Stages stay separate from operational milestones</small>
          </div>
          <div className="cycle-track">
            {[
              ["01", "New Lead"],
              ["02", "Contact Attempted"],
              ["03", "Contact Established"],
              ["04", "Interested"],
              ["05", "Meeting Scheduled"],
              ["06", "Qualified"],
              ["07", "Registered"],
              ["08", "First Load Posted"],
              ["09", "Active Customer"],
            ].map(([number, label], index) => (
              <button
                className={`cycle-step ${
                  boardPage === Math.floor(index / 3) ? "active" : ""
                }`}
                key={label}
                onClick={() => {
                  setView("board")
                  setBoardPage(Math.floor(index / 3))
                }}
              >
                <i>{number}</i>
                <span>{label}</span>
                {index < 8 && <Icon name="chevron" size={14} />}
              </button>
            ))}
          </div>
          <div className="cycle-outcomes">
            <span>ALTERNATE OUTCOMES</span>
            {["Nurture", "Not Interested", "Disqualified"].map((outcome) => (
              <button
                className={boardPage === 3 ? "active" : ""}
                key={outcome}
                onClick={() => {
                  setView("board")
                  setBoardPage(3)
                }}
              >
                {outcome}
              </button>
            ))}
          </div>
        </section>
        <div className="pipeline-toolbar">
          <div className="segmented">
            <button
              className={view === "board" ? "active" : ""}
              onClick={() => setView("board")}
            >
              <Icon name="pipeline" size={16} /> Board
            </button>
            <button
              className={view === "list" ? "active" : ""}
              onClick={() => setView("list")}
            >
              <Icon name="tasks" size={16} /> List
            </button>
          </div>
          <button>
            <Icon name="filter" size={16} /> Filter
          </button>
          <button>
            All owners <Icon name="chevron" size={13} />
          </button>
          <span>126 active · 19 outcomes · $438K estimated</span>
        </div>
        {view === "board" ? (
          <>
            <div className="board-navigator">
              <button
                className="board-arrow"
                onClick={() => setBoardPage(Math.max(0, boardPage - 1))}
                disabled={boardPage === 0}
              >
                <Icon name="chevron" size={18} />
                <span>Previous</span>
              </button>
              <div className="board-group-tabs">
                {boardGroups.map((group, index) => (
                  <button
                    className={boardPage === index ? "active" : ""}
                    key={group.label}
                    onClick={() => setBoardPage(index)}
                  >
                    <strong>{group.label}</strong>
                    <small>{group.detail}</small>
                  </button>
                ))}
              </div>
              <button
                className="board-arrow next"
                onClick={() => setBoardPage(Math.min(3, boardPage + 1))}
                disabled={boardPage === 3}
              >
                <span>Next</span>
                <Icon name="chevron" size={18} />
              </button>
            </div>
            <div className="board-position">
              <div>
                <strong>{boardGroups[boardPage].label}</strong>
                <span>{boardGroups[boardPage].detail}</span>
              </div>
              <span>
                Showing stages {boardPage * 3 + 1}–{boardPage * 3 + 3} of 12
              </span>
            </div>
            <div className="kanban paged-kanban">
              {stages.slice(boardPage * 3, boardPage * 3 + 3).map((stage) => (
                <section
                  className={`kanban-column ${
                    stage.kind === "outcome" ? "outcome-column" : ""
                  }`}
                  key={stage.name}
                >
                  <header>
                    <i style={{ background: stage.color }}></i>
                    <strong>{stage.name}</strong>
                    <span>{stage.cards.length}</span>
                    <Icon name="more" />
                  </header>
                  <div>
                    {stage.cards.map((a, idx) => (
                      <article className="deal-card" key={a.company}>
                        <div>
                          <i className={`company-avatar ${a.tone}`}>
                            {a.initials}
                          </i>
                          <button>
                            <Icon name="more" />
                          </button>
                        </div>
                        <h3>{a.company}</h3>
                        <span>{a.contact}</span>
                        <div className="deal-meta">
                          <span>
                            <Icon name="clock" size={14} /> {a.next}
                          </span>
                          <i className="avatar tiny">{a.owner}</i>
                        </div>
                        {idx === 0 && (
                          <small
                            className={
                              stage.name === "New Lead" ? "warning" : ""
                            }
                          >
                            {stage.name === "New Lead"
                              ? "Untouched · 3 days"
                              : "Last touch · Yesterday"}
                          </small>
                        )}
                      </article>
                    ))}
                  </div>
                  <button className="column-add" onClick={onAdd}>
                    <Icon name="plus" size={16} /> Add opportunity
                  </button>
                </section>
              ))}
            </div>
          </>
        ) : (
          <div className="list-view">
            <div className="pipeline-list-head">
              <span>OPPORTUNITY</span>
              <span>PRIMARY CONTACT</span>
              <span>PIPELINE STAGE</span>
              <span>NEXT ACTION</span>
              <span>OWNER</span>
              <span></span>
            </div>
            {stages.flatMap((stage) =>
              stage.cards.map((a) => (
                <button
                  className="pipeline-list-card"
                  key={`${stage.name}-${a.company}`}
                >
                  <span className="pipeline-company">
                    <i className={`company-avatar ${a.tone}`}>{a.initials}</i>
                    <span>
                      <strong>{a.company}</strong>
                      <small>
                        {a.location} · {a.industry}
                      </small>
                    </span>
                  </span>
                  <span className="pipeline-contact">
                    <small>PRIMARY CONTACT</small>
                    <strong>{a.contact}</strong>
                  </span>
                  <span
                    className={`pipeline-stage-badge ${
                      stage.kind === "outcome" ? "outcome" : ""
                    }`}
                    style={
                      { "--stage-color": stage.color } as React.CSSProperties
                    }
                  >
                    <i></i>
                    {stage.name}
                  </span>
                  <span className="pipeline-next-action">
                    <small>NEXT ACTION</small>
                    <strong>
                      <Icon name="clock" size={15} />
                      {a.next}
                    </strong>
                  </span>
                  <span className="pipeline-owner">
                    <i className="avatar small">{a.owner}</i>
                    <span>
                      <small>OWNER</small>
                      <strong>{a.owner === "BM" ? "Bret" : "Andrew"}</strong>
                    </span>
                  </span>
                  <span className="pipeline-open">
                    <Icon name="chevron" size={20} />
                  </span>
                </button>
              )),
            )}
          </div>
        )}
      </div>
    </>
  )
}

function Tasks({ onAdd }: { onAdd: () => void }) {
  const [tasks, setTasks] = useState(initialTasks)
  const [tab, setTab] = useState("Today")
  return (
    <>
      <Header
        title="Tasks"
        subtitle="WORKSPACE"
        onMenu={() => {}}
        onAdd={onAdd}
      />
      <div className="page-body">
        <div className="page-intro">
          <div>
            <h2>Stay on top of every next step</h2>
            <p>Prioritized follow-ups for you and the team.</p>
          </div>
          <button className="button orange" onClick={onAdd}>
            <Icon name="plus" size={17} /> New task
          </button>
        </div>
        <div className="task-tabs">
          {["Today", "Overdue", "Upcoming", "Completed"].map((t, i) => (
            <button
              className={tab === t ? "active" : ""}
              onClick={() => setTab(t)}
              key={t}
            >
              {t}
              <span>{[12, 4, 27, 84][i]}</span>
            </button>
          ))}
        </div>
        <div className="task-page-grid">
          <section className="panel task-page-list">
            <header>
              <div>
                <h3>{tab}</h3>
                <span>Monday, November 2</span>
              </div>
              <button>
                <Icon name="filter" size={16} /> Filter
              </button>
            </header>
            {tasks.map((t) => (
              <div className="large-task" key={t.id}>
                <button
                  className="task-check"
                  onClick={() => setTasks(tasks.filter((x) => x.id !== t.id))}
                >
                  <Icon name="check" size={14} />
                </button>
                <div>
                  <strong>{t.title}</strong>
                  <span>
                    <Icon name="building" size={14} />
                    {t.company}
                  </span>
                </div>
                <i className={`priority ${t.priority.toLowerCase()}`}>
                  {t.priority}
                </i>
                <time className={t.overdue ? "overdue" : ""}>
                  <Icon name="clock" size={15} />
                  {t.time}
                </time>
                <span className="avatar tiny">{t.assignee}</span>
                <button>
                  <Icon name="more" />
                </button>
              </div>
            ))}
          </section>
          <aside className="panel day-summary">
            <span>DAY SUMMARY</span>
            <div className="summary-ring">
              <strong>{tasks.length}</strong>
              <small>REMAINING</small>
            </div>
            <div>
              <span>
                <i></i>Completed <b>{4 - tasks.length}</b>
              </span>
              <span>
                <i></i>Remaining <b>{tasks.length}</b>
              </span>
            </div>
            <p>Complete 2 more tasks to stay on pace for today.</p>
          </aside>
        </div>
      </div>
    </>
  )
}

const marketplaceLeads = [
  {
    id: 1,
    company: "Iron Ridge Excavation",
    industry: "Heavy Equipment",
    location: "Louisville, KY",
    contact: "Operations Director",
    size: "25–50 employees",
    signal: "Expanding fleet",
    quality: 96,
    age: "Added today",
  },
  {
    id: 2,
    company: "Great Lakes Fleet Repair",
    industry: "Fleet Service",
    location: "Toledo, OH",
    contact: "General Manager",
    size: "10–25 employees",
    signal: "New location",
    quality: 92,
    age: "Added today",
  },
  {
    id: 3,
    company: "Bluegrass Hauling Co.",
    industry: "Trucking",
    location: "Lexington, KY",
    contact: "Fleet Owner",
    size: "50–100 trucks",
    signal: "Hiring drivers",
    quality: 89,
    age: "1 day ago",
  },
  {
    id: 4,
    company: "Heartland Site Works",
    industry: "Construction",
    location: "Indianapolis, IN",
    contact: "Purchasing Manager",
    size: "50–100 employees",
    signal: "Won new contracts",
    quality: 87,
    age: "1 day ago",
  },
  {
    id: 5,
    company: "Prairie Ag Systems",
    industry: "Agriculture",
    location: "Bowling Green, KY",
    contact: "Equipment Manager",
    size: "25–50 employees",
    signal: "Seasonal demand",
    quality: 84,
    age: "2 days ago",
  },
]

function Marketplace({ onAdd }: { onAdd: () => void }) {
  const [industry, setIndustry] = useState("All industries")
  const [unlocked, setUnlocked] = useState<number[]>([2])
  const [notice, setNotice] = useState("")
  const [plan, setPlan] = useState("Growth")
  const [showPlans, setShowPlans] = useState(false)
  const planLimits: Record<string, number> = {
    Starter: 25,
    Growth: 75,
    Command: 200,
  }
  const industries = [
    ["All industries", "184", "truck"],
    ["Heavy Equipment", "42", "settings"],
    ["Trucking", "38", "truck"],
    ["Construction", "36", "building"],
    ["Fleet Service", "29", "activity"],
    ["Agriculture", "21", "users"],
    ["Industrial", "18", "building"],
  ]
  const visible =
    industry === "All industries"
      ? marketplaceLeads
      : marketplaceLeads.filter((lead) => lead.industry === industry)

  const unlock = (id: number, company: string) => {
    if (!unlocked.includes(id)) setUnlocked([...unlocked, id])
    setNotice(`${company} is now in your Accounts with full contact details.`)
    window.setTimeout(() => setNotice(""), 3500)
  }

  return (
    <>
      <Header
        title="Lead Marketplace"
        subtitle="FIND NEW BUSINESS"
        onMenu={() => {}}
        onAdd={onAdd}
      />
      <div className="page-body marketplace-page">
        {notice && (
          <div className="success-toast">
            <Icon name="check" size={17} />
            <span>{notice}</span>
          </div>
        )}
        <section className="market-welcome">
          <div>
            <span>YOUR NEXT CUSTOMER IS HERE</span>
            <h2>Find the right leads, faster.</h2>
            <p>
              Verified heavy-duty business leads matched to the industries and
              locations you serve.
            </p>
          </div>
          <div className="plan-usage">
            <div>
              <span>{plan.toUpperCase()} PLAN</span>
              <strong>
                {planLimits[plan] - 24} of {planLimits[plan]} leads remaining
              </strong>
            </div>
            <div className="usage-bar">
              <i
                style={{
                  width: `${Math.max(8, ((planLimits[plan] - 24) / planLimits[plan]) * 100)}%`,
                }}
              ></i>
            </div>
            <button onClick={() => setShowPlans(!showPlans)}>
              {showPlans ? "Close plans" : "Manage plan"}
            </button>
          </div>
        </section>
        {showPlans && (
          <section className="plan-picker">
            <div>
              <h3>Choose your monthly lead plan</h3>
              <p>Changes update your monthly allowance immediately.</p>
            </div>
            {[
              ["Starter", "25 leads", "$149/mo"],
              ["Growth", "75 leads", "$349/mo"],
              ["Command", "200 leads", "$749/mo"],
            ].map(([name, leads, price]) => (
              <button
                className={plan === name ? "active" : ""}
                key={name}
                onClick={() => {
                  setPlan(name)
                  setNotice(`${name} plan selected for this workspace.`)
                  setShowPlans(false)
                }}
              >
                <span>
                  <strong>{name}</strong>
                  <small>{leads}</small>
                </span>
                <b>{price}</b>
                <i>{plan === name ? "Current" : "Choose"}</i>
              </button>
            ))}
          </section>
        )}

        <div className="market-layout">
          <aside className="industry-filter panel">
            <header>
              <h3>Industries</h3>
              <span>Choose a market</span>
            </header>
            {industries.map(([name, count, icon]) => (
              <button
                key={name}
                className={industry === name ? "active" : ""}
                onClick={() => setIndustry(name)}
              >
                <i>
                  <Icon name={icon as IconName} size={17} />
                </i>
                <span>{name}</span>
                <b>{count}</b>
              </button>
            ))}
            <div className="territory-filter">
              <span>TERRITORY</span>
              <button>
                Kentucky + 250 mi <Icon name="chevron" size={13} />
              </button>
              <small>Change location or service radius</small>
            </div>
          </aside>

          <section className="market-results">
            <div className="market-toolbar">
              <div>
                <h3>{industry}</h3>
                <span>{visible.length || 0} best matches shown</span>
              </div>
              <label>
                <Icon name="search" size={17} />
                <input placeholder="Search leads..." />
              </label>
              <button>
                <Icon name="filter" size={16} /> Filters
              </button>
              <button>
                Best match <Icon name="chevron" size={13} />
              </button>
            </div>
            <div className="lead-list">
              {visible.length ? (
                visible.map((lead) => {
                  const isUnlocked = unlocked.includes(lead.id)
                  return (
                    <article className="lead-card" key={lead.id}>
                      <div className="lead-score">
                        <strong>{lead.quality}</strong>
                        <span>MATCH</span>
                      </div>
                      <div className="lead-company">
                        <span>{lead.industry}</span>
                        <h3>{lead.company}</h3>
                        <p>
                          <Icon name="building" size={14} /> {lead.location} ·{" "}
                          {lead.size}
                        </p>
                      </div>
                      <div className="lead-signal">
                        <span>BUYING SIGNAL</span>
                        <strong>
                          <i></i>
                          {lead.signal}
                        </strong>
                        <small>{lead.age}</small>
                      </div>
                      <div className="lead-contact">
                        <span>DECISION MAKER</span>
                        <strong>
                          {isUnlocked ? "Jordan Mitchell" : lead.contact}
                        </strong>
                        <small>
                          {isUnlocked
                            ? "jordan@" +
                              lead.company.toLowerCase().replaceAll(" ", "") +
                              ".com"
                            : "Contact details locked"}
                        </small>
                      </div>
                      <button
                        className={`unlock-button ${
                          isUnlocked ? "unlocked" : ""
                        }`}
                        onClick={() => unlock(lead.id, lead.company)}
                      >
                        <Icon name={isUnlocked ? "check" : "plus"} size={16} />
                        {isUnlocked ? "Added to CRM" : "Unlock lead"}
                      </button>
                    </article>
                  )
                })
              ) : (
                <div className="market-empty">
                  <Icon name="search" size={25} />
                  <h3>No preview leads in this industry</h3>
                  <p>
                    Expand your territory to see more matching opportunities.
                  </p>
                </div>
              )}
            </div>
          </section>
        </div>
        <section className="market-help">
          <div>
            <Icon name="check" />
            <span>
              <strong>Verified weekly</strong>Contact and company data checked
              for accuracy.
            </span>
          </div>
          <div>
            <Icon name="users" />
            <span>
              <strong>One account, one owner</strong>Unlocked leads are
              exclusive to your workspace.
            </span>
          </div>
          <div>
            <Icon name="activity" />
            <span>
              <strong>Ready for your workflow</strong>Every lead moves directly
              into your CRM.
            </span>
          </div>
        </section>
      </div>
    </>
  )
}

function Reports({ onAdd }: { onAdd: () => void }) {
  return (
    <>
      <Header
        title="Reports"
        subtitle="INSIGHTS"
        onMenu={() => {}}
        onAdd={onAdd}
      />
      <div className="page-body">
        <div className="page-intro">
          <div>
            <h2>Performance at a glance</h2>
            <p>Clear, reliable metrics across your outreach and pipeline.</p>
          </div>
          <div>
            <button className="button outline">
              <Icon name="download" size={17} /> Export CSV
            </button>
            <button className="date-filter">
              <Icon name="calendar" size={17} /> Oct 1 – Nov 2
            </button>
          </div>
        </div>
        <div className="report-kpis">
          {[
            ["Total activities", "284", "+12.4%"],
            ["Conversations", "67", "+8.1%"],
            ["Meetings booked", "22", "+18.9%"],
            ["New registrations", "14", "+7.7%"],
          ].map((x) => (
            <article key={x[0]}>
              <span>{x[0]}</span>
              <strong>{x[1]}</strong>
              <small>
                {x[2]} <i>vs last period</i>
              </small>
            </article>
          ))}
        </div>
        <div className="report-grid">
          <section className="panel chart-panel">
            <div className="panel-title">
              <div>
                <h2>Outreach activity</h2>
                <span>Calls and emails by week</span>
              </div>
              <button>
                <Icon name="more" />
              </button>
            </div>
            <div className="chart-area">
              <div className="y-axis">
                <span>100</span>
                <span>75</span>
                <span>50</span>
                <span>25</span>
                <span>0</span>
              </div>
              <div className="bars">
                {[58, 72, 63, 88, 76].map((v, i) => (
                  <div key={i}>
                    <div>
                      <i style={{ height: `${v}%` }}></i>
                      <b style={{ height: `${v * 0.65}%` }}></b>
                    </div>
                    <span>W{i + 1}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="chart-legend">
              <span>
                <i></i>Calls
              </span>
              <span>
                <i></i>Emails
              </span>
            </div>
          </section>
          <section className="panel funnel-panel">
            <div className="panel-title">
              <div>
                <h2>Lead conversion</h2>
                <span>October 1 – November 2</span>
              </div>
            </div>
            {[
              ["New leads", 186, 100],
              ["Contacted", 142, 76],
              ["Interested", 54, 38],
              ["Qualified", 31, 22],
              ["Registered", 14, 10],
            ].map((x, i) => (
              <div className="funnel-row" key={String(x[0])}>
                <span>{x[0]}</span>
                <div>
                  <i style={{ width: `${x[2]}%` }}></i>
                </div>
                <strong>{x[1]}</strong>
                {i < 4 && <small>{[76, 38, 57, 45][i]}%</small>}
              </div>
            ))}
          </section>
        </div>
        <section className="panel team-performance">
          <div className="panel-title">
            <div>
              <h2>Team performance</h2>
              <span>Activity and outcomes by owner</span>
            </div>
          </div>
          <div className="team-head">
            <span>TEAM MEMBER</span>
            <span>ACTIVITIES</span>
            <span>CONVERSATIONS</span>
            <span>MEETINGS</span>
            <span>REGISTERED</span>
            <span>CONVERSION</span>
          </div>
          {[
            ["BM", "Bret Morgan", "156", "38", "13", "8", "12.5%"],
            ["AG", "Andrew Gillen", "128", "29", "9", "6", "10.3%"],
          ].map((x) => (
            <div className="team-row" key={x[0]}>
              <span>
                <i className="avatar small">{x[0]}</i>
                <strong>{x[1]}</strong>
              </span>
              {x.slice(2).map((v, i) => (
                <span key={i}>{v}</span>
              ))}
            </div>
          ))}
        </section>
      </div>
    </>
  )
}

function ImportsAdmin({
  admin = false,
  onAdd,
}: {
  admin?: boolean
  onAdd: () => void
}) {
  return (
    <>
      <Header
        title={admin ? "Admin" : "Imports"}
        subtitle="MANAGE"
        onMenu={() => {}}
        onAdd={onAdd}
      />
      <div className="page-body">
        <div className="page-intro">
          <div>
            <h2>
              {admin ? "Workspace settings" : "Bring your records with you"}
            </h2>
            <p>
              {admin
                ? "Manage access, configuration, security, and system history."
                : "Import spreadsheets safely with mapping, preview, and duplicate review."}
            </p>
          </div>
          {!admin && (
            <button className="button orange" onClick={onAdd}>
              <Icon name="import" size={17} /> Start import
            </button>
          )}
        </div>
        {admin ? (
          <div className="admin-grid">
            {[
              [
                "users",
                "Users & roles",
                "Manage team access and data permissions",
                "2 active users",
              ],
              [
                "pipeline",
                "Pipeline stages",
                "Configure stages, outcomes, and required fields",
                "12 stages",
              ],
              [
                "settings",
                "Custom fields",
                "Adapt account and contact fields",
                "18 fields",
              ],
              [
                "activity",
                "Audit log",
                "Review material changes and bulk actions",
                "View history",
              ],
              [
                "download",
                "Backup & restore",
                "Monitor backups and recovery points",
                "Healthy",
              ],
              [
                "bell",
                "Notifications",
                "Control in-app alerts and reminders",
                "Configured",
              ],
            ].map(([icon, title, desc, status]) => (
              <button className="panel admin-card" key={title}>
                <span>
                  <Icon name={icon as IconName} />
                </span>
                <div>
                  <strong>{title}</strong>
                  <p>{desc}</p>
                  <small>{status}</small>
                </div>
                <Icon name="chevron" />
              </button>
            ))}
          </div>
        ) : (
          <>
            <section className="import-drop">
              <span>
                <Icon name="import" size={30} />
              </span>
              <h3>Drop a spreadsheet here</h3>
              <p>Upload a .CSV or .XLSX file to begin mapping your records.</p>
              <button className="button outline" onClick={onAdd}>
                Choose a file
              </button>
              <small>Files are validated before any records are changed.</small>
            </section>
            <div className="import-steps">
              {[
                [
                  "01",
                  "Upload & map",
                  "Match spreadsheet columns to CRM fields.",
                ],
                [
                  "02",
                  "Review",
                  "Preview records and resolve uncertain duplicates.",
                ],
                [
                  "03",
                  "Confirm",
                  "Create, update, or skip with a full summary.",
                ],
              ].map((x) => (
                <div key={x[0]}>
                  <span>{x[0]}</span>
                  <strong>{x[1]}</strong>
                  <p>{x[2]}</p>
                </div>
              ))}
            </div>
            <section className="panel history">
              <div className="panel-title">
                <div>
                  <h2>Import history</h2>
                  <span>Recent batches and results</span>
                </div>
              </div>
              {[
                [
                  "Shipper_Prospects_Q4.xlsx",
                  "Oct 28, 2026",
                  "1,242 added",
                  "38 flagged",
                  "Complete",
                ],
                [
                  "Legacy_Contacts_09.csv",
                  "Oct 14, 2026",
                  "684 updated",
                  "12 skipped",
                  "Complete",
                ],
                [
                  "Trade_Show_Leads.csv",
                  "Sep 30, 2026",
                  "126 added",
                  "4 flagged",
                  "Complete",
                ],
              ].map((x) => (
                <div key={x[0]}>
                  <span className="file-icon">
                    <Icon name="tasks" />
                  </span>
                  <div>
                    <strong>{x[0]}</strong>
                    <span>Uploaded by Bret · {x[1]}</span>
                  </div>
                  <span>{x[2]}</span>
                  <span>{x[3]}</span>
                  <i>{x[4]}</i>
                  <button>
                    <Icon name="more" />
                  </button>
                </div>
              ))}
            </section>
          </>
        )}
      </div>
    </>
  )
}

function AccountDrawer({
  account,
  close,
  onAdd,
}: {
  account: typeof accounts[0]
  close: () => void
  onAdd: () => void
}) {
  return (
    <>
      <button
        className="drawer-scrim"
        onClick={close}
        aria-label="Close account"
      />
      <aside className="account-drawer">
        <header>
          <button onClick={close}>
            <Icon name="x" />
          </button>
          <div className="drawer-actions">
            <button>
              <Icon name="more" />
            </button>
            <button className="button orange compact" onClick={onAdd}>
              <Icon name="plus" size={16} /> Add activity
            </button>
          </div>
        </header>
        <div className="account-hero">
          <i className={`company-avatar large ${account.tone}`}>
            {account.initials}
          </i>
          <div>
            <h2>{account.company}</h2>
            <p>
              {account.location} · {account.industry}
            </p>
            <i className={`stage-pill ${account.tone}`}>{account.stage}</i>
          </div>
        </div>
        <div className="account-quick">
          <button>
            <Icon name="activity" />
            <span>Log call</span>
          </button>
          <button>
            <Icon name="tasks" />
            <span>Add note</span>
          </button>
          <button>
            <Icon name="calendar" />
            <span>New task</span>
          </button>
        </div>
        <section className="drawer-section">
          <div>
            <h3>Company overview</h3>
            <button>Edit</button>
          </div>
          <dl>
            <div>
              <dt>Owner</dt>
              <dd>
                <span className="avatar tiny">{account.owner}</span>
                {account.owner === "BM" ? "Bret Morgan" : "Andrew Gillen"}
              </dd>
            </div>
            <div>
              <dt>Primary contact</dt>
              <dd>{account.contact}</dd>
            </div>
            <div>
              <dt>Next action</dt>
              <dd>{account.next}</dd>
            </div>
            <div>
              <dt>Lead source</dt>
              <dd>Industry directory</dd>
            </div>
          </dl>
        </section>
        <section className="drawer-section">
          <div>
            <h3>
              Contacts <span>3</span>
            </h3>
            <button>+ Add</button>
          </div>
          {[account.contact, "Alex Thompson", "Jordan Mills"].map((n, i) => (
            <div className="contact-line" key={n}>
              <i>
                {n
                  .split(" ")
                  .map((x) => x[0])
                  .join("")}
              </i>
              <div>
                <strong>{n}</strong>
                <span>
                  {i === 0
                    ? "Logistics Director"
                    : "Operations · " + account.company}
                </span>
              </div>
              <Icon name="chevron" />
            </div>
          ))}
        </section>
        <section className="drawer-section timeline">
          <div>
            <h3>Recent timeline</h3>
            <button>View all</button>
          </div>
          <div>
            <i>
              <Icon name="activity" size={15} />
            </i>
            <p>
              <strong>Call completed · Positive conversation</strong>
              <span>Bret Morgan · Today at 9:48 AM</span>
            </p>
          </div>
          <div>
            <i>
              <Icon name="tasks" size={15} />
            </i>
            <p>
              <strong>Follow-up task created</strong>
              <span>Andrew Gillen · Yesterday</span>
            </p>
          </div>
        </section>
      </aside>
    </>
  )
}

function ActivityModal({ close }: { close: () => void }) {
  const [saved, setSaved] = useState(false)
  return (
    <>
      <button
        className="modal-scrim"
        onClick={close}
        aria-label="Close modal"
      />
      <div className="activity-modal">
        {saved ? (
          <div className="saved-state">
            <span>
              <Icon name="check" size={28} />
            </span>
            <h2>Activity saved</h2>
            <p>The account timeline and team dashboard have been updated.</p>
            <button className="button orange" onClick={close}>
              Done
            </button>
          </div>
        ) : (
          <>
            <header>
              <div>
                <span>QUICK ADD</span>
                <h2>Log an activity</h2>
              </div>
              <button onClick={close}>
                <Icon name="x" />
              </button>
            </header>
            <div className="activity-types">
              {[
                ["activity", "Call"],
                ["tasks", "Email"],
                ["users", "LinkedIn"],
                ["calendar", "Meeting"],
                ["plus", "Note"],
              ].map(([i, t], n) => (
                <button className={n === 0 ? "active" : ""} key={t}>
                  <Icon name={i as IconName} />
                  <span>{t}</span>
                </button>
              ))}
            </div>
            <label>
              Account or contact
              <div className="field">
                <Icon name="search" size={17} />
                <input placeholder="Search an account or contact..." />
              </div>
            </label>
            <label>
              Outcome
              <select defaultValue="Connected">
                <option>Connected</option>
                <option>Left voicemail</option>
                <option>No answer</option>
                <option>Follow-up needed</option>
              </select>
            </label>
            <label>
              Notes
              <textarea
                placeholder="Add context for the team..."
                rows={4}
              ></textarea>
            </label>
            <label className="toggle-row">
              <input type="checkbox" defaultChecked />
              <span></span>
              <div>
                <strong>Create a next-step task</strong>
                <small>Keep momentum by scheduling the follow-up now.</small>
              </div>
            </label>
            <footer>
              <button className="button outline" onClick={close}>
                Cancel
              </button>
              <button className="button orange" onClick={() => setSaved(true)}>
                Save activity <Icon name="arrow" size={17} />
              </button>
            </footer>
          </>
        )}
      </div>
    </>
  )
}

function CRM({ exit }: { exit: () => void }) {
  const [page, setPage] = useState("dashboard")
  const [sideOpen, setSideOpen] = useState(false)
  const [activity, setActivity] = useState(false)
  const [selected, setSelected] = useState<typeof accounts[0] | null>(null)
  const pageTitle =
    navItems.find((n) => n.id === page)?.label ||
    (page === "imports" ? "Imports" : "Admin")
  const content =
    page === "dashboard" ? (
      <Dashboard setPage={setPage} onAdd={() => setActivity(true)} />
    ) : page === "marketplace" ? (
      <Marketplace onAdd={() => setActivity(true)} />
    ) : page === "accounts" ? (
      <Accounts onAdd={() => setActivity(true)} selectAccount={setSelected} />
    ) : page === "pipeline" ? (
      <Pipeline onAdd={() => setActivity(true)} />
    ) : page === "tasks" ? (
      <Tasks onAdd={() => setActivity(true)} />
    ) : page === "reports" ? (
      <Reports onAdd={() => setActivity(true)} />
    ) : (
      <ImportsAdmin admin={page === "admin"} onAdd={() => setActivity(true)} />
    )
  return (
    <div className="crm-shell">
      <Sidebar
        page={page}
        setPage={setPage}
        open={sideOpen}
        close={() => setSideOpen(false)}
        exit={exit}
      />
      <main className="app-main">
        <button
          className="floating-mobile-menu"
          onClick={() => setSideOpen(true)}
        >
          <Icon name="menu" />
        </button>
        {content}
      </main>
      <nav className="mobile-bottom-nav">
        {navItems.slice(0, 4).map((n) => (
          <button
            className={page === n.id ? "active" : ""}
            key={n.id}
            onClick={() => setPage(n.id)}
          >
            <Icon name={n.icon} />
            <span>{n.label}</span>
          </button>
        ))}
        <button onClick={() => setSideOpen(true)}>
          <Icon name="menu" />
          <span>More</span>
        </button>
      </nav>
      {selected && (
        <AccountDrawer
          account={selected}
          close={() => setSelected(null)}
          onAdd={() => setActivity(true)}
        />
      )}
      {activity && <ActivityModal close={() => setActivity(false)} />}
      <div className="mobile-page-name">{pageTitle}</div>
    </div>
  )
}

export default function App() {
  const [inApp, setInApp] = useState(false)
  return inApp ? (
    <CRM exit={() => setInApp(false)} />
  ) : (
    <Landing enterApp={() => setInApp(true)} />
  )
}

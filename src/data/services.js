// Content for every service page.
// Each entry becomes its own page at /services/<slug>/
// Order here is the order used on the home page grid and "Other services" lists.
//
// Fields:
//   slug       - the URL part (don't change once the site is live)
//   name       - short name for cards, links and the breadcrumb
//   card       - one-line description on the home page card
//   h1, intro  - the top of the service page
//   signsTitle, signs - the row of grey tiles
//   subs       - the black tiles (name + desc)
//   feature    - the grey two-column section (title, text, optional list, optional link)
//   band       - the red call band (title, text, optional link)

export const services = [
  {
    slug: 'drain-cleaning',
    name: 'Drain cleaning',
    card: 'Kitchen, bathroom and tub clogs cleared, from grease to hair.',
    h1: 'Drain cleaning across the Lower Mainland',
    intro:
      'Clogs are one of the most common calls we get. Even a partial clog builds up and damages pipes, so a slow drain is worth fixing now, before it backs up.',
    signsTitle: 'Call us if you notice',
    signs: [
      'Water pooling near fixtures',
      'Foul smell from the drain',
      'Gurgling noises',
      'Slow-draining sinks or tubs',
    ],
    subs: [
      {
        name: 'Kitchen drains',
        desc: 'Grease, fats, soap and food build up fast. Skip the store-bought chemicals; we clear it properly with current equipment.',
      },
      {
        name: 'Bathroom sinks',
        desc: 'Hair, toothpaste, soap scum and beauty products. A camera finds the blockage quickly so we fix the cause, not just the symptom.',
      },
      {
        name: 'Bathtubs',
        desc: 'A slow tub today is a backup tomorrow. We clean it out before it turns into a costly repair. Free estimates, senior discounts.',
      },
    ],
    feature: {
      title: 'Same clog keeps coming back?',
      text: "We run a camera down the line and show you what's in there: roots, grease, a belly or a break. Then we tell you whether it needs a clean, a repair or a replacement, and what each costs.",
      link: { href: '/services/sewer-lines-camera-inspection/', label: 'About sewer line camera inspection' },
    },
    band: {
      title: 'Day or night, we fix it right',
      text: 'No overtime fees for emergencies.',
      link: { href: '/services/emergency-plumbing/', label: 'Emergency plumbing' },
    },
  },

  {
    slug: 'sewer-lines-camera-inspection',
    name: 'Sewer lines & camera inspection',
    card: 'Roots, breaks, bellies and blockages found on camera and fixed.',
    h1: 'Sewer line repair across the Lower Mainland',
    intro:
      "We're a full-service, 24-hour company. We find what's wrong with your sewer line on camera, then fix it. No guessing, no digging up the wrong spot.",
    signsTitle: 'What we fix',
    signs: [
      'Broken pipes',
      'Sewer blockages',
      'Leaking joints',
      'Tree roots',
      'Corrosion',
      'Off-grade pipes',
      'Bellied pipes',
    ],
    subs: [
      {
        name: 'Camera inspection',
        desc: 'Backups or clogs that keep coming back? We push a camera on a rod down the line and look at the pipe walls. The footage tells us whether to repair or replace.',
      },
      {
        name: 'We show you the footage',
        desc: 'We walk you through the whole process and answer your questions, so you know exactly what you are paying for.',
      },
      {
        name: 'Underground pipes',
        desc: 'We also inspect the other underground pipes on your property, not just the main sewer line.',
      },
    ],
    feature: {
      title: 'Slow drains inside the house?',
      text: 'Sometimes the problem is closer than the sewer line. Kitchen, bathroom and tub clogs are cleared the same visit, with the right equipment, not store-bought chemicals.',
      link: { href: '/services/drain-cleaning/', label: 'About drain cleaning' },
    },
    band: {
      title: 'We do installation and repair work',
      text: 'From kitchen drain repairs to garburator installs.',
      link: { href: '/services/installation-repair/', label: 'Installation & repair' },
    },
  },

  {
    slug: 'broken-water-lines',
    name: 'Broken water lines',
    card: 'Low pressure, soggy lawn, high bill. Including no-dig water main replacement.',
    h1: 'Water line repair across the Lower Mainland',
    intro:
      'A damaged water line means wet patches on the lawn, low pressure and a higher bill. Mineral buildup, earthquakes, freeze and thaw, high water pressure and plain old age all wear lines down.',
    signsTitle: 'Signs of a damaged water line',
    signs: [
      'Parts of the yard stay damp and mushy',
      'Water bill higher than normal',
      'Low water pressure',
      'Discoloured water',
      'Meter moves with the shutoff closed',
    ],
    subs: [
      {
        name: 'Assessment first',
        desc: 'We do an in-depth assessment before any repair, so you know what is wrong and what it will cost.',
      },
      {
        name: 'Camera inspection',
        desc: 'A video camera system pinpoints the cause of the problem and exactly where it is.',
      },
      {
        name: 'Less lawn damage',
        desc: 'We repair underground with as little impact on your lawn as possible, and keep you in the loop the whole way.',
      },
    ],
    feature: {
      title: 'No-dig water main replacement',
      text: 'We install the new pipe inside the old one. No trench across your lawn, no torn-up yard.',
      link: { href: '/contact/', label: 'Get a free estimate' },
    },
    band: {
      title: 'Certified plumbers, any time',
      text: 'Licensed, bonded and insured. Available all week, day or night.',
      link: { href: '/services/emergency-plumbing/', label: 'Emergency plumbing' },
    },
  },

  {
    slug: 'water-heaters',
    name: 'Water heaters',
    card: 'Hot water tank installs, leak repairs and safe removal of the old unit.',
    h1: 'Water heater installation across the Lower Mainland',
    intro:
      'We install, repair, maintain and replace hot water tanks, finished on time and to your specs. Please don\'t try to fix a water heater or boiler yourself; it is dangerous. We\'re on call 24 hours.',
    signsTitle: 'Call us if you notice',
    signs: [
      'No hot water',
      'Water pooling around the tank',
      'Rusty or discoloured hot water',
      'Popping or rumbling noises',
    ],
    subs: [
      {
        name: 'Hot water tank installation',
        desc: 'We remove your old unit, dispose of it safely, and fit a new system to the space you have.',
      },
      {
        name: 'Leak repair',
        desc: 'We find the source of the leak fast and repair it safely. Free estimates, senior discounts.',
      },
      {
        name: '24-hour emergency service',
        desc: 'No hot water at 6 in the morning? Call. Someone picks up any time, day or night.',
      },
    ],
    feature: {
      title: "Don't do this one yourself",
      text: 'A water heater holds scalding water under pressure and runs on gas or high-voltage power. A bad repair can mean a flood, a fire or worse. Let a licensed plumber handle it.',
      link: { href: '/services/installation-repair/', label: 'About installation & repair' },
    },
    band: {
      title: "Don't ignore your plumbing problems",
      text: 'No overtime fees for emergencies.',
      link: { href: '/services/emergency-plumbing/', label: 'Emergency plumbing' },
    },
  },

  {
    slug: 'installation-repair',
    name: 'Installation & repair',
    card: 'Toilets, sinks, faucets, showers, perimeter drains and leaks.',
    h1: 'Pipe installation and repair across the Lower Mainland',
    intro:
      'Emergency drain and burst pipe repairs, garburator installs, pipe replacements and everything in between.',
    signsTitle: 'Call us if you notice',
    signs: [
      'Dripping faucets',
      'Running or leaking toilets',
      'Damp basement or crawl space',
      'Clogs or smells that keep coming back',
    ],
    subs: [
      {
        name: 'Perimeter drains',
        desc: 'Perimeter drains keep water away from your house. When they fail you get a damp crawl space or basement, and the structure is at risk. We repair and install them.',
      },
      {
        name: 'Water & sewer lines',
        desc: 'For new home builds: we dig, set the slope, prepare the trench bed, lay the pipe and connect it to the home.',
      },
      {
        name: 'Kitchen drains',
        desc: 'Clogs and smells that keep coming back. Quick, cost-effective fixes.',
      },
      {
        name: 'Bathtub drains',
        desc: 'Stopper assemblies, leaks and clogs.',
      },
      {
        name: 'Shower drains',
        desc: 'We find the problem, talk you through the options, give you an estimate and finish on time.',
      },
      {
        name: 'Toilets',
        desc: 'Unclogging, leaks, installs and replacements, for homes and businesses, 24/7.',
      },
      {
        name: 'Sinks',
        desc: 'Clogs, leaks, repairs and installs in kitchens and bathrooms.',
      },
      {
        name: 'Faucets',
        desc: 'A dripping faucet adds up on your water bill. We fix drips and leaks.',
      },
      {
        name: 'Leaks',
        desc: 'Sewer pipes, bathrooms, kitchens, basements and more.',
      },
      {
        name: 'Garburators',
        desc: 'We recommend the right unit, install it and connect it properly to power and plumbing.',
      },
    ],
    feature: {
      title: 'Same clog keeps coming back?',
      text: "We run a camera down the line and show you what's in there: roots, grease, a belly or a break. Then we tell you whether it needs a clean, a repair or a replacement, and what each costs.",
      link: { href: '/services/sewer-lines-camera-inspection/', label: 'About sewer line camera inspection' },
    },
    band: {
      title: 'Hassle-free water heater repairs',
      text: 'Tank installs, leak repairs and safe removal of the old unit.',
      link: { href: '/services/water-heaters/', label: 'Water heaters' },
    },
  },

  {
    slug: 'sewer-sump-pumps',
    name: 'Sewer & sump pumps',
    card: 'Pedestal and submersible pumps, battery backups, built to code.',
    h1: 'Sewer and sump pumps across the Lower Mainland',
    intro:
      'A flooded basement often points to a faulty sump pump. A working pump collects water at the lowest point of your foundation and moves it away from the house.',
    signsTitle: 'Call us if you notice',
    signs: [
      'Water in the basement',
      'Pump runs nonstop or not at all',
      'Strange noises from the pit',
      'Damp walls or a musty smell',
    ],
    subs: [
      {
        name: 'Pedestal pumps',
        desc: 'Mounted above the pit, so they are easy to reach for service and testing.',
      },
      {
        name: 'Submersible pumps',
        desc: 'Installed inside the pit, out of sight.',
      },
      {
        name: 'Battery backups & alarms',
        desc: 'A battery backup keeps the pump going when the power goes out. We also recommend a water level alarm.',
      },
    ],
    feature: {
      title: 'Built to pass inspection',
      text: "We're trained in local and municipal codes, so your system passes inspection. We'll tell you honestly whether you need a new install or just a repair.",
      link: { href: '/contact/', label: 'Get a free estimate' },
    },
    band: {
      title: 'Ready to roll up our sleeves',
      text: 'No overtime fees for emergencies.',
      link: { href: '/services/emergency-plumbing/', label: 'Emergency plumbing' },
    },
  },

  {
    slug: 'garburators',
    name: 'Garburators',
    card: 'Slow, smelly or jammed units repaired, or upgraded and installed.',
    h1: 'Garburator repair across the Lower Mainland',
    intro:
      'Slow, smelly or jammed? We fix garburators fast. Yours sits under the sink, between the drain and the trap, and grinds food scraps small enough to wash down the pipes.',
    signsTitle: 'Signs of a faulty garburator',
    signs: [
      'Strange noises, or none at all',
      'Slow-draining sink',
      'Bad smells',
      'Something stuck in the blades',
      'Leaks or an overflowing sink',
    ],
    subs: [
      {
        name: 'Repair',
        desc: 'Jams, leaks, smells and units that won\'t start. We find the problem and fix it quickly.',
      },
      {
        name: 'Upgrade or repair?',
        desc: 'Units over 5 years old should be checked regularly. A new one is often the better call: more energy efficient, quieter, and fewer repair bills. We help you decide.',
      },
      {
        name: 'Installation',
        desc: 'We help you pick the right unit, then install it and connect it properly to power and plumbing.',
      },
    ],
    feature: {
      title: 'Keep these out of your garburator',
      text: 'Most jams and clogs come from a short list of foods:',
      list: [
        'Grease',
        'Fibrous foods',
        'Starchy food',
        'Coffee grounds',
        'Fruit pits, seeds and apple cores',
        'Eggshells',
        'Bones',
      ],
      link: { href: '/services/drain-cleaning/', label: 'About drain cleaning' },
    },
    band: {
      title: 'Working garburator in no time',
      text: 'No overtime fees for emergencies.',
      link: { href: '/services/emergency-plumbing/', label: 'Emergency plumbing' },
    },
  },

  {
    slug: 'commercial-residential',
    name: 'Commercial & residential',
    card: 'Homes and businesses. Clean job sites, no hidden charges.',
    h1: 'Plumbing for homes and businesses',
    intro:
      'Repair, maintenance and installation, from a quick fix at home to a large office project. We arrive on time, pay attention to detail, charge fair rates and leave the job site clean.',
    signsTitle: 'What you can count on',
    signs: [
      'Prompt arrival',
      'A clean job site',
      'No hidden charges',
      'No overtime fees',
    ],
    subs: [
      {
        name: 'For homes',
        desc: 'Pipes, drains, faucets, toilets and showers working the way they should.',
      },
      {
        name: 'For businesses',
        desc: 'We keep plumbing problems from stopping your workday, with efficient repairs that respect your budget.',
      },
      {
        name: 'Emergency response',
        desc: 'Any time of day. Every one of our plumbers is fully licensed and insured.',
      },
    ],
    feature: {
      title: 'Regular maintenance saves money',
      text: 'Preventative maintenance keeps your building\'s plumbing up to code and avoids downtime. It costs a lot less than an emergency.',
      link: { href: '/contact/', label: 'Get a free estimate' },
    },
    band: {
      title: 'Drain inspections',
      text: 'Find the problem on camera before it shuts you down.',
      link: { href: '/services/sewer-lines-camera-inspection/', label: 'Camera inspection' },
    },
  },

  {
    slug: 'emergency-plumbing',
    name: 'Emergency plumbing',
    card: 'Burst pipe or backup at 2 a.m.? Call. No overtime fees.',
    h1: 'Your emergency plumber in the Lower Mainland',
    intro:
      'Burst pipe, backed-up drain or water where it shouldn\'t be? Call any time. We respond fast for home and business owners, and there are no overtime fees.',
    signsTitle: 'Call right away if you have',
    signs: [
      'A burst or leaking pipe',
      'A sewer backup',
      'An overflowing toilet',
      'No water or no hot water',
    ],
    subs: [
      {
        name: 'Installs & repairs',
        desc: 'New installs, repairs and replacements, done on time and on budget.',
      },
      {
        name: 'System upgrades',
        desc: 'Quality materials from top brands.',
      },
      {
        name: 'Courteous plumbers',
        desc: 'Polite, tidy and fully licensed and insured. We go above and beyond to get it right.',
      },
    ],
    feature: {
      title: 'While you wait for us',
      text: 'If you can reach it safely, turn off the water at the main shutoff valve. Move valuables away from the water. Then call us and we\'ll take it from there.',
    },
    band: {
      title: 'We clean up the mess for you',
      text: 'Same price at 2 in the morning as at 2 in the afternoon.',
    },
  },
];

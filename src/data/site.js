// Business details used across the whole site.
// Edit these values here and every page updates.

export const site = {
  name: 'One Stop Rooter Plumbing',
  url: 'https://www.onestoprooterplumbing.com',
  phone: '604-681-1100',
  phoneHref: 'tel:6046811100',
  city: 'Burnaby',
  region: 'BC',

  // TODO (client): paste the Google reviews link here. The link stays hidden while this is empty.
  googleReviewsUrl: '',

  // TODO (client): paste the privacy policy PDF link here. The footer link stays hidden while this is empty.
  privacyPolicyUrl: '',
};

// One master list of service areas, used everywhere.
export const areas = [
  'Abbotsford',
  'Burnaby',
  'Coquitlam',
  'Delta',
  'Ladner',
  'Langley',
  'Maple Ridge',
  'Mission',
  'New Westminster',
  'North Vancouver',
  'Port Coquitlam',
  'Richmond',
  'Surrey',
  'South Surrey',
  'Tsawwassen',
  'Vancouver',
  'West Vancouver',
  'White Rock',
];

// TODO (client): replace with real review text when available.
export const reviews = [
  {
    text: 'Called at midnight with water coming through the ceiling. They were here in under an hour and the price was exactly what they quoted.',
    who: 'Jill A., Burnaby',
  },
  {
    text: 'Camera inspection showed roots in our sewer line. They walked us through the footage and fixed it the same day.',
    who: 'Bob B., Coquitlam',
  },
  {
    text: 'We use them for all three of our restaurants. Fast, tidy, and they never hit us with surprise fees.',
    who: 'Dave C., Vancouver',
  },
];

// Big numbers under the home page hero.
export const stats = [
  { value: '25+', label: 'Years family-owned' },
  { value: '24/7', label: 'Someone picks up' },
  { value: '18', label: 'Cities served' },
  { value: '$0', label: 'Overtime fees' },
];

// The three promises (red band on the home and service pages).
export const promises = [
  {
    title: 'No hidden charges. No overtime fees.',
    text: 'The price is the same at 2 in the morning as it is at 2 in the afternoon.',
  },
  {
    title: 'Free inspection',
    text: 'We check for hidden problems and explain every option and price before any work starts.',
  },
  {
    title: 'Licensed, bonded & insured',
    text: 'Certified plumbers on every job, for homes and businesses.',
  },
];

// "How it works" steps.
export const steps = [
  {
    title: 'Call, any hour',
    text: 'A real person answers, day or night, weekends and holidays. Tell us what is going on and we book a time that suits you.',
  },
  {
    title: 'Free inspection, clear price',
    text: 'We find the problem, check for anything hidden, and explain every option and its price before we start.',
  },
  {
    title: 'Fixed and cleaned up',
    text: 'Licensed plumbers do the work properly and leave the job site clean. No surprise fees on the bill.',
  },
];

// Frequently asked questions (home page).
export const faqs = [
  {
    q: 'Do you charge more at night or on weekends?',
    a: 'No. There are no overtime fees. The price at 2 in the morning is the same as at 2 in the afternoon.',
  },
  {
    q: 'Are estimates really free?',
    a: 'Yes. Estimates and inspections are free, and we offer senior discounts. You hear the price before any work starts.',
  },
  {
    q: 'Are your plumbers licensed?',
    a: 'Every plumber on our team is licensed, bonded and insured.',
  },
  {
    q: 'Do you work on businesses as well as homes?',
    a: 'Yes. We look after homes, offices and other commercial buildings, from quick fixes to large projects.',
  },
  {
    q: 'Which areas do you cover?',
    a: 'We are based in Burnaby and cover the Lower Mainland, from Vancouver and the North Shore out to Abbotsford and Mission. If your city is not listed, call anyway.',
  },
];

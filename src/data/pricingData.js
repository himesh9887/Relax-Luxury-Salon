export const packages = [
  {
    name: 'Basic Package',
    price: '₹3,999',
    description: 'Fresh essentials for a polished weekday refresh.',
    features: ['Hair cut and blow dry', 'Express cleanup', 'Scalp relaxation', 'Style consultation'],
    bestFor: 'Monthly refresh',
  },
  {
    name: 'Premium Package',
    price: '₹7,999',
    description: 'A fuller beauty day with hair, skin, and finishing rituals.',
    features: ['Signature hair spa', 'Luxury facial', 'Hair styling', 'Premium product finish'],
    bestFor: 'Events and self-care',
    highlighted: true,
  },
  {
    name: 'Luxury Package',
    price: '₹12,999',
    description: 'The complete Relax experience with extended therapist attention.',
    features: ['Color gloss or styling', 'Body spa therapy', 'Advanced facial', 'Private suite service'],
    bestFor: 'Deep rejuvenation',
  },
  {
    name: 'Bridal Package',
    price: '₹24,999',
    description: 'Bespoke bridal preparation for luminous, long-wear beauty.',
    features: ['Bridal makeup trial', 'Wedding day makeup', 'Hair styling', 'Pre-bridal skin ritual'],
    bestFor: 'Wedding celebrations',
  },
];

export const comparisonRows = [
  ['Hair Consultation', true, true, true, true],
  ['Skin Analysis', false, true, true, true],
  ['Private Suite', false, false, true, true],
  ['Trial Session', false, false, false, true],
  ['Aftercare Guide', true, true, true, true],
];

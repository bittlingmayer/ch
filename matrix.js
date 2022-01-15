const SPROOCHE = [
  'de', 'de-ch',
  'fr', 'fr-ch',
  'it', 'it-ch',
  'als', 'als-ch',
  'rm',
  'frp', 'frp-ch',
  'xx', // Jurassisch
  'lmo', 'lmo-ch',
  'rom-ch',
  'yec',
  'yi', 'yih'
];

const maxLangCodeWidth = Math.max(...SPROOCHE.map(s => s.length));

let matrix = `| ${ ' '.repeat(maxLangCodeWidth) } |`;
SPROOCHE.forEach(s => matrix += ` ${ s } |`);
matrix += '\n';

matrix += `| ${ '-'.repeat(maxLangCodeWidth) } |`;
SPROOCHE.forEach(s => matrix += ` ${ '-'.repeat(s.length) } |`);

SPROOCHE.forEach(s => {
  matrix += '\n';
  const padding = ' '.repeat(maxLangCodeWidth - s.length);
  matrix += `| ${ s }${ padding } |`;
  SPROOCHE.forEach(_s => {
    matrix += ` ${ ' '.repeat(_s.length) } |`;
  })
});

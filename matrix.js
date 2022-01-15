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
  'yi', 'yih',
  'en'
];

const MAKRO = s => s.split('-')[0];

const QUÄLLSPROOCHE = Array.from(new Set(SPROOCHE.map(MAKRO)));

const maxLangCodeWidth = Math.max(...SPROOCHE.map(s => s.length));

let matrix = `| ${ ' '.repeat(maxLangCodeWidth) } |`;
QUÄLLSPROOCHE.forEach(s => matrix += ` ${ s } |`);
matrix += '\n';

matrix += `| ${ '-'.repeat(maxLangCodeWidth) } |`;
QUÄLLSPROOCHE.forEach(s => matrix += ` ${ '-'.repeat(s.length) } |`);

SPROOCHE.forEach(s => {
  matrix += '\n';
  const padding = ' '.repeat(maxLangCodeWidth - s.length);
  matrix += `| ${ s }${ padding } |`;
  QUÄLLSPROOCHE.forEach(_s => {
    matrix += ` ${ ' '.repeat(_s.length) } |`;
  })
});

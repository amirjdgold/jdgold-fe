import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcFile = path.resolve(
  __dirname,
  '../../../jdgold-fe/src/imports/Home-1/Home-1-1428.tsx'
);
const svgSrc = path.resolve(
  __dirname,
  '../../../jdgold-fe/src/imports/Home-1/svg-ek6j2go00e.ts'
);
const outDir = path.resolve(__dirname, '../src/figma-home');

const REMOVE_FUNCS = new Set([
  'Frame',
  'Frame2',
  'Frame3',
  'Frame4',
  'Frame5',
  'Frame6',
  'Frame7',
]);

function removeFunctions(source, names) {
  let out = '';
  let i = 0;
  while (i < source.length) {
    const fnMatch = source.slice(i).match(/^function\s+(\w+)\s*\(/);
    if (!fnMatch || fnMatch.index !== 0) {
      out += source[i];
      i += 1;
      continue;
    }
    const name = fnMatch[1];
    const start = i;
    i += fnMatch[0].length;
    let depth = 0;
    let inBody = false;
    while (i < source.length) {
      const ch = source[i];
      if (ch === '{') {
        depth += 1;
        inBody = true;
      } else if (ch === '}') {
        depth -= 1;
        if (inBody && depth === 0) {
          i += 1;
          break;
        }
      }
      i += 1;
    }
    if (!names.has(name)) {
      out += source.slice(start, i);
    }
  }
  return out;
}

let content = fs.readFileSync(srcFile, 'utf8');
content = removeFunctions(content, REMOVE_FUNCS);

content = content.replace(
  /^import svgPaths from "\.\/svg-ek6j2go00e";\n/m,
  "import svgPaths from './svg-paths';\n"
);

content = content.replace(
  /^import img\w+ from "\.\/[^"]+\.png";\n/gm,
  ''
);

const imgImports = [
  'imgFrame1',
  'imgFrame2',
  'imgLogoGold1',
  'imgFrame4',
  'imgFrame5',
  'imgFrame6',
  'imgFrame7',
  'imgFrame8',
  'imgFrame15',
  'imgFrame14',
  'imgFrame16',
  'imgFrame17',
  'imgFrame9',
  'imgFrame10',
  'imgFrame11',
  'imgFrame12',
  'imgFrame13',
  'imgFrame18',
  'imgFrame19',
  'imgFrame20',
  'imgFrame21',
  'imgFrame22',
  'imgFrame23',
  'imgFrame24',
  'imgFrame25',
  'imgFrame26',
  'imgFrame27',
  'imgDivCardElevated',
  'imgFrame28',
  'imgFrame29',
  'imgFrame30',
  'imgFrame31',
  'imgFrame32',
  'imgFrame33',
  'imgFrame34',
  'imgFrame35',
  'imgFrame36',
  'imgFrame37',
];

content =
  `import {\n  ${imgImports.join(',\n  ')},\n} from './assetMap';\n` + content;

content = content.replace(
  /export default function Home\(\)/,
  'export default function HomePage()'
);

content = content.replace(/\s*<Frame \/>\s*\n\s*<Frame2 \/>\s*\n/, '\n');

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'HomePage.tsx'), content);
fs.copyFileSync(svgSrc, path.join(outDir, 'svg-paths.ts'));
console.log('Wrote HomePage.tsx and svg-paths.ts');

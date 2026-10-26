const fs = require('node:fs');
const path = require('node:path');

const root = __dirname;
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const css = fs.readFileSync(path.join(root, 'styles.css'), 'utf8');
const worldData = fs.readFileSync(path.join(root, 'world-data.js'), 'utf8');
const js = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
const map = fs.readFileSync(path.join(root, 'assets', 'world-map.png')).toString('base64');
const character = fs.readFileSync(path.join(root, 'assets', 'character.png')).toString('base64');
const characterWoman = fs.readFileSync(path.join(root, 'assets', 'character-woman.png')).toString('base64');
const characterNonbinary = fs.readFileSync(path.join(root, 'assets', 'character-nonbinary.png')).toString('base64');

const standaloneCss = css.replace(
  'url("assets/world-map.png")',
  `url("data:image/png;base64,${map}")`
).replace(
  'url("assets/character.png")',
  `url("data:image/png;base64,${character}")`
).replace(
  'url("assets/character-woman.png")',
  `url("data:image/png;base64,${characterWoman}")`
).replace(
  'url("assets/character-nonbinary.png")',
  `url("data:image/png;base64,${characterNonbinary}")`
);

const standalone = html
  .replace('<link rel="stylesheet" href="styles.css" />', () => `<style>\n${standaloneCss}\n</style>`)
  .replace('<script src="./world-data.js"></script>', () => `<script>\n${worldData}\n</script>`)
  .replace('<script src="./app.js"></script>', () => `<script>\n${js}\n</script>`);

fs.writeFileSync(path.join(root, 'EVERLIFE-PLAY.html'), standalone);
console.log('Built EVERLIFE-PLAY.html');

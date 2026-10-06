import fs from 'node:fs';
import {mediaKey} from './validation.mjs';
const media=JSON.parse(fs.readFileSync('src/content/media.json'));
for(const file of fs.readdirSync('src/content').filter(f=>f.endsWith('.md'))){
 const path=`src/content/${file}`;let text=fs.readFileSync(path,'utf8');
 text=text.replace(/!\[([^\]]*)\]\((https?:\/\/[^\s)]+)(?:\s+"([^"]*)")?\)/g,(match,alt,url,title)=>{const item=media[mediaKey(url)];if(!item)throw new Error(`Missing detail media: ${url}`);const label=alt||title||'Research illustration';return item.kind==='video'?`<video src="${item.path}" poster="${item.poster}" aria-label="${label}" autoplay loop muted playsinline preload="metadata" width="${item.width}" height="${item.height}"></video>`:`![${label}](${item.path})`});
 fs.writeFileSync(path,text);
}

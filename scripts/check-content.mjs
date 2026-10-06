import fs from 'node:fs';import {validateRecords,mediaKey,bytesIn} from './validation.mjs';
const names=['news','publications','members','projects','resources','instagram','research-areas'];const media=JSON.parse(fs.readFileSync('src/content/media.json'));let missing=[];
for(const name of names){const records=JSON.parse(fs.readFileSync(`src/content/${name}.json`));validateRecords(name,records);console.log(`${name}: ${records.length}`);for(const record of records)if(record.imageSource&&!media[mediaKey(record.imageSource)])missing.push(`${name}/${record.id}: ${record.imageSource}`)}
const slides=JSON.parse(fs.readFileSync('src/content/slides.json'));for(const group of Object.values(slides))for(const slide of group)if(!media[mediaKey(slide.imageSource)])missing.push(`slides/${slide.id}: ${slide.imageSource}`);
for(const [key,item] of Object.entries(media))for(const file of [item.path,item.poster].filter(Boolean))if(!fs.existsSync(`public${file}`))throw new Error(`Missing local media ${key}: ${file}`);
for(const file of fs.readdirSync('src/content').filter(f=>f.endsWith('.md'))){const md=fs.readFileSync(`src/content/${file}`,'utf8');if(/!\[[^\]]*\]\(https?:\/\/[^)]*(?:unist\.info|bluehost)/i.test(md))throw new Error(`${file}: WordPress image dependence`)}
if(missing.length)throw new Error(`Unmigrated media:\n${missing.join('\n')}`);
const bytes=bytesIn('public');if(bytes>20_000_000)throw new Error(`Homepage public files exceed 20 MB: ${bytes}`);console.log(`Public assets: ${bytes} bytes`);

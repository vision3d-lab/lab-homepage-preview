// Exercises the documented editing flow in an isolated temporary candidate; never publishes sample content.
import fs from'node:fs';import os from'node:os';import path from'node:path';import {spawnSync}from'node:child_process';
const candidate=fs.mkdtempSync(path.join(os.tmpdir(),'lab-content-example-'));
for(const file of ['src','public','scripts','docs','astro.config.mjs','tsconfig.json','package.json','package-lock.json'])fs.cpSync(file,path.join(candidate,file),{recursive:true});fs.symlinkSync(path.resolve('node_modules'),path.join(candidate,'node_modules'),'dir');
const newsFile=path.join(candidate,'src/content/news.json'),pubFile=path.join(candidate,'src/content/publications.json');let news=JSON.parse(fs.readFileSync(newsFile)),pubs=JSON.parse(fs.readFileSync(pubFile));
for(const row of news)if(row.homeOrder!==undefined)row.homeOrder++;
news.unshift({id:'validation-example-news',year:'2026',date:'2026.01.01',title:'Content update validation example',body:'<p>Content update validation example</p>',summary:'Content update validation example',homeOrder:0,imageSource:null,source:'https://example.test/'});
pubs.unshift({...pubs[0],id:'validation-example-paper',title:'Publication update validation example',authors:'Example Author',venue:'Example Venue, 2026',body:'<p><strong>Publication update validation example</strong><br>Example Author<br>Example Venue, 2026</p>',links:[]});
fs.writeFileSync(newsFile,JSON.stringify(news));fs.writeFileSync(pubFile,JSON.stringify(pubs));
const built=spawnSync('npm',['run','build'],{cwd:candidate,env:{...process.env,ASTRO_TELEMETRY_DISABLED:'1'},encoding:'utf8'});if(built.status!==0)throw new Error(built.stdout+built.stderr);
for(const [file,expected]of[['index.html','Content update validation example'],['news/index.html','Content update validation example'],['publications/index.html','Publication update validation example']])if(!fs.readFileSync(path.join(candidate,'dist',file),'utf8').includes(expected))throw new Error(`Update missing from ${file}`);
news.push(news[0]);fs.writeFileSync(newsFile,JSON.stringify(news));const failed=spawnSync('node',['scripts/check-content.mjs'],{cwd:candidate,encoding:'utf8'});if(failed.status===0||!failed.stderr.includes('duplicate id'))throw new Error('Invalid edit did not stop build validation');
console.log('News + Home and publication addition rendered; duplicate edit failed validation. Sample content exists only in temporary candidate.');

import fs from 'node:fs';import path from 'node:path';
export const routes=['/','/news/','/professor/','/students/','/research/','/project/','/resource/','/publications/','/contact/','/recruitment/','/sns/'];
export function mediaKey(url){try{return decodeURIComponent(new URL(url).pathname).replace(/-\d+x\d+(?=\.[^.]+$)/,'')}catch{return url}}
export function validateRecords(name,records){
 const required={news:['id','title','body','year'],publications:['id','title','authors','venue','year','type','body'],members:['id','name','group','body'],projects:['id','title','status','body'],resources:['id','title','category'],instagram:['id','url','title'], 'research-areas':['id','title','category','imageSource']}[name];
 if(!Array.isArray(records))throw new Error(`${name} must be an array`);const ids=new Set();
 for(const item of records){for(const field of required||[])if(typeof item[field]!=='string'||(field!=='body'&&!item[field].trim())){if(name==='news'&&item.homeOnly&&['body','year'].includes(field))continue;throw new Error(`${name}/${item.id}: missing ${field}`)}if(ids.has(item.id))throw new Error(`${name}: duplicate id ${item.id}`);ids.add(item.id);
 if(name==='instagram'&&!/^https:\/\/www\.instagram\.com\/p\/[A-Za-z0-9_-]+\/$/.test(item.url))throw new Error(`Invalid Instagram permalink ${item.id}`);
 for(const value of Object.values(item))if(typeof value==='string'&&(/<\/?(?:script|iframe)\b|\bon\w+=|javascript:/i.test(value)))throw new Error(`${name}/${item.id}: unexpected active HTML`);
 }
}
export function filesIn(dir){return fs.readdirSync(dir,{withFileTypes:true}).flatMap(item=>item.isDirectory()?filesIn(path.join(dir,item.name)):[path.join(dir,item.name)])}
export function bytesIn(dir){return filesIn(dir).reduce((sum,p)=>sum+fs.statSync(p).size,0)}

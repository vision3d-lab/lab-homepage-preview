import media from '../content/media.json';
export const preview=import.meta.env.PUBLIC_SITE_MODE!=='production';
export const base=import.meta.env.BASE_URL.replace(/\/$/,'');
export const href=(route:string)=>`${base}${route}`;
export function mediaKey(url:string){try{return decodeURIComponent(new URL(url).pathname).replace(/-\d+x\d+(?=\.[^.]+$)/,'')}catch{return url}}
export function asset(source:string|null|undefined){return source?(media as Record<string,{path:string;poster?:string;kind?:string;width:number;height:number}>)[mediaKey(source)]:undefined}
export function localHTML(html:string){return html.replace(/(href|src|poster)="(\/(?!\/)[^"]*)"/g,(_,attribute,url)=>`${attribute}="${href(url)}"`)}
export const menu=[{label:'Home',url:'/'},{label:'News',url:'/news/'},{label:'Members',url:'/professor/',children:[{label:'Professor',url:'/professor/'},{label:'Students',url:'/students/'}]},{label:'Research',url:'/research/',children:[{label:'Research',url:'/research/'},{label:'Project',url:'/project/'},{label:'Resource',url:'/resource/'}]},{label:'Publications',url:'/publications/'},{label:'Contact',url:'/contact/',children:[{label:'Contact',url:'/contact/'},{label:'Recruitment',url:'/recruitment/'}]},{label:'SNS',url:'/sns/'}];

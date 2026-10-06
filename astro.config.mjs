import {defineConfig} from 'astro/config';
import {unified} from '@astrojs/markdown-remark';
const preview=process.env.SITE_MODE!=='production';
const base=preview?'/lab-homepage-preview':'/';
function mediaBase(){return(tree)=>{const visit=(node)=>{if(node.type==='image'&&node.url?.startsWith('/lab-media/'))node.url=(preview?base:'')+node.url;if(node.type==='html')node.value=node.value.replace(/(src|poster)="(\/lab-media\/)/g,`$1="${preview?base:''}$2`);for(const child of node.children||[])visit(child)};visit(tree)}}
export default defineConfig({site:'https://vision3d-lab.github.io',base,trailingSlash:'always',output:'static',build:{assets:'lab-assets'},markdown:{processor:unified({remarkPlugins:[mediaBase]})},vite:{define:{'import.meta.env.PUBLIC_SITE_MODE':JSON.stringify(preview?'preview':'production')}}});

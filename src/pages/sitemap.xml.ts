import type {APIRoute} from 'astro';
import {href} from '../lib/site';
export const GET:APIRoute=()=>new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${['/','/news/','/professor/','/students/','/research/','/project/','/resource/','/publications/','/contact/','/recruitment/','/sns/'].map(route=>`<url><loc>https://vision3d-lab.github.io${href(route)}</loc></url>`).join('')}</urlset>`,{headers:{'Content-Type':'application/xml'}});

import type {APIRoute} from 'astro';
import {preview,href} from '../lib/site';
export const GET:APIRoute=()=>new Response(preview?'User-agent: *\nDisallow: /\n':`User-agent: *\nAllow: /\nSitemap: https://vision3d-lab.github.io${href('/sitemap.xml')}\n`,{headers:{'Content-Type':'text/plain'}});

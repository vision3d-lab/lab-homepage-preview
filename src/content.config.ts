import {defineCollection} from 'astro:content';
import {z} from 'zod';
import {glob} from 'astro/loaders';
export const collections={details:defineCollection({loader:glob({pattern:'*.md',base:'./src/content'}),schema:z.object({title:z.string(),source:z.url()})})};

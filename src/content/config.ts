import { defineCollection, z } from "astro:content";

const resume = defineCollection({
	schema: z.object({
		gid: z.number(),
		title: z.string(),
		image: z.string(),
		highlights: z.array(z.string()),
	}),
});

const timeline = defineCollection({
	schema: z.object({
		gid: z.number(),
		title: z.string(),
		label: z.string(),
		image: z.string(),
		subtitle: z.string(),
		highlights: z.array(z.string()),
	}),
});

export const collections = { resume, timeline };

import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = (await getCollection("blog")).sort((a, b) => (b.data.pubDate?.getTime() ?? 0) - (a.data.pubDate?.getTime() ?? 0));

  return rss({
    title: "Gerind Tershana — Blog",
    description: "Notes on programming, web development and what I'm building.",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.slug}/`,
    })),
  });
}

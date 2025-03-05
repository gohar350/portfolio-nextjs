export async function GET() {
  function getCurrentDate(date) {
    return date.split("T")[0];
  }

  const siteUrl =
    process.env.NEXT_PUBLIC_SITEBASE_URL || "https://muhammadgohar.vercel.app";

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}</loc> 
    <lastmod>${getCurrentDate(new Date().toISOString())}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>1</priority>
  </url>
    <url>
    <loc>${siteUrl}/about</loc> 
    <lastmod>${getCurrentDate(new Date().toISOString())}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>1</priority>
  </url>
    <url>
    <loc>${siteUrl}/resume</loc> 
    <lastmod>${getCurrentDate(new Date().toISOString())}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>1</priority>
  </url>
    <url>
    <loc>${siteUrl}/portfolio</loc> 
    <lastmod>${getCurrentDate(new Date().toISOString())}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>1</priority>
  </url>
      <url>
    <loc>${siteUrl}/contact</loc> 
    <lastmod>${getCurrentDate(new Date().toISOString())}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>1</priority>
  </url>
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}

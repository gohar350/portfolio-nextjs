export async function GET() {
  function getCurrentDate(date) {
    return date.split("T")[0];
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourwebsite.com/</loc> 
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

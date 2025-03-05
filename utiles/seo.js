export const commonSeo = (canonicalURL, data = {}, category = "") => {
  return {
    title: data?.meta_title || process.env.NEXT_PUBLIC_SITE_NAME,
    description: `${category ? `${category} - ` : ""}${
      data?.meta_description || process.env.NEXT_PUBLIC_SITE_NAME
    }`,
    keywords: [
      ...(data?.meta_keywords ? data.meta_keywords.split(",") : []),
      ...(data?.key_values ? data.key_values.split(",") : []),
    ].filter(Boolean), // Ensures no empty values
    openGraph: {
      title: data?.meta_title || process.env.NEXT_PUBLIC_SITE_NAME,
      description: data?.meta_description || process.env.NEXT_PUBLIC_SITE_NAME,
      url: canonicalURL || process.env.NEXT_PUBLIC_SITEBASE_URL,
      siteName: process.env.NEXT_PUBLIC_SITE_NAME,
      images: [
        {
          url: data?.image || process.env.NEXT_PUBLIC_SITE_IMAGE,
        },
      ],
      locale: "en-US",
      type: "website",
    },
    alternates: {
      canonical: canonicalURL,
    },
    robots: {
      index: "index, follow", // Ensures search engines index the page
      "max-video-preview": -1,
      "max-image-preview": "large", // Improved for better search visibility
      "max-snippet": "max",
    },
    response: data,
  };
};

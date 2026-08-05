/** @type {import('next').NextConfig} */

const IMAGE_HOSTS = [
  "racingandsports.co.uk",
  "www.racingandsports.co.uk",
  "www.betwayscores.com",
  "media.licdn.com",
  "footballfirst.com",
  "www.footballfirst.com",
  "scoremania.com",
  "www.scoremania.com",
  "planetbaseball.com",
  "www.planetbaseball.com",
  "ssr-widget-7jj6.vercel.app",
  "www.hollywoodbets.net",
  "hollywoodbets.net",
];

const nextConfig = {
  images: {
    remotePatterns: IMAGE_HOSTS.map((hostname) => ({
      protocol: "https",
      hostname,
    })),
  },
};

export default nextConfig;

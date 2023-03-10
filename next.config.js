/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  reactStrictMode: true,

  images: {
    domains: ['placeimg.com']
  },

  env: {
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    GOOGLE_REDIRECT_URI: process.env.GOOGLE_REDIRECT_URI,
    GOOGLE_OAUTH_SCOPE: process.env.GOOGLE_OAUTH_SCOPE,

    FACEBOOK_CLIENT_ID: process.env.FACEBOOK_CLIENT_ID,
    FACEBOOK_CLIENT_SECRET: process.env.FACEBOOK_CLIENT_SECRET,
    FACEBOOK_REDIRECT_URI: process.env.FACEBOOK_REDIRECT_URI,
    FACEBOOK_OAUTH_SCOPE: process.env.FACEBOOK_OAUTH_SCOPE,
    FACEBOOK_OAUTH_FIELDS: process.env.FACEBOOK_OAUTH_FIELDS,

    GOOGLE_ANALYTICS_ENABLE: process.env.GOOGLE_ANALYTICS_ENABLE || false,
    GOOGLE_ANALYTICS_TRACKING_ID: process.env.GOOGLE_ANALYTICS_TRACKING_ID
  }
}

module.exports = nextConfig

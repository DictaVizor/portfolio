/** @type {import('next').NextConfig} */

const withTM = require("next-transpile-modules")(["@portfolio/icons", "@portfolio/common"])


const nextConfig = {
    reactStrictMode: true,
}

module.exports = withTM(nextConfig)
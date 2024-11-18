/** @type {import('next').NextConfig} */

const nextConfig = {
    output: 'standalone',
    images:{
        remotePatterns:[
            {
                protocol: "https",
                hostname: "i.pinimg.com",     
            }
        ]
    }
}

export default nextConfig;
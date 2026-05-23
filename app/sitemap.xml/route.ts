import { NextResponse } from 'next/server'

export async function GET() {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://yourdomain.com'

    // Fetch your dynamic URLs here (same as above)
    const staticUrls = ['/', '/about', '/services', '/contact'].map(
        (path) => `<url><loc>${baseUrl}${path}</loc><priority>0.8</priority></url>`
    )

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticUrls.join('')}
    </urlset>`

    return new NextResponse(sitemap, {
        headers: {
            'Content-Type': 'application/xml',
        },
    })
}
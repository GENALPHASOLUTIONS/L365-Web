import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title?: string
  description?: string
  canonical?: string
  keywords?: string
  ogImage?: string
  schema?: object
}

const BASE_URL = 'https://logistics365.lk'
const DEFAULT_OG = `${BASE_URL}/logo.png`

export default function SEO({ title, description, canonical, keywords, ogImage, schema }: SEOProps) {
  const fullTitle = title ? `${title} | Logistics 365 (Pvt) Ltd` : 'Logistics 365 (Pvt) Ltd — Seamless Synergy in Freight Forwarding'
  const desc = description || 'Logistics 365 is a premier freight forwarding company in Sri Lanka offering sea freight, air freight, customs clearance, and end-to-end supply chain solutions.'
  const url = canonical ? `${BASE_URL}${canonical}` : BASE_URL

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage || DEFAULT_OG} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Logistics 365 (Pvt) Ltd" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={ogImage || DEFAULT_OG} />
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      {schema && <script type="application/ld+json">{JSON.stringify(schema)}</script>}
    </Helmet>
  )
}

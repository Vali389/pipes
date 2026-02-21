import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const BASE_URL = 'https://www.bwpipes.com'

export default function CanonicalLink() {
  const location = useLocation()

  useEffect(() => {
    // Get the current path (including search params if needed, but exclude hash)
    let path = location.pathname === '/' ? '' : location.pathname
    
    // Remove trailing slash except for root
    if (path !== '' && path.endsWith('/')) {
      path = path.slice(0, -1)
    }
    
    const canonicalUrl = `${BASE_URL}${path}`

    // Find existing canonical link or create new one
    let canonicalLink = document.querySelector('link[rel="canonical"]')
    
    if (!canonicalLink) {
      // Create new canonical link if it doesn't exist
      canonicalLink = document.createElement('link')
      canonicalLink.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalLink)
    }

    // Update the href
    canonicalLink.setAttribute('href', canonicalUrl)

    // Also update og:url and twitter:url for consistency
    let ogUrl = document.querySelector('meta[property="og:url"]')
    if (!ogUrl) {
      ogUrl = document.createElement('meta')
      ogUrl.setAttribute('property', 'og:url')
      document.head.appendChild(ogUrl)
    }
    ogUrl.setAttribute('content', canonicalUrl)

    let twitterUrl = document.querySelector('meta[property="twitter:url"]')
    if (!twitterUrl) {
      twitterUrl = document.createElement('meta')
      twitterUrl.setAttribute('property', 'twitter:url')
      document.head.appendChild(twitterUrl)
    }
    twitterUrl.setAttribute('content', canonicalUrl)
  }, [location.pathname])

  return null // This component doesn't render anything
}


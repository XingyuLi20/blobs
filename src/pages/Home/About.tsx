import { useEffect, useState } from 'react'

export default function About() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    setIsMobile(window.matchMedia('only screen and (max-width: 760px)').matches)
  }, [])
  return (
    <div style={isMobile ? { margin: '0 30px' } : { margin: '0 200px' }}>
      <h1
        style={{
          fontFamily: 'Londrina Solid',
          fontSize: '4rem',
          fontWeight: 500,
          marginTop: 56,
          marginBottom: 24,
        }}
      >
        About
      </h1>
      <p
        style={{
          fontWeight: 500,
          letterSpacing: -0.25,
          fontSize: '1.3rem',
        }}
      >
        Nouns are an experimental attempt to improve the formation of on-chain
        avatar communities. While projects such as Cryptopunks have attempted to
        bootstrap digital community and identity, Nouns attempt to bootstrap
        identity, community, governance, and a treasury that can be used by the
        community.
        <br />
        <br />
        Learn more below, or start creating Nouns off-chain using the
        Playground.
      </p>
    </div>
  )
}

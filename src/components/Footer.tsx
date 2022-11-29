import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    setIsMobile(window.matchMedia('only screen and (max-width: 760px)').matches)
  }, [])
  return (
    <div
      style={{
        margin: '100px 0 60px 0',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Link to='#'>
        <p
          className='glow'
          style={
            isMobile
              ? {
                  margin: '8px 16px',
                  color: '#2a2a2a',
                  transition: 'all .15s ease-in-out',
                  fontWeight: 600,
                  fontSize: 16,
                }
              : {
                  margin: '8px 30px',
                  color: '#2a2a2a',
                  transition: 'all .15s ease-in-out',
                  fontWeight: 600,
                  fontSize: 16,
                }
          }
        >
          Twitter
        </p>
      </Link>
      <Link to='#'>
        <p
          className='glow'
          style={
            isMobile
              ? {
                  margin: '8px 16px',
                  color: '#2a2a2a',
                  transition: 'all .15s ease-in-out',
                  fontWeight: 600,
                  fontSize: 16,
                }
              : {
                  margin: '8px 30px',
                  color: '#2a2a2a',
                  transition: 'all .15s ease-in-out',
                  fontWeight: 600,
                  fontSize: 16,
                }
          }
        >
          Etherscan
        </p>
      </Link>
      <Link to='#'>
        <p
          className='glow'
          style={
            isMobile
              ? {
                  margin: '8px 16px',
                  color: '#2a2a2a',
                  transition: 'all .15s ease-in-out',
                  fontWeight: 600,
                  fontSize: 16,
                }
              : {
                  margin: '8px 30px',
                  color: '#2a2a2a',
                  transition: 'all .15s ease-in-out',
                  fontWeight: 600,
                  fontSize: 16,
                }
          }
        >
          Forums
        </p>
      </Link>
    </div>
  )
}

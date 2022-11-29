import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { DAO, Docs, Discourse } from '../icons'
import { ButtonTypeOne, ButtonTypeTwo } from './Buttons'

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    setIsMobile(window.matchMedia('only screen and (max-width: 760px)').matches)
  }, [])
  return (
    <div
      style={{
        padding: '24px 12px',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Link to='/'>
        <img
          src='https://nouns.wtf/static/media/logo.f217962c.svg'
          alt='logo'
          style={{ height: 75, width: 75, transition: 'all .15s ease-in-out' }}
        />
      </Link>
      <div
        style={
          isMobile
            ? { display: 'flex', alignItems: 'center', marginRight: 10 }
            : { display: 'flex', alignItems: 'center', gap: 10 }
        }
      >
        {isMobile ? (
          <ButtonTypeTwo title='Connect' />
        ) : (
          <>
            <ButtonTypeOne icon={DAO} title='DAO' />
            <ButtonTypeOne icon={Docs} title='Docs' />
            <ButtonTypeOne icon={Discourse} title='Discourse' />
            <ButtonTypeTwo title='Connect' />
          </>
        )}
      </div>
    </div>
  )
}

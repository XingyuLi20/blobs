import { useEffect, useState } from 'react'
import FAQTab from './FAQTab'

function SummaryExpand() {
  return (
    <ul style={{ paddingLeft: 30 }}>
      <li
        style={{
          fontSize: 19,
          color: '#212529',
          letterSpacing: -0.25,
          lineHeight: '28px',
        }}
      >
        Nouns artwork is in the public domain.
      </li>
      <li
        style={{
          fontSize: 19,
          color: '#212529',
          letterSpacing: -0.25,
          lineHeight: '28px',
        }}
      >
        One Noun is trustlessly auctioned every 24 hours, forever.
      </li>
      <li
        style={{
          fontSize: 19,
          color: '#212529',
          letterSpacing: -0.25,
          lineHeight: '28px',
        }}
      >
        100% of Noun auction proceeds are trustlessly sent to the treasury.
      </li>
      <li
        style={{
          fontSize: 19,
          color: '#212529',
          letterSpacing: -0.25,
          lineHeight: '28px',
        }}
      >
        Settlement of one auction kicks off the next.
      </li>
      <li
        style={{
          fontSize: 19,
          color: '#212529',
          letterSpacing: -0.25,
          lineHeight: '28px',
        }}
      >
        All Nouns are members of Nouns DAO.
      </li>
      <li
        style={{
          fontSize: 19,
          color: '#212529',
          letterSpacing: -0.25,
          lineHeight: '28px',
        }}
      >
        Nouns DAO uses a fork of Compound Governance.
      </li>
      <li
        style={{
          fontSize: 19,
          color: '#212529',
          letterSpacing: -0.25,
          lineHeight: '28px',
        }}
      >
        One Noun is equal to one vote.
      </li>
      <li
        style={{
          fontSize: 19,
          color: '#212529',
          letterSpacing: -0.25,
          lineHeight: '28px',
        }}
      >
        The treasury is controlled exclusively by Nouns via governance.
      </li>
      <li
        style={{
          fontSize: 19,
          color: '#212529',
          letterSpacing: -0.25,
          lineHeight: '28px',
        }}
      >
        Artwork is generative and stored directly on-chain (not IPFS).
      </li>
      <li
        style={{
          fontSize: 19,
          color: '#212529',
          letterSpacing: -0.25,
          lineHeight: '28px',
        }}
      >
        No explicit rules exist for attribute scarcity; all Nouns are equally
        rare.
      </li>
      <li
        style={{
          fontSize: 19,
          color: '#212529',
          letterSpacing: -0.25,
          lineHeight: '28px',
        }}
      >
        Nounders receive rewards in the form of Nouns (10% of supply for first 5
        years).
      </li>
    </ul>
  )
}
export default function FAQ() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    setIsMobile(window.matchMedia('only screen and (max-width: 760px)').matches)
  }, [])
  return (
    <div
      style={
        isMobile
          ? {
              margin: '70px 30px',
              display: 'flex',
              flexDirection: 'column',
              gap: 36,
            }
          : {
              margin: '70px 200px',
              display: 'flex',
              flexDirection: 'column',
              gap: 36,
            }
      }
    >
      <FAQTab title='Summary' content={SummaryExpand} />
      <FAQTab title='Daily Auctions' content={SummaryExpand} />
      <FAQTab title='Nouns DAO' content={SummaryExpand} />
      <FAQTab title='Governance ‘Slow Start’' content={SummaryExpand} />
      <FAQTab title='Noun Traits' content={SummaryExpand} />
      <FAQTab title='On-Chain Artwork' content={SummaryExpand} />
      <FAQTab title='Noun Seeder Contract' content={SummaryExpand} />
    </div>
  )
}

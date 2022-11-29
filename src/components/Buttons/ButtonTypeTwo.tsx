export default function ButtonTypeOne(props: { title: string }) {
  return (
    <div
      className='buttonTypeTwo'
      style={{
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        border: '1px solid #cfbdba',
        backgroundColor: '#f9f1f1',
        borderRadius: 10,
        height: 40,
        padding: '0 16px 0 16px',
        transition: 'all .125s ease-in-out',
        cursor: 'pointer',
      }}
    >
      <p
        style={{
          position: 'relative',
          top: -1,
          fontWeight: 700,
          fontSize: 15,
          margin: 0,
        }}
      >
        {props.title}
      </p>
    </div>
  )
}

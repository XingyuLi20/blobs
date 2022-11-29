export default function ButtonTypeOne(props: {
  icon: Function
  title: string
}) {
  return (
    <div
      className='buttonTypeOne'
      style={{
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        border: '1px solid #cfbdba',
        borderRadius: 10,
        height: 40,
        padding: '0 14px 0 7px',
        transition: 'all .125s ease-in-out',
        cursor: 'pointer',
      }}
    >
      <>
        {props.icon()}
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
      </>
    </div>
  )
}

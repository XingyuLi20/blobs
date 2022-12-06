import { useState } from "react";

export default function FAQTab(props: { title: string; content: Function }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          cursor: "pointer",
          maxWidth: 876,
          margin: "auto",
        }}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <h2
          className="glow"
          style={{
            fontSize: 40,
            lineHeight: 1,
            margin: "0 0 4px",
            fontFamily: "Londrina Solid",
            fontWeight: 500,
          }}
        >
          {props.title}
        </h2>
        <img
          src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3E%3Cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z'/%3E%3C/svg%3E"
          alt=""
          style={
            open
              ? { width: 20, height: 20, transform: "rotate(180deg)" }
              : { width: 20, height: 20 }
          }
        />
      </div>
      <div
        style={
          open
            ? {
                maxWidth: 876,
                margin: "auto",
              }
            : {
                display: "none",
              }
        }
      >
        {props.content()}
      </div>
    </div>
  );
}

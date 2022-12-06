export default function AvatarIcon({ size = 21 }) {
  return (
    <svg width={size} height={size} style={{ margin: "4px 0px 6px 6px" }}>
      <rect
        x="0"
        y="0"
        width="21"
        height="21"
        fill="#F38900"
        transform="translate(4.618875840601855 4.077395541728465) rotate(95.8 10.5 10.5)"
      ></rect>
      <rect
        x="0"
        y="0"
        width="21"
        height="21"
        fill="#15CBF2"
        transform="translate(7.508898046331192 7.610471064275834) rotate(155.5 10.5 10.5)"
      ></rect>
      <rect
        x="0"
        y="0"
        width="21"
        height="21"
        fill="#018C70"
        transform="translate(-6.217041016573244 18.54807233675028) rotate(136.5 10.5 10.5)"
      ></rect>
    </svg>
  );
}

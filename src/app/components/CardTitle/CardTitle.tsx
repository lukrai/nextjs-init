function CardTitle({ text }: { text: string }) {
  return (
    <h6
      className="font-inter text-[15px] font-bold leading-[19px] text-[#212327]"
      // eslint-disable-next-line quotes
      style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
    >
      {text}
    </h6>
  );
}

export default CardTitle;

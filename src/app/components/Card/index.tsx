import Image from 'next/image';

type CardProps = {
  children: React.ReactNode;
  imageUrl?: string;
};

function Card({ children, imageUrl }: CardProps) {
  return (
    <div className="w-[355px] rounded-[10px] bg-white shadow-lg">
      {imageUrl && <Image src={imageUrl} alt={''} width={355} height={200} />}
      <div className="flex flex-col gap-4 p-4">{children}</div>
    </div>
  );
}

export default Card;

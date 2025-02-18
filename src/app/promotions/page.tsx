import PromotionCards from '../features/promotions';
import PromotionsHeading from '../features/promotions/PromotionsHeading';

export default function PromotionsPage() {
  return (
    <>
      <PromotionsHeading />
      <PromotionCards numberOfCards={3} />;
    </>
  );
}

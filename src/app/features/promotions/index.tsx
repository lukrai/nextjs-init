import Card from '@/app/components/Card';
import CardContent from '@/app/components/CardContent';
import CardTitle from '@/app/components/CardTitle/CardTitle';
import StyledButton from '@/app/components/Button';

type PromotionCardsProps = {
  numberOfCards: number;
};

function PromotionCards({ numberOfCards }: PromotionCardsProps) {
  // return card items `numberOfCards` times
  //     <Card imageUrl="/placeholder.png">
  //     <CardTitle text="Lotto offer" />
  //     <CardContent content="Stake refunded as free bet if your selection finishes 2nd to the starting price favourite at the selected meetings. Max refund 20 per customer as a free bet." />
  //     <Button fullWidth>More Info</Button>
  //   </Card>

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        {Array.from({ length: numberOfCards }).map((_, index) => (
          <Card key={index} imageUrl="/placeholder.png">
            <CardTitle text="Lotto offer" />
            <CardContent content="Stake refunded as free bet if your selection finishes 2nd to the starting price favourite at the selected meetings. Max refund 20 per customer as a free bet." />
            <StyledButton fullWidth>More Info</StyledButton>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default PromotionCards;

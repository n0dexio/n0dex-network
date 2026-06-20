type Props = {
  amount: number;
};

export default function RewardCard({
  amount,
}: Props) {
  return (
    <div>
      <h2>{amount} NDX</h2>
    </div>
  );
}

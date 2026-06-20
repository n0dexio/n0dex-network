type Props = {
  name: string;
  status: string;
};

export default function NodeCard({
  name,
  status,
}: Props) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Status: {status}</p>
    </div>
  );
}

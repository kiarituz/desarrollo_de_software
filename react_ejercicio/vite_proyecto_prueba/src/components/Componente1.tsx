type Props = {
  onRefrescar: () => void;
};

export default function MiBoton({ onRefrescar }: Props) {
  return (
    <button onClick={() => onRefrescar()}>
      Refrescar lista
    </button>
  );
}





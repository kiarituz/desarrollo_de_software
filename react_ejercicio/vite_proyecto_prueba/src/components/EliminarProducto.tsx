type Producto = {
    id: number;
    nombre: string;
    precio: number;
};

type Props = {
  productos: Producto[];
  onEliminar: (id: number) => void;
};

export default function EliminarProducto({ productos, onEliminar }: Props) {
  return (
    <ul>
      {productos.map((p) => (
        <li key={p.id}>
          {p.nombre} - ${p.precio}
          <button
            style={{ marginLeft: "10px", color: "red" }}
            onClick={() => onEliminar(p.id)}
          >
            Eliminar
          </button>
        </li>
      ))}
    </ul>
  );
}

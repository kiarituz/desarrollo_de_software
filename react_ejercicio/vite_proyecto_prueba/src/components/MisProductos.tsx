import './MisProductos.css';

type Producto = {
    id: number;
    nombre: string;
    precio: number;
};

type Props = {
  productos: Producto[];
};

function MisProductos({ productos }: Props) {
    return (
        <div className="mis-productos">
            <h2>Lista de Productos</h2>
            <p>Se obtuvieron {productos.length} productos</p>
            <ul>
                {productos.map((prod) => (
                <li key={prod.id}>
                    {prod.id}: {prod.nombre} — (${prod.precio})
                </li>
                ))}
            </ul>
        </div>
    );

}

export default MisProductos;

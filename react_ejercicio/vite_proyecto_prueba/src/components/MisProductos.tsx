//import { useState, useEffect } from "react";
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
    /*const [productos, setProductos] = useState<Producto[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    fetch("http://127.0.0.1:8000/productos/")
        .then((res) => res.json())
        .then((data) => {
            setProductos(data);
            setLoading(false);
        })
        .catch((err) => {
            console.error("Error al obtener productos:", err);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <p>Cargando productos...</p>;
    }*/

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

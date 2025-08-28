import { useState, useEffect } from "react";
import MisProductos from './components/MisProductos.tsx'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

type Producto = {
    id: number;
    nombre: string;
    precio: number;
};

function App() {
  const [productos, setProductos] = useState<Producto[]>([]);
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
  }

  return (
    <div>
      <h1>Sistema de Productos</h1>
      <MisProductos productos={productos} />
    </div>
  );
}

export default App

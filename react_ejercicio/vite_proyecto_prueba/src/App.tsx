import { useState, useEffect } from "react";
import MisProductos from './components/MisProductos.tsx'
import MiBoton from './components/Componente1.tsx'
import EliminarProducto from "./components/EliminarProducto.tsx";
import './App.css'

type Producto = {
  id: number;
  nombre: string;
  precio: number;
};

function App() {
  const [productos, setProductos] = useState<Producto[]>([]);

  const fetchProductos = () => {
    console.log("Refrescando productos...");
    fetch("http://127.0.0.1:8000/productos/", { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        console.log("Productos recibidos:", data);
        setProductos([...data]); // aseguramos cambio de estado
      });
  };

  const eliminarProducto = (id: number) => {
    fetch(`http://127.0.0.1:8000/productos/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Error al eliminar");
        return res.json();
      })
      .then((data) => {
        console.log("Producto eliminado:", data);
        // Actualizamos la lista
        setProductos((prev) => prev.filter((p) => p.id !== id));
      })
      .catch((err) => console.error(err));
  };



  useEffect(() => {
    fetchProductos();
  }, []);

  useEffect(() => {
  let lastTime = 0;

  const handleMouseMove = (e: MouseEvent) => {
    const now = Date.now();
    if (now - lastTime < 100) return; // 🔹 espera 100ms
    lastTime = now;

    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = `${e.pageX}px`;
    heart.style.top = `${e.pageY}px`;
    heart.textContent = "💕";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 1000);
  };

  document.addEventListener("mousemove", handleMouseMove);
  return () => {
    document.removeEventListener("mousemove", handleMouseMove);
  };
}, []);

  return (
    <div>
      <h1>Sistema de Productos</h1>
      <MisProductos productos={productos} />
      <EliminarProducto productos={productos} onEliminar={eliminarProducto} />
      <MiBoton onRefrescar={fetchProductos} />
    </div>
  );
}

export default App

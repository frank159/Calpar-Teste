// app/page.tsx ou app/home/page.tsx (dependendo de sua estrutura)
import InputPage from "@/app/inputPage";
import { ToastContainer } from "react-toastify"; // Importando ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Estilos necessários

export default function Home() {
  return (
    <div>
      <InputPage />
      <ToastContainer /> {/* Componente global de Toasts */}
    </div>
  );
}

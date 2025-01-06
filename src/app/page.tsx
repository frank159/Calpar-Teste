import InputPage from "@/app/inputPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <div>
      <InputPage />
      <ToastContainer />
    </div>
  );
}

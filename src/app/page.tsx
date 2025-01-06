import HomePage from "@/app/HomePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <div>
      <HomePage />
      <ToastContainer />
    </div>
  );
}

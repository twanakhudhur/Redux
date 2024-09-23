import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, [navigate]);
  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-center text-white text-3xl">Page Not Found</h1>
    </div>
  );
}

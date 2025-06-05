import { useState, useEffect } from "react";

function PopUp({ message, show, onClose, color }) {

  const [btncolor, setBtncolor] = useState();
  

  useEffect(() => {
    if (show) {
      setBtncolor(color);
      const timer = setTimeout(onClose, 3000); 
      return () => clearTimeout(timer); 
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className={`fixed bottom-[15%] left-[50%] -translate-x-[50%] ${btncolor ? 'bg-red-500' : 'bg-green-500'} text-white px-4 py-2 rounded shadow-lg transition-all duration-300 z-50`} >
      {message}
    </div>
  );
}

export default PopUp

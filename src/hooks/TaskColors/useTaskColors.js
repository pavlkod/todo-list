import { useState, useEffect } from "react";

import { http } from "../../utils/axios";

const useTaskColors = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [colors, setColors] = useState([]);
  const [selectedColor, setSelectedColor] = useState(null);

  useEffect(() => {
    http.get("/colors").then(({ data }) => {
      setColors(data);
      setSelectedColor(data[0].id);
    });
  }, []);

  return { isLoading, setIsLoading, colors, selectedColor, setSelectedColor };
};

export { useTaskColors };

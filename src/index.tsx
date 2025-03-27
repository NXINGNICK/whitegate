import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // Ensure this file exists or remove this line

const root = createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <div>Hello, World!</div>
  </React.StrictMode>
);

// Dummy export to ensure the file is treated as a module
export const __dummyExport = {};

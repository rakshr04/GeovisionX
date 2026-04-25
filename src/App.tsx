import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Landing } from "@/pages/Landing";
import { Features } from "@/pages/Features";
import { Flood } from "@/pages/Flood";
import { Wildfire } from "@/pages/Wildfire";
import { Crop } from "@/pages/Crop";
import { ParticleBackground } from "@/components/ui/particle-background";

function App() {
  // Simple dark mode force for this demo
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <BrowserRouter>
      <ParticleBackground />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route element={<Layout />}>
          <Route path="features" element={<Features />} />
          <Route path="flood" element={<Flood />} />
          <Route path="wildfire" element={<Wildfire />} />
          <Route path="crop" element={<Crop />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

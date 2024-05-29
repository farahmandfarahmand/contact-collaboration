import { Route, Routes } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import ContactUs from "./pages/ContactUs";
import CollaborationUs from "./pages/CollaborationUs"

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <div className="container xl:max-w-screen-lg   ">
        <Routes>
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/collaboration" element={<CollaborationUs />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;

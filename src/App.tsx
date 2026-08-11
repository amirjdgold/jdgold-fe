import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HomeView from '@/pages/HomeView';
import ContentPage from '@/pages/ContentPage';
import ProductsPage from '@/pages/ProductsPage';
import ManagementPage from '@/pages/ManagementPage';
import SalesPage from '@/pages/SalesPage';
import ContactPage from '@/pages/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen overflow-x-hidden bg-[#0A0A0A] text-white">
        <main>
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/about" element={<HomeView />} />
            <Route path="/factory" element={<HomeView />} />
            <Route path="/license" element={<HomeView />} />
            <Route
              path="/license-and-offices"
              element={<ContentPage slug="license-and-offices" />}
            />
            <Route
              path="/factories-and-refinery"
              element={<ContentPage slug="factories-and-refinery" />}
            />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/management" element={<ManagementPage />} />
            <Route path="/sales" element={<SalesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;

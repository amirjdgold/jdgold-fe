import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HomeView from '@/pages/HomeView';
import ContentPage from '@/pages/ContentPage';
import FactoryRefineryPageView from '@/pages/FactoryRefineryPageView';
import ManagementPage from '@/pages/ManagementPage';
import SalesPage from '@/pages/SalesPage';
import ContactPage from '@/pages/ContactPage';
import ScrollToTop from '@/components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen overflow-x-clip bg-[#0A0A0A] text-white">
        <main>
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/about" element={<ContentPage slug="about" />} />
            {/* Canonical redesigned CMS pages */}
            <Route
              path="/license-and-offices"
              element={<ContentPage slug="license-and-offices" />}
            />
            <Route
              path="/factories-and-refinery"
              element={<FactoryRefineryPageView />}
            />
            {/* Legacy overlay / alias URLs → canonical redesigned pages */}
            <Route
              path="/factory"
              element={<Navigate to="/factories-and-refinery" replace />}
            />
            <Route
              path="/license"
              element={<Navigate to="/license-and-offices" replace />}
            />
            <Route
              path="/license-offices"
              element={<Navigate to="/license-and-offices" replace />}
            />
            <Route
              path="/market-advantages-achievements"
              element={<Navigate to="/products" replace />}
            />
            <Route
              path="/products"
              element={<ContentPage slug="factories-and-refinery" />}
            />
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

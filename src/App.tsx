import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HomeView from '@/pages/HomeView';
import ContentPage from '@/pages/ContentPage';
import ScrollToTop from '@/components/ScrollToTop';
import { MediaLightboxProvider } from '@/components/media-lightbox/MediaLightbox';

function App() {
  return (
    <BrowserRouter>
      <MediaLightboxProvider>
      <ScrollToTop />
      <div className="gold-void min-h-screen overflow-x-clip text-white">
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
              element={<ContentPage slug="factories-and-refinery" />}
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
              element={<ContentPage slug="products" />}
            />
            <Route path="/management" element={<ContentPage slug="management" />} />
            <Route path="/sales" element={<ContentPage slug="sales" />} />
            <Route path="/contact" element={<ContentPage slug="contact" />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
      </MediaLightboxProvider>
    </BrowserRouter>
  );
}

export default App;

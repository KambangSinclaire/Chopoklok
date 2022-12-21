import Navbar from './modules/components/Navbar';
import './App.css';
import Footer from './modules/components/Footer';
import Menu from './modules/components/Menu';

function App() {
  return (
    <section>
      {/* Navbar section */}
      <Navbar />
      <Menu />
      <Footer />
    </section>
  );
}

export default App;

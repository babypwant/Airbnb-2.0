import Navbar from './components/Navbar';
import Filters from './components/Filters';
import Rentals from './components/Rentals';
import Footer from './components/Footer';

function App() {
  return (
    <div className="">
      {/* Navbar */}
      <Navbar />
      {/* Filters */}
      {/* Rentals */}
      <div className='sm:mx-6 md:mx-10 lg:mx-12'>
      <Filters />
      <Rentals />
      </div>
      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;

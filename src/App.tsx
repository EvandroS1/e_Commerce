import NavBar from "./components/NavBar";
import TenisCard from "./components/TenisCard"

const App = () => {

  return (
  <div>
    <NavBar />
    <div className="grid place-items-center mt-20 w-full gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    <TenisCard />
    <TenisCard />
    <TenisCard />
    <TenisCard />
    <TenisCard />
    <TenisCard />
    <TenisCard />
    <TenisCard />
    <TenisCard />
    <TenisCard />
    <TenisCard />
    <TenisCard />
    </div>

  </div>
  )
};

export default App;

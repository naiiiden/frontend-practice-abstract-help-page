import "./style/general.css";

import Header from "./components/Header";
import Search from "./components/Search";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Help from "./components/Help";

const App = () => {
  return (
    <div className="App">
      <Header/>
      <main>
        <Search/>
        <Categories/>  
        <Help/>
      </main>
      <Footer/>    
    </div>
  );
}

export default App;

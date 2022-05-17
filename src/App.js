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
      <Search/>
      <Categories/>  
      <Footer/>    
      <Help/>
    </div>
  );
}

export default App;

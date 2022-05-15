import "./style/general.css";

import Header from "./components/Header";
import Search from "./components/Search";
import Categories from "./components/Categories";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Search/>
      <Categories/>  
      <Footer/>    
    </div>
  );
}

export default App;

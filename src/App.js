import "./style/general.css";

import Header from "./components/Header";
import Search from "./components/Search";
import CategoryItem from "./components/CategoryItem";
import Categories from "./components/Categories";

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Search/>
      <Categories/>      
    </div>
  );
}

export default App;

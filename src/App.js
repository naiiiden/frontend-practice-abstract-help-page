import "./style/general.css";
import dec1 from "../src/images/dec1.png";

import Header from "./components/Header";
import Search from "./components/Search";
import CategoryItem from "./components/CategoryItem";

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Search/>
      <CategoryItem src={dec1} h2Text="Using Abstract" pText="Abstract lets you manage, version, and document your designs in one place." aText="Learn More →" href="https://help.abstract.com/hc/en-us/categories/360005436612-Using-Abstract"/>
    </div>
  );
}

export default App;

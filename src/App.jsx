import "./App.css";
import Accordian from "./components/accordian/accordian.jsx";
import StarRating from "./components/star-rating/starRating.jsx";
import ImgSlider from "./components/img-slider/imgSlider.jsx";
import LoadMore from "./components/load-more-content/loadMore.jsx";
import LightDarkMode from "./components/light-dark-mode/lightDark.jsx";
import TabsTest from "./components/tabs/tabsParent.jsx";
import ModalPopUp from "./components/modal-popup/modal.jsx";
import QrGenerator from "./components/qr-generator/qrGenerator.jsx";
import SearchAutoComplete from "./components/search-autocomplete/autoCompleteSearch.jsx";
import TreeStructure from "./components/tree-view/treeView.jsx";
import menus from "./components/tree-view/data.js";
function App() {
  return (
    <>
      {/* <Accordian /> */}
      {/* <StarRating /> */}
      {/* <ImgSlider url={"https://picsum.photos/v2/list"} page={1} limit={5} /> */}
      {/* <LoadMore /> */}
      {/* <LightDarkMode /> */}
      {/* <TabsTest /> */}
      {/* <ModalPopUp /> */}
      {/* <QrGenerator /> */}
      {/* <SearchAutoComplete /> */}
      <TreeStructure menus={menus} />
    </>
  );
}

export default App;

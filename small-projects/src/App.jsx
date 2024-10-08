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
import ScrollIndicator from "./components/scroll-indicator/scrollindicator.jsx";
import GithubProfileFinder from "./components/github-profile-finder/githubProfileFinder.jsx";
import TicTacToe from "./components/tic-tac-toe/tictactoe.jsx";
import UseFetchHookTest from "./components/useFetch-hook/test.jsx";
import TestOutsideClick from "./components/useOnOutsideClick/test.jsx";
import TestUseWindowResize from "./components/useWindowResize/test.jsx";
import ScrollTopBottom from "./components/scroll-top-bottom/scrollTopBottom.jsx";
import ScrollToParticularSection from "./components/scroll-to-particular-section/test.jsx";
import FeatureFlagGlobalState from "./components/feature-flag/index.jsx";
import FeatureFlags from "./components/feature-flag/featureFlags.jsx";
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
      {/* <TreeStructure menus={menus} /> */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}
      {/* <GithubProfileFinder /> */}
      {/* <TicTacToe /> */}
      {/* <UseFetchHookTest /> */}
      {/* <TestOutsideClick /> */}
      {/* <TestUseWindowResize /> */}
      {/* <ScrollTopBottom /> */}
      {/* <ScrollToParticularSection /> */}
      <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState>
    </>
  );
}

export default App;

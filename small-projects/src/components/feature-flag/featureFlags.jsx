import { useContext } from "react";
import Accordian from "../accordian/accordian";
import LightDarkMode from "../light-dark-mode/lightDark";
import StarRating from "../star-rating/starRating";
import Tabs from "../tabs/tabs";
import TicTacToe from "../tic-tac-toe/tictactoe";
import { FeatureFlagContext } from ".";

export default function FeatureFlags() {
  const { loading, enabledFlags } = useContext(FeatureFlagContext);
  const componentsToRender = [
    {
      key: "showLightAndDarkMode",
      component: <LightDarkMode />,
    },
    {
      key: "showTicTacToe",
      component: <TicTacToe />,
    },
    {
      key: "showAccordian",
      component: <Accordian />,
    },
    {
      key: "showTabs",
      component: <Tabs />,
    },
    {
      key: "showStarRating",
      component: <StarRating />,
    },
  ];

  function checkEnabledFlags(getCurrentKey) {
    return enabledFlags[getCurrentKey];
  }

  if (loading) {
    return <h1>loading data pls wait...</h1>;
  }

  return (
    <div>
      <h1>Feature Flags!</h1>
      {componentsToRender.map((componentItem) =>
        checkEnabledFlags(componentItem.key) ? componentItem.component : null
      )}
    </div>
  );
}

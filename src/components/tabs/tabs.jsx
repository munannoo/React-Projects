import { useState } from "react";

export default function Tabs({ tabsContent, onChange }) {
  const [currentIndex, setCurrentTabIndex] = useState(0);

  function handleOnClick(getCurrentIndex) {
    setCurrentTabIndex(getCurrentIndex);
    onChange(getCurrentIndex);
  }

  return (
    <div className="wrapper">
      {tabsContent.map((tabItem, index) => {
        return (
          <div
            className="heading"
            onClick={() => handleOnClick(index)}
            key={index}
          >
            {tabItem.label}
          </div>
        );
      })}

      <div className="content">
        {tabsContent[currentIndex] && tabsContent[currentIndex].content}
      </div>
    </div>
  );
}

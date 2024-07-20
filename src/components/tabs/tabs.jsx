import { useState } from "react";

export default function Tabs({ tabsContent, onChange }) {
  const [currentIndex, setCurrentTabIndex] = useState(0);

  function handleOnClick(getCurrentIndex) {
    setCurrentTabIndex(getCurrentIndex);
    onChange(getCurrentIndex);
  }

  return (
    <div className="wrapper">
      <div className="headingComponent">
        {tabsContent.map((tabItem, index) => {
          return (
            <div
              className={`heading ${
                index === currentIndex ? "active" : "inactive"
              }`}
              onClick={() => handleOnClick(index)}
              key={index}
            >
              {tabItem.label}
            </div>
          );
        })}
      </div>

      <div className="content">
        {tabsContent[currentIndex] && tabsContent[currentIndex].content}
      </div>
    </div>
  );
}

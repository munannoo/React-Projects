import Tabs from "./tabs.jsx";

export default function TabsTest() {
  const tabs = [
    {
      label: "Tab 1",
      content: <div>Content for first page</div>,
    },
    {
      label: "Tab 2",
      content: <div>Second page's content....</div>,
    },
    {
      label: "Tab 3",
      content: <div>Some contents for thrid page</div>,
    },
  ];

  function handleChange(currentTabID) {
    console.log(currentTabID);
  }

  return <Tabs tabsContent={tabs} onChange={handleChange()} />;
}

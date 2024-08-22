import MenuList from "./menu-list.jsx";

export default function TreeStructure({ menus = [] }) {
  return (
    <div className="treeViewContainer">
      <MenuList list={menus} />
    </div>
  );
}

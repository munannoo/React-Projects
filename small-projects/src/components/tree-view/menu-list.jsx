import MenuItem from "./menu-item.jsx";

export default function MenuList({ list = [] }) {
  return (
    <ul className="menuListContainer">
      {list && list.length
        ? list.map((listItem, index) => (
            <MenuItem key={index} item={listItem} />
          ))
        : console.log("not present!")}
    </ul>
  );
}

import { useState } from "react";
import MenuList from "./menu-list";

export default function MenuItem({ item }) {
  const [displayCurrentChildren, setDisplay] = useState({});
  console.log(item);
  return (
    <li className="menuItem">
      <p>{item.label}</p>

      {item && item.children && item.children.length > 0 ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}

import { useState } from "react";
import MenuList from "./menu-list";

export default function MenuItem({ item }) {
  const [displayChildren, setDisplayChildren] = useState({});

  function handleToggleShowChildren(itemLabel) {
    setDisplayChildren({
      ...displayChildren,
      [itemLabel]: !displayChildren[itemLabel],
    });
  }

  return (
    <li className="menuItem">
      <div style={{ display: "flex", gap: "1rem" }}>
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <p onClick={() => handleToggleShowChildren(item.label)}>+</p>
        ) : null}
      </div>
      {item &&
      item.children &&
      item.children.length > 0 &&
      displayChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}

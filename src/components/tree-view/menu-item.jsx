import { useState } from "react";
import MenuList from "./menu-list";
import { FaMinus, FaPlus } from "react-icons/fa";

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
          <p onClick={() => handleToggleShowChildren(item.label)}>
            {displayChildren[item.label] ? <FaMinus /> : <FaPlus />}
          </p>
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

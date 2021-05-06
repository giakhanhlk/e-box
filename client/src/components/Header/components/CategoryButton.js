import React from "react";

const CategoryButton = ({ nodeList, level, toggleCategory }) => {
  const MAX_LEVEL = 10;

  return (
    <>
      {toggleCategory && (
        <ul className={`category-list category-list-${level} list-column`}>
          {nodeList.map((node, i) => (
            <li
              key={node.itemId}
              className={`category-list__item category-list__item-${level}`}
            >
              {node.name}
              {node.nodes && node.nodes.length > 0 && level <= MAX_LEVEL ? (
                <CategoryButton
                  toggleCategory={toggleCategory}
                  level={level + 1}
                  nodeList={node.nodes}
                />
              ) : null}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default CategoryButton;

import React from "react";
import "./preview-collection.styles.scss";
import { useLocation, useNavigate} from "react-router-dom";

import CollectionItem from "../collection-item/collection-item.component";

export default function PreviewCollection({ title, items }) {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <div className="collection-preview">
      <h1 onClick={()=>navigate(`${location.pathname}/${title.toLowerCase()}`)} className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map((item) => {
            return <CollectionItem key={item.id} item={item} />;
          })}
      </div>
    </div>
  );
}

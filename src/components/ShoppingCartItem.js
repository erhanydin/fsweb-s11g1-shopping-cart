import React from "react";
import { ScCartItem, ScCartItemDetails } from "./scParts";

import { useContext } from "react";
import { CardContext } from "../contexts/CardContext";

const Item = (props) => {

  const { removeItem } = useContext(CardContext);

  return (
    <ScCartItem>
      <img src={props.image} alt={`${props.title} book`} />

      <ScCartItemDetails>
        <h2>{props.title}</h2>
        <p>$ {props.price}</p>
        <button onClick={() => removeItem(props.id)}>Remove from cart</button>
      </ScCartItemDetails>
    </ScCartItem>
  );
};

export default Item;

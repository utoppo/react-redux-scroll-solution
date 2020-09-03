import React, { useState } from "react";
import { Card } from "./styled";

const FancyCard = React.forwardRef((props, ref) => {
  const { active_participant_id, p, id, setActiveParticipant } = props;
  const [isHovered, setHover] = useState(false);

  const cardIsActive = active_participant_id === p.id || isHovered;

  const handleClick = (participant) => (e) => {
    console.log("handle click activate participant: ", participant.id);
    setActiveParticipant(participant.id);
  };

  return (
    <Card
      ref={ref}
      className={cardIsActive ? "active" : ""}
      key={`card_item_${p.id}`}
      id={id}
      onClick={handleClick(p)}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      {props.children}
    </Card>
  );
});

export { FancyCard as default };

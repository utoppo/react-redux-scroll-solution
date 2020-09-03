import React from "react";
import { Card } from "./styled";

const FancyCard = React.forwardRef((props, ref) => {
  const { active_participant_id, p, setActiveParticipant } = props;
  const handleClick = (participant) => (e) => {
    console.log("handle click activate participant: ", participant.id);
    setActiveParticipant(participant.id);
  };

  return (
    <Card
      ref={ref}
      className={p.id === active_participant_id ? "active" : ""}
      key={`card_item_${p.id}`}
      onClick={handleClick(p)}
    >
      {props.children}
    </Card>
  );
});

export { FancyCard as default };

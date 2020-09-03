import React from "react";
import { connect } from "react-redux";
import { setActiveParticipant } from "../../state/actions";
import { ListWrap, ListContainer, ListItem, Name, Number } from "./styled";

const ParticipantCards = (props) => {
  const {
    participants,
    active_category,
    active_participant_id,
    setActiveParticipant
  } = props;

  const handleClick = (participant) => (e) => {
    console.log("handle click activate participant: ", participant.id);
    setActiveParticipant(participant.id, participant.ref);
  };

  const activeParticipans = active_category.id
    ? participants.filter((p) => p.categoryId === active_category.id)
    : participants;
  return (
    <ListWrap>
      <ListContainer>
        {activeParticipans.map((p) => {
          return (
            <ListItem
              className={p.id === active_participant_id ? "active" : ""}
              key={`list_item_${p.id}`}
              onClick={handleClick(p)}
            >
              <Number>{p.id}</Number>
              <Name>{p.name}</Name>
            </ListItem>
          );
        })}
      </ListContainer>
    </ListWrap>
  );
};

const mapStateToProps = (state) => {
  return {
    participants: state.all.participants,
    active_category: state.all.active_category,
    active_participant_id: state.all.active_participant_id
  };
};

const mapDispatchToProps = {
  setActiveParticipant
};

export default connect(mapStateToProps, mapDispatchToProps)(ParticipantCards);

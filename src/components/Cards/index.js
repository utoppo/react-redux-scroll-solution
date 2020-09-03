import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setActiveParticipant, filterParticipants } from "../../state/actions";
import {
  CardWrap,
  CardContainer,
  Card,
  Category,
  Name,
  Number
} from "./styled";

// const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const ParticipantCards = (props) => {
  const {
    participants,
    categories,
    active_category,
    active_participant_id,
    setActiveParticipant
  } = props;

  const refs = participants.reduce((acc, participant) => {
    acc[participant.id] = React.createRef();
    return acc;
  }, {});

  useEffect(() => {
    if (active_participant_id) {
      console.log("useEffect Scroll");
      console.log("refs: ", refs);
      if (refs[active_participant_id] && refs[active_participant_id].current) {
        console.log(refs[active_participant_id]);
        refs[active_participant_id].current.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    }
  });

  const handleClick = (participant) => (e) => {
    console.log("handle click activate participant: ", participant.id);
    setActiveParticipant(participant.id);
  };

  const activeParticipans = active_category.id
    ? participants.filter((p) => p.categoryId === active_category.id)
    : participants;
  return (
    <CardWrap>
      <CardContainer>
        {activeParticipans.map((p) => {
          const category = categories.find((c) => c.id === p.categoryId).name;
          return (
            <Card
              className={p.id === active_participant_id ? "active" : ""}
              key={`card_item_${p.id}`}
              ref={refs[p.id]}
              onClick={handleClick(p)}
            >
              <Number>{p.id}</Number>
              <Name>{p.name}</Name>
              <Category>{category}</Category>
            </Card>
          );
        })}
      </CardContainer>
    </CardWrap>
  );
};

const mapStateToProps = (state) => {
  return {
    participants: state.all.participants,
    categories: state.all.categories,
    active_category: state.all.active_category,
    active_participant_id: state.all.active_participant_id
  };
};

const mapDispatchToProps = {
  setActiveParticipant,
  filterParticipants
};

export default connect(mapStateToProps, mapDispatchToProps)(ParticipantCards);

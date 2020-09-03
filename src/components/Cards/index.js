import React from "react";
import { connect } from "react-redux";
import { setActiveParticipant, filterParticipants } from "../../state/actions";
import { CardWrap, Category, Name, Number } from "./styled";
import Scrolli from "./Scrolli";
import FancyCard from "./FancyCard";

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

  const activeParticipans = active_category.id
    ? participants.filter((p) => p.categoryId === active_category.id)
    : participants;
  return (
    <CardWrap>
      <Scrolli active_participant_id={active_participant_id} refs={refs}>
        {activeParticipans.map((p) => {
          const category = categories.find((c) => c.id === p.categoryId).name;
          return (
            <FancyCard
              p={p}
              ref={refs[p.id]}
              setActiveParticipant={setActiveParticipant}
              active_participant_id={active_participant_id}
            >
              <Number>{p.id}</Number>
              <Name>{p.name}</Name>
              <Category>{category}</Category>
            </FancyCard>
          );
        })}
      </Scrolli>
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

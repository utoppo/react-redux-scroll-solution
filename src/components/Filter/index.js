import React from "react";
import { connect } from "react-redux";
import { FilterWrap, FilterItem } from "./styled";
import { filterParticipants, setActiveParticipant } from "../../state/actions";

const Filter = (props) => {
  const {
    filterParticipants,
    setActiveParticipant,
    categories,
    participants
  } = props;

  const triggerAction = (cat) => {
    if (cat) {
      filterParticipants(cat.id, cat.name);
      const activeParticipant = participants.find(
        (p) => p.categoryId === cat.id
      );
      console.log("new activeParticipant: ", activeParticipant);
      setActiveParticipant(activeParticipant.id);
    } else {
      filterParticipants(null);
      setActiveParticipant(participants[0].id);
    }
  };
  return (
    <FilterWrap>
      <FilterItem key={`filter_item_all`} onClick={() => triggerAction()}>
        All
      </FilterItem>
      {categories.map((c) => {
        return (
          <FilterItem
            key={`filter_item_${c.id}`}
            onClick={() => triggerAction(c)}
          >
            {c.name}
          </FilterItem>
        );
      })}
    </FilterWrap>
  );
};

const mapStateToProps = (state) => {
  return {
    categories: state.all.categories,
    participants: state.all.participants
  };
};

const mapDispatchToProps = {
  filterParticipants,
  setActiveParticipant
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

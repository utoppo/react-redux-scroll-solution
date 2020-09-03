import React from "react";
import { connect } from "react-redux";
import { FilterWrap, FilterItem } from "./styled";
import { filterParticipants, setActiveParticipant } from "../../state/actions";

const Filter = (props) => {
  const {
    filterParticipants,
    setActiveParticipant,
    categories,
    participants,
    active_category_id
  } = props;

  const triggerAction = (cat) => (e) => {
    e.preventDefault();
    if (cat) {
      filterParticipants(cat.id, cat.name);
      const activeParticipant = participants.find(
        (p) => p.categoryId === cat.id
      );
      setActiveParticipant(activeParticipant.id);
    } else {
      filterParticipants(null);
      setActiveParticipant(participants[0].id);
    }
  };

  return (
    <FilterWrap id="filterbar-header">
      <FilterItem
        key={`filter_item_all`}
        className={active_category_id ? "" : "active"}
        onClick={triggerAction(null)}
      >
        All
      </FilterItem>
      {categories.map((c) => {
        const active = active_category_id === c.id;
        return (
          <FilterItem
            className={active ? "active" : ""}
            key={`filter_item_${c.id}`}
            onClick={triggerAction(c)}
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
    participants: state.all.participants,
    active_category_id: state.all.active_category.id
  };
};

const mapDispatchToProps = {
  filterParticipants,
  setActiveParticipant
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

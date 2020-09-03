export const SET_ACTIVE_PARTICIPANT = "SET_ACTIVE_PARTICIPANT";
export const setActiveParticipant = (participantId = null) => {
  return {
    type: SET_ACTIVE_PARTICIPANT,
    active_participant_id: participantId
  };
};

export const FILTER_PARTICIPANTS = "FILTER_PARTICIPANTS";
export const filterParticipants = (
  participantCategoryId = null,
  participantCategoryName = ""
) => {
  return {
    type: FILTER_PARTICIPANTS,
    category_id: participantCategoryId,
    category_name: participantCategoryName
  };
};

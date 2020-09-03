/** @jsx jsx */
import { useEffect } from "react";
import { ScrollToHOC, ScrollArea } from "react-scroll-to";
import { css, jsx } from "@emotion/core";

const Scrolli = ScrollToHOC(function (props) {
  const { children, scroll, active_participant_id, refs } = props;

  useEffect(() => {
    if (active_participant_id) {
      console.log("useEffect >>> active_participant_id", active_participant_id);
      const headerHeight = document.getElementById("filterbar-header")
        .firstChild.offsetHeight;
      const elementTop = refs[
        active_participant_id
      ].current.getBoundingClientRect().top;
      const scrollToY = elementTop - headerHeight;
      console.log("scrollToY: ", scrollToY);
      //scroll({ id: "foo", smooth: true, y: scrollToY });
      console.log("scroll is: ", scroll);
      scroll({
        id: "foo",
        smooth: false,
        // ref: refs[active_participant_id],
        y: scrollToY
      });
    }
  });

  return (
    <ScrollArea
      css={css`
        flex: 1 0 50vw;
        background: #ca9b68;
        overflow-y: scroll;
        display: flex;
        flex-wrap: wrap;
        margin-left: 0rem;
        padding: 0.5rem 0.5rem;
        overflow-x: hidden;
        background: white;
      `}
      id="foo"
    >
      {children}
    </ScrollArea>
  );
});

export { Scrolli as default };

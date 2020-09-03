/** @jsx jsx */
import { useEffect } from "react";
import { ScrollToHOC, ScrollArea } from "react-scroll-to";
import { css, jsx } from "@emotion/core";

const Scrolli = ScrollToHOC(function (props) {
  const { children, scroll, active_participant_id, refs } = props;

  useEffect(() => {
    if (active_participant_id) {
      const headerHeight = document.getElementById("foo").offsetTop;
      const elementTop = refs[active_participant_id].current.offsetTop;
      const scrollToY = elementTop - headerHeight;
      scroll({
        id: "foo",
        smooth: true,
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
        height: 100%;
      `}
      id="foo"
    >
      {children}
    </ScrollArea>
  );
});

export { Scrolli as default };

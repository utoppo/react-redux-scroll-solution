/** @jsx jsx */
import { useEffect } from "react";
import { ScrollToHOC, ScrollArea } from "react-scroll-to";
import { css, jsx } from "@emotion/core";

const ScrollContainer = ScrollToHOC(function (props) {
  const { children, scroll, active_participant_id, refs } = props;

  useEffect(() => {
    if (active_participant_id) {
      const headerHeight = document
        .getElementById("filterbar-header")
        .getBoundingClientRect().height;
      const elementTop = refs[active_participant_id].current.offsetTop;

      const scrollToY = elementTop - 100;
      console.log(
        "offsetTop: ",
        elementTop,
        "headerHeight: ",
        headerHeight,
        " scrollToY: ",
        scrollToY
      );
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
        overflow-y: scroll;
        display: flex;
        flex-wrap: wrap;
        padding-left: 1rem;
        padding-right: 0rem;
        overflow-x: hidden;
        height: 100%;
        width: calc(50vw - 1rem);
        padding-top: 100px;
      `}
      id="foo"
    >
      {children}
    </ScrollArea>
  );
});

export { ScrollContainer as default };

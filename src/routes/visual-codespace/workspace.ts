import { inject } from "blockly";
import defaultCategories from "./defaultCategories";
import "./blocks";

export const InitWorkspace = (element: HTMLElement) => {
  return inject(element, {
    toolbox: {
      kind: "categoryToolbox",
      contents: [
        {
          kind: "category",
          name: "Actions",
          categorystyle: "logic_category",
          contents: [
            {
              kind: "block",
              type: "play_raise",
            },
            {
              kind: "block",
              type: "play_call",
            },
            {
              kind: "block",
              type: "play_fold",
            },
            {
              kind: "block",
              type: "play_check",
            },
            { kind: "block", type: "all_in" },
            { kind: "block", type: "act" },
          ],
        },
        ...defaultCategories,
      ],
    },
  });
};

import newBlock from "./newBlock";

newBlock({
  definition: {
    type: "play_call",
    message0: "Call",
    previousStatement: null,
  },
  codeGenerator: () => "return obs.get_min_raise()",
});

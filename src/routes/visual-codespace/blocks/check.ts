import newBlock from "./newBlock";

newBlock({
  definition: {
    type: "play_check",
    message0: "Check",
    previousStatement: null,
  },
  codeGenerator: () => "return 0",
});

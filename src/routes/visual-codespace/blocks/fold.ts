import newBlock from "./newBlock";

console.log("called");

newBlock({
  definition: {
    type: "play_fold",
    message0: "Fold",
    previousStatement: null,
  },
  codeGenerator: () => "return 0",
});

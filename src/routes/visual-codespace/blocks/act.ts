import newBlock from "./newBlock";

newBlock({
  definition: {
    type: "act",
    message0: "When it is my turn to act",
    message1: "%1",
    args1: [{ type: "input_statement", name: "STATEMENT" }],
  },
  codeGenerator: (block, generator) => `
  def act(self, obs: Observation):
    ${generator.statementToCode(block, "STATEMENT")}
  `,
});

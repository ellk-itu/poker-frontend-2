import { Order } from "blockly/python";
import newBlock from "./newBlock";

newBlock({
  definition: {
    type: "play_raise",
    message0: "Raise %1 amount",
    args0: [
      {
        type: "input_value",
        name: "RAISE_AMOUNT",
        check: "Number",
      },
    ],
    previousStatement: null,
  },
  codeGenerator: (block, generator) =>
    `return ${generator.valueToCode(block, "RAISE_AMOUNT", Order.ATOMIC)}`,
});

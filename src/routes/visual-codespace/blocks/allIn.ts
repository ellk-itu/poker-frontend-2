import { Order } from "blockly/python";
import newBlock from "./newBlock";

newBlock({
  definition: {
    type: "all_in",
    message0: "all in",
    output: "Number",
  },
  codeGenerator: () => ["obs.get_max_raise()", Order.ATOMIC],
});

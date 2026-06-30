import { common, type Block } from "blockly";
import { pythonGenerator, type PythonGenerator } from "blockly/python";

interface NewBlockConstructor {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  definition: Record<string, any>;
  codeGenerator: (
    block: Block,
    generator: PythonGenerator,
  ) => string | [string, number];
}

export default (constructor: NewBlockConstructor) => {
  common.defineBlocks(
    common.createBlockDefinitionsFromJsonArray([constructor.definition]),
  );
  pythonGenerator.forBlock[constructor.definition.type] =
    constructor.codeGenerator;
};

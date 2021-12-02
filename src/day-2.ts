type Position = {
  horizontal: number;
  depth: number;
  aim: number;
};
type Instruction = {
  action: "forward" | "down" | "up";
  value: number;
};

const parseCommand = (command: string): Instruction => {
  const [action, valueString] = command.split(" ");
  return { action, value: parseInt(valueString) } as Instruction;
};

const solve = (
  course: string[],
  updatePosition: (position: Position, instruction: Instruction) => Position
) => {
  const startingPosition = {
    horizontal: 0,
    depth: 0,
    aim: 0,
  } as Position;

  const instructions = course.map(parseCommand);
  const finalPosition = instructions.reduce(
    (acc, val) => updatePosition(acc, val),
    startingPosition
  );

  return finalPosition.horizontal * finalPosition.depth;
};

const updatePositionPartTwo = (
  position: Position,
  instruction: Instruction
): Position => {
  switch (instruction.action) {
    case "forward":
      return {
        ...position,
        horizontal: position.horizontal + instruction.value,
        depth: position.depth + position.aim * instruction.value,
      };
    case "down":
      return {
        ...position,
        aim: position.aim + instruction.value,
      };
    case "up":
      return {
        ...position,
        aim: position.aim - instruction.value,
      };
  }
};
const partTwo = (course: string[]): number =>
  solve(course, updatePositionPartTwo);

const updatePositionPartOne = (
  position: Position,
  instruction: Instruction
): Position => {
  switch (instruction.action) {
    case "forward":
      return {
        ...position,
        horizontal: position.horizontal + instruction.value,
      };
    case "down":
      return {
        ...position,
        depth: position.depth + instruction.value,
      };
    case "up":
      return {
        ...position,
        depth: position.depth - instruction.value,
      };
  }
};
const partOne = (course: string[]): number =>
  solve(course, updatePositionPartOne);

export { partOne, partTwo };

import { partOne, partTwo } from "./day-2";
import { readFile } from "./utils";

describe("Day 2", () => {
  it("should solve part 1 with the test input", () => {
    const result = partOne([
      "forward 5",
      "down 5",
      "forward 8",
      "up 3",
      "down 8",
      "forward 2",
    ]);
    expect(result).toEqual(150);
  });

  it("should solve part 1 with the real input", () => {
    const input = readFile("src/day-2-input.txt").split("\n");
    const result = partOne(input);
    expect(result).toEqual(1635930);
  });

  it("should solve part 2 with the test input", () => {
    const result = partTwo([
      "forward 5",
      "down 5",
      "forward 8",
      "up 3",
      "down 8",
      "forward 2",
    ]);
    expect(result).toEqual(900);
  });

  it("should solve part 2 with the real input", () => {
    const input = readFile("src/day-2-input.txt").split("\n");
    const result = partTwo(input);
    expect(result).toEqual(1781819478);
  });
});

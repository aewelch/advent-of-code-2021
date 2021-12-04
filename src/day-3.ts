const isZeroMostCommonAtPosition = (
  report: string[],
  position: number
): boolean => {
  const numberOfZeros = report
    .map((number) => number.charAt(position))
    .filter((bit) => bit === "0").length;
  return numberOfZeros > report.length / 2;
};

const oxygenGeneratorRatingBitCriteria = (isZeroMostCommon: boolean): string =>
  isZeroMostCommon ? "0" : "1";
const scrubberRatingBitCriteria = (isZeroMostCommon: boolean): string =>
  isZeroMostCommon ? "1" : "0";

const calculateRating = (
  report: string[],
  bitCriteria: (isZeroMostCommon: boolean) => string
) => {
  let matchingValues = report;
  for (let index = 0; index < report[0].length; index++) {
    if (matchingValues.length === 1) {
      break;
    }
    const mostCommonValue = bitCriteria(
      isZeroMostCommonAtPosition(matchingValues, index)
    );
    matchingValues = matchingValues.filter(
      (number) => number.charAt(index) === mostCommonValue
    );
  }

  return matchingValues[0];
};

const partTwo = (report: string[]): number => {
  const oxygenGeneratorRatingBinary = calculateRating(
    report,
    oxygenGeneratorRatingBitCriteria
  );
  const scrubberRatingBinary = calculateRating(
    report,
    scrubberRatingBitCriteria
  );

  const oxygenGeneratorRating = parseInt(oxygenGeneratorRatingBinary, 2);
  const scrubberRating = parseInt(scrubberRatingBinary, 2);

  return oxygenGeneratorRating * scrubberRating;
};

const partOne = (report: string[]): number => {
  let gammaBinary = "";
  let epsilonBinary = "";

  for (let index = 0; index < report[0].length; index++) {
    const isZeroMostCommon = isZeroMostCommonAtPosition(report, index);
    gammaBinary += isZeroMostCommon ? "0" : "1";
    epsilonBinary += isZeroMostCommon ? "1" : "0";
  }

  const gamma = parseInt(gammaBinary, 2);
  const epsilon = parseInt(epsilonBinary, 2);

  return gamma * epsilon;
};

export { partOne, partTwo };

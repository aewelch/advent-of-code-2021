const partTwo = (report: number[]): number => {
  let increasingCount = 0;

  for (let i = 3; i < report.length; i++) {
    const previous = report[i - 3];
    const current = report[i];
    if (current > previous) {
      increasingCount += 1;
    }
  }

  return increasingCount;
};

const partOne = (report: number[]): number => {
  let increasingCount = 0;

  for (let i = 1; i < report.length; i++) {
    const previous = report[i - 1];
    const current = report[i];
    if (current > previous) {
      increasingCount += 1;
    }
  }
  return increasingCount;
};

export { partOne, partTwo };

import fs from "fs";

const readFile = (fileName: string) => {
  return fs.readFileSync(fileName).toString().trim();
};

export { readFile };

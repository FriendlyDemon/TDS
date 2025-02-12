import * as fs from "fs";
const arg = fs.readFileSync("./player.ts", "utf8");
async function argo(dakka: string) {
  const thraka = await import(dakka);
  console.log(thraka.default );
}
argo("./player.ts");
//fs.writeFileSync("000001.ts", `export default ${arg}`);

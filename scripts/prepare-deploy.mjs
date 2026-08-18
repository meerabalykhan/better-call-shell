import { readFile, writeFile } from "node:fs/promises";

const configPath = new URL("../dist/server/wrangler.json", import.meta.url);
const config = JSON.parse(await readFile(configPath, "utf8"));

// Strip vinext's build-time metadata before handing the generated Worker to
// Wrangler. These keys are not part of Wrangler's deploy configuration.
delete config.legacy_env;
delete config.configPath;
delete config.userConfigPath;
delete config.topLevelName;
delete config.definedEnvironments;

config.name = "better-call-shell";
config.compatibility_date = "2026-08-18";
await writeFile(configPath, `${JSON.stringify(config)}\n`, "utf8");

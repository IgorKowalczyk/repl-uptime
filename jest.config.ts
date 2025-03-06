import type { Config } from "jest";

export default {
 preset: "ts-jest",
 testEnvironment: "node",
 testMatch: ["**/test/**/*.ts"],
} satisfies Config;

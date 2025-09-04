import dotenv from "dotenv";
dotenv.config();

export function getEnv(key, defaultValue) {
  const value = process.env[key];
  if (value !== undefined) {
    return value;
  }
  if (defaultValue !== undefined) {
    return defaultValue;
  }
  return undefined;
}

export function getOrThrow(key) {
  const value = process.env[key];
  if (value === undefined) {
    throw new Error(`❌ Missing required environment variable: ${key}`);
  }
  return value;
}

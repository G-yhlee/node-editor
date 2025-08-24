import { resolve } from "path";

// Configuration interface
export interface Config {
  dbPath: string;
  // Add more configuration options as needed
}

// Default configuration
const defaultConfig: Config = {
  dbPath: resolve(__dirname, "../db/users.json"),
};

// Load configuration (can be extended to read from environment or config files)
export const loadConfig = (): Config => {
  // Priority order:
  // 1. Environment variable (if needed in future)
  // 2. Config file (if needed in future)
  // 3. Default configuration

  return {
    ...defaultConfig,
    // Override with environment variable if exists
    dbPath: process.env.DB_FILE_PATH || defaultConfig.dbPath,
  };
};

// Export a singleton config instance
export const config = loadConfig();

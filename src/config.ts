import { resolve } from "path";

// Default configuration
const defaultConfig = {
  dbPath: (str: string) => resolve(__dirname, `../db/${str}.json`),
};

// Load configuration (can be extended to read from environment or config files)
export const loadConfig = () => {
  // Priority order:
  // 1. Environment variable (if needed in future)
  // 2. Config file (if needed in future)
  // 3. Default configuration

  return {
    ...defaultConfig,
  };
};

// Export a singleton config instance
export const config = loadConfig();

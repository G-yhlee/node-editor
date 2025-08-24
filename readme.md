# src2

JSON file reader utilities

## Installation

```bash
npm install
```

## Build

```bash
npm run build
```

## How to Run

The program reads DB file path from the configuration file (`src/config.ts`).
By default, it uses `db/sample.json`.

### 1. Using runWithDb.ts

```bash
npm run start:db
```

### 2. Run index.ts directly

After building:

```bash
node dist/src/index.js
```

### 3. Using custom DB path

To use a different DB file, you can set the `DB_FILE_PATH` environment variable:

```bash
DB_FILE_PATH=/path/to/your/db.json npm run start:db
```

or

```bash
DB_FILE_PATH=/path/to/your/db.json node dist/src/index.js
```

### 4. Changing default DB path

Edit `src/config.ts` to change the default DB file path:

```typescript
const defaultConfig: Config = {
  dbPath: resolve(__dirname, '../../db/sample.json')  // Change this path
};
```

## DB File Format

The program reads JSON format DB files like this:

```json
{
  "users": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "email": "jane@example.com"
    }
  ],
  "metadata": {
    "version": "1.0",
    "created": "2025-08-22"
  }
}
```

## Development Commands

- `npm run build` - TypeScript compile
- `npm run clean` - Delete build directory
- `npm run rebuild` - Clean and rebuild
- `npm run dev` - Development mode (watch mode)

## Tech Stack

- TypeScript
- Node.js
- @fxts/core - Functional programming library

## Project Structure

```
src/
├── index.ts      # Main program (reads and processes DB file)
├── runWithDb.ts  # Wrapper for executing index.ts
├── dbReader.ts   # DB file reader module (functional)
├── config.ts     # Configuration file (DB path settings)
└── readUsers.ts  # Other utilities
```
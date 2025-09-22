# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Boostwave PocketBase** - A social media services API backend that integrates with external SMM (Social Media Marketing) panels to provide services like followers, likes, and other engagement metrics across multiple platforms.

## Development Commands

### Build & Development
```bash
# Build TypeScript hooks to JavaScript
cd pb_hooks && yarn build

# Development mode with file watching
cd pb_hooks && yarn dev
```

**Note**: The `dev` script has a typo - it calls `yarn build:hooks` but should be `yarn build`. The script watches `./src/hooks/**` directory but the actual source files are in `./src/entries/`.

### Runtime
```bash
# Start PocketBase server
./start-pocketbase.sh
# Runs: /tool/pocketbase --dir data --publicDir dir --hooksDir hooks --migrationsDir migrations serve --http 0.0.0.0:8090
```

## Architecture

### Core Components
- **PocketBase**: Go-based backend-as-a-service framework
- **TypeScript Hooks**: Business logic in `pb_hooks/src/entries/`
- **Database Collections**: 5 main collections in `data/` directory
- **Migrations**: 30+ migration files for schema evolution

### Key Collections
- `boostwave_category`: Service categories by platform (TikTok, Instagram, etc.)
- `boostwave_service`: Individual services with pricing and limits
- `boostwave_service_category`: Many-to-many relationship between services and categories
- `boostwave_commande`: Customer orders with status tracking
- `boostwave_commande_logs`: Order status change audit trail

### Service Types
- Default, Subscriptions, Custom Comments
- Mentions, User Followers, Packages
- Poll, Mentions Hashtag

### Supported Platforms
TikTok, Instagram, Telegram, YouTube, Twitter, Facebook, VK, Twitch, LinkedIn, Spotify, WhatsApp, IGTV, Threads, Premium

## Integration Architecture

### N1Panel Integration
- **External API**: Integrates with N1Panel SMM service provider
- **Sync Strategy**: Weekly automatic synchronization via cron job
- **Bootstrap Hook**: Initial sync on server startup
- **Environment Variables**: `N1PANEL_API_KEY`, `N1PANEL_API_URL`

### API Endpoints
- Platform-specific category endpoints
- Service listings by category with pagination
- Order management and status tracking

## File Structure

```
├── data/                    # PocketBase database files
├── hooks/                   # Compiled JavaScript hooks (runtime)
├── migrations/              # Database schema migrations (30+ files)
├── pb_hooks/
│   ├── src/
│   │   ├── entries/         # Main hook entry points
│   │   │   ├── api-config.ts  # N1Panel sync logic
│   │   │   ├── api-data.ts   # API endpoints
│   │   │   ├── constants.ts  # Collections and enums
│   │   │   ├── functions.ts  # Utility functions
│   │   │   ├── types.ts      # TypeScript interfaces
│   │   │   └── index.pb.ts   # Main hook entry point
│   ├── package.json
│   ├── tsconfig.json
│   └── tsup.config.js
├── dir/                     # Public static files
└── start-pocketbase.sh     # Launch script
```

## Important Constants

### Banned Categories/Platforms
- Test categories and platforms are automatically filtered out
- See `constants.ts` for `BANNED_CATEGORIES` and `BANNED_PLATFORMS`

### Order Status Flow
`initiated` → `paid` → `pending` → `processing` → `completed` (or `canceled`)

## Development Notes

### TypeScript Configuration
- ES2017 target with ES2021 lib
- Strict mode enabled with null checks
- NoEmit: true (bundled via tsup)

### Build Process
- Uses `tsup` for bundling TypeScript to JavaScript
- Output directory: `/hooks/`
- Entry points: `src/entries/*.ts`

### File Watching
- Uses `chokidar-cli` for development
- Watches `src/hooks/**` directory
- Automatically rebuilds on changes

## Environment Setup

The PocketBase server expects:
- Database files in `data/` directory
- Compiled hooks in `hooks/` directory
- Migrations in `migrations/` directory
- Static files in `dir/` directory

### Environment Variables
Required environment variables should be set in `hooks/.env`:
```bash
N1PANEL_API_KEY=your_api_key_here
N1PANEL_API_URL=https://your-panel-url.com
```

## Development Notes

### TypeScript Configuration
- ES2017 target with ES2021 lib
- Strict mode enabled with null checks
- NoEmit: true (bundled via tsup)
- Module: ES2015 with Node module resolution

### Build Process
- Uses `tsup` for bundling TypeScript to JavaScript
- Output directory: `/hooks/`
- Entry points: `src/entries/*.ts`
- Minimal bundling configuration (no external dependencies by default)

### File Watching
- Uses `chokidar-cli` for development
- Watches `./src/hooks/**` directory (note: may need correction to `./src/entries/**`)
- Automatically rebuilds on changes via `yarn build`
# AliSaParty Architecture

## High-Level Components
- **Mobile App (Flutter)**: Android APK distribution.
- **Real-time Voice Service**: WebRTC + SFU (e.g., LiveKit/Janus/mediasoup).
- **API Service**: REST + WebSocket for metadata, rooms, gifts, and family events.
- **Admin Panel**: React-based dashboard for moderation and economy controls.
- **Data Storage**:
  - PostgreSQL for core entities.
  - Redis for presence, room state, and rate limits.
  - Object storage for images and assets.

## Suggested Stack
- **Mobile**: Flutter + Riverpod + WebRTC SDK.
- **Backend**: Node.js (Fastify) or Go (Fiber).
- **Realtime**: LiveKit (recommended) or mediasoup.
- **Admin**: React + Vite + MUI.

## Key Flows
1. **Join Room**: App requests room token → API issues token → client connects to SFU.
2. **Gifting**: App triggers gift → API validates balance → records ledger → event broadcast.
3. **Coins**: Purchase via Google Play Billing → server verifies receipt → updates wallet.
4. **Custom ID**: Purchase vanity ID → API validates uniqueness → updates profile.

## Security & Moderation
- JWT-based auth for API calls.
- Role-based access control for admin actions.
- Content report pipeline with audit trails.

## Deployment
- Use Kubernetes or containerized services on a VPS.
- CDN for assets.
- Separate staging and production environments.

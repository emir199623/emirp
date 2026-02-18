# AliSaParty Product Requirements (MVP)

## Vision
AliSaParty is a voice-first social platform with live rooms, custom IDs, families (clans), and a coin economy for gifting and monetization. The initial goal is to ship an Android APK (Flutter) backed by a scalable real-time backend and an admin panel.

## Core User Roles
- **Guest**: Can browse public rooms, view profiles, and install/register.
- **User**: Can create/join voice rooms, send gifts, earn badges, buy/sell coins.
- **Family Admin**: Manages family members, roles, and family assets.
- **Platform Admin**: Moderation, coin economy controls, and compliance actions.

## MVP Features
### Voice Rooms
- Create and join real-time voice rooms.
- Room types: public, private (invite-only), and family-only.
- Stage roles: host, co-host, speaker, listener.
- Room-level moderation: mute, kick, ban, lock room.

### Identity & Profiles
- Custom user IDs (vanity IDs) for paid/limited allocations.
- Display names, profile photos, badges, and short bio.
- Leveling system based on XP from activity.

### Families (Clans)
- Create/join families with unique IDs.
- Family roles: owner, manager, member.
- Family rooms and family badges.
- Family treasury (optional for V1.1).

### Coins & Gifts
- Coin purchase flow (Google Play Billing).
- Gift catalog with tiers and seasonal items.
- Coin balance, gift history, and exchange ledger.
- Revenue share rules for hosts and family owners.

### Admin Panel
- User moderation (ban, mute, verify, reset IDs).
- Room monitoring dashboard.
- Gift and coin economy management.
- Content reporting and audit logs.

## Non-Functional Requirements
- Low-latency audio (<300ms target).
- Horizontal scalability for peak rooms.
- GDPR-style data controls for user privacy.
- Abuse detection and rate limiting.

## Out of Scope (Initial MVP)
- iOS release.
- Video rooms.
- NFT or crypto payments.

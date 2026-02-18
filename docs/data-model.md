# AliSaParty Data Model (Draft)

## Users
- id (uuid)
- email / phone
- display_name
- custom_id (unique)
- avatar_url
- level
- xp
- created_at

## Rooms
- id (uuid)
- name
- type (public/private/family)
- host_user_id
- status (live/ended)
- created_at

## RoomParticipants
- id (uuid)
- room_id
- user_id
- role (host/cohost/speaker/listener)
- joined_at
- left_at

## Families
- id (uuid)
- name
- family_id (unique)
- owner_user_id
- created_at

## FamilyMembers
- id (uuid)
- family_id
- user_id
- role (owner/manager/member)
- joined_at

## Wallets
- id (uuid)
- user_id
- coin_balance
- updated_at

## Gifts
- id (uuid)
- name
- price
- image_url
- is_active

## GiftTransactions
- id (uuid)
- from_user_id
- to_user_id
- room_id
- gift_id
- coins_spent
- created_at

## CustomIdPurchases
- id (uuid)
- user_id
- custom_id
- price
- created_at

## ModerationActions
- id (uuid)
- admin_user_id
- target_user_id
- action (ban/mute/warn)
- reason
- created_at

# AlgoDiary — Future Work

Tracking items that need follow-up across layers.

## Pending

### Backend (`/backend`)
- [x] Add `useCase` to the destructured fields in `createPost` and `updatePost` controllers (`server/controllers/posts.js`)

### Database (`/database`)
- [x] Add `useCase: String` field to the Mongoose schema (`server/models/postMessage.js`)

### Frontend (`/frontend`)
- [ ] Improve empty-state UI when no diary entries exist (show a friendly message instead of a spinner)
- [ ] Add form validation (required fields, character limits)

---

## Future — Multi Entry Types (Extensibility)

Make the app support different study card types beyond just algorithms.

### New entry type: **Pattern**
Fields: pattern name, description, when to use it, input/output characteristics, related algorithms, example problems

### Architecture approach
- **Database**: Add `entryType` field (default `"algorithm"`) + flexible `details` object for type-specific fields
- **Backend**: Controllers accept any entry type with corresponding fields
- **Frontend**: Form dialog shows different fields based on a type dropdown; cards render sections dynamically per type

### Potential future types
- Data Structure cards
- Problem Solution cards

---

*Use `/backend` and `/database` agents to complete the pending backend/database items.*

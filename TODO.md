# AlgoDiary — Future Work

Tracking items that need follow-up across layers.

## Pending

### Backend (`/backend`)
- [x] Add `useCase` to the destructured fields in `createPost` and `updatePost` controllers (`server/controllers/posts.js`)
- [x] Add multi entry type support: `entryType`, pattern fields, and insights fields to controllers

### Database (`/database`)
- [x] Add `useCase: String` field to the Mongoose schema (`server/models/postMessage.js`)
- [x] Add `entryType` (enum), pattern fields, and insights fields to the Mongoose schema

### Frontend (`/frontend`)
- [x] Add entry type toggle (Algorithm ↔ Pattern) with conditional form fields
- [x] Add 💡 Insights section (brute force, optimal approach, complexity improvement)
- [x] Add filter tabs (All / Algorithm / Pattern) in Posts grid
- [x] Dynamic card rendering per entry type with type badges and insights panel
- [ ] Improve empty-state UI when no diary entries exist (show a friendly message instead of a spinner)
- [ ] Add form validation (required fields, character limits)

---

## Future — Multi Entry Types (Extensibility)

Make the app support different study card types beyond just algorithms.

### ✅ Implemented: **Pattern**
Fields: pattern name, description, when to use it, input/output characteristics, related algorithms, example problems

### ✅ Implemented: **Insights Section**
Shared across all entry types: brute force approach, optimal solution, complexity improvement

### Potential future types
- Data Structure cards
- Problem Solution cards

---

*Use `/backend` and `/database` agents to complete the pending backend/database items.*

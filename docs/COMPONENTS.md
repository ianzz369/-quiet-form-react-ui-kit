# Component reference

Import from src/index.ts. All callbacks are local UI events; no component sends data to a service.

| Component | Main props | Behavior |
| --- | --- | --- |
| Panel | Standard div attributes, className, children | Approved raised pearl card |
| Button | Standard button attributes including disabled | Primary rounded action |
| Chip | Button attributes, active | Controlled pressed state |
| Metric | value, label, detail | Compact value and label |
| TextArea | Standard textarea attributes | Inset editable surface; supply an associated label |
| MoodSelector | value, onChange | 0 = Low, 1 = Steady, 2 = Good |
| MoodWidget | value, onChange | Heading and mood selector in a panel |
| TaskList | tasks, onToggle(id) | Controlled list; uses Task type |
| FocusDial | seconds, total, running, breathing | Visual timer, minute sweep and breathing state |
| FocusChart | month | Fictional weekly/monthly data preview |
| BottomNav | active, go(index), checkin() | Today 0, Focus 1, You 2; Journal invokes callback |
| ReflectionDialog | mood, onMood, note, onNote, saved, onSave, onClose | Controlled overlay with Escape, focus trap and focus return |
| PhoneFrame | id, screen, label, children, overlay, go, onReflect | Demo phone shell and navigation safe area |
| Status | None | Decorative status-bar display |

## Screens and example state

HomeScreen and FocusScreen receive {state, go}. InsightsScreen receives {state, onReflect}. The state is a CompanionState object returned by useCompanion(). You may supply equivalent state backed by your own application.

~~~tsx
const state = useCompanion();
<FocusScreen state={state} go={(index) => setCurrentScreen(index)} />
~~~

Render screens inside PhoneFrame, or provide your own .qf-kit.theme-b mobile layout.

## Timer

useCompanion exposes chooseSession(seconds, breathing?), startSession(seconds?, breathing?), toggleSession() and resetSession(). Its deadline-based countdown corrects for delayed callbacks when the browser throttles timers. This is an in-page demo: it does not promise background notifications or retain sessions after a refresh.

The green sweep traces one 60-second orbit, matching the approved moving dot. It is a minute indicator, not percentage completion of the full 25-minute session. The center value shows remaining session time. On pause, both freeze; reset uses the selected duration.

## Local state

Mood, tasks and notes are controlled. “Saved for this visit” means current in-memory demo state only. Components do not claim cloud or device persistence.

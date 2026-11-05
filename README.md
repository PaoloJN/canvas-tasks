# Canvas Tasks (mine)

A stripped-down fork of [Tasks for Canvas](https://github.com/UseBetterCanvas/canvas-task-extension) v1.4.0,
the last version before it was merged into BetterCampus.

Just the to-do sidebar on the Canvas dashboard. Nothing else.

Removed from the original:

- Google / BetterCanvas account login (never existed in this version, and never will)
- remote "experiments" config fetch on every page load
- install / uninstall tracking URLs
- Blackboard, Brightspace and Gradescope support
- popup, Firefox build, storybook, CI
- running on every `https://` site: now only `*.instructure.com`

## Build

```
npm install
npm run build
```

Then `chrome://extensions` → Developer mode → Load unpacked → pick the `build/` folder.

If your school's Canvas is on a custom domain (not `*.instructure.com`), add it to
`matches` in `src/manifest-chrome.json` and rebuild.

## Test

```
npx jest
```

MIT, same as the original.

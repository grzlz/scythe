// Main app state - module switching
export let appState = $state({
  currentModule: 'dashboard'
});

export function switchModule(module) {
  appState.currentModule = module;
  history.pushState({}, '', `/#${module}`);
}
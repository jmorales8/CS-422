export const handleNavigate = (path) => {
  window.history.pushState({}, "", path);
  window.dispatchEvent(new Event("popstate")); // Triggers a route update if needed
};

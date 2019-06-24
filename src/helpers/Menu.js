export const toggleMenuBody = state =>
  document.body ? (document.body.style.overflow = state) : null;

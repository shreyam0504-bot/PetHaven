// Minimal React integration for Admin Dashboard (ERN stack)
// We keep existing script.js behavior and just mount a tiny React component.

(function () {
  if (!window.React || !window.ReactDOM) {
    // React not loaded; fail silently, admin panel still works via script.js
    return;
  }

  function AdminReactMarker() {
    // This component does not change the UI.
    // It just proves that React is initialized on this page.
    // All admin request rendering is still handled by script.js (renderAdminPage).
    React.useEffect(function () {
      console.log("AdminReactMarker mounted (React is running).");
    }, []);

    return null;
  }

  var rootEl = document.getElementById("adminReactRoot");
  if (!rootEl) return;

  var root = ReactDOM.createRoot
    ? ReactDOM.createRoot(rootEl)
    : ReactDOM.createRoot(rootEl);

  root.render(React.createElement(AdminReactMarker));
})();

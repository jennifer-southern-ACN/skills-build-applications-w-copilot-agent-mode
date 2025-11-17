
// Set REACT_APP_CODESPACE_NAME from window location if available
if (!process.env.REACT_APP_CODESPACE_NAME && window.location.hostname.includes('app.github.dev')) {
  const codespace = window.location.hostname.split('-8000')[0];
  process.env.REACT_APP_CODESPACE_NAME = codespace;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

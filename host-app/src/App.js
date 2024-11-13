import React, { useState, Suspense } from 'react';

const apps = {
  microFrontend1: React.lazy(() => import('microFrontend1/App')),
  microFrontend2: React.lazy(() => import('microFrontend2/App')),
  microFrontend3: React.lazy(() => import('microFrontend3/App')),
};

function App() {
  const [currentApp, setCurrentApp] = useState(null);

  const loadApp = (app) => {
    setCurrentApp(apps[app]);
  };

  return (
    <div className="text-center">
      <h1 className="text-3xl mb-4">Host App</h1>
      <button
        onClick={() => loadApp('microFrontend1')}
        className="m-2 p-2 bg-blue-500 text-white"
      >
        Load Micro-Frontend 1
      </button>
      <button
        onClick={() => loadApp('microFrontend2')}
        className="m-2 p-2 bg-green-500 text-white"
      >
        Load Micro-Frontend 2
      </button>
      <button
        onClick={() => loadApp('microFrontend3')}
        className="m-2 p-2 bg-red-500 text-white"
      >
        Load Micro-Frontend 3
      </button>
      <Suspense fallback={<div>Loading...</div>}>
        {currentApp ? (
          React.createElement(currentApp)
        ) : (
          <p>Select a Micro-Frontend to load.</p>
        )}
      </Suspense>
    </div>
  );
}

export default App;

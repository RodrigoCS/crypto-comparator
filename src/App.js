import React from 'react';
import { RecoilRoot, useRecoilValue } from 'recoil';
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from 'react-router-dom';

import AppLayout from './layouts/AppLayout';
import Dashboard from './pages/Dashboard/Dashboard';
import Welcome from './pages/Welcome/Welcome';
import { profileCompletionState } from './store/User';

function AuthRoute({ children }) {
  let isProfileComplete = useRecoilValue(profileCompletionState);
  let location = useLocation();

  if (!isProfileComplete) {
    return <Navigate to='/' state={{ from: location }} replace />;
  }

  return children;
}

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route exact path='/' element={<Welcome />} />
            <Route
              path='/dashboard'
              element={
                <AuthRoute>
                  <Dashboard />
                </AuthRoute>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;

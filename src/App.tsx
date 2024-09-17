import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import DemoTypeAnnotation from './components/DemoTypeAnnotations';
import DemoInterfaceAndType from './components/DemoInterfaceAndType';
import DemoGeneric from './components/DemoGeneric';
import DemoUnionTypes from './components/DemoUnionTypes';
import DemoEnum from './components/DemoEnum';
import DemoUseState from './hook/DemoUseState';
import DemoUseEffect from './hook/DemoUseEffect';
import DemoUseContext from './hook/DemoUseContext';
import DemoUseReducer from './hook/DemoUseReducer';
import DemoUseRef from './hook/DemoUseRef';
import DemoUseMemo from './hook/DemoUseMemo';
import DemoUseCallback from './hook/DemoUseCallBack';
import MainLayout from './layout/MainLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />} >
      {/* <Route index element={<MainLayout />} /> */}
      <Route path='/type-annotations' element={<DemoTypeAnnotation />} />
      <Route path='/interface-and-type' element={<DemoInterfaceAndType />} />
      <Route path='/generic' element={<DemoGeneric />} />
      <Route path='/union-types' element={<DemoUnionTypes />} />
      <Route path='/enum' element={<DemoEnum />} />
      <Route path='/use-state' element={<DemoUseState initialValue={1} />} />
      <Route path='/use-effect' element={<DemoUseEffect />} />
      <Route path='/use-context' element={<DemoUseContext />} />
      <Route path='/use-reducer' element={<DemoUseReducer />} />
      <Route path='/use-ref' element={<DemoUseRef />} />
      <Route path='/use-memo' element={<DemoUseMemo />} />
      <Route path='/use-callback' element={<DemoUseCallback />} />
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App

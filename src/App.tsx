import React from 'react';
import './App.css'
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
function App() {
  return (
    <>
    <div>
      <div>
      <h1 className='header'>Feature TypeScript</h1>
      <div className='container'>
      <h2>Type Annotation</h2>
      <DemoTypeAnnotation />
      <h2>Interface And Type</h2>
      <DemoInterfaceAndType />
      <h2>Generics</h2>
      <DemoGeneric />
      <h2>Union Types</h2>
      <DemoUnionTypes />
      <h2>Enum</h2>
      <DemoEnum />
      </div>
      <div>
      <h1 className='header'>Hook TypeScript</h1>
      <div>
        <h2>Use State</h2>
        <DemoUseState initialValue={0}/>
        <h2>Use Effect</h2>
        <DemoUseEffect />
        <h2>Use Context</h2>
        <DemoUseContext />
        <h2>Use Reducer</h2>
        <DemoUseReducer />
        <h2>Use Ref</h2>
        <DemoUseRef />
        <h2>Use Memo</h2>
        <DemoUseMemo />
        <h2>Use CallBack</h2>
        <DemoUseCallback />
      </div>
      </div>
      </div>
    </div>
    
    </>
  )
}

export default App

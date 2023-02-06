import './App.css';
import { ThemeProvider } from './common/ThemeProvider';
import ExampleDeferredValue from './components/HooksExamples/ExampleDeferredValue';
import ExampleUseCallback from './components/HooksExamples/ExampleUseCallback';
import ExampleUseContext from './components/HooksExamples/ExampleUseContext';
import ExampleUseDebugValue from './components/HooksExamples/ExampleUseDebugValue';
import ExmapleUseEffect from './components/HooksExamples/ExampleUseEffect';
import ExampleUseImperative from './components/HooksExamples/ExampleUseImperative';
import ExampleUseInsertionEffect from './components/HooksExamples/ExampleUseInsertionEffect';
import ExampleUseLayoutEffect from './components/HooksExamples/ExampleUseLayoutEffect';
import ExampleUseMemo from './components/HooksExamples/ExampleUseMemo';
import ExampleUseReducer from './components/HooksExamples/ExampleUseReducer';
import ExampleUseRef from './components/HooksExamples/ExampleUseRef';
import ExmapleUseState from './components/HooksExamples/ExampleUseState';
import ExampleUseSyncExternalStore from './components/HooksExamples/ExampleUseSyncExternalStore';
import ExampleUseTransition from './components/HooksExamples/ExampleUseTransition';
import ExampleUseId from './components/HooksExamples/ExmapleUseId';

function App() {
  return (
    <div className="App">
      <div className="hook-example-container"><ExmapleUseState/></div>
      {/* <div className="hook-example-container"><ExmapleUseEffect/></div> */}
      {/* <div className="hook-example-container"><ExampleUseImperative/></div> */}
      {/* <div className="hook-example-container"><ExampleUseId/></div> */}
      {/* <ExampleDeferredValue/> */}
      {/* <ExampleUseTransition/> */}
      {/* <div className="hook-example-container"><ExampleUseDebugValue/></div> */}
      {/* <div className="hook-example-container"><ExampleUseInsertionEffect/></div> */}
      {/* <ThemeProvider>
        <div className="hook-example-container"><ExampleUseContext /></div>
      </ThemeProvider> */}
      {/* <div className="hook-example-container"><ExampleUseMemo/></div> */}
      {/* <div className="hook-example-container"><ExampleUseCallback/></div> */}
      {/* <div className="hook-example-container"><ExampleUseSyncExternalStore/></div> */}
      {/* <div className="hook-example-container"><ExampleUseReducer/></div> */}
      {/* <div className="hook-example-container"><ExampleUseRef/></div> */}
      {/* <div className="hook-example-container"><ExampleUseLayoutEffect/></div> */}
    </div>
  );
}

export default App;

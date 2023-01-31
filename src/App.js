import './App.css';
import { ThemeProvider } from './common/ThemeProvider';
import ExampleDeferredValue from './components/HooksExamples/ExampleDeferredValue';
import ExampleUseContext from './components/HooksExamples/ExampleUseContext';
import ExampleUseDebugValue from './components/HooksExamples/ExampleUseDebugValue';
import ExmapleUseEffect from './components/HooksExamples/ExampleUseEffect';
import ExampleUseImperative from './components/HooksExamples/ExampleUseImperative';
import ExmapleUseState from './components/HooksExamples/ExampleUseState';
import ExampleUseTransition from './components/HooksExamples/ExampleUseTransition';
import ExampleUseId from './components/HooksExamples/ExmapleUseId';

function App() {
  return (
    <div className="App">
      {/* <div className="hook-example-container"><ExmapleUseState/></div> */}
      {/* <div className="hook-example-container"><ExmapleUseEffect/></div> */}
      {/* <div className="hook-example-container"><ExampleUseImperative/></div> */}
      {/* <div className="hook-example-container"><ExampleUseId/></div> */}
      {/* <ExampleDeferredValue/> */}
      {/* <ExampleUseTransition/> */}
      {/* <div className="hook-example-container"><ExampleUseDebugValue/></div> */}
      <ThemeProvider>
        <div className="hook-example-container"><ExampleUseContext /></div>
      </ThemeProvider>
    </div>
  );
}

export default App;

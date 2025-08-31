import { useState } from "react";
import Typeform from "./components/form/Typeform";
import useInput from "./hooks/useInput";
import "./App.css";

function App() {
  const [showModal, setShowModal] = useState(false);

  const authorState = useInput('js');
  const wordState = useInput('');
  const definitionState = useInput('');
  const exampleState = useInput('');

  const showInputModal = (e) => {
    e.preventDefault();
    setShowModal(!showModal);
  };

  const resetValue = () => {
    setShowModal(false);
    authorState.setValue('js');
    wordState.setValue('');
    definitionState.setValue('');
    exampleState.setValue('');
  };

  const handleSubmit = ({e}) => {
    e.preventDefault();
    resetValue();
  };

  return (
    <>
      {showModal 
        ? <Typeform handleSubmit={handleSubmit} authorState={authorState} wordState={wordState} definitionState={definitionState} exampleState={exampleState} resetValue={resetValue}/> 
        : <div className="typewriter" onClick={e => showInputModal(e)}>
            <button>Submit</button>
            <input type="text" placeholder="Type something..." className="triggerInput" aria-disabled="true"/>
          </div>
      }
    </>
  )
};

export default App

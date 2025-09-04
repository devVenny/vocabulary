import { use, useEffect, useState } from "react";
import Typeform from "./components/form/Typeform";
import useInput from "./hooks/useInput";
import "./App.css";
import TypeList from './components/TypeList';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [voca, setVoca] = useState({});
  const [list, setList] = useState([]);
  
  const vocaList = [];
  const authorState = useInput('js');
  const wordState = useInput('');
  const definitionState = useInput('');
  const exampleState = useInput('');
  const authorValue= authorState.bind.value; 
  const wordValue = wordState.bind.value; 
  const definitionValue = definitionState.bind.value; 
  const exampleValue = exampleState.bind.value;
  
  const handleSubmit = ({e}) => {
    e.preventDefault();
    addVocaList();
    // resetValue();
  };

  const addVocaList = () => {
    const currentTimeStamp = Date.now();
    const data = {
      'author': authorValue,
      'word': wordValue,
      'definition': definitionValue,
      'example': exampleValue,
      id: crypto.randomUUID(),
      'time': currentTimeStamp,
    };

    setList(prev => [...prev, data]);
  };

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

  console.log('list: ', list);


  return (
    <>
      {showModal 
        ? <Typeform 
            handleSubmit={handleSubmit} 
            authorState={authorState} 
            wordState={wordState} 
            definitionState={definitionState} 
            exampleState={exampleState} 
            resetValue={resetValue}
            /> 
        : <div className="typewriter" onClick={e => showInputModal(e)}>
            <button>Submit</button>
            <input type="text" placeholder="Type something..." className="triggerInput" aria-disabled="true"/>
          </div>
      }
        <TypeList vocaList={list}/>
    </>
  )
};

export default App

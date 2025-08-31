import Button from "./button/button"

function Typeform({handleSubmit, authorState, wordState, definitionState, exampleState, resetValue}) {
  return (
    <form className="typeform" onSubmit={e => handleSubmit({e})}>
      <div className="dictionary-form">
          <div>
            <label htmlFor="author">저작권자: </label>
            <select name="author" id="author" defaultValue="js" onChange={e => authorState.setValue(e.target.value)}>
              <option value="js">JS</option>
              <option value="hs">HS</option>
            </select>
          </div>
          <div>
            <label htmlFor="word">낱말: </label>
            <input type="text" id="word" name="word" placeholder="Enter a word" onChange={e => wordState.setValue(e.target.value)} value={wordState.bind.value}/>
          </div>
          <div>
            <label htmlFor="definition">정의: </label>
            <input type="text" id="definition" name="definition" placeholder="Enter a definition" onChange={e => definitionState.setValue(e.target.value)} value={definitionState.bind.value}/>
          </div>
          <div>
            <label htmlFor="example">예문: </label>
            <input type="text" id="example" name="example" placeholder="Enter a example" onChange={e => exampleState.setValue(e.target.value)} value={exampleState.bind.value}/>
          </div>
          <div className="submit-button">
          <Button text="등록" type="submit"/>
          <Button text="취소" onClick={resetValue} />
          </div>
      </div>
    </form>
  )
}

export default Typeform
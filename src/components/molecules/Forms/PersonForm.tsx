import { inputPersonFormObjectField } from "@/src/data";
import styled from "@emotion/styled"
import { StandartInput } from "@/src/components";


interface IPersonForm {
    addButton: any;
    clearButton: any
    validationMassage: string
    storageObject: any
    setStorageObject: any
}

export const PersonForm: React.FC<IPersonForm> = ({addButton, clearButton, validationMassage, storageObject, setStorageObject}) => {

    return (
        <div>
         {
          inputPersonFormObjectField.map((value, index) => {
            return <StandartInput key={index} object={storageObject} fieldName={value} setHandle={setStorageObject} />
          })
        }
        <h6>{validationMassage}</h6>
        <AddCandidate onClick={addButton}>Dodaj</AddCandidate><br></br>
        <Wyczysc onClick={clearButton}>Wyczyść</Wyczysc>
        </div>
    )
} 

const AddCandidate = styled.button`
background: transparent;
  border-radius: 3px;
  border: 2px solid #30849e;
  color: black;
  //margin: 0 1em;
  padding: 0.25em 1em;
  margin: 20px 10px 0px 10px;
  
`
const Wyczysc = styled.button`
background: transparent;
  border-radius: 3px;
  border: 2px solid #30849e;
  color: black;
  //margin: 0 1em;
  padding: 0.25em 1em;
  margin: 0px 10px 10px 10px;
  
`
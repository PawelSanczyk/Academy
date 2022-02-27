import { TPersonForm } from "@/src/types";
import styled from "@emotion/styled"
import { stringify } from "querystring";


interface IStandarInput {
    object?: object;
    setHandle: any;
    fieldName: TPersonForm
}




export const StandartInput: React.FC<IStandarInput> = ({setHandle, fieldName, object }) => {

return (
    <Container>
        {console.log("fieldName", fieldName)}
        <Label>{Object.values(fieldName)}:</Label>
        <br></br>
        <Input onChange={value => setHandle({...object, [Object.keys(fieldName) as unknown as string]: value.target.value})} />
    </Container>
)
}

const Container = styled.div`
    /* margin-bottom: 10px; */
`
const Input = styled.input`
    width: 100px;
    margin-top: 4px;
`
const Label = styled.label`
    font-size: 15px;
    
    
`
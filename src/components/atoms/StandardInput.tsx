import styled from "@emotion/styled"


interface IStandarInput {
    object?: object;
    setHandle: any;
    fieldName: string
}




export const StandartInput: React.FC<IStandarInput> = ({setHandle, fieldName, object }) => {

return (
    <Container>
        <Label>{fieldName}:</Label>
        <br></br>
        <Input onChange={value => setHandle({...object, [fieldName]: value.target.value})} />
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
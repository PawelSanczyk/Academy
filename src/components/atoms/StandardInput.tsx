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
        <Input onChange={value => setHandle({...object, [fieldName]: value.target.value})} />
    </Container>
)
}

const Container = styled.div`
    /* margin-bottom: 10px; */
`
const Input = styled.input`
    width: 100px;    
`
const Label = styled.label`
    font-size: 20px;
`
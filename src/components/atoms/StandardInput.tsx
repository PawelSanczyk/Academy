import styled from "@emotion/styled"


interface IStandarInput {
    object: any;
    setHandle: any;
    label: string
    index: number
}

export const StandartInput: React.FC<IStandarInput> = ({setHandle, label, object, index}) => {

return (
    <Container>
        <Label>{label}:</Label>
        <Input onChange={value => setHandle({...object, `${label}`: value.target.value})} />
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
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Lista, PersonForm } from "@/src/components";
import { allowedEmailDomain } from "@/src/data";
import { IPacjent } from "@/src/types";


const HomePage = () => {

  const [pacjenciLista, setPacjenciLista] = useState<IPacjent[]>([])
  const [pacjent, setPacjent] = useState<IPacjent>()
  const [validationMassage, setValidationMassage] = useState<string>('')


  const clearButton = () => {
    window.localStorage.clear()
  }

  const addPersonButon = () => {
    if (pacjent?.imie && pacjent?.nazwisko && pacjent?.email && pacjent?.plec && pacjent?.telefon) {
      allowedEmailDomain.includes(pacjent.email.substring(pacjent.email.indexOf("@"))) == false ? alert("Niepoprawny adres email") :
        pacjent.telefon.length < 9 ? alert("Niepoprawny numer telefonu ( zbyt krótki)") :
          pacjent.telefon.length > 9 ? alert("Niepoprawny numer telefonu ( zbyt długi)") :
            setPacjenciLista([...pacjenciLista, pacjent])
            setValidationMassage('')
    } else {
      console.log("======> Nie wprowadzono wszystkich danych")
      setValidationMassage("Wprowadz wszystkie dane")
    }

  }

  useEffect(() => {
    if (window) {
      let storageItem = window?.localStorage?.getItem('pacjenci')
      if (storageItem)
        setPacjenciLista(JSON.parse(storageItem))
      console.log("w pamieci mam", storageItem)
    }
  }, [])


  useEffect(() => {
    console.log(">>>pacjenci", pacjenciLista)
    console.log("pacjent", pacjent)
  }, [pacjenciLista, pacjent])


  return (
    <Wrapper>
      <Container>
        <PersonForm addButton={addPersonButon}  clearButton={clearButton} validationMassage={validationMassage} storageObject={pacjent} setStorageObject={setPacjent}/>
        {
          pacjenciLista.map((item, index) => {
            return (
              <Lista
                key={index}
                imie={item.imie}
                nazwisko={item.nazwisko}
                email={item.email}
                plec={item.plec}
                telefon={item.telefon}
              />
            )
          })
        }
      </Container>
    </Wrapper>
  );
};

export default HomePage;


const Wrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
height: 100vh;
background-color: gray;
`

const Container = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  padding-right: 30px;
  padding-left: 30px;
  padding-bottom: 10px;
  margin-top: 30px;
  margin-bottom: 30px;
  background-color: #add8e6;
  border: 3px solid #6fbbd3;
`


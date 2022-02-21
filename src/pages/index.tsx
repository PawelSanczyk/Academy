import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Lista, StandartInput, listaemail } from "../components";


export interface IPacjent {
  imie: string
  nazwisko: string 
  email: string 
  plec: string 
  telefon: string 
}


const HomePage = () => {

  const [imie, setImie] = useState<string>("")
  const [nazwisko, setNazwisko] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [plec, setPlec] = useState<string>("M")
  const [telefon, setTelefon] = useState<string>("")

  const [pacjenciLista, setPacjenciLista] = useState<IPacjent[]>([])

  const [pacjent, setPacjent] = useState<IPacjent>()

  const [komunikatWalidacji, setKomunikatWalidacji] = useState<string>('')

  const inputsList = ['Imię', "Nazwisko", "email", "płec", "telefon"]






const czyscicielStorage = () => {
  window.localStorage.clear()
}




const handleButton = () => {
  if (pacjent?.imie && pacjent?.nazwisko && pacjent?.email && pacjent?.plec && pacjent?.telefon) 
  {
      
        listaemail.includes(pacjent.email.substring(pacjent.email.indexOf("@"))) == false ? alert("Niepoprawny adres email") : 
        pacjent.telefon.length < 9 ? alert("Niepoprawny numer telefonu ( zbyt krótki)") : 
        pacjent.telefon.length > 9 ? alert("Niepoprawny numer telefonu ( zbyt długi)") :  
        setPacjenciLista([...pacjenciLista, pacjent])
      
    }
   else {
    console.log("======> Nie wprowadzono wszystkich danych")
  }

}

useEffect(()=>{
  if (window) {
    let a = window?.localStorage?.getItem('pacjenci')
    if (a)
    setPacjenciLista(JSON.parse(a))
    console.log("w pamieci mam", a)
  }
},[])


useEffect(()=>{
  console.log(">>>pacjenci", pacjenciLista)
},[pacjenciLista])


    return (
      <Wrapper>
   <Container>
     {
      inputsList.map((value, index)=> {
       return <StandartInput object={pacjent} fieldName={value} setHandle={setPacjent} />     
      })
    }

    <h1>{komunikatWalidacji}</h1>
   

    <AddCandidate  onClick={handleButton}>Dodaj</AddCandidate><br></br>
    <Wyczysc onClick={czyscicielStorage}>Wyczyść</Wyczysc>


   

   


    {
      pacjenciLista.map(item => {
        return(
          <Lista 
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
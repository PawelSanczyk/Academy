import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Lista, StandartInput, listaemail } from "../components";



interface IKandydat  {
  imie: string
  nazwisko: string 
  email: string 
  plec: string 
  telefon: string 
}


const kandydat: IKandydat = {  
  imie:"Adam",
  nazwisko:"Gabrysiak",
  email:"adam.gabrysiak@gmail.com",
  plec:"M",
  telefon:"555-444-333",
}

const kandydatDrugi: IKandydat = {  
  imie:"Pawel",
  nazwisko:"sanczyk",
  email:"p.sanczyk@gmail.com",
  plec:"M",
  telefon:"555-444-333",
}

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

  const inputsList = ['imie', "nazwisko", "email", "plec", "telefon"]




// const handleButton = () => {            //Dodaje dopiero po drugim wciśnięciu przycisku
//   {console.log("wykonuje func handle", imie)}
//    if (imie && nazwisko && email && plec && telefon)  {                        
//     console.log("======> Dodaję nową pozycję", imie)
//     setPacjenci([...pacjenci, {imie: imie, nazwisko: nazwisko, email: email, plec: plec, telefon: telefon}])
//      window.localStorage.setItem("pacjenci", JSON.stringify(pacjenci))
//    } else {
//     console.log("======> Nie wprowadzono wszystkich danych")
//    }
// }

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
  <Container>
    {
      inputsList.map((value, index)=> {
       return <StandartInput object={pacjent} fieldName={value} setHandle={setPacjent} />     
      })
    }

    <h1>{komunikatWalidacji}</h1>
    {/* <label>Imię:</label><br></br>
    <input  onChange={value => setImie(value.target.value)}></input>
    <br></br><br></br> */}

    {/* <label>Nazwisko:</label><br></br>
    <input onChange={value => setNazwisko(value.target.value)}></input>
    <br></br><br></br>

    <label>Email:</label><br></br>
    <input  onChange={value => setEmail(value.target.value)}></input>
    <br></br><br></br>

    <label >Płeć:</label><br></br> */}
    {/* <input id ="4" name="inputCzwarty" onChange={value => setPlec(value.target.value)}></input>  */}
 

    {/* <select  onChange={value => setPlec(value.target.value)}>
    <option value="M">Mężczyzna</option>
    <option value="K">Kobieta</option>
    </select>
    <br></br><br></br>

    <label >Telefon:</label><br></br>
    <input onChange={value => setTelefon(value.target.value)}></input>
    <br></br><br></br> */}

    <AddCandidate  onClick={handleButton}>Dodaj Kandydata</AddCandidate><br></br>
    <button onClick={czyscicielStorage}>Wyczysc</button>

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

    

    );
};

export default HomePage;


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`

const AddCandidate = styled.button`

`
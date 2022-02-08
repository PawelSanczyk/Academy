import { useEffect, useState } from "react";


interface IKandydat  {
  imie?: string
  nazwisko?: string 
  email?: string 
  plec?: string 
  telefon?: string 
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


const HomePage = () => {

  const [imie, setImie] = useState<string>("")
  const [nazwisko, setNazwisko] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [plec, setPlec] = useState<string>("")
  const [telefon, setTelefon] = useState<string>("")

  const [obiekt, setObiekt] = useState<IKandydat[]>([kandydat])


const handleButton = () => {            //Dodaje dopiero po drugim wciśnięciu przycisku
  {console.log("wykonuje func handle", imie)}

   if (imie && nazwisko && email && plec && telefon)  {                        
    console.log("======> Dodaję nową pozycję", imie)
     setObiekt([...obiekt, {imie: imie, nazwisko: nazwisko, email: email, plec: plec, telefon: telefon}])
     window.localStorage.setItem("pacjenci", JSON.stringify(obiekt))
   }
   if (!imie || !nazwisko || !email || !plec || !telefon)  {    
    console.log("======> Nie wprowadzono wszystkich danych")
   }
   
  {console.log(obiekt)}
}

const czyscicielStorage = () => {
  window.localStorage.clear()
}


useEffect(()=>{
  if (window) {
    let a = window?.localStorage?.getItem('pacjenci')
    if (a)
    setObiekt(JSON.parse(a))
    console.log("w pamieci mam", a)
  }
},[])


    return (
  <div>
    <label htmlFor="1">Imię:</label><br></br>
    <input id ="1" name="inputPierwszy" onChange={value => setImie(value.target.value)}></input>
    <br></br><br></br>

    <label htmlFor="2">Nazwisko:</label><br></br>
    <input id ="2" name="inputDrugi" onChange={value => setNazwisko(value.target.value)}></input>
    <br></br><br></br>

    <label htmlFor="3">Email:</label><br></br>
    <input id ="3" name="inputTrzeci" onChange={value => setEmail(value.target.value)}></input>
    <br></br><br></br>

    <label htmlFor="4">Płeć:</label><br></br>
    {/* <input id ="4" name="inputCzwarty" onChange={value => setPlec(value.target.value)}></input>  */}
    

    <select id="4" onChange={value => setPlec(value.target.value)}>
    <option value="M">Mężczyzna</option>
    <option value="K">Kobieta</option>
    </select>
    <br></br><br></br>

    <label htmlFor="5">Telefon:</label><br></br>
    <input id ="5" name="inputPiaty" onChange={value => setTelefon(value.target.value)}></input>
    <br></br><br></br>

    <button  onClick={handleButton}>Dodaj Kandydata</button><br></br>
    <button onClick={czyscicielStorage}>Wyczysc</button>
  </div>
    );
};

export default HomePage;



import { useEffect, useState } from "react";


interface IKandydat  {
  imie: string
//   nazwisko: string
//   email: string
//   plec: string
//   telefon: string
}


const kandydat: IKandydat = {  
  imie:"Adam",
  // nazwisko:"Gabrysiak",
  // email:"adam.gabrysiak@gmail.com",
  // plec:"M",
  // telefon:"555-444-333",
}

const kandydatDrugi: IKandydat = {  
  imie:"Pawel",
  // nazwisko:"sanczyk",
  // email:"p.sanczyk@gmail.com",
  // plec:"M",
  // telefon:"555-444-333",
}


const HomePage = () => {
  const [imie, setImie] = useState<string>()
  const [obiekt, setObiekt] = useState<IKandydat[]>([kandydat])


const handleButton = () => {
  {console.log("wykonuje func handle", imie)}

   if (imie)  {
     setObiekt([...obiekt, {imie: imie}])
     window.localStorage.setItem("pacjenci", JSON.stringify(obiekt))
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
    <input name="inputPierwszy" onChange={value => setImie(value.target.value)}></input>
    <button  onClick={handleButton}>Dodaj Kandydata</button>
    <button onClick={czyscicielStorage}>Wyczysc</button>
  </div>
    );
};

export default HomePage;



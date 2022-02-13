import styled from "@emotion/styled"


interface iLista {
    imie:string
    nazwisko:string
    email:string
    plec:string
    telefon:string
}


export const Lista: React.FC<iLista> = ({imie, nazwisko, email, plec, telefon }) => {

    return (
    <dl>
        <dt><b>{imie} {nazwisko}:</b></dt>
            <dd>-Płeć: {plec}</dd>
            <dd>-Email: {email}</dd>
            <dd>-Telefon: {telefon}</dd>
    </dl>

    )

}
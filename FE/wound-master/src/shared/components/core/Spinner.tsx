// Importa useEffect e useState da React per gestire effetti collaterali e lo stato locale
import { useEffect, useState } from "react";

// Definizione della componente React Spinner
export function Spinner() {
    // Dichiarazione di uno stato locale 'show' con valore iniziale 'false'
    const [show, setShow] = useState(false);

    // Esegui l'effetto collaterale all'avvio o quando cambia 'setShow'
    useEffect(() => {
        // Imposta un timeout di 300 millisecondi prima di visualizzare lo spinner
        const debounce = setTimeout(() => {
            setShow(true);
        }, 300);

        // Pulizia: cancella il timeout se la componente viene smontata o 'setShow' cambia
        return () => clearTimeout(debounce);
    }, [setShow]); // L'effetto collaterale dipende solo da 'setShow'

    // Restituisci la componente: mostra uno spinner se 'show' è 'true', altrimenti nulla
    return show ? (
        <div className="flex w-full justify-center my-4">
            {/* Icona di uno spinner animato dalla libreria Font Awesome */}
            <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
        </div>
    ) : null;
}

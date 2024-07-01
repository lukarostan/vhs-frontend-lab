import {useEffect, useState} from 'react'
import './App.css'
import {get} from "./services/api/api.ts";

function App() {
    const [tapes, setTapes] = useState([]);


    useEffect(() => {
        const getTapes = async () => {
            const response = await get('http://localhost:3000/api/vhs');
            setTapes(response)
        }
        getTapes()
        console.log(tapes)
    }, [])

    return (
        <>
            {tapes.length > 0 && tapes.map(tape => <div key={tape.id}>{tape.title}</div>)}
        </>
    )
}

export default App

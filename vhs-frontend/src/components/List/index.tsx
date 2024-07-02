import {useEffect, useState} from 'react'
import './index.scss'
import {getAll} from "../../services/api/api";
import {TapeListItem} from "../TapeListItem";

function TapeList() {
    const [tapes, setTapes] = useState([]);

    useEffect(() => {
        const getTapes = async () => {
            const response = await getAll();
            setTapes(response)
        }
        getTapes()
        console.log(tapes)
    }, [])

    return (
        <div className='tapes-grid'>
            {tapes.length > 0 && tapes.map(tape => <TapeListItem tape={tape} key={tape.id}/>)}
        </div>
    )
}

export default TapeList

import './style.scss';
import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {deleteOne, getOne} from "../../services/api/api";

type TapeDetailsItemProps = {
    id: number;
    title: string;
    description: string;
    genre: string;
    duration: number;
    releasedAt: number;
    rentalPrice: number;
    rentalDuration: number;
    quantity: number;
    thumbnail: string;
}

export const TapeDetailsItem = () => {
    const {tapeId} = useParams();
    const [tape, setTape] = useState<{} | TapeDetailsItemProps>({})
    const deleteTape = () => {
        if (tapeId) {
            deleteOne(tapeId)
        }
    }

    useEffect(() => {
        const getTape = async () => {
            const response = await getOne(tapeId);
            setTape(response)
        }
        getTape()
    }, [])

    return <div className='tape-details-item'>
        <span className='tape-name'>{tape.title}</span>
        <span className='tape-description'>{tape.description}</span>
        <span className='tape-genre'>{tape.genre}</span>
        <span className='tape-duration'>{tape.duration}</span>
        <span className='tape-releasedAt'>Released: {tape.releasedAt}</span>
        <span className='tape-rentalPrice'>{tape.rentalPrice}$</span>
        <span className='tape-rentalDuration'>{tape.rentalDuration} days</span>
        <span className='tape-quantity'>{tape.quantity}</span>
        <button onClick={() => deleteTape()}>Delete entry</button>
        <Link to={`/edit/${tape.id}`}>Edit entry</Link>
    </div>
}
import './style.scss';
import {Link} from "react-router-dom";

type TapeListItemProps = {
    tape: {
        id: number;
        title: string;
        releasedAt: number;
        rentalPrice: number;
    }
}


export const TapeListItem = ({tape}: TapeListItemProps) => {
    return <Link to={`details/${tape.id}`} className='tape-list-item' key={tape.id}>
        <span className='tape-name'>{tape.title}</span>
        <span className='tape-releasedAt'>Released: {tape.releasedAt}</span>
        <span className='tape-rentalPrice'>{tape.rentalPrice}$</span>
    </Link>
}
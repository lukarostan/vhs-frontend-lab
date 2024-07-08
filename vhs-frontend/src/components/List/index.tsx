import './index.scss'
import {getAll} from "../../services/api/api";
import {TapeListItem} from "../TapeListItem";
import {useQuery} from "react-query";

export type Tape = {
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

function TapeList() {
    const getTapes = async (): Promise<Tape[]> => {
        return await getAll();
    }
    const {isLoading, data, error} = useQuery<Tape[]>({queryKey: ['allTapes'], queryFn: getTapes})

    if (isLoading) {
        return (
            <span>Loading...</span>
        )
    }

    if (error || data === undefined) {
        return (
            <span>Error...</span>
        )
    }

    return (
        <div className='tapes-grid'>
            {data.length > 0 && data.map(tape => <TapeListItem tape={tape} key={tape.id}/>)}
        </div>
    )
}

export default TapeList

import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getOne} from "../../services/api/api";
import {CreateTape} from "../CreateTape";

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

export const EditTapeWrapper = () => {
    const {tapeId} = useParams();
    const [tape, setTape] = useState<{} | TapeDetailsItemProps>({})

    useEffect(() => {
        const getTape = async () => {
            const response = await getOne(tapeId);
            setTape(response)
        }
        getTape()
    }, [])

    console.log("tape was fetched", tape)

    return <CreateTape initialTape={tape} isEdit={true}/>
}
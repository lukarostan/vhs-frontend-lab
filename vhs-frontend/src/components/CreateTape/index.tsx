import './style.scss';
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {InputText} from "primereact/inputtext";
import {FloatLabel} from "primereact/floatlabel";
import {InputTextarea} from "primereact/inputtextarea";
import {InputNumber} from "primereact/inputnumber";
import {create} from "../../services/api/api";
import {useEffect} from "react";
import {zodResolver} from "@hookform/resolvers/zod";
import * as z from 'zod';


export type TapeInputs = {
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

const schema = z.object({
    title: z.string().min(1, {message: 'Title is required'})
});

export const CreateTape = ({initialTape, isEdit}) => {
    const {register, handleSubmit, control, watch, reset, formState: {errors}} = useForm<TapeInputs>({
        defaultValues: {
            title: initialTape.title,
            description: initialTape.description
        },
        resolver: zodResolver(schema)

    })
    const onSubmit: SubmitHandler<TapeInputs> = data => create(data);

    useEffect(() => {
        if (!isEdit) return;
        reset(initialTape)
    }, [reset])


    return <div className='tape-create'>
        <h2>Create tape</h2>
        <form className='form'>
            <FloatLabel>
                <label htmlFor="title">Title</label>
                <InputText id="title" {...register('title', {required: true, value: initialTape.title})} />
            </FloatLabel>
            {errors.title && <span>This field is required</span>}
            <FloatLabel>
                <label htmlFor="description">Description</label>
                <InputTextarea id="description" {...register('description', {required: true})}/>
            </FloatLabel>
            {errors.description && <span>This field is required</span>}
            <FloatLabel>
                <label htmlFor="genre">Genre</label>
                <InputText id="genre" {...register('genre', {required: true})}/>
            </FloatLabel>
            {errors.genre && <span>This field is required</span>}
            <Controller
                name="duration"
                control={control}
                rules={{required: true}}
                render={({field}) => <FloatLabel>
                    <label htmlFor="duration">Duration</label>
                    <InputNumber name='duration' id='duration' onChange={event => field.onChange(event.value)}/>
                </FloatLabel>}/>
            {errors.duration && <span>This field is required</span>}
            <Controller
                name="releasedAt"
                control={control}
                rules={{required: true}}
                render={({field}) => <FloatLabel>
                    <label htmlFor="releasedAt">Year of release</label>
                    <InputNumber id="releasedAt" onChange={event => field.onChange(event.value)}/>
                </FloatLabel>}/>
            {errors.releasedAt && <span>This field is required</span>}

            <Controller
                name="rentalPrice"
                control={control}
                rules={{required: true}}
                render={({field}) => <FloatLabel>
                    <label htmlFor="rentalPrice">Rental Price</label>
                    <InputNumber id="rentalPrice" onChange={event => field.onChange(event.value)}/>
                </FloatLabel>}/>
            {errors.rentalPrice && <span>This field is required</span>}

            <Controller
                name="rentalDuration"
                control={control}
                rules={{required: true}}
                render={({field}) => <FloatLabel>
                    <label htmlFor="rentalDuration">Rental duration</label>
                    <InputNumber id="rentalDuration" onChange={event => field.onChange(event.value)}/>
                </FloatLabel>}/>
            {errors.rentalDuration && <span>This field is required</span>}

            <Controller
                name="quantity"
                control={control}
                render={({field}) => <FloatLabel>
                    <label htmlFor="quantity">Quantity</label>
                    <InputNumber id="quantity" onChange={event => field.onChange(event.value)}/>
                </FloatLabel>}/>

            <FloatLabel>
                <label htmlFor="thumbnail">Thumbnail</label>
                <InputText id="thumbnail" {...register('thumbnail')}/>
            </FloatLabel>
        </form>
        <button onClick={handleSubmit(onSubmit)}>Submit</button>
    </div>
}
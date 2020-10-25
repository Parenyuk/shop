import React from 'react';
import {useForm} from 'react-hook-form';
import {makeStyles, Theme} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


export const useConfirmOrderProductStyles = makeStyles((theme: Theme) => ({
        form: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        },


        input: {
            margin: 15,
            minWidth: 300,

        },
        order: {
            marginBottom: 20,
            margin: '0 auto',

        }
    }
))


export const ConfirmOrderProduct = () => {

    const { register, handleSubmit } = useForm();
    const classses = useConfirmOrderProductStyles();

    const onSubmit = (data: any) => console.log(data);
    return (
        <div >
            <form onSubmit={handleSubmit(onSubmit)} className={classses.form}>
                <input className={classses.input} placeholder={'name'} name="firstName" ref={register({ required: true, maxLength: 20 })} />
                <input className={classses.input} placeholder={'surname'} name="lastName" ref={register({ pattern: /^[A-Za-z]+$/i })} />
                <input className={classses.input} placeholder={'address'} name={'address'} ref={register({ pattern: /^[A-Za-z]+$/i })} />
                <input className={classses.input} placeholder={'telephone'} name={'telephone'} ref={register({ required: true, minLength: 10, maxLength: 20, })} />
                <Button variant='contained' color='primary' className={classses.order} type='submit' >ORDER</Button>
                {/*<input className={classses.input} type="submit" />*/}
            </form>
        </div>
    )
}

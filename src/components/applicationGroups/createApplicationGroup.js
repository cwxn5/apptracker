import React from 'react';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';

import {createApplicationGroup} from '../../actions/applicationGroups'

const CreateApplicationGroup = () => {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const onSubmit = ({ applicationGroupName }) => {
        // validate name

        // make sure it does not already exist

        // save
        console.log(applicationGroupName);
        dispatch(createApplicationGroup(applicationGroupName))
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("applicationGroupName", { required: true })} />
            <input type="submit" />
        </form>
    );
}

export default CreateApplicationGroup;
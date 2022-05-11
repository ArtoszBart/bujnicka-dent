import { useState } from "react";
import validate from './../validation/validateContactForm';
import { sendingState, successStateSending, getErrorState } from './../../../../helpers/sendingStates';
import { decodeErrorMessages } from './../../../../helpers/validationCommon';
import axios from 'axios';

const useContactForm = () => {


    return { handleChange, handleSubmit, values, errors, submitInfo };
};

export default useContactForm;
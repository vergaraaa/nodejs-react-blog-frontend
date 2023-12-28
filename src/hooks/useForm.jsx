import { useState } from "react";

import React from 'react'

export const useForm = (initial = {}) => {

    const [form, setForm] = useState(initial);

    const serializeForm = (form) => {
        const formData = new FormData(form);

        const completeObject = {};

        for (let [name, value] of formData) {
            completeObject[name] = value;
        }

        return completeObject;
    }

    const sent = (e) => {
        e.preventDefault();

        let form = serializeForm(e.target);

        setForm(form);

        document.querySelector(".code").classList.add("sent");
    }

    const change = ({ target }) => {
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value,
        })
    }

    return {
        form,
        serializeForm,
        sent,
        change,
    }
}

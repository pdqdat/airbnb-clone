"use client";

import { useCallback, useState } from "react";
import axios from "axios";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

// hooks
import useRegisterModal from "@/hooks/useRegisterModal";

// icons
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

// components
import Modal from "./Modal";
import { title } from "process";

const RegisterModal = () => {
    const registerModal = useRegisterModal();
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        axios
            .post("/api/register", data)
            .then(() => {
                registerModal.onClose();
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <Modal
            title="Register"
            disabled={isLoading}
            isOpen={registerModal.isOpen}
            actionLabel="Continue"
            onClose={registerModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
        />
    );
};

export default RegisterModal;

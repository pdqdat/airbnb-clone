"use client";

import { useMemo, useState } from "react";
import { useForm, FieldValues } from "react-hook-form";

// components
import Modal from "./Modal";
import { categories } from "../navbar/Categories";
import CategoryInput from "../inputs/CategoryInput";
import CountrySelect from "../inputs/CountrySelect";

// hooks
import useRentModal from "@/hooks/useRentModal";
import Heading from "../Heading";

enum STEPS {
    CATEGORY = 0,
    LOCATION = 1,
    INFO = 2,
    IMAGES = 3,
    DESCRIPTION = 4,
    PRICE = 5,
}

const RentModal = () => {
    const rentModal = useRentModal();

    const [step, setStep] = useState(STEPS.CATEGORY);

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
        reset,
    } = useForm<FieldValues>({
        defaultValues: {
            category: "",
            location: null,
            guestCount: 1,
            bathroomCount: 1,
            imageSrc: "",
            price: 1,
            title: "",
            description: "",
        },
    });

    const category = watch("category");
    const location = watch("location");

    const setCustomValue = (id: string, value: any) => {
        setValue(id, value, {
            shouldDirty: true,
            shouldTouch: true,
            shouldValidate: true,
        });
    };

    const onBack = () => {
        setStep((value) => value - 1);
    };

    const onNext = () => {
        setStep((value) => value + 1);
    };

    const actionLabel = useMemo(() => {
        // if user is on the last step, change the label to "Create"
        if (step === STEPS.PRICE) {
            return "Create";
        }

        return "Next";
    }, [step]);

    const secondaryActionLabel = useMemo(() => {
        // if user is on the first step, hide the back button
        if (step === STEPS.CATEGORY) {
            return undefined;
        }

        return "Back";
    }, [step]);

    // STEP 1: category select
    let bodyContent = (
        <div className="flex flex-col gap-8">
            <Heading
                title="Which of these best describes your place?"
                subtitle="Pick a category"
            />

            {/* categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[50vh] overflow-y-auto">
                {categories.map((item) => (
                    <div key={item.label} className="col-span-1">
                        <CategoryInput
                            onClick={(category) =>
                                setCustomValue("category", category)
                            }
                            selected={category === item.label}
                            label={item.label}
                            icon={item.icon}
                        />
                    </div>
                ))}
            </div>
        </div>
    );

    // STEP 1: location select
    if (step === STEPS.LOCATION) {
        bodyContent = (
            <div className="flex flex-col gap-8">
                <Heading
                    title="Where's your place located?"
                    subtitle="Help guests find you"
                />

                <CountrySelect
                    value={location}
                    onChange={(value) => setCustomValue("location", value)}
                />
            </div>
        );
    }

    return (
        <Modal
            title="Airbnb your home"
            body={bodyContent}
            // footer={footerContent}
            // disabled={isLoading}
            isOpen={rentModal.isOpen}
            actionLabel={actionLabel}
            secondaryActionLabel={secondaryActionLabel}
            secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
            onClose={rentModal.onClose}
            onSubmit={onNext}
        />
    );
};

export default RentModal;

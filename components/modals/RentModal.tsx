"use client";

// components
import Modal from "./Modal";

// hooks
import useRentModal from "@/hooks/useRentModal";

const RentModal = () => {
    const rentModal = useRentModal();

    return (
        <Modal
            title="Airbnb your home"
            // body={bodyContent}
            // footer={footerContent}
            // disabled={isLoading}
            isOpen={rentModal.isOpen}
            actionLabel="Submit"
            onClose={rentModal.onClose}
            onSubmit={rentModal.onClose}
        />
    );
};

export default RentModal;

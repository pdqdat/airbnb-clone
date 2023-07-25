"use client";

import { useCallback, useState } from "react";

// components
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/hooks/useRegisterModal";
import useLoginModal from "@/hooks/useLoginModal";

// icons
import { AiOutlineMenu } from "react-icons/ai";

import { signOut } from "next-auth/react";
import { SafeUser } from "@/types";

interface UserMenuProps {
    currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
    const [isOpen, setIsOpen] = useState(false);

    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, []);

    return (
        <div className="relative">
            <div className="flex flex-row items-center gap-3">
                <div
                    onClick={() => {}}
                    className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
                >
                    Airbnb your home
                </div>

                {/* button => div */}
                <button
                    onClick={toggleOpen}
                    className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
                >
                    <AiOutlineMenu />

                    <div className="hidden md:block">
                        <Avatar src={currentUser?.image} />
                    </div>
                </button>
            </div>

            {isOpen && (
                <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
                    <div className="flex flex-col cursor-pointer">
                        {currentUser ? (
                            <>
                                <MenuItem label="My trips" onClick={() => {}} />

                                <MenuItem
                                    label="My favorites"
                                    onClick={() => {}}
                                />

                                <MenuItem
                                    label="My reservations"
                                    onClick={() => {}}
                                />

                                <MenuItem
                                    label="My properties"
                                    onClick={() => {}}
                                />

                                <MenuItem
                                    label="Airbnb my home"
                                    onClick={() => {}}
                                />

                                <hr />

                                <MenuItem
                                    label="Log out"
                                    onClick={() => signOut()}
                                />
                            </>
                        ) : (
                            <>
                                <MenuItem
                                    label="Login"
                                    onClick={loginModal.onOpen}
                                />

                                <MenuItem
                                    label="Sign up"
                                    onClick={registerModal.onOpen}
                                />
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserMenu;

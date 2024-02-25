import React from "react";

import { GiConfirmed } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-hot-toast";

function Modal(props) {
    const { setModalIsOpen, setCartValue, setUniqueCart } = props;

    const handleModal = () => {
        setModalIsOpen(false);
    };
    const handleRemoveAllItems = () => {
        try {
            setCartValue([]);
            setUniqueCart([]);
            setModalIsOpen(false);
            toast.success("All products are deleted");
        } catch (err) {
            toast.error("Something went wrong");
        }
    };
    return (
        <div className="">
            <div className="w-full max-w-xs p-4 border rounded-md shadow-md border-violet-500/20 bg-gray-500/20">
                <div className="flex flex-col gap-8">
                    <div className="flex w-max ">
                        <button onClick={handleModal} className="">
                            <span>
                                <RxCross2 className="text-xl font-bold" />
                            </span>
                        </button>
                    </div>
                    <h2 className="text-center shrink-1">
                        Are you sure you want to delete all the products?
                    </h2>
                    <button
                        type="button"
                        onClick={handleRemoveAllItems}
                        className='px-8 py-2 flex items-center justify-center gap-2 capitalize font-semibold cursor-pointer w-full bg-natural3/70 text-denger hover:bg-denger rounded-md hover:text-natural3 transition-all ease-in-out duration-[300ms]'
                    >
                        
                        <GiConfirmed classNames="text-2xl font-bold text-denger mr-4" />
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Modal;
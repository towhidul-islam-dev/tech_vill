import { Fragment, useState } from "react";

import { Listbox, Transition } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";


const Category = ({options,selectedOption,setSelectedOption}) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Listbox
      value={selectedOption}
      onChange={(event) => {
        setIsOpen(false);
        return setSelectedOption(event);
      }}
    >
      <div className="relative">
        <Listbox.Button
          onClick={handleClick}
          className="-z-10 py-2 pl-3 capitalize pr-3 text-left border border-gray-300 rounded-md cursor-pointer focus:outline-none focus:ring focus:border-blue-300 flex items-center justify-between gap-10 "
        >
          {selectedOption}
          {!isOpen ? (
            <ChevronUpIcon className="h-6 w-6 text-gray-500 transition-all ease-in-out duration-300" />
          ) : (
            <ChevronDownIcon className="h-6 w-6 text-gray-500 transition-all ease-in-out duration-300" />
          )}
        </Listbox.Button>

        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute z-10 left-0 mt-2 overflow-x-hidden bg-gray-100 border border-gray-300 rounded-md max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none w-full min-w-max ">
            {options.map((option) => (
              <Listbox.Option
                key={option.category}
                value={option.category}
                className={({ active }) =>
                  `${
                    active ? "text-white bg-violet-800 capitalize min-w-max" : "min-w-max text-gray-900 capitalize"
                  } cursor-pointer select-none relative py-2 pl-10 pr-4`
                }
              >
                {({ selected, active }) => {
                  return (
                    <>
                      <span
                        className={`${
                          selected ? "font-medium" : "font-normal"
                        } block truncate`}
                      >
                        {option.category}
                      </span>

                      {selected ? (
                        <span
                          className={`${
                            active ? "text-white" : "text-violet-800"
                          } absolute inset-y-0 left-0 flex items-center pl-3`}
                        >
                          {/* Checkmark */}
                          <svg
                            className="w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M0 11l2-2 5 5L18 3l2 2L7 18z"
                            />
                          </svg>
                        </span>
                      ) : null}
                    </>
                  );
                }}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

export default Category;

"use client";

import { CarProps } from "@types";
import React from "react";
import { Fragment } from "react";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { generateCarImageUrl } from "@utils";

interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 ">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-out duration-300"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-[450px] max-h-[100vh] overflow-y-auto transform rounded-2xl bg-white p-4 text-left shadow-xl transition-all flex flex-col gap-5">
                  <button
                    type="button"
                    className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
                    onClick={closeModal}
                  >
                    <Image
                      src="/close.svg"
                      alt="close"
                      width={15}
                      height={15}
                      className="object-contain"
                    />
                  </button>

                  <div className="flex-1 flex flex-col gap-2">
                    <div className="relative w-full h-28 bg-pattern bg-cover bg-center rounded-lg">
                      <Image
                        src={generateCarImageUrl(car)}
                        alt="hero"
                        fill
                        className="object-contain"
                      />
                    </div>

                    <div className="flex gap-2">
                      <div className="flex-1 relative w-full h-20 bg-primary-blue-100 rounded-lg">
                        <Image
                          src={generateCarImageUrl(car, '29')}
                          alt="hero"
                          fill
                          className="object-contain"
                        />
                      </div>

                      <div className="flex-1 relative w-full h-20 bg-primary-blue-100 rounded-lg">
                        <Image
                          src={generateCarImageUrl(car, '33')}
                          alt="hero"
                          fill
                          className="object-contain"
                        />
                      </div>

                      <div className="flex-1 relative w-full h-20 bg-primary-blue-100 rounded-lg">
                        <Image
                          src={generateCarImageUrl(car, '13')}
                          alt="hero"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col">
                    <h2 className="font-semibold capitalize">
                      {car.make} {car.model}
                    </h2>

                    <div className="mt-3  flex flex-wrap gap-2">
                      {Object.entries(car).map(([key, value]) => (
                        <div
                          className="flex justify-between gap-5 w-full text-right"
                          key={key}
                        >
                          <h5 className="text-gray text-[14px] capitalize">
                            {key.split("_").join(" ")}
                          </h5>
                          <p className="text-black-100 text-[14px]  font-semibold">
                            {value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CarDetails;

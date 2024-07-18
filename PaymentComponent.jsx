import React from "react";
import { FaCalendar } from "react-icons/fa";
import { CiBank } from "react-icons/ci";
import { LuWallet } from "react-icons/lu";
import Link from "next/link";

const PaymentAppointment = () => {
  return (
    <>
      <div className="headerStyle py-7 pl-10 rounded-t-lg bg-purple-600 ">
        <p className="font-semibold text-white">Select Plan</p>
      </div>

      <div className="flex flex-col items-center">
        <div className="min-w-[400px] lg:min-w-[800px] mx-auto flex flex-col items-center">
          <div className="flex py-2 justify-between w-full space-x-4 px-10 my-5 rounded-md bg-purple-200">
            <div className="flex items-center">
              <img
                src="/images/DoctorConsultingPage3.png"
                alt=""
                className="w-16 h-16"
              />
              <div className="ml-3">
                <p className="text-sm font-bold">Dr. Lisha Chan MD</p>
                <p className="text-sm font-normal">Surgery Specialist</p>
              </div>
            </div>
            <div className="border-l-2 border-gray-400 h-16"></div>{" "}
            {/* Vertical line */}
            <div className="flex flex-col items-center">
              <p className="text-purple-500">
                <FaCalendar />
              </p>
              <p>8th April 2024</p>
              <p className="text-purple-500">9:00am-12:00pm</p>
            </div>
            <div className="border-l-2 border-gray-400 h-16"></div>{" "}
            <div className="flex items-center">
              <p className="text-sm font-normal">Surgery Specialist</p>
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-16">
          {/* Left Column: Coupon Code and Payment Options */}
          <div className="flex flex-col w-full md:w-auto">
            <div className="mb-4">
              <p className="font-semibold">Coupon Code</p>
              <div className="flex mt-2">
                <input
                  type="text"
                  className="border-gray-300 focus:outline-none border mt-2 pl-4 w-full md:w-auto"
                  placeholder="Have a coupon code?"
                />
                <button className="bg-purple-600 py-2 px-6 ml-4 rounded-md text-sm text-white">
                  Apply
                </button>
              </div>
            </div>

            <div className="my-5">
              <p className="font-semibold mb-3">Select Payment</p>
              <div className="space-y-4 ">
                {/* UPI Payment Option */}
                <div
                  className={`flex items-center p-1 border border-gray-300 rounded-md cursor-pointer `}
                >
                  <img
                    src="/images/phonepay.png"
                    alt=""
                    className="w-8 h-6 mr-3"
                  />
                  <span className="text-sm">UPI</span>
                  <input
                    type="radio"
                    name="payment"
                    className="ml-auto w-8 h-6"
                    readOnly
                  />
                </div>

                {/* Credit/Debit Card Payment Option */}
                <div
                  className={`flex items-center p-1 border border-gray-300 rounded-md cursor-pointer `}
                >
                  <img
                    src="/images/debit.png"
                    alt=""
                    className="w-9 h-6 mr-3"
                  />
                  <span className="text-sm">Credit/Debit Card</span>
                  <input
                    type="radio"
                    name="payment"
                    className="ml-auto w-8 h-6"
                    readOnly
                  />
                </div>

                {/* Net Banking Payment Option */}
                <div
                  className={`flex items-center p-1 border border-gray-300 rounded-md cursor-pointer`}
                >
                  <CiBank className="w-6 h-6 mr-3" />
                  <span className="text-sm">Net Banking</span>
                  <input
                    type="radio"
                    name="payment"
                    className="ml-auto w-8 h-6"
                    readOnly
                  />
                </div>

                {/* Wallet Payment Option */}
                <div
                  className={`flex items-center p-1 border border-gray-300 rounded-md cursor-pointer `}
                >
                  <LuWallet className="w-6 h-6 mr-3" />
                  <span className="text-sm">Wallet</span>
                  <input
                    type="radio"
                    name="payment"
                    className="ml-auto w-8 h-6 "
                    readOnly
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Total Amount and Make Payment Button */}
          <div className="flex flex-col justify-center items-center text-white">
            <div className="flex items-center w-full md:min-w-[400px] py-3 px-10 bg-purple-800 rounded-md mt-4 md:mt-0">
              <div className="flex-1">Total Amount</div>
              <div className="text-yellow-400 ml-auto">Rs. 999</div>
            </div>
            <Link href="/Consult/ConfirmationPage" className="flex justify-center w-full md:min-w-[400px] py-3 px-6 md:px-10 bg-purple-600 rounded-md btn mt-4">
              Make Payment
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentAppointment;

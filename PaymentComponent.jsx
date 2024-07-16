import { useState } from "react";
import React from "react";
import { FaCalendar } from "react-icons/fa";
import { CiBank } from "react-icons/ci";
import { LuWallet } from "react-icons/lu";

const PaymentPage = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <React.Fragment>
      <div className="flex flex-col m-10 ">
        <div className="text-sm flex flex-row py-3 rounded-lg bg-LiteLavender2 space-x-28 justify-center items-center">
          <div className="flex items-center">
            <img
              src="src/assets/doc.jpeg"
              alt=""
              className="docImg mr-3 rounded-lg"
            />
            <div>
              <p className="font-semibold">Dr.Lisa Chen MD</p>
              <p>Surgery Specialist</p>
            </div>
          </div>
          <div className="verticalLine"></div>
          <div className="text-center">
            <p className="text-Lavender ml-11">
              <FaCalendar />
            </p>
            <p>8th April 2024</p>
            <p className="text-Lavender">9:00am-12:00pm</p>
          </div>
          <div className="verticalLine"></div>
          <div>
            <p className="text-Lavender">6 Months-Plan</p>
          </div>
        </div>

        <div className="mt-4 flex space-x-16">
          <div>
            <div>
              <p>Coupon Code</p>
              <div>
                <input
                  type="text"
                  className="input border-Gray focus:outline-none border mt-2 pl-4"
                  placeholder="Have a coupon code?"
                />
                <button className="btn bg-Lavender py-2 px-6 ml-4 rounded-md text-sm">
                  Apply
                </button>
              </div>
            </div>

            <div className="mt-3 Selectpayment">
              <p className="mb-3">Select Payment</p>

              <div className="space-y-4">
                <div
                  className={`flex items-center p-1 border border-Gray rounded-md cursor-pointer ${
                    selectedOption === "upi"
                      ? "border-purple-500"
                      : "border-gray-300"
                  }`}
                  onClick={() => handleOptionChange("upi")}
                >
                  <img src="src/assets/phonepay.png" alt="" className="w-8 h-6 mr-3" />
                  <span className="text-sm">UPI</span>
                  <input
                    type="radio"
                    name="payment"
                    checked={selectedOption === "upi"}
                    className="radio ml-auto"
                    readOnly
                  />
                </div>

                <div
                  className={`flex items-center p-1 border border-Gray rounded-md cursor-pointer ${
                    selectedOption === "card"
                      ? "border-purple-500"
                      : "border-gray-300"
                  }`}
                  onClick={() => handleOptionChange("card")}
                >
                  <img src="src/assets/debit.png" alt="" className="w-9 h-6 mr-3" />
                  <span className="text-sm">Credit/Debit Card</span>
                  <input
                    type="radio"
                    name="payment"
                    checked={selectedOption === "card"}
                    className="radio ml-auto"
                    readOnly
                  />
                </div>

                <div
                  className={`flex items-center p-1 border border-Gray rounded-md cursor-pointer ${
                    selectedOption === "netBanking"
                      ? "border-purple-500"
                      : "border-gray-300"
                  }`}
                  onClick={() => handleOptionChange("netBanking")}
                >
                  <CiBank className="w-6 h-6 mr-3" />
                  <span className="text-sm">Net Banking</span>
                  <input
                    type="radio"
                    name="payment"
                    checked={selectedOption === "netBanking"}
                    className="radio ml-auto"
                    readOnly
                  />
                </div>

                <div
                  className={`flex items-center p-1 border border-Gray rounded-md cursor-pointer ${
                    selectedOption === "wallet"
                      ? "border-purple-500"
                      : "border-gray-300"
                  }`}
                  onClick={() => handleOptionChange("wallet")}
                >
                  <LuWallet className="w-6 h-6 mr-3" />
                  <span className="text-sm">Wallet</span>
                  <input
                    type="radio"
                    name="payment"
                    checked={selectedOption === "wallet"}
                    className="radio ml-auto"
                    readOnly
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="VeriticalLine2"></div>
          <div>
            <div className="TotalAmount flex space-x-36 py-3 px-10 bg-DarkLavender rounded-md btn mt-20">
                <div>Total Amount</div>
                <div className="goldLite">Rs. 999</div>
            </div>
            <button className="TotalAmount flex space-x-36 py-3 px-10 bg-Lavender rounded-md btn mt-10 justify-center">
                <div>Make Payments</div>
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PaymentPage;

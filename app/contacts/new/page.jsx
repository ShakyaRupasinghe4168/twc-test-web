"use client";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";

const AddContactPage = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/contacts", {
        fullName,
        email,
        phoneNumber,
        gender,
      });

      console.log("New contact added:", response.data);
    } catch (error) {
      console.error("Error adding new contact:", error);
    }
  };

  return (
    <div
      className="h-screen flex items-center justify-center overflow-clip"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.8)), url('/assets/background.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Head>
        <title>add new contact</title>
      </Head>
      <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 overflow-clip">
        <div
          className="bg-[#083F46] rotate-12"
          style={{ width: "1900px", height: "950px", borderRadius: "30%" }}
        ></div>
      </div>
      <div className="absolute top-[55px] left-[260px]">
        <div className="flex">
          <img
            src="/assets/logo1.png"
            alt="Logo"
            className="w-18 inline-block"
          />
          <img
            src="/assets/logo2.png"
            alt="Logo"
            className="w-18 inline-block"
          />
        </div>
        <p className="text-white text-[30px] font-semibold ">Contacts</p>
        <p className="text-white text-[30px] font-semibold ">Portal</p>
      </div>
      <div className="absolute top-[270px] left-[208px]">
        <p className="text-white text-[50px] font-bold ">New Contact</p>
        <div className="flex">
          <form onSubmit={handleFormSubmit}>
            <div className="flex">
              <input
                type="text"
                placeholder="Full Name"
                className="block font-semibold  bg-white px-4 py-3.5 mb-8  rounded-[20px] placeholder-[#083F46] w-[450px]"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Email"
                className="block font-semibold bg-white px-4 py-3.5 mb-8 ml-12 rounded-[20px] placeholder-[#083F46] w-[450px]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex mb-12">
              <input
                type="text"
                placeholder="Contact Number"
                className="bg-white px-4 py-3.5 font-semibold rounded-[20px] placeholder-[#083F46] w-[450px]"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <p className=" text-white mt-3 mr-[80px] ml-12">Gender </p>
              <input
                type="radio"
                id="male"
                name="gender"
                className="mr-2"
                value="male"
                onChange={(e) => setGender(e.target.value)}
              />
              <label htmlFor="male" className="text-white mr-8 mt-3">
                Male
              </label>
              <input
                type="radio"
                id="female"
                name="gender"
                className="mr-2"
                value="female"
                onChange={(e) => setGender(e.target.value)}
              />
              <label htmlFor="female" className="text-white mr-8 mt-3">
                Female
              </label>
            </div>

            <div className="flex items-center mb-8"></div>

            <button className="bg-[#083F46] text-[20px] text-white px-4 py-2 w-[250px] rounded-[20px] mt-10 mr-4 border border-white">
              Add your first contact
            </button>
            <div className="absolute flex">
              <Link href="/contacts">
                <p className="inline-block items-center ml-2 mt-4 text-white text-xl">
                  All Contacts
                </p>
              </Link>
            </div>
          </form>
        </div>
      </div>

      <Link href="/">
        <div className="absolute top-[670px] right-[120px] flex">
          <img
            src="/assets/vector (1).png"
            alt="Logo"
            className="w-8 h-10 mr-1"
          />
        </div>
        <div className="absolute top-[670px] right-[120px] flex">
          <img
            src="/assets/vector.png"
            alt="Logo"
            className="w-6 h-5 mt-2.5 mr-3"
          />
        </div>
        <div className="absolute top-[670px] right-[60px] flex">
          <p className="inline-block items-center ml-2 mt-4 text-white text-xl">
            logout
          </p>
        </div>
      </Link>
    </div>
  );
};

export default AddContactPage;

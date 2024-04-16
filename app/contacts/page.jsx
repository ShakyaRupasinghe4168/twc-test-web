"use client";
import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";

const AddContactPage = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [contactIdToDelete, setContactIdToDelete] = useState(null);
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const [editableFields, setEditableFields] = useState({});
  const [saveSuccess, setSaveSuccess] = useState(false); // New state for save success message

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = () => {
    axios
      .get("http://localhost:5000/api/contacts")
      .then((response) => {
        console.log("Received data:", response.data);
        setContacts(response.data);
        const initialEditableFields = {};
        response.data.forEach((contact) => {
          initialEditableFields[contact._id] = false;
        });
        setEditableFields(initialEditableFields);
      })
      .catch((error) => {
        console.error("Error fetching contacts:", error);
      });
  };

  const handleDeleteClick = (contactId) => {
    setShowConfirmation(true);
    setContactIdToDelete(contactId);
  };

  const handleConfirmDelete = () => {
    axios
      .delete(`http://localhost:5000/api/contacts/${contactIdToDelete}`)
      .then((response) => {
        setShowConfirmation(false);
        setDeleteSuccess(true);
        fetchContacts();
        setTimeout(() => setDeleteSuccess(false), 3000);
      })
      .catch((error) => {
        console.error("Error deleting contact:", error);
      });
  };

  const toggleEditField = (contactId) => {
    setEditableFields((prevState) => ({
      ...prevState,
      [contactId]: !prevState[contactId],
    }));
  };

  const handleEditChange = (contactId, field, value) => {
    setContacts((prevContacts) =>
      prevContacts.map((contact) =>
        contact._id === contactId ? { ...contact, [field]: value } : contact,
      ),
    );
  };

  const saveChanges = (contactId) => {
    const contactToUpdate = contacts.find(
      (contact) => contact._id === contactId,
    );

    axios
      .put(`http://localhost:5000/api/contacts/${contactId}`, contactToUpdate)
      .then((response) => {
        console.log("Contact updated successfully:", response.data);
        toggleEditField(contactId);
        fetchContacts();
        setSaveSuccess(true);
        setTimeout(() => setSaveSuccess(false), 3000);
      })
      .catch((error) => {
        console.error("Error updating contact:", error);
      });
  };

  return (
    <div
      className="h-screen flex items-center justify-center overflow-clip bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.8)), url('/assets/background.jpg')`,
      }}
    >
      <Head>
        <title>Add New Contact</title>
      </Head>
      <div
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-clip ${showConfirmation ? "blur" : ""}`}
      >
        <div
          className="bg-[#083F46] rotate-12"
          style={{ width: "1900px", height: "950px", borderRadius: "30%" }}
        ></div>
      </div>
      <div
        className={`absolute top-[55px] left-[260px] ${showConfirmation ? "blur" : ""}`}
      >
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
      <div
        className={`absolute top-[250px] left-[260px] ${showConfirmation ? "blur" : ""}`}
      >
        <p className="text-white text-4xl font-bold ">Contacts</p>
      </div>
      <div className="absolute top-[250px] right-[120px] flex">
        <Link href="/contacts/new">
          <button className="bg-[#083F46] text-[20px]  text-white px-4 py-2 w-[250px] rounded-[20px] border border-white">
            Add new contact
          </button>
        </Link>
      </div>
      <div
        className={`absolute top-[320px] left-[50%]  transform -translate-x-2/4 overflow-clip ${showConfirmation ? "blur" : ""}`}
      >
        <table
          className="text-[#083F46] text-[20px] rounded-[15px] "
          style={{ backgroundColor: "white" }}
        >
          <thead>
            <tr>
              <th style={{ width: "250px", paddingBottom: "25px" }}></th>
              <th
                style={{
                  width: "1900px",
                  paddingBottom: "25px",
                  paddingRight: "55px",
                }}
              >
                Full Name
              </th>
              <th
                style={{
                  width: "550px",
                  paddingBottom: "25px",
                  paddingRight: "55px",
                }}
              >
                Gender
              </th>
              <th
                style={{
                  width: "650px",
                  paddingBottom: "25px",
                  paddingRight: "55px",
                }}
              >
                Email
              </th>
              <th
                style={{
                  width: "500px",
                  paddingBottom: "25px",
                  paddingRight: "55px",
                }}
              >
                Phone Number
              </th>
              <th
                style={{
                  width: "1800px",
                  paddingBottom: "25px",
                  paddingRight: "55px",
                }}
              ></th>
            </tr>
          </thead>
          <tbody className="text-[18px] font-semibold ">
            {contacts.map((contact) => (
              <tr key={contact._id}>
                <td>
                  {contact.gender === "female" ? (
                    <img
                      src="/assets/female.png"
                      alt="Female"
                      className="inline-block w-8 h-8 ml-5 "
                    />
                  ) : (
                    <img
                      src="/assets/male.png"
                      alt="Male"
                      className="inline-block w-8 h-8 ml-5 mr-12"
                    />
                  )}
                </td>
                <td>
                  {editableFields[contact._id] ? (
                    <input
                      type="text"
                      value={contact.fullName}
                      onChange={(e) =>
                        handleEditChange(
                          contact._id,
                          "fullName",
                          e.target.value,
                        )
                      }
                      className="w-full px-2 py-1 rounded-md border border-[#083F46]"
                    />
                  ) : (
                    contact.fullName
                  )}
                </td>
                <td>
                  {editableFields[contact._id] ? (
                    <input
                      type="text"
                      value={contact.gender}
                      onChange={(e) =>
                        handleEditChange(contact._id, "gender", e.target.value)
                      }
                      className="w-full px-2 py-1 rounded-md border border-[#083F46]"
                    />
                  ) : (
                    contact.gender
                  )}
                </td>
                <td>
                  {editableFields[contact._id] ? (
                    <input
                      type="text"
                      value={contact.email}
                      onChange={(e) =>
                        handleEditChange(contact._id, "email", e.target.value)
                      }
                      className="w-full px-2 py-1 rounded-md border border-[#083F46]"
                    />
                  ) : (
                    contact.email
                  )}
                </td>
                <td>
                  {editableFields[contact._id] ? (
                    <input
                      type="text"
                      value={contact.phoneNumber}
                      onChange={(e) =>
                        handleEditChange(
                          contact._id,
                          "phoneNumber",
                          e.target.value,
                        )
                      }
                      className="w-full px-2 py-1 rounded-md border border-[#083F46] "
                    />
                  ) : (
                    contact.phoneNumber
                  )}
                </td>
                <td style={{ padding: "10px" }}>
                  {editableFields[contact._id] ? (
                    <div>
                      <button
                        onClick={() => saveChanges(contact._id)}
                        className="bg-[#083F46] text-[16px] text-white px-5 py-2 rounded-full"
                      >
                        Save
                      </button>
                    </div>
                  ) : (
                    <div>
                      <button
                        onClick={() => toggleEditField(contact._id)}
                        className="text-[#083F46] px-2"
                      >
                        <img
                          src="/assets/pen.png"
                          alt="Edit"
                          className="inline-block w-8 h-8"
                        />
                      </button>
                      <button onClick={() => handleDeleteClick(contact._id)}>
                        <img
                          src="/assets/bin.png"
                          alt="Delete"
                          className="inline-block w-8 h-8"
                        />
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div
        className={`absolute top-80 left-1/2 transform -translate-x-1/2 overflow-clip ${showConfirmation ? "visible" : "hidden"}`}
      >
        <div className="bg-white p-10 pl-48 pr-48 rounded-lg text-[#083F46]  font-semibold shadow-md">
          <p className="text-[25px]">Do you want to delete the contact?</p>
          <div className="mt-4 py-8 flex justify-center">
            <button
              onClick={handleConfirmDelete}
              className="bg-[#083F46] text-white px-8 py-2 rounded-full"
            >
              Yes
            </button>
            <button
              onClick={() => setShowConfirmation(false)}
              className="bg-white border-[#083F46] border ml-3 px-4 py-2 rounded-full"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>

      {deleteSuccess && (
        <div
          className={`absolute top-80 left-1/2 transform -translate-x-1/2 overflow-clip `}
        >
          <div className="bg-white p-10 pl-48 pr-48 rounded-lg text-[#083F46]  font-semibold shadow-md">
            <p className="text-[25px]">
              Your contact has been deleted successfully!
            </p>
            <div className="mt-4 py-8 flex justify-center">
              <button
                onClick={() => setShowConfirmation(false)}
                className="bg-[#083F46] text-white px-4 py-2 rounded-full"
              >
                Okay
              </button>
            </div>
          </div>
        </div>
      )}

      {saveSuccess && (
        <div
          className={`absolute top-80 left-1/2 transform -translate-x-1/2 overflow-clip `}
        >
          <div className="bg-white p-10 pl-48 pr-48 rounded-lg text-[#083F46]  font-semibold shadow-md">
            <p className="text-[25px]">
              Your contact has been saved successfully!
            </p>
            <div className="mt-4 py-8 flex justify-center">
              <button
                onClick={() => setShowConfirmation(false)}
                className="bg-[#083F46] text-white px-4 py-3 rounded-full"
              >
                Okay
              </button>
            </div>
          </div>
        </div>
      )}
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

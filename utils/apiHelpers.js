// utils/apiHelpers.js

import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Replace with your backend API base URL

// Helper function to make a GET request to fetch all contacts
export const fetchContacts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/contacts`);
    return response.data; // Return the fetched contacts
  } catch (error) {
    console.error('Error fetching contacts:', error);
    throw error; // Throw error for handling in the component
  }
};

// Helper function to make a POST request to add a new contact
export const addContact = async (contactData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/contacts`, contactData);
    return response.data; // Return the newly added contact
  } catch (error) {
    console.error('Error adding contact:', error);
    throw error; // Throw error for handling in the component
  }
};

// Helper function to make a PUT request to update an existing contact
export const updateContact = async (contactId, updatedData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/contacts/${contactId}`, updatedData);
    return response.data; // Return the updated contact
  } catch (error) {
    console.error('Error updating contact:', error);
    throw error; // Throw error for handling in the component
  }
};

// Helper function to make a DELETE request to delete a contact
export const deleteContact = async (contactId) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/contacts/${contactId}`);
    return response.data; // Return the deleted contact
  } catch (error) {
    console.error('Error deleting contact:', error);
    throw error; // Throw error for handling in the component
  }
};

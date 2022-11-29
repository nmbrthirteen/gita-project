import React,{ createContext, useState } from "react";
const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [searchText, setSearchText] = useState(null);
  const [bookingModal,setBookingModal] = useState(false)
//handleSearch

const handleSearch = (text) => {
    setSearchText(text)
  }

const handleBookingButton = (status) => {
    setBookingModal(status)
}

  return (
    <AuthContext.Provider value={{ 
      searchText,
      handleSearch,
      handleBookingButton,
      bookingModal
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};


export default AuthContext
import React from 'react'
import { useState, useEffect } from 'react'

export const LangContext = React.createContext()

export const LangProvider = ({ children }) => {
const [selectedLanguage, setSelectedLanguage]=useState({})
const [en, setEn] = useState(false);


useEffect(()=>{
   localStorage.setItem("selectedLang", (en===true? "en":"es"))
    setSelectedLanguage(localStorage.getItem("selectedLang"))
      }
  ,[en])

  
  const handleLanguage=()=>{
    setEn(!en)
    }
  console.log(1, selectedLanguage)
return(
    <LangContext.Provider
    value={{selectedLanguage, handleLanguage, en}}>
        {children}
    </LangContext.Provider>
)
}
import React, {createContext} from 'react'
import { useContext, useState } from 'react'

export const LangContext = createContext({})

export const Provider = props => {
const [selectedLanguage, setSelectedLanguage]=useState('EN')

   const handleLanguage= (lang) =>{
     setSelectedLanguage(lang)
   }

  return (<LangContext.Provider value={{
    selectedLanguage: selectedLanguage,
    handleLanguage: handleLanguage
  }}>
    {props.children}
  </LangContext.Provider>
)}

export const useLangContext = () => useContext(LangContext)

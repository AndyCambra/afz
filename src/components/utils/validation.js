export const Validation = (e, name, type, required = false, maxLength = false, minLength = false, infoInput, errors, errorMessages) => {

  const value= e.target.value
    const changedInfoInput = { ...infoInput, [e.target.name]:value }; 
    const err = { ...errors }
    const filterMail = /.*@[a-z0-9.-]*/i;
    const noNumbers = /^[a-zA-Z][a-zA-Z ]*$/;
    const onlyNumbers = /^\d+$/
    switch (type) {
      case 'onlyletters':
        changedInfoInput[name] = e.target.value;
          if(required) {
            err[name] = e.target.value ? false : errorMessages.requiredMessage;
          }
          if(maxLength && !err[name]) {
            err[name] = e.target.value.length > maxLength ? `${errorMessages.until} ${maxLength} ${errorMessages.caracters}` : false;
          }
          if(minLength && !err[name]) {
            err[name] = e.target.value.length < minLength ? `${errorMessages.more} ${minLength} ${errorMessages.caracters}` : false;
          }
          if(noNumbers.test(value) === false){
            err[name] = errorMessages.onlyLetters
          }
          break;
      case 'text':
        changedInfoInput[name] = e.target.value;
          if(required) {
            err[name] = e.target.value ? false : errorMessages.requiredMessage;
          }
          if(maxLength && !err[name]) {
            err[name] = e.target.value.length > maxLength ? `${errorMessages.until} ${maxLength} ${errorMessages.caracters}` : false;
          }
          if(minLength && !err[name]) {
            err[name] = e.target.value.length < minLength ? `${errorMessages.more} ${minLength} ${errorMessages.caracters}` : false;
          }
          break;
      case 'number':
        changedInfoInput[name] = e.target.value;
          if(required) {
            err[name] = e.target.value ? false : errorMessages.requiredMessage;
          }
          if(maxLength && !err[name]) {
            err[name] = e.target.value.length > maxLength ? `${errorMessages.until} ${maxLength} ${errorMessages.caracters}` : false;
          }
          if(minLength && !err[name]) {
            err[name] = e.target.value.length < minLength ? `${errorMessages.more} ${minLength} ${errorMessages.caracters}` : false;
          }
          if(onlyNumbers.test(value) === false){
            err[name] = errorMessages.onlyNumbers
          }
          break;
       case 'email':
        changedInfoInput[name] = e.target.value;
          if(required) {
            err[name] = e.target.value ? false : errorMessages.requiredMessage;
          }
          if(maxLength && !err[name]) {
            err[name] = e.target.value.length > maxLength ? `${errorMessages.until} ${maxLength} ${errorMessages.caracters}` : false;
          }
          if(minLength && !err[name]) {
            err[name] = e.target.value.length < minLength ? `${errorMessages.more} ${minLength} ${errorMessages.caracters}` : false;
          }
          if(filterMail.test(value) === false){
            err[name] = errorMessages.validEmail
          }
          break;
          case 'file':
            changedInfoInput[name] = e.target.value;
            if(required) {
            err[name] = e.target.value ? false : errorMessages.requiredMessage;
            }
            if(value.includes('.pdf') === false){
            err[name] = errorMessages.pdfAttach
            }
            break;
    
          default:
          break;
        }
       
     return {changedInfoInput: changedInfoInput, err: err, value: value}
      }

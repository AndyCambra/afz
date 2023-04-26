export const validation = (e, name, type, required = false, maxLength = false, minLength = false, infoInput, errors) => {
   
  console.log(e)
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
            err[name] = e.target.value ? false : 'El campo es requerido';
          }
          if(maxLength && !err[name]) {
            err[name] = e.target.value.length > maxLength ? `El campo debe tener hasta ${maxLength} caracteres` : false;
          }
          if(minLength && !err[name]) {
            err[name] = e.target.value.length < minLength ? `El campo debe tener más de ${minLength} caracteres` : false;
          }
          if(noNumbers.test(value) === false){
            err[name] = 'Ingresar solo letras'
          }
          break;
      case 'text':
        changedInfoInput[name] = e.target.value;
          if(required) {
            err[name] = e.target.value ? false : 'El campo es requerido';
          }
          if(maxLength && !err[name]) {
            err[name] = e.target.value.length > maxLength ? `El campo debe tener hasta ${maxLength} caracteres` : false;
          }
          if(minLength && !err[name]) {
            err[name] = e.target.value.length < minLength ? `El campo debe tener más de ${minLength} caracteres` : false;
          }
          break;
      case 'number':
        changedInfoInput[name] = e.target.value;
          if(required) {
            err[name] = e.target.value ? false : 'El campo es requerido';
          }
          if(maxLength && !err[name]) {
            err[name] = e.target.value.length > maxLength ? `El campo debe tener hasta ${maxLength} caracteres` : false;
          }
          if(minLength && !err[name]) {
            err[name] = e.target.value.length < minLength ? `El campo debe tener más de ${minLength} caracteres` : false;
          }
          if(onlyNumbers.test(value) === false){
            err[name] = 'Ingresar solo números'
          }
          break;
       case 'email':
        changedInfoInput[name] = e.target.value;
          if(required) {
            err[name] = e.target.value ? false : 'El campo es requerido';
          }
          if(maxLength && !err[name]) {
            err[name] = e.target.value.length > maxLength ? `El campo debe tener hasta ${maxLength} caracteres` : false;
          }
          if(minLength && !err[name]) {
            err[name] = e.target.value.length < minLength ? `El campo debe tener más de ${minLength} caracteres` : false;
          }
          if(filterMail.test(value) === false){
            err[name] = 'Ingrese un mail válido'
          }
          break;
          case 'file':
            changedInfoInput[name] = e.target.value;
            if(required) {
            err[name] = e.target.value ? false : 'El campo es requerido';
            }
            if(value.includes('.pdf') === false){
            err[name] = 'Seleccione un archivo .pdf'
            }
            break;
    
          default:
          break;
        }
       
     return {changedInfoInput: changedInfoInput, err: err, value: value}
      }

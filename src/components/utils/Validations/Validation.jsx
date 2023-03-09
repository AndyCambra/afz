export const Validation = ({e, name, type, required = false, maxLength = false, minLength = false, infoInput, errors}) => {
   const value= e.target.value
    const changedinfoInput = { ...infoInput, [e.target.name]:value }; 
    const err = { ...errors }
    const filterMail = /.*@[a-z0-9.-]*/i;
    const noNumbers = /^[a-zA-Z][a-zA-Z ]*$/;
    switch (type) {
      case 'text':
        changedinfoInput[name] = e.target.value;
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
      case 'number':
        changedinfoInput[name] = e.target.value;
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
       case 'email':
        changedinfoInput[name] = e.target.value;
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
    
          default:
          break;
        }
      /*   setinfoInput({...changedinfoInput, [e.target.name]:value});
        setErrors(err);  */
      }

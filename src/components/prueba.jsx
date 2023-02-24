/* const handleChange = (e, name, type, required = false, maxLength = false, minLength = false) => {
    const entityDetail = { ...item.entityDetail };
    const i = { ...item };
    const err = { ...errors }
    switch (type) {
      case 'text':
          entityDetail[name] = e.target.value;
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
      case 'cascadeSelect':
          i[name] = e.target.value;
          handleEntityTypeChange(e);
          i.subEntityTypeId = null;
          if(required) {
            err.subEntityTypeId = 'El campo es requerido';
          }
        break;
      case 'select':
          i[name] = e.target.value;
          if(required) {
            err[name] = e.target.value ? false : 'El campo es requerido';
          }
        break;
    
      default:
      break;
    }
    const newItem = i;
    newItem.entityDetail = entityDetail;
    setErrors(err);
    setItem(newItem);
  }

  onChange={ e => handleChange(e, 'number', 'text', true)} */
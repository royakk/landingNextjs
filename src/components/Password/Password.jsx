import React from "react";
import TextField from "@mui/material/TextField";
// import { useTranslation } from "react-i18next";

const Password = ({ label, name, formik }) => {
  // const { t } = useTranslation();
  return (
    <>
      <TextField id="filled-basic"
      fullWidth
      type='password'
      filled-basic
      sx={{fontWeight: 500 , backgroundColor:'#edf2f7'}}
       label={label} variant="outlined" 
        error={formik.touched[name] && Boolean(formik.errors[name])}
        helperText={formik.touched[name] && formik.errors[name]}
        {...formik.getFieldProps({ name })}
      />
    </>
  );
};

export default Password;

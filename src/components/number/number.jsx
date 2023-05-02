import React from "react";
import { useTranslation } from 'react-i18next';
import {Formik } from "formik";
import * as Yup from "yup";
import TextField from '@mui/material/TextField';
import i18next from 'i18next';



  function Number  (props) {
    const {t} = useTranslation ();

    return (
     
        <Formik
         initialValues={{
          Number: '',
         }}
       
         
        >
         {({
          errors,
          handleBlur,
          handleChange,
          touched,
          values
         }) => (
          
           <TextField
            error={Boolean(touched.Number && errors.Number)}
            helperText={touched.Number && errors.Number}
            label={t(props.label)}
            margin="normal"
            name={props.name}
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.Number}
            variant="outlined"
            size="small"
           />
           
         )}
        </Formik>

    );
   }
   export default Number;
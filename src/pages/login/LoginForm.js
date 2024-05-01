import { LoadingButton } from '@mui/lab'
import { Box, CircularProgress, FormControl, FormHelperText, InputLabel, OutlinedInput, Typography } from '@mui/material'
import { Formik } from 'formik'
import React from 'react'
import * as yup from 'yup'
import useLogin from '../../apis/useLogin'

const LoginForm = () => {
    const {mutate , isPending} = useLogin()
  return (
    <Box
        sx={{
            width : {xs : '98%' , sm : '60%' , md : '50%' , lg : '40%'},
            boxShadow : '0px 0px 10px -5px rgba(0,0,0,.5)',
            borderRadius : '10px',
            p : 2
        }}
    >
        <Typography color={'secondary.main'} variant='h4' mb={1}>
            Goma
        </Typography>

        <Typography variant='subtitle1' mb={2}>
            Welcome back , login and get in the goma world
        </Typography>

        <Formik
            initialValues={{
                email : '',
                password : ''
            }}
            validationSchema={yup.object({
                email : yup.string().email().required('email is required'),
                password : yup.string().min(7).max(26).required('password is required')
            })}
            onSubmit={(values) => {
                mutate(values)
            }}
        >
            {
                ({
                    handleBlur,
                    handleChange,
                    handleSubmit,
                    values,
                    touched,
                    errors
                }) => (
                    <form onSubmit={handleSubmit}>
                        <FormControl error={!!touched.email && !!errors.email} fullWidth  sx={{mb : 2}} color='secondary'>
                            <InputLabel>Email</InputLabel>
                            <OutlinedInput 
                                label={"Email"}
                                name='email'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            {
                                !!touched.email && !!errors.email && <FormHelperText>
                                    {errors.email}
                                </FormHelperText>
                            }
                        </FormControl>
                        <FormControl error={!!touched.password && !!errors.password} color='secondary'  fullWidth  sx={{mb : 2}}>
                            <InputLabel>Password</InputLabel>
                            <OutlinedInput 
                                label={"Password"}
                                name='password'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                            /> 
                            {
                                !!touched.password && !!errors.password && <FormHelperText>
                                    {errors.password}
                                </FormHelperText>
                            }
                        </FormControl>
                        <LoadingButton
                            variant='contained'
                            color='secondary'
                            fullWidth
                            type='submit'
                            loadingIndicator={<CircularProgress color='secondary' />}
                            loading={isPending}
                            sx={{
                                height : '50px'
                            }}
                        >
                            Login
                        </LoadingButton>
                    </form>
                )
            }
        </Formik>
    </Box>
  )
}

export default LoginForm
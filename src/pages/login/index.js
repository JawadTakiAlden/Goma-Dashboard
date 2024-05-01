import React from 'react'
import LoginForm from './LoginForm'
import { Box } from '@mui/material'

const Login = () => {
  return (
    <Box
        sx={{
            display : 'flex',
            alignItems : 'center',
            justifyContent : 'center',
            width : '100wh',
            height : '100vh'
        }}
    >
        <LoginForm />
    </Box>
  )
}

export default Login
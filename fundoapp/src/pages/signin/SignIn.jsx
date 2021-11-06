import React, { Component } from 'react'
import './SignIn.scss';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default class SignIn extends Component {
    render() {
        return (
            <div className="signin-container">
                <div className="container-content">
                <div className="logo-ele">
                        <span style={{color:'blue'}}>F</span>
                        <span style={{color:'red'}}>u</span>
                        <span style={{color:'orange'}}>n</span>
                        <span style={{color:'green'}}>D</span>
                        <span style={{color:'blue'}}>o</span>
                </div>
                <div className="page-heading">Sign in</div>
                <div className="container-description">Use your FunDo Account</div>
                <div className="email-field">
                    <TextField fullwidth id="emailid" label="Email or Phone" variant="outlined" margin="dense" size="medium" sx={{width: '100%'}} />
                </div>
                <div className="forgot-email">
                <Button className="email-button" size="small" sx={{textTransform: 'none', fontWeight: 'bolder', fontSize: '0.875rem'}}>Forgot email?</Button>
                </div>
                <div className="learn-more">
                    <div className="guest-mode">Not your computer? Use Guest mode to sign in privately.</div>
                    <Button size="small" sx={{textTransform: 'none', fontWeight: 'bolder', fontSize: '0.875rem'}}>Learn more</Button>
                </div>
                <div className="create-account-buttons">
                    <Button className="create-button" size="small" sx={{textTransform: 'none', fontWeight: 'bolder', fontSize: '0.875rem'}}>Create account</Button>
                    <Button size="medium" variant="contained" sx={{textTransform: 'none', fontWeight: 'bolder', fontSize: '0.875rem' ,float: 'right'}}>Next</Button>
                </div>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'
import './Forgot.scss';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default class Forgot extends Component {
    render() {
        return (
            <div className="forgot-container">
                <div className="forgot-content">
                    <div className="logo-content">
                            <span style={{color:'blue'}}>F</span>
                            <span style={{color:'red'}}>u</span>
                            <span style={{color:'orange'}}>n</span>
                            <span style={{color:'green'}}>D</span>
                            <span style={{color:'blue'}}>o</span>
                    </div>
                    <div className="forgot-content-heading">Find your email</div>
                    <div className="forgot-content-description">Enter your phone number or recovery email</div>
                    <div className="forgot-email-field">
                        <TextField fullwidth id="emailid" label="Phone number or email" variant="outlined" margin="dense" size="medium" sx={{width: '100%'}} />
                    </div>
                    <div className="forgot-button">
                        <Button size="medium" variant="contained" sx={{textTransform: 'none', fontWeight: 'bolder', fontSize: '0.875rem' ,float: 'right'}}>Next</Button>
                    </div>
                </div>
            </div>
        )
    }
}

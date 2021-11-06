import React, { Component } from 'react'
import './Reset.scss';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default class Reset extends Component {
    render() {
        return (
            <div className="reset-container">
                <div className="reset-content">
                    <div className="reset-logo-content">
                            <span style={{color:'blue'}}>F</span>
                            <span style={{color:'red'}}>u</span>
                            <span style={{color:'orange'}}>n</span>
                            <span style={{color:'green'}}>D</span>
                            <span style={{color:'blue'}}>o</span>
                    </div>
                    <div className="reset-content-heading">Reset your password</div>
                    <div className="reset-content-description">Enter new password</div>
                    <div className="reset-password-field">
                        <TextField fullwidth id="password" label="New password" variant="outlined" margin="dense" size="medium" sx={{width: '100%'}} />
                        <TextField fullwidth id="cpassword" label="Confirm password" variant="outlined" margin="dense" size="medium" sx={{width: '100%'}} />
                    </div>
                    <div className="reset-next-button">
                        <Button size="medium" variant="contained" sx={{textTransform: 'none', fontWeight: 'bolder', fontSize: '0.875rem' ,float: 'right'}}>Next</Button>
                    </div>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'
import './SignUp.scss';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

export default class SignUp extends Component {
    render() {
        return (
            <div className="main-container">
                <div className="form-container">
                    <div className="logo">
                        <span style={{color:'blue'}}>F</span>
                        <span style={{color:'red'}}>u</span>
                        <span style={{color:'orange'}}>n</span>
                        <span style={{color:'green'}}>D</span>
                        <span style={{color:'blue'}}>o</span>
                    </div>
                    <h1 className="form-heading">Create your Google Account</h1>
                    <div className="form">
                        <div className="name-field">
                            <TextField fullwidth id="first-name" label="First name" variant="outlined" margin="dense" size="small" sx={{ marginRight: '5px' }}/>
                            <TextField fullwidth id="last-name" label="Last name" variant="outlined" margin="dense" size="small" sx={{ marginLeft: '5px' }}/>
                        </div>
                        <div className="email-field">
                            <TextField fullwidth id="email" label="Username" variant="outlined" margin="dense" size="small" helperText="You can use letters,numbers & periods" sx={{width: '100%'}}/>
                        </div>
                        <div className="current-email">
                            <Button fullWidth className="email-button" size="small" sx={{textTransform: 'none', fontWeight: 'bolder', fontSize: '0.875rem'}}>Use my current email address instead</Button>
                        </div>
                        <div className="password-field">
                            <TextField fullwidth id="password" label="Password" variant="outlined" margin="dense" type="password" size="small" sx={{ marginRight: '5px' }}/>
                            <TextField fullwidth id="password" label="Confirm" variant="outlined" margin="dense" type="password" size="small" sx={{ marginRight: '5px' }}/>
                            
                        </div>
                        <div className="password-helpertext">Use 8 or more characters with a mix of letters, numbers & symbols</div>
                        <div className="check-box">
                            <Checkbox />Show Password
                        </div>
                        <div className="signin-button">
                            <Button size="small" sx={{textTransform: 'none', fontWeight: 'bolder', fontSize: '0.875rem', marginRight:'8vw'}}>Sign in instead</Button>
                            <Button size="medium" variant="contained" sx={{textTransform: 'none', fontWeight: 'bolder', fontSize: '0.875rem'}}>Next</Button>
                        </div>
                    </div>
                </div>
                <div className="image-container">
                    <img src="https://ssl.gstatic.com/accounts/signup/glif/account.svg" height="244" width="244"/>
                    <div className="image-caption">
                        <span width="244">One account. All of FunDo<br></br> working for you.</span>
                    </div>
                </div>
            </div>
        )
    }
}

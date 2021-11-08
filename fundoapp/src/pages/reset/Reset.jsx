import React, { Component } from 'react'
import './Reset.scss';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import UserService from '../../services/UserService';
const userService = new UserService();

export default class Reset extends Component {
    constructor(props){
        super(props);
        this.state = {
            password: "",
            passwordError: false,
            cpassword: "",
            cpasswordError: false,
        };
    }
    isValidated = () => {
        let isError = false;
        const errors = this.state;

        errors.passwordError = this.state.password !== "" ? false : true;
        errors.cpasswordError = this.state.cpassword !== "" ? false : true;

        this.setState({
            ...errors
        });
        return (isError = errors.passwordError || errors.cpasswordError);
    };

    changeValue = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        });
      };

    next = () => {
        var isValid = this.isValidated();
        console.log(this.state)
        if(!isValid){
            console.log("validation successful");
            let config = {
                headers: {
                  "Authorization": "s3G5B7euXTR9G7KW9IaprczpSbyYVLLqtcBuseMUgBNCs8PNZjeuqTBhWwjTAHQ4",
                }
              }
            let data = {
                "newPassword":this.state.password,
            };
            userService.Reset("/user/reset-password",data,config)
            .then(()=>{
                console.log("password reset successful");
            })
            .catch((err)=>{
                console.log(err);
            });
        }
    };
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
                        <TextField fullwidth id="password" name="password" label="New password" variant="outlined" margin="dense" type="password"
                        error={this.state.passwordError}
                        onChange={(e) => this.changeValue(e)}
                        helperText={this.state.passwordError ? "Enter a password" : ""}
                        size="medium" sx={{width: '100%'}} />
                        <TextField fullwidth id="cpassword" name="cpassword" label="Confirm password" variant="outlined" margin="dense" type="password"
                        error={this.state.passwordError}
                        onChange={(e) => this.changeValue(e)}
                        helperText={this.state.cpasswordError ? "Enter correct password" : ""}
                        size="medium" sx={{width: '100%'}} />
                    </div>
                    <div className="reset-next-button">
                        <Button fullwidth size="medium" variant="contained" sx={{textTransform: 'none', fontWeight: 'bolder', fontSize: '0.875rem'}} onClick={this.next}>Reset</Button>
                    </div>
                </div>
            </div>
        )
    }
}

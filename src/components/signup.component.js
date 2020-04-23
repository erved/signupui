import React, { Component } from "react";

export default class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            password: '',
            isError: {
                firstname: '',
                lastname:'',
                email: '',
                password: ''
            }
        }
    }

    regExp = RegExp(
        /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
    )
    formValid = ({ isError, ...rest }) => {
        let isValid = false;
    
        Object.values(isError).forEach(val => {
            if (val.length > 0) {
                isValid = false
            } else {
                isValid = true
            }
        });
    
        Object.values(rest).forEach(val => {
            if (val === null) {
                isValid = false
            } else {
                isValid = true
            }
        });
    
        return isValid;
    };
    onSubmit = e => {
        e.preventDefault();

        if (this.formValid(this.state)) {
            console.log(this.state)
        } else {
            console.log("Form is invalid!");
        }
    };


    formValChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let isError = { ...this.state.isError };

        switch (name) {
            case "firstname":
                isError.firstname =
                    value.match(/^[0-9]+$/) ? "Must not contain any numbers" : "";
                break;
            case "lastname":
                isError.lastname =
                    value.match(/^[0-9]+$/) ? "Must not contain any numbers" : "";
                    break;
            case "email":
                isError.email = this.regExp.test(value)
                    ? ""
                    : "Email address is invalid";
                break;
            case "password":
                isError.password =
                    value.length < 8 ? "Atleast 8 characaters required" : "";
                break;
            default:
                break;
        }

        this.setState({
            isError,
            [name]: value
        })
    };

    render() {
        const { isError } = this.state;
        return (
            <form onSubmit={this.onSubmit} noValidate>
                <div className="form-row">
                <div className="form-group col-md-6">
                    <label>First name</label>
                    <input type="text" onChange={this.formValChange} name="firstname" 
                    className={isError.firstname.length > 0 ? "is-invalid form-control" : "form-control"} placeholder="First name" />
                    {isError.firstname.length > 0 && (
                        <span className="invalid-feedback">{isError.firstname}</span>
                    )}
                </div>

                <div className="form-group col-md-6">
                    <label>Last name</label>
                    <input type="text" onChange={this.formValChange} name="lastname" className={isError.lastname.length > 0 ? "is-invalid form-control" : "form-control"} placeholder="Last name" />
                    {isError.lastname.length > 0 && (
                        <span className="invalid-feedback">{isError.lastname}</span>
                    )}
                </div>
                </div>
                <div className="form-row">
                <div className="form-group col-md-6">
                    <label>Email address</label>
                    <input type="email" name="email" onChange={this.formValChange} className={isError.email.length > 0 ? "is-invalid form-control" : "form-control"} placeholder="Enter email" />
                    {isError.email.length > 0 && (
                        <span className="invalid-feedback">{isError.email}</span>
                    )}
                </div>

                <div className="form-group col-md-6">
                    <label>Password</label>
                    <input type="password" name="password" onChange={this.formValChange} className={isError.password.length > 0 ? "is-invalid form-control" : "form-control"} placeholder="Enter password" />
                    {isError.password.length > 0 && (
                        <span className="invalid-feedback">{isError.password}</span>
                    )}
                </div>
                </div>

                <button type="submit" className="btn btn-none btn-block" style={{backgroundColor:"#5fcf80"}}>Claim Your Free Trial</button>
                <p className="text-left">
                You are agreeing to our<a href="#">Terms and Services</a>
                </p>
            </form>
        );
    }
}
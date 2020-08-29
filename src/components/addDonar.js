import React, { Component } from 'react';
import axios from 'axios';
import './addDonar.css';
class AddDonar extends Component {


    state = {
        fields: {},
        errors: {}
    }

    handleChange = (e) => {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
            fields
        });
    }


    onSubmit = (e) => {

        e.preventDefault();

        // console.log(this.state.fields['donar_name']);
        // console.log(this.state.fields['donar_age']);
        // console.log(this.state.fields['donar_blood_group']);
        // console.log(this.state.fields['donar_medical_history']);
        // console.log(this.state.fields.donar_pin_code);
        // console.log(this.state.fields.donar_mobile_number);

        if (this.validateForm()) {

            const donar = {
                name: this.state.fields.donar_name,
                age: this.state.fields.donar_age,
                blood_grp: this.state.fields.donar_blood_group,
                medical_history: this.state.fields.donar_medical_history,
                mobile_number: this.state.fields.donar_mobile_number,
                pin_code: this.state.fields.donar_pin_code

            }
            axios.post('http://localhost:4001/addData', donar)
                .then(res => console.log(res.da));



            let fields = {};
            fields["donar_name"] = "";
            fields["donar_age"] = "";
            fields["donar_medical_history"] = "";
            fields["donar_blood_group"] = "";
            fields["donar_mobile_number"] = "";
            fields["donar_pin_code"] = "";
            this.setState({ fields: fields });
            alert("Form submitted");
        }
    }

    validateForm() {
        let fields = this.state.fields;
        let errors = {};

        let formIsValid = true;

        if (!fields['donar_name']) {
            formIsValid = false;
            errors["donar_name"] = "*please enter your name";
            //console.log(errors.donar_name);
        }

        if (typeof fields["donar_name"] !== "undefined") {
            if (!fields["donar_name"].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                errors["donar_name"] = "*Please enter alphabet characters only.";
            }
        }

        if (!fields['donar_age']) {
            formIsValid = false;
            errors["donar_age"] = "*please enter your age";
            //console.log(errors.donar_name);
        }

        if (typeof fields["donar_age"] !== "undefined") {
            if (!fields["donar_age"].match("^(1[89]|2[0-9]|30)$")) {
                formIsValid = false;
                errors["donar_age"] = "*age between 18 to 30";
            }
        }

        if (!fields['donar_medical_history']) {
            formIsValid = false;
            errors["donar_medical_history"] = "*please enter your medical history";
            //console.log(errors.donar_medical_history);
        }

        if (!fields['donar_blood_group']) {
            formIsValid = false;
            errors["donar_blood_group"] = "*please enter your blood group";
            //console.log(errors.donar_name);
        }

        if (!fields['donar_mobile_number']) {
            formIsValid = false;
            errors["donar_mobile_number"] = "*please enter your mobile number";
        }

        if (typeof fields["donar_mobile_number"] !== "undefined") {
            if (!fields["donar_mobile_number"].match(/^[0-9]{10}$/)) {
                formIsValid = false;
                errors["donar_mobile_number"] = "*please enter valid mobile no."
            }
        }

        if (!fields['donar_pin_code']) {
            formIsValid = false;
            errors["donar_pin_code"] = "*please enter your pin code";
        }

        if (typeof fields["donar_pin_code"] !== "undefined") {
            if (!fields["donar_pin_code"].match(/^[0-9]{6}$/)) {
                formIsValid = false;
                errors["donar_pin_code"] = "*please enter the valid pin code !!"
            }
        }


        this.setState({
            errors: errors
        });
        return formIsValid;


    }





    render() {
        return (
            <React.Fragment>
                <div className="flex">
                    <h3> Add Donar details</h3>
                    <form onSubmit={this.onSubmit}>

                        <label>Name : </label>
                        <input type='text' name="donar_name" value={this.state.fields.donar_name} onChange={(e) => this.handleChange(e)} /><br></br>
                        <div>{this.state.errors.donar_name}</div>
                        <label> Age: </label>
                        <input type='text' name="donar_age" value={this.state.fields.donar_age} onChange={(e) => this.handleChange(e)} /><br></br>
                        <div>{this.state.errors.donar_age}</div>
                        <label>Blood grp: </label>
                        <input type='text' pattern="([AaBbOo]|[Aa][Bb])[\+-]" maxLength="3" name="donar_blood_group" value={this.state.fields.donar_blood_group} onChange={(e) => this.handleChange(e)} /><br></br>
                        <div>{this.state.errors.donar_blood_group}</div>
                        <label>Medical History : </label>
                        <input type='text' name="donar_medical_history" value={this.state.fields.donar_medical_history} onChange={(e) => this.handleChange(e)} /><br></br>
                        <div>{this.state.errors.donar_medical_history}</div>
                        <label>Mobile Number :</label>
                        <input type='text' name="donar_mobile_number" maxLength="10" value={this.state.fields.donar_mobile_number} onChange={(e) => this.handleChange(e)} /><br></br>
                        <div>{this.state.errors.donar_mobile_number}</div>
                        <label>PIN CODE :</label>
                        <input type='text' name="donar_pin_code" maxLength="6" value={this.state.fields.donar_pin_code} onChange={(e) => this.handleChange(e)} /><br></br>
                        <div>{this.state.errors.donar_pin_code}</div>
                        <input type='submit' value='Submit'></input>



                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default AddDonar;
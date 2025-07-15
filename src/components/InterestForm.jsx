import React, { useState } from 'react';
import { IMaskInput } from 'react-imask';
import { FormContainer, StyledForm, FormGroup, Label, Input, StyledIMaskInput, Button } from './InterestForm.styles';

const InterestForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        costGuess: '',
        spidrPin: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
        alert('Thank you! Your information has been logged to the console.');
    };

    return (
        <FormContainer>
            <StyledForm onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="phoneNumber">Phone Number</Label>
                    <StyledIMaskInput
                        mask="(000) 000-0000"
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onAccept={(value) => handleChange({ target: { name: 'phoneNumber', value } })}
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="costGuess">Guess the Air Fryer's Cost ($)</Label>
                    <Input
                        type="number"
                        id="costGuess"
                        name="costGuess"
                        value={formData.costGuess}
                        onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="spidrPin">Secret 16-Digit Spidr PIN</Label>
                    <StyledIMaskInput
                        mask="0000-0000-0000-0000"
                        type="text"
                        id="spidrPin"
                        name="spidrPin"
                        value={formData.spidrPin}
                        onAccept={(value) => handleChange({ target: { name: 'spidrPin', value } })}
                    />
                </FormGroup>
                <Button type="submit">Submit</Button>
            </StyledForm>
        </FormContainer>
    );
};

export default InterestForm;
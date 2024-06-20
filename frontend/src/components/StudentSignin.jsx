import {StudentSignInContainer, FormContainer, InputField, SubmitButton}from '../styles/StudentSignInStyles';
import {useState}from 'react';

const StudentSignIn = () =>{

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const handleSignIn = () =>{
        console.log('Student SignIn',{email, password});
    };
    return (
        <StudentSignInContainer>
            <h2>Student SignIn</h2>
            <FormContainer>
                <InputField type='email' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                <InputField type='password' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                <SubmitButton to='/student/dashboard' onClick={handleSignIn}>Sign In</SubmitButton>
            </FormContainer>
        </StudentSignInContainer>
    )
}

export default StudentSignIn;
import {TeacherSignInContainer, FormContainer, InputField, SubmitButton}from '../styles/TeacherSignInStyles';
import {useState}from 'react';

const TeacherSignIn = () =>{

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const handleSignIn = () =>{
        console.log('Teacher SignIn',{email, password});
    };
    return (
        <TeacherSignInContainer>
            <h2>Teacher SignIn</h2>
            <FormContainer>
                <InputField type='email' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                <InputField type='password' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                <SubmitButton to='/teacher/dashboard' onClick={handleSignIn}>Sign In</SubmitButton>
            </FormContainer>
        </TeacherSignInContainer>
    )
}

export default TeacherSignIn;
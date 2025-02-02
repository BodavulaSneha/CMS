import { AdminSignInContainer, FormContainer, InputField, SubmitButton } from '../styles/AdminSignInStyles';
import { useState } from 'react';

const AdminSignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        console.log('Admin SignIn', { email, password });
    };

    return (
        <AdminSignInContainer>
            <h2>Admin SignIn</h2>
            <FormContainer>
                <InputField 
                    type='email' 
                    placeholder='Email' 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <InputField 
                    type='password' 
                    placeholder='Password' 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
                <SubmitButton to='/admin/dashboard' onClick={handleSignIn}>
                    Sign In
                </SubmitButton>
            </FormContainer>
        </AdminSignInContainer>
    );
}

export default AdminSignIn;

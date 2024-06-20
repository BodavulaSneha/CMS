import React ,{useState,useEffect} from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';

import {ProfileContainer,SidebarContainer,Content,ProfileHeader,ProfileDetail,ProfileLabel,ProfileInfo,EditButton} from '../../styles/SettingsProfileStyles'



 const SettingsProfile = () =>{
    const  teacherInfo = {
        name: 'Jhon Doe',
        email: 'doe@email.com',
        phone: '1111111',
        address: 'Nairobi street, kenya',
        qualification: 'Bachelor in Education'
    }
 

    return (
      <ProfileContainer>
        <Sidebar/>
        <SidebarContainer>
            <Content>
                <ProfileHeader>
                    Profile Details
                </ProfileHeader>
                <ProfileDetail>
                    <ProfileLabel>Name: </ProfileLabel>
                    <ProfileInfo>{teacherInfo.name}</ProfileInfo>

                    <ProfileLabel>Email: </ProfileLabel>
                    <ProfileInfo>{teacherInfo.email}</ProfileInfo>

                    <ProfileLabel>Phone: </ProfileLabel>
                    <ProfileInfo>{teacherInfo.phone}</ProfileInfo>

                    <ProfileLabel>Address: </ProfileLabel>
                    <ProfileInfo>{teacherInfo.address}</ProfileInfo>

                    <ProfileLabel>Qualification: </ProfileLabel>
                    <ProfileInfo>{teacherInfo.qualification}</ProfileInfo>
                </ProfileDetail>
                <EditButton>Edit Profile</EditButton>
            </Content>
        </SidebarContainer>
      </ProfileContainer>
    )
}

export default SettingsProfile;
import React ,{useState,useEffect} from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';

import {ProfileContainer,SidebarContainer,Content,ProfileHeader,ProfileDetail,ProfileLabel,ProfileInfo,EditButton} from '../../styles/SettingsProfileStyles'


const TeacherProfileSection = () =>{
 
    const [teacherInfo, setTeacherInfo] = useState({
        name: 'John Doe',
        email: 'johndoe@example.com',
        phone: '123-456-7890',
        address: '123 Main St, City, Country',
        qualification: 'Master of Education',
      });
 

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

export default TeacherProfileSection;
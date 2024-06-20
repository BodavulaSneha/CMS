import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';

import {
  AttendanceContainer,
  SidebarContainer,
  Content,
  AttendanceHeader,
  AttendanceList,
  AttendanceItem,
  AttendanceDate,
  AttendanceStatus
} from '../../styles/AttendanceStyles';

const CheckAttendanceSection = () => {
  const [attendances, setAttendances] = useState([]);

  useEffect(() => {
    fetchAttendances();
  }, []);

  const fetchAttendances = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/attendances/getall');
      setAttendances(response.data.attendances);
    } catch (error) {
      console.error('Error fetching attendances:', error);
    }
  };

  return (
    <AttendanceContainer>
      <Sidebar />
      <Content>
        <AttendanceHeader>Attendance Records</AttendanceHeader>
        <AttendanceList>
          {attendances.map((attendance) => (
            <AttendanceItem key={attendance.id}>
              <AttendanceDate>{attendance.date}</AttendanceDate>
              <AttendanceStatus>{attendance.status}</AttendanceStatus>
            </AttendanceItem>
          ))}
        </AttendanceList>
      </Content>
    </AttendanceContainer>
  );
};

export default CheckAttendanceSection;

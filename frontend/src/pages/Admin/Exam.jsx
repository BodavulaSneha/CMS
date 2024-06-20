import React ,{useState,useEffect} from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';

import {ExamContainer,SidebarContainer,Content,ExamHeader,ExamForm,FormLabel,FormInput,AddButton} from '../../styles/ExamStyles';

const Exam = () =>{

        const [examData, setexamData] = useState ({});
        const [name, setName]= useState('');
        const [RegistrationNumber, setRegistrationNumber]= useState('');
        const [className, setclassName]= useState('');
        const [marks, setMark]= useState('');
    
        useEffect(() => {
            fetchExams();
          },[]);
      
         
          const fetchExams = async () =>{
              try{
                  const response = await axios.get('http://localhost:4000/api/v1/exams/getall');
                  if(response.data && Array.isArray(response.data.classes)){
                    setexamData(response.data.classes);
                  }else {
                    setexamData(response.data)
                  }
                      
                }catch (error){
                    console.error('Error fetching assignments: ', error);
        
                }
          }; 
    
          const handleAddExams = async (e) => {
            e.preventDefault();
            const newExam = {name, RegistrationNumber, className, marks: parseInt(marks)}
                try{
                    const response = await axios.post('http://localhost:4000/api/v1/exam',newExam);
                    if (typeof response.data === 'object'){
                        setexamData([...examData, response.data])
                        setName('');
                        setRegistrationNumber('');
                        setclassName('');
                        setMark('');
                    }else{
                        console.error('Error: API response data is not an object')
                    }
                  }catch (error){
                      console.error('Error adding Exam: ', error);
          
                  }
          }

    /*const calculateTotalMarks = () =>{
        let total = 0;
        for (let i=0;i<examDate.length; i++){
            total=examDate[i].marks;
        }
    }
    return total*/
    return (
      <ExamContainer>
        <SidebarContainer>
            <Sidebar/>
        </SidebarContainer>
        <Content>
            <ExamHeader>Exam Details</ExamHeader>
            <ExamForm>
                <FormLabel>Name: </FormLabel>
                <FormInput type='text' required/>

                <FormLabel>Registration Number: </FormLabel>
                <FormInput type='text' required/>

                <FormLabel>Class: </FormLabel>
                <FormInput type='text' required/>

                <FormLabel>Marks: </FormLabel>
                <FormInput type='number' required/>
                <AddButton type='submit'>Add Exam</AddButton>
            </ExamForm>

            <h2>Total MArks: </h2>
            <h3>Exam Details:</h3>
            <ul>

            </ul>
        </Content>
      </ExamContainer>
    )
}

export default Exam;
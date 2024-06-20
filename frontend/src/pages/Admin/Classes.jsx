import React ,{useState,useEffect} from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import {
    ClassesContainer,
    Content,
    ClassesContent,
    ClassHeader,
    ClassList,
    ClassItem,
    AddClassButton,
    AddClassForm,
    AddClassInput,
} from '../../styles/ClassesStyles';

const Classes = () =>{

    const [newClassName, setNewClassName] = useState('')
    const[Classes, setClasses]= useState([]);

    useEffect(() => {
      fetchClasses();
    },[]);

   
    const fetchClasses = async () =>{
        try{
            const response = await axios.get('http://localhost:4000/api/v2/class/getall');
            if (response.data && Array.isArray(response.data.classes)){
                setClasses(response.data.classes);
            } else {
                console.log('Error while fetching classes: Invalid data format', response.data)
            }
          }catch (error){
              console.error('Error fetching Events: ', error);
  
          }
    };

    const handleAddClass = async (e) => {
        e.preventDefault();
        if(newClassName.trim() !==''){
            try{
                const response = await axios.post('http://localhost:4000/api/v2/class',{grade: newClassName});
                console.log('Response data:', response.data)
                setClasses(prevClasses => {

                    if (Array.isArray(prevClasses)){
                        return [...prevClasses, response.data];
                    } else {
                        console.log('Error adding class: Invalid state for class', prevClasses);
                            return [];
                    }

                });
                setNewClassName('');
              }catch (error){
                  console.error('Error adding class: ', error);
      
              }
        }
    };

    return (
      <ClassesContainer>
        <Sidebar/>
        <Content>
            <ClassesContent>
                <ClassHeader>Classes</ClassHeader>
                <AddClassForm onSubmit={handleAddClass}>
                    <AddClassForm>
                        <AddClassInput type='text' placeholder='Enter Class Name' value={newClassName} onChange = {(e) => setNewClassName(e.target.value)} />
                        <AddClassButton type='submit'>Add Class</AddClassButton>
                    </AddClassForm>
                    <ClassList>
                     {Array.isArray(Classes) && Classes.map((ClassItem,index) => {
                         <ClassItem key={index}>{ClassItem.grade}</ClassItem>
                     })}
                    </ClassList>
                </AddClassForm>
            </ClassesContent>
        </Content>
      </ClassesContainer>
    )
}

export default Classes;
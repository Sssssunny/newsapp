import axios from 'axios';

// 사용자 리스트 조회
export const getUsers = async () => {
  try {
    const users = await axios.get('http://localhost:4000/users');
    return users.data; 
  } catch (err) {
    throw err;
  }  
};
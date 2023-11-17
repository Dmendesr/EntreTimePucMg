import {BASE_URL} from './urls';
import API from './webapi.services';

export const getEventos = async () => {
  try{
    return await API.get(`${BASE_URL}/eventos`).then( 
      response => {
        return response.data;
      },
      error =>{
        console.log(error);
        return  null;
      }
    );
  }catch(error){
    console.log(error);
    return null;
  }
}

export const insertEvento = async (param) => {
  try{
    return await API.post(`${BASE_URL}/eventos`, param).then( 
      response => {
        return response.data;
      },
      error =>{
        console.log(error);
        return  null;
      }
    );
  }catch(error){
    console.log(error);
    return null;
  }
}

export const updateEvento = async (param) => {
  try{
    return await API.put(`${BASE_URL}/eventos/${param.id}`, param).then( 
      response => {
        return response.data;
      },
      error =>{
        console.log(error);
        return  null;
      }
    );
  }catch(error){
    console.log(error);
    return null;
  }
}

export const deleteEvento = async (id) => {
  try{
    return await API.delete(`${BASE_URL}/eventos/${id}`).then( 
      response => {
        return response.data;
      },
      error =>{
        console.log(error);
        return  null;
      }
    );
  }catch(error){
    console.log(error);
    return null;
  }
}
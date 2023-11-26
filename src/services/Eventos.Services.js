import API from './webapi.services';

export const getEventos = async () => {
  try {
    const endpointPath = '/eventos';
    const response = await API.get(endpointPath);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const insertEvento = async (param) => {
  try {
    const endpointPath = '/eventos';
    const response = await API.post(endpointPath, param);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const updateEvento = async (param) => {
  try {
    const endpointPath = `/eventos/${param.id}`;
    const response = await API.put(endpointPath, param);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const deleteEvento = async (id) => {
  try {
    const endpointPath = `/eventos/${id}`;
    const response = await API.delete(endpointPath);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

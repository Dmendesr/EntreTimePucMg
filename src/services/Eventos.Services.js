import API from './webapi.services';

export const getEventos = async () => {
  try {
    const endpointPath = '/eventos';

    return await API.get(endpointPath).then(
      response => response.data,
      error => {
        console.log(error);
        return null;
      }
    );
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const insertEvento = async (param) => {
  try {
    const endpointPath = '/eventos';

    return await API.post(endpointPath, param).then(
      response => response.data,
      error => {
        console.log(error);
        return null;
      }
    );
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const updateEvento = async (param) => {
  try {
    const endpointPath = `/eventos/${param.id}`;

    return await API.put(endpointPath, param).then(
      response => response.data,
      error => {
        console.log(error);
        return null;
      }
    );
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const deleteEvento = async (id) => {
  try {
    const endpointPath = `/eventos/${id}`;

    return await API.delete(endpointPath).then(
      response => response.data,
      error => {
        console.log(error);
        return null;
      }
    );
  } catch (error) {
    console.log(error);
    return null;
  }
};

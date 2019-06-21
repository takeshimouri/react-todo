import axios from 'axios';

const DEFAULT_API_CONFIG = {
  baseURL: 'http://localhost:8340/api/v1/cm_mdmms/'
};

export const getMembersFactory = optionConfig => {
  const config = {
    ...DEFAULT_API_CONFIG,
    ...optionConfig
  };
  const instance = axios.create(config);

  const getMembers = async organizationName => {
    try {
      // const response = await instance.get(`/orgs/${organizationName}/members`);
      const response = await instance.get();

      if (response.status !== 200) {
        throw new Error('Server Error');
      }
      const members = response.data;

      return members;
    } catch (err) {
      throw err;
    }
  };

  return getMembers;
};

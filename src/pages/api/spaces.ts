import api from 'config/api';

export const spacesApi = {
	getSpacesList: async () => (await api.get(`/spaces`)).data,
	getSpace: async (id: string) => (await api.get(`/spaces/${id}`)).data,
};
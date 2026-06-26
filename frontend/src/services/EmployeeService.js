import axios from 'axios';

const BASE_URL = 'http://localhost:8081/api/employees';

const EmployeeService = {
    getAll: () => axios.get(BASE_URL),
    create: (employee) => axios.post(BASE_URL, employee),
    update: (id, employee) => axios.put(`${BASE_URL}/${id}`, employee),
    remove: (id) => axios.delete(`${BASE_URL}/${id}`),
};

export default EmployeeService;

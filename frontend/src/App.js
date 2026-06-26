import React, { useState, useEffect, useCallback } from 'react';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';
import EmployeeService from './services/EmployeeService';
import './App.css';

function App() {
    const [employees, setEmployees] = useState([]);
    const [editingEmployee, setEditingEmployee] = useState(null);
    const [message, setMessage] = useState(null);

    const fetchEmployees = useCallback(() => {
        EmployeeService.getAll()
            .then((res) => setEmployees(res.data))
            .catch(() => showMessage('Failed to load employees.', 'error'));
    }, []);

    useEffect(() => {
        fetchEmployees();
    }, [fetchEmployees]);

    const showMessage = (text, type = 'success') => {
        setMessage({ text, type });
        setTimeout(() => setMessage(null), 3000);
    };

    const handleSave = (form) => {
        if (editingEmployee) {
            EmployeeService.update(editingEmployee.id, form)
                .then(() => {
                    showMessage('Employee updated successfully.');
                    setEditingEmployee(null);
                    fetchEmployees();
                })
                .catch(() => showMessage('Failed to update employee.', 'error'));
        } else {
            EmployeeService.create(form)
                .then(() => {
                    showMessage('Employee added successfully.');
                    fetchEmployees();
                })
                .catch(() => showMessage('Failed to add employee.', 'error'));
        }
    };

    const handleDelete = (id) => {
        EmployeeService.remove(id)
            .then(() => {
                showMessage('Employee deleted successfully.');
                fetchEmployees();
            })
            .catch(() => showMessage('Failed to delete employee.', 'error'));
    };

    return (
        <div className="app">
            <header className="app-header">
                <h1>Employee Management System</h1>
            </header>
            <main className="app-main">
                {message && (
                    <div className={`alert alert-${message.type}`}>{message.text}</div>
                )}
                <EmployeeForm
                    onSave={handleSave}
                    editingEmployee={editingEmployee}
                    onCancel={() => setEditingEmployee(null)}
                />
                <div className="section-header">
                    <h2>Employees ({employees.length})</h2>
                </div>
                <EmployeeList
                    employees={employees}
                    onEdit={setEditingEmployee}
                    onDelete={handleDelete}
                />
            </main>
        </div>
    );
}

export default App;

import React from 'react';

function EmployeeList({ employees, onEdit, onDelete }) {
    if (employees.length === 0) {
        return <p className="empty-msg">No employees found. Add one above.</p>;
    }

    return (
        <div className="table-wrapper">
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Department</th>
                        <th>Salary</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((emp, index) => (
                        <tr key={emp.id}>
                            <td>{index + 1}</td>
                            <td>{emp.name}</td>
                            <td>{emp.email}</td>
                            <td>{emp.department}</td>
                            <td>${Number(emp.salary).toLocaleString()}</td>
                            <td>
                                <button className="btn btn-edit" onClick={() => onEdit(emp)}>Edit</button>
                                <button className="btn btn-delete" onClick={() => {
                                    if (window.confirm(`Delete ${emp.name}?`)) onDelete(emp.id);
                                }}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default EmployeeList;

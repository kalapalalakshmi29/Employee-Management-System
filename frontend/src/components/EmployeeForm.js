import React, { useState, useEffect } from 'react';

const emptyForm = { name: '', email: '', department: '', salary: '' };

function EmployeeForm({ onSave, editingEmployee, onCancel }) {
    const [form, setForm] = useState(emptyForm);

    useEffect(() => {
        setForm(editingEmployee || emptyForm);
    }, [editingEmployee]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(form);
        setForm(emptyForm);
    };

    return (
        <div className="form-card">
            <h2>{editingEmployee ? 'Edit Employee' : 'Add Employee'}</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-grid">
                    <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
                    <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
                    <input name="department" placeholder="Department" value={form.department} onChange={handleChange} required />
                    <input name="salary" type="number" placeholder="Salary" value={form.salary} onChange={handleChange} required />
                </div>
                <div className="form-actions">
                    <button type="submit" className="btn btn-primary">
                        {editingEmployee ? 'Update' : 'Add Employee'}
                    </button>
                    {editingEmployee && (
                        <button type="button" className="btn btn-secondary" onClick={onCancel}>
                            Cancel
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
}

export default EmployeeForm;

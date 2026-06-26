package com.example.springboot_1.service;

import com.example.springboot_1.entity.Employee;
import com.example.springboot_1.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository repository;

    public Employee getEmployeeById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Employee not found with id: " + id));
    }

    public List<Employee> getAllEmployees() {
        return repository.findAll();
    }

    public Employee saveEmployee(Employee employee) {
        return repository.save(employee);
    }

    public Employee updateEmployee(Long id, Employee employee) {
        Employee existing = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Employee not found with id: " + id));

        existing.setName(employee.getName());
        existing.setEmail(employee.getEmail());
        existing.setDepartment(employee.getDepartment());
        existing.setSalary(employee.getSalary());

        return repository.save(existing);
    }

    public void deleteEmployee(Long id) {
        repository.deleteById(id);
    }
}
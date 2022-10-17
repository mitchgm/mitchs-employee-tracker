INSERT INTO department
  (name)
--   these are the names for the value field for the seed 
VALUES
("John Smith"),
("Miles Cooper"),
("Ricky Bobby");
INSERT INTO roles
-- this is the data that is being inserted into departments
  (title, salary, department_id)
VALUES
("intern" "12,000" "7"),
("employee" "40,000" "2"),
("intern" "18,000" "3");
INSERT INTO employeeInfo
  (id, first_name, last_name, role_id, manager_id)
VALUES
("1" "John" "Smith" "7" "7"),
("2" "Miles" "Cooper" "2" "1"),
("3" "Ricky" "Bobby" "9" "12");
-- values for the employee info
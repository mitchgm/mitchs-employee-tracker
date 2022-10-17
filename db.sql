
DROP TABLE IF EXISTS employeeView; 
DROP TABLE IF EXISTS roleView;
DROP TABLE IF EXISTS departmentView;
-- this resets if the use case is accessing other data


CREATE TABLE departmentView (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(40) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE roleView (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(40) NOT NULL,
  salary DECIMAL(10.3) NOT NULL,
  department_id INT,
  PRIMARY KEY (id)
);

CREATE TABLE employeeView (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(40) NOT NULL,
  last_name VARCHAR(40) NOT NULL,
  role_id INT NOT NULL,
  manager_id int ,
  PRIMARY KEY (id)
);



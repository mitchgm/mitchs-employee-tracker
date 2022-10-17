
DROP TABLE IF EXISTS employeeView; 
DROP TABLE IF EXISTS roleView;
DROP TABLE IF EXISTS departmentView;
-- this resets if the use case is accessing other data


CREATE TABLE departmentView (
    -- sets the id as the primary key
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(40) NOT NULL,
  -- sets character number
  PRIMARY KEY (id)
);

CREATE TABLE roleView (
    -- sets the id as the primary key
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(40) NOT NULL,
  salary DECIMAL(10.3) NOT NULL,
   -- sets character number
  department_id INT,
  PRIMARY KEY (id)
);

CREATE TABLE employeeView (
    -- sets the id as the primary key
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(40) NOT NULL,
  last_name VARCHAR(40) NOT NULL,
   -- sets character number
  role_id INT NOT NULL,
  manager_id int ,
  PRIMARY KEY (id)
);



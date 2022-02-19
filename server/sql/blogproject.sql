

CREATE TABLE blogpost (
  id BIGSERIAL NOT NULL PRIMARY KEY,
  author VARCHAR(50) NOT NULL,
  username VARCHAR(50) NOT NULL,
  blogtitle VARCHAR(50) NOT NULL,
  blogpost VARCHAR(250) NOT NULL,
  mood VARCHAR(50) NOT NULL,
  submitted DATE NOT NULL 
);

INSERT INTO blogpost (author, username, blogtitle, blogpost, mood, submitted) VALUES('Raymond', 'Raymond', 'Great Day','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.consequat.','happy','2022-02-19'),('Bill', 'Bill','Confusing Day','Lorem ipsum dolor sit amet, consectetur ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris consequat.','confused','2022-02-19'),('Kevin', 'Kevin','Why pay council tax','Lorem ipsum tempor incididunt ut labore et dolore magna aliqua. exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.','angry','2022-02-19'), ('Tyler', 'Tyler','I hate Boris Johnson','Lorem ipsum tempor incididunt ut labore et dolore magna aliqua. exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.','angry','2022-02-19');

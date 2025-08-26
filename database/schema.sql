CREATE TABLE project (
    id INT PRIMARY KEY,
    name VARCHAR(255),
    description TEXT,
    category VARCHAR(255),
    targetAudience VARCHAR(255),
    logoPrompt TEXT,
    colorScheme VARCHAR(255)
);

CREATE TABLE mainFeatures (
    id INT PRIMARY KEY,
    feature_name VARCHAR(255),
    project_id INT,
    FOREIGN KEY (project_id) REFERENCES project(id)
);

CREATE TABLE techStack (
    id INT PRIMARY KEY,
    tech_name VARCHAR(255),
    project_id INT,
    FOREIGN KEY (project_id) REFERENCES project(id)
);
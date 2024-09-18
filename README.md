

# **School Management System**

## **Introduction**

The School Management System is a comprehensive platform designed to streamline student performance tracking, teacher activities, and overall school operations. It provides a user-friendly interface and ensures the timely identification of potential issues, aiding in the smooth functioning of educational institutions.

[Link to Deployed Site](#)  
[Final Project Blog Article](#)  
[Author LinkedIn](https://www.linkedin.com/in/achraf-belkhaouda/)

---

## **Table of Contents**
- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Related Projects](#related-projects)
- [License](#license)
- [Screenshots](#screenshots)

---

## **Project Overview**

This project is developed by **ACHRAF BELKHAOUDA**, who is responsible for all aspects, including project design, database setup, back-end development with Flask, and front-end development with React.js.

### **Why This Project?**
The aim of this solo project is to challenge myself by managing the entire development process from end to end, covering both front-end and back-end development, ensuring high performance, scalability, and ease of use.

---

## **Technologies Used**

### **Infrastructure**
- **Servers**: Three servers running Ubuntu 20.04

### **Front-End**
- **Languages**: JavaScript, HTML, CSS
- **Frameworks**: React.js, TailwindCSS (for UI and styling)
- **Bundler**: Vite (for optimized development and faster builds)

### **Back-End**
- **Languages**: Python
- **Frameworks**: Flask
- **Libraries**: Requests

### **Database**
- **Database**: MySQL

---

## **Installation**

### **Requirements**
- Python 3.x
- MySQL
- Node.js
- npm (for React and Vite)
- Git

### **Steps**
1. **Clone the Repository**:
    ```bash
    git clone https://github.com/ashrafbel/SchoolManagement.git
    cd SchoolManagement
    ```

2. **Set Up Virtual Environment**:
    ```bash
    python3 -m venv venv
    source venv/bin/activate  # On Windows, use venv\Scripts\activate
    ```

3. **Install Back-End Dependencies**:
    ```bash
    pip install -r requirements.txt
    ```

4. **Install Vite Globally**:
    You need to install Vite globally on your machine before running the front-end:
    ```bash
    npm install -g vite
    ```

5. **Install Front-End Dependencies**:
    ```bash
    cd frontend
    npm install
    ```

6. **Set Up MySQL Database**:
    - Create a MySQL database for the project.
    - Update the `config.py` file with your database credentials.

7. **Run Migrations** (if applicable):
    ```bash
    flask db upgrade
    ```

8. **Start the Development Servers**:
    - For back-end:
      ```bash
      python app.py
      ```
    - For front-end (with Vite):
      ```bash
      npm run dev
      ```

---

## **Usage**

1. **Log In**: Users can log in as students, teachers, or administrators to access different dashboards.
2. **Track Performance**: Teachers can input grades, and students can track their progress.
3. **Manage Activities**: Administrators can manage teacher and student records, class schedules, and more.

---

## **Contributing**

We welcome contributions from the community. To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Added new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

---

## **Related Projects**

- [Flask Mega Tutorial](https://github.com/miguelgrinberg/microblog)
- [React.js Documentation](https://reactjs.org/docs/getting-started.html)
- [Vite Documentation](https://vitejs.dev/guide/)
- [TailwindCSS](https://tailwindcss.com/docs)

---

## **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## **Screenshots**

![Dashboard Screenshot](screenshot1.png)
*A screenshot showcasing the dashboard interface for school management.*

---

This version now includes the step to globally install Vite before running the front-end dependencies and starting the development server.
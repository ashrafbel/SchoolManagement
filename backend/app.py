from flask import request, jsonify
from __init__ import app, db
from models import User


# Define a route for the home page
@app.route('/')
def index():
    """
    Index route that returns a welcome message.
    This route is used to check if the API is running.
    """
    return "Welcome to the School Management System API!"


# Define a route for user registration
@app.route('/register', methods=['POST'])
def register():
    """
    Registers a new user.
    This route accepts a POST request with 'name', 'email', and 'password'.
    It checks if all required data is present and if the user already exists.
    If not, it creates and stores the new user in the database.
    
    Returns:
        - Success message if the user is created.
        - Error message if required data is missing or if the user already exists.
    """  
    data = request.get_json() # Get JSON data from the request

    # Check if name, email, and password are provided
    if not data or not data.get('name') or not data.get('email') or not data.get('password'):
        return jsonify({"message": "Name, email, and password are required", "success": False}), 400

    name = data.get('name')
    email = data.get('email')
    password = data.get('password')
    
    # Check if the user already exists
    user_exists = User.query.filter_by(email=email).first()
    if user_exists:
        return jsonify({"message": "User already exists", "success": False}), 400

    try:
        # Create and save the new user
        new_user = User(name=name, email=email)
        new_user.set_password(password)
        db.session.add(new_user)
        db.session.commit()
        return jsonify({"message": "User registered successfully", "success": True}), 201
    except Exception as e:
        db.session.rollback() # Rollback in case of error
        return jsonify({"message": f"An error occurred: {str(e)}", "success": False}), 500

# Define a route to add a user
@app.route('/add_user', methods=['POST'])
def add_user():
    data = request.get_json() # Get JSON data from the request

    # Check if email and password are provided
    if not data or not data.get('email') or not data.get('password'):
        return jsonify({"message": "Email and password are required", "success": False}), 400

    email = data.get('email')
    password = data.get('password')

    # Check if the user already exists
    user_exists = User.query.filter_by(email=email).first()
    if user_exists:
        return jsonify({"message": "User already exists", "success": False}), 400

    try:
        # Create and save the new user
        new_user = User(email=email)
        new_user.set_password(password)
        db.session.add(new_user)
        db.session.commit()
        return jsonify({"message": "User created successfully", "success": True}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({"message": f"An error occurred: {str(e)}", "success": False}), 500

# Define a route for user login
@app.route('/login', methods=['POST'])
def login():
    """
    Logs in a user with their email and password.
    This route checks if the provided credentials are correct.
    
    Returns:
        - Success message with user info if the login is successful.
        - Error message if the credentials are invalid.
    """
    data = request.get_json()

    if not data or not data.get('email') or not data.get('password'):
        return jsonify({"message": "Email and password are required", "success": False}), 400

    email = data.get('email')
    password = data.get('password')

    try:
        user = User.query.filter_by(email=email).first()
        if user and user.check_password(password):
            user_info = {
                "id": user.id,
                "email": user.email
            }
            return jsonify({"message": "Login successful", "success": True, "user_info": user_info}), 200
        else:
            return jsonify({"message": "Invalid credentials", "success": False}), 401
    except Exception as e:
        return jsonify({"message": f"An error occurred: {str(e)}", "success": False}), 500


if __name__ == '__main__':
    app.run(debug=True)

from flask import request, jsonify
from __init__ import app, db
from models import User

@app.route('/')
def index():
    return "Welcome to the School Management System API!"

@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()

    if not data or not data.get('name') or not data.get('email') or not data.get('password'):
        return jsonify({"message": "Name, email, and password are required", "success": False}), 400

    name = data.get('name')
    email = data.get('email')
    password = data.get('password')
    user_exists = User.query.filter_by(email=email).first()
    if user_exists:
        return jsonify({"message": "User already exists", "success": False}), 400

    try:
        new_user = User(name=name, email=email)
        new_user.set_password(password)
        db.session.add(new_user)
        db.session.commit()
        return jsonify({"message": "User registered successfully", "success": True}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({"message": f"An error occurred: {str(e)}", "success": False}), 500

@app.route('/add_user', methods=['POST'])
def add_user():
    data = request.get_json()

    if not data or not data.get('email') or not data.get('password'):
        return jsonify({"message": "Email and password are required", "success": False}), 400

    email = data.get('email')
    password = data.get('password')

    user_exists = User.query.filter_by(email=email).first()
    if user_exists:
        return jsonify({"message": "User already exists", "success": False}), 400

    try:
        new_user = User(email=email)
        new_user.set_password(password)
        db.session.add(new_user)
        db.session.commit()
        return jsonify({"message": "User created successfully", "success": True}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({"message": f"An error occurred: {str(e)}", "success": False}), 500

@app.route('/login', methods=['POST'])
def login():
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

from flask import request, jsonify
from __init__ import app, db
from models import User

@app.route('/')
def index():
    return "Welcome to the School Management System API!"

@app.route('/add_user', methods=['POST'])
def add_user():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    new_user = User(email=email)
    new_user.set_password(password)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "User created successfully"}), 201


# @app.route('/login', methods=['GET'])
# def login_get_not_allowed():
#     return jsonify({"message": "GET method not allowed for this endpoint."}), 405


@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    user = User.query.filter_by(email=email).first()
    if user and user.check_password(password):
        user_info = {
            "id": user.id,
            "email": user.email
        }
        return jsonify({"message": "Login successful", "success": True, "user_info": user_info}), 200
    else:
        return jsonify({"message": "Invalid credentials", "success": False}), 401


if __name__ == '__main__':
    app.run(debug=True)

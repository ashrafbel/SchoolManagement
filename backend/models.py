from __init__ import db  # Importing the database instance from the __init__ file
from werkzeug.security import generate_password_hash, check_password_hash  # Importing security utilities for password hashing

class User(db.Model):
    """
    User class represents the user model for the database.
    It contains fields for storing user information like ID, name, email, and password hash.
    The password is stored as a hash to ensure security.
    """

    # 'id' is the primary key for the User table, an integer that auto-increments
    id = db.Column(db.Integer, primary_key=True)
    
    # 'name' is a string column with a maximum of 120 characters, cannot be null
    name = db.Column(db.String(120), nullable=False)
    
    # 'email' is a unique string column with a maximum of 120 characters, cannot be null
    email = db.Column(db.String(120), unique=True, nullable=False)
    
    # 'password_hash' is a string column used to store the hashed version of the user's password, cannot be null
    password_hash = db.Column(db.String(128), nullable=False)

    def set_password(self, password):
        """
        Hashes the provided plain text password and stores it in the password_hash field.
        This method ensures that the user's password is securely stored.
        
        :param password: The plain text password provided by the user
        """
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        """
        Checks if the provided plain text password matches the stored hashed password.
        This is used during authentication to verify the user's credentials.
        
        :param password: The plain text password provided by the user for authentication
        :return: True if the password matches, False otherwise
        """
        return check_password_hash(self.password_hash, password)

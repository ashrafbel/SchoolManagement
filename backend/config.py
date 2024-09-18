import os # Importing os module to generate a secret key

class Config:
    """
    Config class that holds the configuration settings for the Flask application.
    This includes database connection details and security settings.
    """
    # URI for connecting to the database (SQLite in this case)
    SQLALCHEMY_DATABASE_URI = 'sqlite:///mydatabase.db'
    
    # Disable SQLAlchemy's event notifications system to save resources
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    
    # Secret key for securely signing the session cookie and other security-related purposes
    # Using os.urandom(24) to generate a random 24-byte secret key
    SECRET_KEY = os.urandom(24)

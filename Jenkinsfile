pipeline {
    agent any

    environment {
        VENV = 'venv'
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/Ramarao3562/ecommerce-backend.git'  // replace with your repo
            }
        }

        stage('Setup Python VirtualEnv') {
            steps {
                bat 'python -m venv %VENV%'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat '''
                    %VENV%\\Scripts\\activate
                    pip install --upgrade pip
                    pip install -r requirements.txt
                    pip install pytest
                '''
            }
        }

        stage('Run Tests') {
            steps {
                bat '''
                    %VENV%\\Scripts\\activate
                    pytest
                '''
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploy step goes here'
            }
        }
    }
}

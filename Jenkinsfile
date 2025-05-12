pipeline {
    agent any

    tools {
        nodejs 'NodeJS 18'  // Make sure NodeJS 18 is added in Jenkins → Global Tool Configuration
    }

    environment {
        BACKEND_DIR = 'ecommerce-backend'
        FRONTEND_DIR = 'ecommerce-frontend'
        VENV = 'venv'
    }

    stages {
        stage('Install Frontend Dependencies') {
            steps {
                dir("${env.FRONTEND_DIR}") {
                    bat 'npm install'
                    bat 'npm run build'
                }
            }
        }

        stage('Install Backend Dependencies') {
            steps {
                dir("${env.BACKEND_DIR}") {
                    bat 'python -m venv %VENV%'
                    bat '%VENV%\\Scripts\\activate && pip install -r requirements.txt'
                }
            }
        }

        stage('Run Backend Tests (Optional)') {
            steps {
                dir("${env.BACKEND_DIR}") {
                    bat '%VENV%\\Scripts\\activate && pytest'
                }
            }
        }
    }
}

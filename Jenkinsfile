pipeline {
    agent any

    environment {
        FRONTEND_DIR = 'ecommerce-frontend'
        BACKEND_DIR = 'ecommerce-backend'
    }

    tools {
        nodejs 'NodeJS 18'     // You must define this in Jenkins global tools
        python 'Python 3.10'   // Same for Python
    }

    stages {
        stage('Clone Repository') {
            steps {
                git credentialsId: 'your-github-cred-id', url: 'https://github.com/<your-username>/ecommerce-app.git'
            }
        }

        stage('Install Frontend Dependencies') {
            steps {
                dir("${env.FRONTEND_DIR}") {
                    sh 'npm install'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir("${env.FRONTEND_DIR}") {
                    sh 'npm run build'
                }
            }
        }

        stage('Copy Build to Backend') {
            steps {
                dir("${env.BACKEND_DIR}") {
                    sh 'rm -rf build'
                    sh 'cp -r ../ecommerce-frontend/build ./'
                }
            }
        }

        stage('Install Backend Dependencies') {
            steps {
                dir("${env.BACKEND_DIR}") {
                    sh 'pip install -r requirements.txt'
                }
            }
        }

        stage('Run Backend App') {
            steps {
                dir("${env.BACKEND_DIR}") {
                    sh 'python app.py &'
                }
            }
        }
    }
}

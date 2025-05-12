pipeline {
    agent any

    tools {
        nodejs 'NodeJS 18'  // Only if NodeJS plugin is configured
    }

    stages {
        stage('Install Frontend Dependencies') {
            steps {
                dir('ecommerce-frontend') {
                    bat 'npm install'
                    bat 'npm run build'
                }
            }
        }

        stage('Install Backend Dependencies') {
            steps {
                dir('ecommerce-backend') {
                    bat 'python -m venv venv'
                    bat 'venv\\Scripts\\activate && pip install -r requirements.txt'
                    // Optional: Start Flask app (not recommended in build step)
                }
            }
        }
    }
}

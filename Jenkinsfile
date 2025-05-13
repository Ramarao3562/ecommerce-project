pipeline {
    agent any

    environment {
        VENV_DIR = "${WORKSPACE}/venv"
    }

    stages {
        stage('Clone Infrastructure Code') {
            steps {
                // This is the Jenkinsfile repository — it already has credentials configured in the webhook-triggered checkout
                echo "Infrastructure repo already cloned by Jenkins"
            }
        }

        stage('Checkout Backend Code') {
            steps {
                git url: 'https://github.com/Ramarao3562/ecommerce-backend.git',
                    branch: 'main',
                    credentialsId: 'github-creds'
            }
        }

        stage('Setup Python VirtualEnv') {
            steps {
                echo "Creating Python virtual environment..."
                bat 'python -m venv venv'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo "Installing requirements..."
                bat '.\\venv\\Scripts\\pip install --upgrade pip'
                bat '.\\venv\\Scripts\\pip install -r requirements.txt'
            }
        }

        stage('Run Tests') {
            steps {
                echo "Running tests..."
                bat '.\\venv\\Scripts\\pytest tests/'
            }
        }

        stage('Deploy') {
            steps {
                echo "Deploying the Flask app..."
                // Add your deployment command here
                // For example, you might start the app: bat 'python app.py'
            }
        }
    }

    post {
        always {
            echo "Cleaning up..."
        }
        failure {
            echo "Build failed. Check logs above."
        }
        success {
            echo "Build and deployment successful."
        }
    }
}

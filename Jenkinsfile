pipeline {
    agent any

    stages {
        stage('Clone repository') {
            steps {
                git branch: 'main' url: 'git@github.com:elvinciqueira/test-mobile.git'
            }
        }
        stage('Install dependencies') {
            steps {
                sh 'yarn install'
            }
        }
        stage('Run E2E tests') {
            steps {
                sh 'NO_COLOR=1 yarn test'
            }
        }
    }
}

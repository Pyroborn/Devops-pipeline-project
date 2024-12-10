pipeline {
    agent any
    stages {
        stage('Clean-up and Check-out Stage') {
            steps {
                script {
                    echo 'Cleaning up and checking out.'
                    deleteDir()
                    checkout scm
                    sh 'git status'
                }
            }
        }
    }
}

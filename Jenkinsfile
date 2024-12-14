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
        stage('Dependency install') {
                steps {
                    script {
                        sh ' npm install'
                    }
                }
            }
        stage('Build') {
                steps {
                    script {
                        sh 'npm run build'
                    }
                }
            }
        stage('Unit test via Vitest') {
            steps {
                script  {
                    sh 'npm run test:unit'
                }
            }
        }
        stage('End-to-end test via Cypress') {
            steps {
                script {
                    sh '''
                    export DISPLAY=:99
                    nohup Xvfb :99 -screen 0 1280x1024x24 &
                    npm run test:e2e:dev
                    '''
                }
            }
        }
        
        }
}

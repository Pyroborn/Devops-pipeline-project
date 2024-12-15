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
        stage('Lint') {
            steps {
                script {
                    sh 'npx eslint . --fix --max-warnings=0 --format json --output-file eslint-report.json'
                    archiveArtifacts artifacts: 'eslint-report.json', allowEmptyArchive: true
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
        }
}

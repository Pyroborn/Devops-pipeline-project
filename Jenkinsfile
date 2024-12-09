pipeline {
    agent any
    stages {
        stage('Test GitHub Access') {
            steps {
                script {
                    echo 'Testing GitHub integration...'

                    // Clean up any existing repository directory
                    sh '''
                    rm -rf Devops-pipeline-project
                    git clone https://github.com/Pyroborn/Devops-pipeline-project.git
                    cd Devops-pipeline-project
                    git status
                    '''
                }
            }
        }
    }
}

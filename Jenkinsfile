pipeline {
    agent any

    environment {
	IMAGE_NAME = 'vue-app'
	PORT = '5000'
}
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
	stage('Build Docker Image') {
	    steps {
		script {
		     echo "Building the image"
		     sh 'docker build -t $IMAGE_NAME .'
		}
	    }
	}
	stage('Run Container') {
	steps {
		script {
			echo "Running Container"
			sh "docker run -d -p $PORT:$PORT $IMAGE_NAME"
		}
	    }
	}
	stage('Clean-up') {
	    steps {
		script {
		    echo 'Cleaning containers"
		    sh "docker ps -a -q --filter ancestor=$IMAGE_NAME | xargs -r docker stop | xargs -r docker rm"
		}
	    }
	}
}
	post {
	   always {
		echo 'Cleaning up images'
		sh "docker rmi -f $IMAGE_NAME"
		}
	    }
	
}

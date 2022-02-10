pipeline {
    agent any

    stages {
		stage('Clean Jenkins Workspace before starting'){
            steps{
                cleanWs()
            }
        }
        stage('Pull') {
			steps {
				git([url:'https://github.com/wiwiii/jenkins-ci-lab/', branch:'develop', credentialsId: 'jenkins-ci-lab-deploy-key'])
			}
		}
		stage('Run integration test'){
			bat 'cd back && npm i && npm test && cd ..'
		}
		stage('Remove Docker containers'){
			bat 'docker rm -f $(docker ps -a -q)'
		}
		stage('Remove Docker containers'){
			bat 'docker rm -f jenkins-ci-lab-back-container'
			bat 'docker rm -f jenkins-ci-lab-front-container'
		}
		stage('Remove Front-end Docker container'){
			bat 'docker stop -f jenkins-ci-lab-front-container'
			bat 'docker rm -f jenkins-ci-lab-front-container'
		}
		stage('Remove Back-end Docker containers'){
			bat 'docker stop -f jenkins-ci-lab-back-container'
			bat 'docker rm -f jenkins-ci-lab-back-container'
		}
		stage('Remove Front-end Docker image'){
			bat 'docker image rm jenkins-ci-lab-front-image'
		}
		stage('Remove Back-end Docker image'){
			bat 'docker image rm jenkins-ci-lab-back-image'
		}
		stage('Build') {
			steps {
				bat 'docker build -t "jenkins-ci-lab-back-image" ./back'
				bat 'docker build -t "jenkins-ci-lab-front-image" ./front'
			}
		}
		stage('Deploy'){
			bat 'docker-compose up'
		}
    }
}
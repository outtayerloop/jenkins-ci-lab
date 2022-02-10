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
			steps {
				bat 'cd back && npm i && npm test && cd ..'
			}
		}
		stage('Stop Docker containers'){
			steps{
				bat 'docker-compose kill'
			}
		}
		stage('Remove stopped Docker containers'){
			steps{
				bat 'docker-compose rm'
			}
		}
		stage('Update Back-end Docker image to latest'){
			steps {
				bat 'docker-compose pull back'
			}
		}
		stage('Update Front-end Docker image to latest'){
			steps {
				bat 'docker-compose pull front'
			}
		}
		stage('Deploy Docker containers'){
			steps {
				bat 'docker-compose up --remove-orphans --attach-dependencies'
			}
		}
    }
}
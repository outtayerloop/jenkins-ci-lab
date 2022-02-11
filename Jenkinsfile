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
				sh 'cd back && npm i && npm test && cd ..'
			}
		}
		stage('Update Back-end Docker image to latest'){
			steps {
				sh 'docker-compose pull back'
			}
		}
		stage('Update Front-end Docker image to latest'){
			steps {
				sh 'docker-compose pull front'
			}
		}
		stage('Deploy services'){
			steps {
				sh 'docker-compose up --remove-orphans --build --no-start'
			}
		}
    }
	post{
		always{
			sh 'docker-compose down --rmi "all" -v --remove-orphans'
		}
	}
}
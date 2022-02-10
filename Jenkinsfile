pipeline {
    agent any

    stages {
		stage('Clean Jenkins Workspace before starting'){
			when {
				env.BRANCH == 'develop'
			}
            steps{
                cleanWs()
            }
        }
        stage('Pull') {
			when {
				env.BRANCH == 'develop'
			}
			steps {
				git([url:'https://github.com/wiwiii/jenkins-ci-lab/', branch:'develop', credentialsId: 'jenkins-ci-lab-deploy-key'])
			}
		}
		stage('Run integration test'){
			when {
				env.BRANCH == 'develop'
			}
			steps {
				bat 'cd back && npm i && npm test && cd ..'
			}
		}
		stage('Update Back-end Docker image to latest'){
			when {
				env.BRANCH == 'develop'
			}
			steps {
				bat 'docker-compose pull back'
			}
		}
		stage('Update Front-end Docker image to latest'){
			when {
				env.BRANCH == 'develop'
			}
			steps {
				bat 'docker-compose pull front'
			}
		}
		stage('Deploy services'){
			when {
				env.BRANCH == 'develop'
			}
			steps {
				bat 'docker-compose up --remove-orphans --build --no-start'
			}
		}
    }
	post{
		always{
			bat 'docker-compose down --rmi "all" -v --remove-orphans'
		}
	}
}
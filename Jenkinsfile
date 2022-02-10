pipeline {
    agent any

    stages {
        stage('Pull') {
			steps {
				git([url:'https://github.com/wiwiii/jenkins-ci-lab/', branch:'develop', credentialsId: 'jenkins-ci-lab-deploy-key'])
			}
		}
		stage('Build') {
			steps {
				bat 'cd back && npm i && npm test && cd ..'
				bat 'docker build -t "jenkins-ci-lab-back" ./back'
				bat 'docker build -t "jenkins-ci-lab-front" ./front'
				bat 'docker image rm jenkins-ci-lab-front'
				bat 'docker image rm jenkins-ci-lab-back'
				bat 'git push --set-upstream origin release'
				bat 'docker-compose up'
			}
		}
    }
}
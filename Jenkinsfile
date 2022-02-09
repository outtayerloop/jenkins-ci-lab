pipeline {
    agent any

    stages {
        stage('Pull') {
			steps {
				git([url:'https://github.com/wiwiii/jenkins-ci-lab/', branch:'develop'])
			}
		}
		stage('Build') {
			steps {
				bat 'docker-compose up'
			}
		}
    }
}
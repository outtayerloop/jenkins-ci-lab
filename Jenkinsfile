pipeline {
    agent any
	triggers {
		githubPush()
	}
    stages {
        stage('Pull') {
			steps {
				git([url:'https://github.com/wiwiii/jenkins-ci-lab.git', branch:'dev'])
			}
		}
		stage('Build') {
			steps {
				bat 'docker-compose up'
			}
		}
    }
}
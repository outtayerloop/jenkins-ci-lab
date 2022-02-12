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
		stage('Deploy services'){
			steps {
				bat 'docker-compose up --remove-orphans --build --no-start'
			}
		}
		stage('Push to release'){
			steps {
				bat 'git checkout release & git git push origin release'
			}
		}
    }
	post{
		always{
			bat 'docker-compose down --rmi "all" -v --remove-orphans'
		}
	}
}
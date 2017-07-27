@Library('PipelineHelpers') _

pipeline {
    agent any

    stages {
        stage('Test') {
            steps {
                script {
                    docker.image('node:7-alpine').inside {
                        sh 'npm install'
                        sh 'npm test'
                    }
                }
            }
        }
    }

    post {
        always {
            script {
                pipelineHelpers.notifySlack(currentBuild)
            }
        }
    }
}
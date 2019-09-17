#!groovy

 node {
    currentBuild.result = "SUCCESS"

    try {
        stage('Build') {
            sh 'npm install'
        }
        stage('Test') {
            echo 'Testing..'
        }
        stage('Deploy') {
            echo 'Deploying....'
        }
    } catch (err) {
        currentBuild.result = "FAILURE"
        throw err
    }

}
#!groovy

 node {
    currentBuild.result = "SUCCESS"

    try {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    } catch (err) {
        currentBuild.result = "FAILURE"
        throw err
    }

}
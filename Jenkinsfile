node {

    currentBuild.result = "SUCCESS"

    try {

        stage('Delete Repos Ibere'){
            sh 'ssh root@10.32.223.4 -p 5439 "rm -rf /opt/docker/ibere/"'
        }

        stage('Clone Repos Ibere Web e API'){
           sh 'ssh root@10.32.223.4 -p 5439 "git clone --depth 1 --branch master http://projetos@www.tools.ages.pucrs.br/Ibere/backend.git /opt/docker/ibere/ibere-api"'
           sh 'ssh root@10.32.223.4 -p 5439 "git clone --depth 1 --branch master http://projetos@www.tools.ages.pucrs.br/Ibere/frontend.git /opt/docker/ibere/ibere-web"'
        }

        stage('Down Images DB, Api and Web'){
           sh 'ssh root@10.32.223.4 -p 5439 "cd /opt/docker/ibere/ibere-api; docker-compose down -f docker-compose-jenkins"'
        }

        stage('Pre Build Web'){
           sh 'ssh root@10.32.223.4 -p 5439 "cd /opt/docker/ibere/ibere-api;sh ./ic.sh"'
        }

        stage('Build and Up Docker Image Api and Web'){
           sh 'ssh root@10.32.223.4 -p 5439 "cd /opt/docker/ibere/ibere-api; docker-compose up -f docker-compose-jenkins --build -d"'
        }

        stage('Success'){
            mail body: 'project build successful in HML',
                     from: 'jenkins@ages.com',
                     replyTo: 'cassio.trindade@pucrs.br',
                     subject: 'Success CI Ibere',
                     to: 'cassio.trindade@pucrs.br'
        }

    }
    catch (err) {

        currentBuild.result = "FAILURE"

            mail body: "project build error is here: ${env.BUILD_URL}" ,
            from: 'jenkins@ages.com',
            replyTo: 'cassio.trindade@pucrs.br',
            subject: 'Error CI Ibere',
            to: 'cassio.trindade@pucrs.br'

        throw err
    }

}

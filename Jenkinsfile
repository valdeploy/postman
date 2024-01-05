pipeline {
    agent any

    stages {
        stage('Iterate Subfolders and Run Newman with Allure') {
            steps {
                script {
                    dir('postman') {
                        def subfolders = findFiles(glob: '**postman/bloomApi/*.json')
                        async.parallel(subfolders.collectEntries {
                            ["${it.name}" : {
                                stage("${it.name}") {
                                    dir(it.name) {
                                        // Generate Allure results for Newman run
                                        bat 'newman run collection.json -e env.json --reporters cli,allure'

                                        // Move Allure results to a common directory
                                        bat 'mv allure-results/* ../allure-results-combined'
                                    }
                                }
                            }]
                        })
                    }
                }
            }
        }
    }

    // post {
    //     always {
    //         // Generate consolidated Allure report
    //         sh 'allure generate allure-results-combined --clean'

    //         // Publish the consolidated report
    //         allure([
    //             includeProperties: false,
    //             jdk: '',
    //             properties: [],
    //             reportBuildPolicy: 'ALWAYS',
    //             results: [[path: 'allure-results-combined']]
    //         ])
    //     }
    // }
}

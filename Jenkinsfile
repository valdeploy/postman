pipeline {
    agent any
      tools {
        gradle 'gradle'
    }
    stages {
        stage('Iterate Subfolders and Run Newman with Allure') {
            steps {
                script {
                    dir('postman') {
                        def subfolders = findFiles(glob: '**postman/bloomApi/*.json')
                    }
                }
            }
        }
        stage('Notify Teams') {
          steps {
            script {
              def teamsWebhookUrl = 'https://asicentralcom.webhook.office.com/webhookb2/fb9be2cb-8ac8-4002-957a-8db7c6927372@6504f7e4-d6a1-4688-bf1e-e77e27af6d9a/IncomingWebhook/450b1cbc6bd94699846a5261a5d3f7c9/ac33b688-2060-4767-9ad9-164963554b18'
              def gitCommit = env.GIT_COMMIT
              def payload = [
                  '@type': 'MessageCard',
                  '@context': 'http://schema.org/extensions',
                  'themeColor': '0072C6',
                  'title': 'Jenkins Build',
                  'text': 'Alert',
                  'potentialAction': [
                    [
                      '@type': 'OpenUri',
                      'name': 'jenkins',
                      'targets': [
                          [
                            'os': 'default',
                            'uri': ''
                          ],
                    ]
                ],
              ]
              ]
              //bat script: """curl -X POST -H 'Content-Type: application/json' -d '${payload}' ${teamsWebhookUrl}"""
              def payloadJson = groovy.json.JsonOutput.toJson(payload)
              bat "echo '${payloadJson}' | curl -X POST -H 'Content-Type: application/json' -d @- ${teamsWebhookUrl}"
  //            bat "curl -X POST -H 'Content-Type: application/json' -d '${payloadJson}' ${teamsWebhookUrl}"
            }
          }
      }
    }
}

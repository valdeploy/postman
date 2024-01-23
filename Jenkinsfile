pipeline {
    agent any
    stages {
        stage('Notify Teams') {
          steps {
            script {
            def url = 'https://asicentralcom.webhook.office.com/webhookb2/fb9be2cb-8ac8-4002-957a-8db7c6927372@6504f7e4-d6a1-4688-bf1e-e77e27af6d9a/IncomingWebhook/450b1cbc6bd94699846a5261a5d3f7c9/ac33b688-2060-4767-9ad9-164963554b18'
            def data = """{"@type":"MessageCard","@context":"http://schema.org/extensions","themeColor":"0072C6","title":"Jenkins Build Alert","text":"${currentBuild.resultIsBetterOrEqualTo('SUCCESS') ? 'Successful' : 'Failed'}","potentialAction":[{"@type":"OpenUri","name":"${BUILD_NUMBER}","targets":[{"os":"default","uri":"${BUILD_URL}"}]}]}"""
            def d = groovy.json.JsonOutput.toJson(data)
            bat "curl -X POST \"${url}\" -H 'Content-Type:application/json' -d ${d}"
            }
          }
      }
    }
}

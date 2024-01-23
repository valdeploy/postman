pipeline {
    agent any
    stages {
        stage('Notify Teams') {
          steps {
            script {
            def url = 'https://asicentralcom.webhook.office.com/webhookb2/8b18af5d-21fa-47bb-974c-fdccb0649b57@6504f7e4-d6a1-4688-bf1e-e77e27af6d9a/IncomingWebhook/6083a2b0f2244c86babe98f5466a883a/ac33b688-2060-4767-9ad9-164963554b18'
            def data = """{"@type":"MessageCard","@context":"http://schema.org/extensions","themeColor":"0072C6","title":"Jenkins Build Alert","text":"${currentBuild.resultIsBetterOrEqualTo('SUCCESS') ? 'Successful' : 'Failed'}","potentialAction":[{"@type":"OpenUri","name":"${BUILD_NUMBER}","targets":[{"os":"default","uri":"${BUILD_URL}"}]}]}"""
            def d = groovy.json.JsonOutput.toJson(data)
            bat "curl -X POST \"${url}\" -H 'Content-Type:application/json' -d ${d}"
            }
          }
      }
    }
}

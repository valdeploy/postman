pipeline {
    agent any
    stages {
        stage('Notify Teams') {
          steps {
            script {
            def url = 'https://asicentralcom.webhook.office.com/webhookb2/fb9be2cb-8ac8-4002-957a-8db7c6927372@6504f7e4-d6a1-4688-bf1e-e77e27af6d9a/IncomingWebhook/450b1cbc6bd94699846a5261a5d3f7c9/ac33b688-2060-4767-9ad9-164963554b18'
            def gitCommit = env.GIT_COMMIT
            def data = """{     "@type": "MessageCard",     "@context": "http://schema.org/extensions",     "summary": "Jenkins Build Notification",     "themeColor": "0072C6",     "sections": [         {             "activityTitle": "Jenkins Build Status",             "activitySubtitle": "${currentBuild.resultIsBetterOrEqualTo('SUCCESS') ? 'Build Successful' : 'Build Failed'}",             "activityImage": "https://your-company-logo-url.com/logo.png",             "facts": [                 {"name": "Name", "value": "${JOB_NAME}"},                 {"name": "Build Number", "value": "${BUILD_NUMBER}"},                 {"name": "Status", "value": "${currentBuild.resultIsBetterOrEqualTo('SUCCESS') ? 'Successful' : 'Failed'}"},                 {"name": "Commit", "value": "${gitCommit}"}             ]         }     ] }"""
           // bat 'curl --header "Content-Type: application/json" --request POST --data ${data} ${url}'
                bat "curl -X POST -H 'Content-Type: application/json' -d '${data}' ${url}"

           // bat script: """curl --header "Content-Type: application/json" --request POST --data '{     "@type": "MessageCard",     "@context": "http://schema.org/extensions",     "summary": "Jenkins Build Notification",     "themeColor": "0072C6",     "sections": [         {             "activityTitle": "Jenkins Build Status",             "activitySubtitle": "${currentBuild.resultIsBetterOrEqualTo('SUCCESS') ? 'Build Successful' : 'Build Failed'}",             "activityImage": "https://your-company-logo-url.com/logo.png",             "facts": [                 {"name": "Name", "value": "${JOB_NAME}"},                 {"name": "Build Number", "value": "${BUILD_NUMBER}"},                 {"name": "Status", "value": "${currentBuild.resultIsBetterOrEqualTo('SUCCESS') ? 'Successful' : 'Failed'}"},                 {"name": "Commit", "value": "${gitCommit}"}             ]         }     ] }' ${teamsWebhookUrl}"""
           //                    def curlCommand = """
           //        curl --location --request POST "https://asicentralcom.webhook.office.com/webhookb2/fb9be2cb-8ac8-4002-957a-8db7c6927372@6504f7e4-d6a1-4688-bf1e-e77e27af6d9a/IncomingWebhook/450b1cbc6bd94699846a5261a5d3f7c9/ac33b688-2060-4767-9ad9-164963554b18" ^
           //        --header "Content-Type: application/json" ^
            //       --data-raw '${jsonPayload}'"""
                   // Execute the cURL command using the 'bat' step
              //     bat curlCommand
            }
          }
      }
    }
}

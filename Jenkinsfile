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
              def payload1 = [
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
                def payload2 ="""{
                       "@type": "MessageCard",
                       "@context": "http://schema.org/extensions",
                       "summary": "Jenkins Build Notification",
                       "themeColor": "0072C6",
                       "sections": [
                           {
                               "activityTitle": "Jenkins Build Status",
                               "activitySubtitle": "${currentBuild.resultIsBetterOrEqualTo('SUCCESS') ? 'Build Successful' : 'Build Failed'}"
                           }
                       ]
                   }"""
                def payload = """{
    "@type": "MessageCard",
    "@context": "http://schema.org/extensions",
    "themeColor": "0076D7",
    "summary": "Larry Bryant created a new task",
    "sections": [{
        "activityTitle": "Larry Bryant created a new task",
        "activitySubtitle": "On Project Tango",
        "activityImage": "https://adaptivecards.io/content/cats/3.png",
        "facts": [{
            "name": "Assigned to",
            "value": "Unassigned"
        }, {
            "name": "Due date",
            "value": "Mon May 01 2017 17:07:18 GMT-0700 (Pacific Daylight Time)"
        }, {
            "name": "Status",
            "value": "Not started"
        }],
        "markdown": true
    }],
    "potentialAction": [{
        "@type": "ActionCard",
        "name": "Add a comment",
        "inputs": [{
            "@type": "TextInput",
            "id": "comment",
            "isMultiline": false,
            "title": "Add a comment here for this task"
        }],
        "actions": [{
            "@type": "HttpPOST",
            "name": "Add comment",
            "target": "https://learn.microsoft.com/outlook/actionable-messages"
        }]
    }, {
        "@type": "ActionCard",
        "name": "Set due date",
        "inputs": [{
            "@type": "DateInput",
            "id": "dueDate",
            "title": "Enter a due date for this task"
        }],
        "actions": [{
            "@type": "HttpPOST",
            "name": "Save",
            "target": "https://learn.microsoft.com/outlook/actionable-messages"
        }]
    }, {
        "@type": "OpenUri",
        "name": "Learn More",
        "targets": [{
            "os": "default",
            "uri": "https://learn.microsoft.com/outlook/actionable-messages"
        }]
    }, {
        "@type": "ActionCard",
        "name": "Change status",
        "inputs": [{
            "@type": "MultichoiceInput",
            "id": "list",
            "title": "Select a status",
            "isMultiSelect": "false",
            "choices": [{
                "display": "In Progress",
                "value": "1"
            }, {
                "display": "Active",
                "value": "2"
            }, {
                "display": "Closed",
                "value": "3"
            }]
        }],
        "actions": [{
            "@type": "HttpPOST",
            "name": "Save",
            "target": "https://learn.microsoft.com/outlook/actionable-messages"
        }]
    }]
}"""
                def p = """{
   "type":"message",
   "attachments":[
      {
         "contentType":"application/vnd.microsoft.card.adaptive",
         "contentUrl":null,
         "content":{
            "$schema":"http://adaptivecards.io/schemas/adaptive-card.json",
            "type":"AdaptiveCard",
            "version":"1.2",
            "body":[
                {
                "type": "TextBlock",
                "text": "For Samples and Templates, see [https://adaptivecards.io/samples](https://adaptivecards.io/samples)"
                }
            ]
         }
      }
   ]
}"""
                
              //bat script: """curl -X POST -H 'Content-Type: application/json' -d '${payload}' ${teamsWebhookUrl}"""
              def payloadJson = groovy.json.JsonOutput.toJson(p)
            //  bat "echo '${payloadJson}' | curl -X POST -H 'Content-Type: application/json' -d @- ${teamsWebhookUrl}"
              //bat "curl -X POST -H 'Content-Type: application/json' -d '${payloadJson}' ${teamsWebhookUrl}"
                bat "curl --request POST --url  ${teamsWebhookUrl} --header 'Content-Type: application/json' --data '${payloadJson}'"

            }
          }
      }
    }
}

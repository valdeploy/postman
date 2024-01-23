pipeline {
   agent any
   stages {
       stage('Send POST Request to Microsoft Teams') {
           steps {
               script {
                   // Define the JSON payload as a Groovy multiline string
                   def jsonPayload = '''
                   {
                       "type": "message",
                       "attachments": [
                           {
                               "contentType": "application/vnd.microsoft.card.adaptive",
                               "contentUrl": null,
                               "content": {
                                   "type": "AdaptiveCard",
                                   "version": "1.2",
                                   "body": [
                                       {
                                           "type": "TextBlock",
                                           "text": "For Samples and Templates, see [https://adaptivecards.io/samples](https://adaptivecards.io/samples)"
                                       }
                                   ]
                               }
                           }
                       ]
                   }
                   '''
                  def jsonPayload1 = groovy.json.JsonOutput.toJson(jsonPayload)

                   // Define the cURL command to send the POST request
                   def curlCommand = """
                   curl --location --request POST "https://asicentralcom.webhook.office.com/webhookb2/fb9be2cb-8ac8-4002-957a-8db7c6927372@6504f7e4-d6a1-4688-bf1e-e77e27af6d9a/IncomingWebhook/450b1cbc6bd94699846a5261a5d3f7c9/ac33b688-2060-4767-9ad9-164963554b18" ^
                   --header "Content-Type: application/json" ^
                   --data-raw '${jsonPayload1}'"""
                   // Execute the cURL command using the 'bat' step
                   bat curlCommand
               }
           }
       }
   }
}

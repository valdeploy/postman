pipeline {
    agent any
    stages {
        stage('Testing...'){
          steps {
              script {                       
                def tests = [:]
                for (f in findFiles(glob: '**postman/bloomApi/*.json')) {
                  def n = "${f}".replaceAll("\\\\", " ")
                  stage(n[8..13]) {
                    catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                      bat "npx newman run ${f}"    
                      }
                    }            
                 }      
                }
          }
      }
        stage('Notify Teams') {
          steps {
            script {
            def url = 'https://asicentralcom.webhook.office.com/webhookb2/8da0988c-32c2-4c6f-bf27-97420da86999@6504f7e4-d6a1-4688-bf1e-e77e27af6d9a/IncomingWebhook/58119d167e9b4df2a082f3d9ebe6bc5a/ac33b688-2060-4767-9ad9-164963554b18'
            def job = "$BUILD_URL/allure/".replace('%','%%')
            def data = """{"@type":"MessageCard","@context":"http://schema.org/extensions","themeColor":"0072C6","title":"Jenkins Build Alert", \
                "text":"${currentBuild.resultIsBetterOrEqualTo('SUCCESS') ? 'Successful': 'Failed' } for ${env.JOB_NAME}", \
                "potentialAction":[{"@type":"OpenUri","name":"${BUILD_NUMBER}","targets":[{"os":"default","uri":"${job}"}]}]}""" 
            def d = groovy.json.JsonOutput.toJson(data)
            bat "curl -X POST \"${url}\" -H 'Content-Type:application/json' -d ${d}"
            }
          }
      }
    }
}

pipeline {
   tools {
        docker 'docker'
    }
agent any
  parameters {
    choice(name: 'project', choices: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'], description: '')
    choice(name: 'env', choices: ['uat','dev'])
    string(name: 'virtual users', defaultValue: '200', description: 'virtual users')
    string(name: 'duration', defaultValue: '1m', description: 'duration')
    string(name: 'rate', defaultValue: '120', description: 'example: rate: 120, timeUnit: 1s means "try to start 120 iterations per second"')
    string(name: 'timeUnit', defaultValue: '10s', description: 'example: rate: 120, timeUnit: 1s means "try to start 120 iterations per second"')

  }
  stages {
    stage('Clean Workspace'){
      steps {
        cleanWs()
      }
    }
    stage ('Checkout') {
      steps {
        checkout scm
      }
    }
    stage ('Install k6') {
      steps {
        bat "docker-compose up -d influxdb grafana"
      }
    }
  }
}

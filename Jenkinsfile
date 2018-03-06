node('master') {
    stage('Checking out the repo..') {
        git "https://github.com/yuanting0505/manila-ui.git"
    }
    
    stage('Initialize') {
        echo 'Initializing...'
        def node = tool name: 'node', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
        env.PATH = "${node}/bin:${env.PATH}"
    }
    
    stage('Install Dependencies') {
        echo 'Building dependencies...'
        sh 'npm install'
    }
    
    stage('Build the Package') {
        echo 'Building package...'
        sh 'npm run build'
    }
    
    stage('Test') {
        echo 'Test'
        sh 'npm run test'
    }
    
}
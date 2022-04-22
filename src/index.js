
/**
 * Dependencies
 * @ignore
 */
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'

import { datadogRum } from '@datadog/browser-rum';
    
datadogRum.init({
    applicationId: 'bea90ab7-6303-4f59-aba4-3dfbf51a0003',
    clientToken: 'pubfa61bb48e55ce1def2a72a98614fb826',
    site: 'datadoghq.com',
    service:'webauthn',
    // Specify a version number to identify the deployed version of your application in Datadog 
    // version: '1.0.0',
    sampleRate: 100,
    trackInteractions: true,
    defaultPrivacyLevel: 'mask-user-input'
});
    
datadogRum.startSessionReplayRecording();

/**
 * Mount React App
 * @ignore
 */
ReactDOM.render(<App />, document.getElementById('root'))

import React from 'react'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')).render(
    <div className="app">Test 16</div>
)

// name: Cloudflare Pages Deployment Cleaner
//
// on:
//     push:
//         branches:
//             - main
//
// jobs:
//     delete-old-deployments:
// runs-on: ubuntu-latest
// steps:
//     - name: Checkout code
// uses: actions/checkout@v2
//
// - name: Call Cloudflare Pages API
// env:
//     ENDPOINT: https://api.cloudflare.com/client/v4/accounts/${{ secrets.ACCOUNT_ID }}/pages/projects/${{ secrets.PROJECT_NAME }}/deployments
//         run: |
// RESPONSE=$(curl -s -X GET $ENDPOINT -H 'Authorization: Bearer ${{ secrets.API_TOKEN }}')
// CURRENT_DATE=$(date +%s)
// DATE_AFTER_SUBTRACTING_DAYS=$(($CURRENT_DATE - (${{ secrets.EXPIRATION_DAYS }} * 60)))
// DEPLOYMENTS=$(echo $RESPONSE | jq -c --arg DATE $DATE_AFTER_SUBTRACTING_DAYS '[.result[] | select($(date -u -d .created_on +%s) lt $DATE)]')
// echo $DEPLOYMENTS | jq -c '.[]' | while read i; do
//     DEPLOYMENT_ID=$(echo $i | jq -r '.id')
// echo "Deleting deployment ->  $DEPLOYMENT_ID"
// curl -s -X DELETE $ENDPOINT/$DEPLOYMENT_ID -H 'Authorization: Bearer ${{ secrets.API_TOKEN }}'
// done

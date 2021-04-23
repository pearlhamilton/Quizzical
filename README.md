# react-template
A template for building a React app. 

    # Includes: 
     
    devDependencies:
        "@babel/core": "^7.13.15",
        "@babel/plugin-proposal-class-properties": "^7.13.0",
        "@babel/plugin-transform-runtime": "^7.13.15",
        "@babel/preset-env": "^7.13.15",
        "@babel/preset-react": "^7.13.13",
        "babel-loader": "^8.2.2",
        "css-loader": "^5.2.1",
        "html-webpack-plugin": "^5.3.1",
        "style-loader": "^2.0.0",
        "webpack": "^5.31.2",
        "webpack-cli": "^4.6.0",
        "webpack-dev-server": "^3.11.2"

    dependencies: 
        "react": "^17.0.2",
        "react-dom": "^17.0.2"


## For development:  
`npm install`  
`npm run dev`  

## For production:  
`npm run build`   
`touch netlify.toml`  

    # in netlify.toml
      
    [build]  
        command = "npm run build" # how to trigger a build  
        publish = "/build" # what folder to publish    
    [[redirects]]   
        from = "/*" # redirect any path  
        to = "/index.html" # to this html page   
        status = 200 # with this status   
       
 Deploy as usual on Netlify!

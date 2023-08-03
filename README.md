* https://www.codevertiser.com/reactjs-responsive-navbar/
* https://ogzhanolguncu.com/blog/react-redux-toolkit-with-typescript
* yarn add @chakra-ui/icons @chakra-ui/react @emotion/react @emotion/styled @reduxjs/toolkit framer-motion react-redux react-router-dom uuid @types/react-redux @types/react-router-dom @types/uuid
* https://blog.logrocket.com/redux-immutable-update-patterns/#adding-items-arrays

Actual

** npm i @reduxjs/toolkit framer-motion react-redux react-router-dom uuid @types/react-redux @types/react-router-dom @types/uuid


# Deploy on namecheap
1. If deploying in domain subdirectory using Vite React, say danbennett.dev/grizzly, you need to update vite.config.ts with   base: '/grizzly', and will also need to update all routes and route navigations from base '/' to '/grizzly' and then all non-base routes from say '/portfolio' to '/grizzly/portfolio'
2. There could be a ton of build errors, to bypass go to tsconfig.json and update most/all linting options to false.
3. npm/yarn run build
4. go to dist folder, cmd, npx http-server to test
5. zip files in dist folder so that index.html is in root of zip file
6. go to namecheap file manager, public html folder, which you created, no extra work needed, just the new folder in the public folder
7. upload zip file, extract. Site should be up in less than 1 min
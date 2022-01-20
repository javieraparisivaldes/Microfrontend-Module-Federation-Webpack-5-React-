# POC react + Module Federation, Webpack

# Start app separately

1.cd microfrontend1 && npm run serve (bundle:3001)
2.cd microfrontend2 && npm run serve (bundle:3003)
3.cd libs && npm run serve (bundle with shared libs like react, react-dom ...:3002)
4.cd host && npm run start (open web container:3000), try http://localhost:3000

# Open MicroFronts Alone

1.for microfrontend1 try http://localhost:3001
2.for microfrontend2 try http://localhost:3003

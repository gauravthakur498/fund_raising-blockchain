const routes=require('next-routes')();

routes
   .add("/campaigns/new",'/campaigns/new')
   .add('/campaigns/:address','/campaigns/show')
   .add('/campaigns/:address/request','/campaigns/requests/index')
   .add('/campaigns/:address/requests/new','/campaigns/request/new');

   module.exports=routes;
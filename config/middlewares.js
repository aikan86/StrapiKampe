   // Nell'array di middlewares, cerca la sezione CORS e modifica:
   {
     name: 'strapi::cors',
     config: {
       origin: ['http://localhost:3000', 'https://kampe-website.vercel.app'],
       headers: '*',
     },
   },
   
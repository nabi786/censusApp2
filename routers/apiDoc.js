



/*================ADMIN====================*/
/*=                                       =*/
/*=       USER PROFILE SWAGGGER           =*/
/*=                                       =*/
/*=========================================*/




/*==============User Profile Schema=============*/

/**
 * @swagger
 *  components:
 *      schemas:
 *          AdminModel:
 *                  type : object
 *                  properties:
 *                       userName:
 *                              type : string
 *                       email:
 *                              type: string
 *                       password:
 *                              type: string        
 */



/**
 * @swagger
 *  components:
 *      schemas:
 *          Person_Data:
 *                  type : object
 *                  properties:
 *                       Name:
 *                              type : string
 *                       NIC:
 *                              type: string
 *                       Address:
 *                              type: string
 *                       IssueDate:
 *                              type: string
 *                       ExpireDate:
 *                              type : string
 *                       Guardian_NIC: 
 *                              type : string
 *                       Guardian_Relation:  
 *                              type : string                                      
 */







/*==============ADMIN LOGIN=============*/

/**
 * @swagger
 *  /api/adminLogin:
 *  post:
 *      summary:
 *              admil login
 *      description: Run this api to Login as an Admin. add Email and password to login
 *      requestBody:
 *             required : true
 *             content:
 *                      application/json:
 *                          schema: 
 *                                 $ref : '#components/schemas/AdminModel'
 *      responses:
 *           200:
 *              description: admin login successfully 
 * */












 

  /*==============CREATE AGENT=============*/
  
/**
 *@swagger
 *  /api/agentRegister:
 *      post:
 *           summary: Create Agent
 *           description: Run This Api to create Agent
 *           parameters:
 *              - in: header
 *                name: token
 *                schema: 
 *                      type : string
 *           requestBody:
 *             required : true
 *             content:
 *                      application/json:
 *                          schema: 
 *                                 $ref : '#components/schemas/AdminModel'
 *           responses:
 *                  200:
 *                     description: OK
 *                     content:
 *                          application/json:
 *                                  schema:
 *                                      $ref: '#components/schemas/AdminModel'     
 *          
 */




/**
 * @swagger
 *  /api/loginAgent:
 *  post:
 *      summary:
 *              admil login
 *      description: Run this api to Login as an Admin. add Email and password to login Add Email and Password to Login
 *      requestBody:
 *             required : true
 *             content:
 *                      application/json:
 *                          schema: 
 *                                 $ref : '#components/schemas/AdminModel'
 *      responses:
 *           200:
 *              description: Agent login successfully 
 * */













/*================ADMIN======================*/
/*=                                        =*/
/*=           Personal Data                =*/
/*=                                       =*/
/*=========================================*/




/*==============Add NIC Data=============*/
  

 /**
 *@swagger
 *  /api/addNyc:
 *      post:
 *           summary: Add NIC Data
 *           description: Run this API to add NIC Data Add token of Agent to continue
 *           parameters:
 *              - in: header
 *                name: token
 *                schema: 
 *                      type : string
 *           requestBody:
 *             required : true
 *             content:
 *                      application/json:
 *                          schema: 
 *                                 $ref : '#components/schemas/Person_Data'
 *           responses:
 *                  200:
 *                     description: OK
 *                     content:
 *                          application/json:
 *                                  schema:
 *                                      $ref: '#components/schemas/Person_Data'     
 *          
 */






// ==============Get NIC Data====================

/**
 *@swagger
 *  /api/get_NIC_Data:
 *      post:
 *           summary: GET NIC Data
 *           description: Run this API to Get NIC Data Pass the token of Agent to get NIC Data, add NIC, ExpireDate, IssueDate
 *           parameters:
 *              - in: header
 *                name: token
 *                schema: 
 *                      type : string
 *           requestBody:
 *             required : true
 *             content:
 *                      application/json:
 *                          schema: 
 *                                 $ref : '#components/schemas/Person_Data'
 *           responses:
 *                  200:
 *                     description: OK
 *                     content:
 *                          application/json:
 *                                  schema:
 *                                      $ref: '#components/schemas/Person_Data'     
 *          
 */


 


// ==============Add to Census====================



/**
 *@swagger
 *  /api/add_to_Census_Myself:
 *      put:
 *           summary: Add One NIC to Census
 *           description: Run this api to add NIC to Census
 *           parameters:
 *              - in: header
 *                name: token
 *                schema: 
 *                      type : string
 *           requestBody:
 *             required : true
 *             content:
 *                      application/json:
 *                          schema: 
 *                                 $ref : '#components/schemas/Person_Data'
 *           responses:
 *                  200:
 *                     description: OK
 *                     content:
 *                          application/json:
 *                                  schema:
 *                                      $ref: '#components/schemas/Person_Data'     
 *          
 */








 
/**
 *@swagger
 *  /api/add_to_Census_My_family:
 *      put:
 *           summary: Add to Census My Family
 *           description: Run this API and add Family Owner NIC and Family Members IDs For Expample NIC 444401434343 idsAry ["444401434343","444401434343"]
 *           parameters:
 *              - in: header
 *                name: token
 *                schema: 
 *                      type : string
 *           requestBody:
 *             required : true
 *             content:
 *                      application/json:
 *                          schema: 
 *                                 $ref : '#components/schemas/Person_Data'
 *           responses:
 *                  200:
 *                     description: OK
 *                     content:
 *                          application/json:
 *                                  schema:
 *                                      $ref: '#components/schemas/Person_Data'     
 *          
 */






 
/**
 *@swagger
 *  /api/getAllCensus:
 *      get:
 *           summary: Get All NIC that are Cenus
 *           description: Run this API to get All Census NIC
 *           parameters:
 *              - in: header
 *                name: token
 *                schema: 
 *                      type : string
 *           responses:
 *                  200:
 *                     description: OK
 *                     content:
 *                          application/json:
 *                                  schema:
 *                                      $ref: '#components/schemas/Person_Data'     
 *          
 */



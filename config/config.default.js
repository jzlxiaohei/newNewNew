/**
 * Created by zilong on 8/10/15.
 */
console.log(process.env.NODE_ENV)
module.exports={
    //Env:'prod',
    //Env:process.env.NODE_ENV=='production'?'production':'development',
    isProduction:process.env.NODE_ENV=='production',
    port:3333
}
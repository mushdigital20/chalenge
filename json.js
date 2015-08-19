/* 
* @Author: pedromello
* @Date:   2015-08-20 09:37:07
* @Last Modified by:   pedromello
* @Last Modified time: 2015-08-20 09:37:41
*/

module.exports = function(){

    var parse = JSON.parse;

    JSON = {

        stringify: JSON.stringify,

        validate: function(str){
        
            try{
                parse(str);
                return true;
            }catch(err){
                return err;
            }

        },

        parse: function(str){

            try{
                return parse(str);
            }catch(err){
                return undefined;
            }

        }
    }
    
};
const log4js = require('log4js')

//logger
log4js.configure({
    appenders: { 
    	provalidator_sifchain_bot: { 
			type: 'dateFile', 
			filename: './provalidator_sifchain_bot.log',
		    compress: true
    	} 
    },
    categories: { 
    	default: { 
    		appenders: ['provalidator_sifchain_bot'], 
    		level: 'debug' 
    	} 
    }
})

const logger = log4js.getLogger('provalidator_sifchain_bot')

// console.log(logger)
module.exports = {
   log4js : logger
}
class ResponseHandler {
    async response(req, res){
            try {
                res.status(200).json({
                    massage: 'Selamat datang di Bingle Shop'
                })
                console.log('HALLO')
                
                return
            }
            catch{
                res.status(500).json({
                    massage: 'Server Sibuk'
                })
            }
        
    }
}

const response = function(req, res){
    try {
        res.status(200).json({
            massage: 'Selamat datang di Bingle Shop'
        })
        console.log('HALLO')
        
        return
    }
    catch{
        res.status(500).json({
            massage: 'Server Sibuk'
        })
    }

}

module.exports = {
    ResponseHandler,
    response,
}
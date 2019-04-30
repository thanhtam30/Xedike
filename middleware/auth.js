const authorizing = (userType) => {
    return (req, res, next) => {
        if(req.user.userType === userType){
            next()
        } else {
            res.json({msg: 'You dont have permission'})
        }
    }
}

module.exports = {
    authorizing
}

exports.getRoutes = (req, res) => {

    const params = req.query;
    res.json({
        message: 'Get by endPoint',
        params
    })

};


exports.getIdRoutes = (req, res) => {
    res.json({
        message: 'Get by Id'
    })
};


exports.postIdRountes = (req, res) => {

    const {name} = req.body;
    res.json({
        message: 'Post by endpoint',
        name
    })
}

exports.putIdRoutes = (req, res) => {

    const id = req.params.id;
    res.json({
        message: 'Put by Endpoint',
        id
    })
}
module.exports = function(mongoose){
    return [{
        id: {typep: Number, required: true},
        name: {type: String, required: true},
        address: {type: String, required: true},
        phone: {type: String, required: true},
        revenue: {type: Number, required: true},
        employees: {type: Object, required: false}
    }, {
        timestamps: true
    }]
};
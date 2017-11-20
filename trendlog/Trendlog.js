module.exports = function(RED) {
    function trendLog(config) {
        RED.nodes.createNode(this,config);
        var context = this.context();
		this.name = config.name;
		this.value = config.value;
		this.days = config.days;
		this.sid = config.sid;
		
        var node = this;
        this.on('input', function(msg) {

        var outMsg = {payload: [node.value,node.days,node.sid]};
    
        node.send(outMsg);
        
        });
    }
    RED.nodes.registerType("Trendlog",trendLog);
};
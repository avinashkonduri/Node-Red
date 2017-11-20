module.exports = function(RED) {
    function alarm(config) {
        RED.nodes.createNode(this,config);
        var context = this.context();
		this.days = config.days;
		this.sid = config.sid;
		
        var node = this;
        this.on('input', function(msg) {

        var outMsg = {payload: [node.days,node.sid]};
    
        node.send(outMsg);
        
        });
    }
    RED.nodes.registerType("Alarm",alarm);
};
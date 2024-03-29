function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "ProgrammingCalculator"};
	this.sidHashMap["ProgrammingCalculator"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "ProgrammingCalculator:30"};
	this.sidHashMap["ProgrammingCalculator:30"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<Root>/In1"] = {sid: "ProgrammingCalculator:1"};
	this.sidHashMap["ProgrammingCalculator:1"] = {rtwname: "<Root>/In1"};
	this.rtwnameHashMap["<Root>/In2"] = {sid: "ProgrammingCalculator:2"};
	this.sidHashMap["ProgrammingCalculator:2"] = {rtwname: "<Root>/In2"};
	this.rtwnameHashMap["<Root>/Subsystem"] = {sid: "ProgrammingCalculator:30"};
	this.sidHashMap["ProgrammingCalculator:30"] = {rtwname: "<Root>/Subsystem"};
	this.rtwnameHashMap["<Root>/Out1"] = {sid: "ProgrammingCalculator:39"};
	this.sidHashMap["ProgrammingCalculator:39"] = {rtwname: "<Root>/Out1"};
	this.rtwnameHashMap["<Root>/Out2"] = {sid: "ProgrammingCalculator:41"};
	this.sidHashMap["ProgrammingCalculator:41"] = {rtwname: "<Root>/Out2"};
	this.rtwnameHashMap["<Root>/Out3"] = {sid: "ProgrammingCalculator:42"};
	this.sidHashMap["ProgrammingCalculator:42"] = {rtwname: "<Root>/Out3"};
	this.rtwnameHashMap["<Root>/Out4"] = {sid: "ProgrammingCalculator:43"};
	this.sidHashMap["ProgrammingCalculator:43"] = {rtwname: "<Root>/Out4"};
	this.rtwnameHashMap["<Root>/Out5"] = {sid: "ProgrammingCalculator:44"};
	this.sidHashMap["ProgrammingCalculator:44"] = {rtwname: "<Root>/Out5"};
	this.rtwnameHashMap["<Root>/Out6"] = {sid: "ProgrammingCalculator:45"};
	this.sidHashMap["ProgrammingCalculator:45"] = {rtwname: "<Root>/Out6"};
	this.rtwnameHashMap["<S1>/In1"] = {sid: "ProgrammingCalculator:31"};
	this.sidHashMap["ProgrammingCalculator:31"] = {rtwname: "<S1>/In1"};
	this.rtwnameHashMap["<S1>/In2"] = {sid: "ProgrammingCalculator:32"};
	this.sidHashMap["ProgrammingCalculator:32"] = {rtwname: "<S1>/In2"};
	this.rtwnameHashMap["<S1>/Bitwise AND"] = {sid: "ProgrammingCalculator:4"};
	this.sidHashMap["ProgrammingCalculator:4"] = {rtwname: "<S1>/Bitwise AND"};
	this.rtwnameHashMap["<S1>/Bitwise NOT1"] = {sid: "ProgrammingCalculator:11"};
	this.sidHashMap["ProgrammingCalculator:11"] = {rtwname: "<S1>/Bitwise NOT1"};
	this.rtwnameHashMap["<S1>/Bitwise NOT2"] = {sid: "ProgrammingCalculator:12"};
	this.sidHashMap["ProgrammingCalculator:12"] = {rtwname: "<S1>/Bitwise NOT2"};
	this.rtwnameHashMap["<S1>/Bitwise OR"] = {sid: "ProgrammingCalculator:5"};
	this.sidHashMap["ProgrammingCalculator:5"] = {rtwname: "<S1>/Bitwise OR"};
	this.rtwnameHashMap["<S1>/Bitwise XNOR"] = {sid: "ProgrammingCalculator:9"};
	this.sidHashMap["ProgrammingCalculator:9"] = {rtwname: "<S1>/Bitwise XNOR"};
	this.rtwnameHashMap["<S1>/Bitwise XOR"] = {sid: "ProgrammingCalculator:6"};
	this.sidHashMap["ProgrammingCalculator:6"] = {rtwname: "<S1>/Bitwise XOR"};
	this.rtwnameHashMap["<S1>/Bitwise XOR2"] = {sid: "ProgrammingCalculator:7"};
	this.sidHashMap["ProgrammingCalculator:7"] = {rtwname: "<S1>/Bitwise XOR2"};
	this.rtwnameHashMap["<S1>/Out1"] = {sid: "ProgrammingCalculator:33"};
	this.sidHashMap["ProgrammingCalculator:33"] = {rtwname: "<S1>/Out1"};
	this.rtwnameHashMap["<S1>/Out2"] = {sid: "ProgrammingCalculator:34"};
	this.sidHashMap["ProgrammingCalculator:34"] = {rtwname: "<S1>/Out2"};
	this.rtwnameHashMap["<S1>/Out3"] = {sid: "ProgrammingCalculator:35"};
	this.sidHashMap["ProgrammingCalculator:35"] = {rtwname: "<S1>/Out3"};
	this.rtwnameHashMap["<S1>/Out4"] = {sid: "ProgrammingCalculator:36"};
	this.sidHashMap["ProgrammingCalculator:36"] = {rtwname: "<S1>/Out4"};
	this.rtwnameHashMap["<S1>/Out5"] = {sid: "ProgrammingCalculator:37"};
	this.sidHashMap["ProgrammingCalculator:37"] = {rtwname: "<S1>/Out5"};
	this.rtwnameHashMap["<S1>/Out6"] = {sid: "ProgrammingCalculator:38"};
	this.sidHashMap["ProgrammingCalculator:38"] = {rtwname: "<S1>/Out6"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();

/**
 * 自訂event步驟：
 * (1)建立觸發事件後欲執行function
 * (2)使用on監聽指定事件
 * (3)使用emit觸發事件
 */

const events = require('events');
const eventEmitter = new events.EventEmitter();

const connectHandler = function connect(){
  console.log('connected');
  eventEmitter.emit('data_received');
};
const success = function(){
  console.log('test');
}

eventEmitter.on('connection', connectHandler);
//eventEmitter.on('data_received', function(){
//  console.log('data received success');
//});
eventEmitter.on('data_received', success);

eventEmitter.emit('connection');

console.log('process finish');
import './xlsxjs.js'
var wb; //读取完成的数据
			var rABS = false; //是否将文件读取为二进制字符串
			function importf(obj) { //导入
				if (!obj.files) {
					return;
				}
				var f = obj.files[0];
				var reader = new FileReader();
				reader.onload = function(e) {
					var data = e.target.result;
					if (rABS) {
						wb = XLSX.read(btoa(fixdata(data)), { //手动转化
							type: 'base64'
						});
					} else {
						wb = XLSX.read(data, {
							type: 'binary'
						});
					}
					//wb.SheetNames[0]是获取Sheets中第一个Sheet的名字
					//wb.Sheets[Sheet名]获取第一个Sheet的数据
					//document.getElementById("demo").innerHTML = JSON.stringify(XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]));
					//document.getElementById("demo").innerHTML=XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
					var dbs=lgxajax("js/dbs.json");
					var reslutdbs=XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
					console.log(reslutdbs)
					var show=reslutdbs[1][Object.keys(reslutdbs[1])[5]];
					//if (parseFloat(show)>dbs[2][Object.keys(dbs[2])[Object.keys(reslutdbs[1])[5]]])
					//document.getElementById("demo").innerHTML=dbs[2][Object.keys(dbs[2])[Object.keys(reslutdbs[1])[5]]]);
	// 				var show;
	// 				for(let i=4;i<reslutdbs.length;i++){
	// 					if(Object.keys(reslutdbs[1])[5])
	// 				}
					var gm=Object.keys(reslutdbs[1])[5];//高锰酸盐指数 
					console.log(JSON.parse(dbs)[2][gm],typeof(gm));//3类水返回值 
				};
				if (rABS) {
					reader.readAsArrayBuffer(f);
				} else {
					reader.readAsBinaryString(f);
				}
			}
	
			function fixdata(data) { //文件流转BinaryString
				var o = "",
					l = 0,
					w = 10240;
				for (; l < data.byteLength / w; ++l) o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w, l * w + w)));
				o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w)));
				return o;
			}
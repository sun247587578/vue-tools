const fs = require("fs");
const { get } = require("http");
const rpath = require("path");

// 根目录

function getMdList (path){
  var list = new Array();
  var fileList = fs.readdirSync(path);
  for (let i = 0; i < fileList.length; i++) {
    var file = fileList[i];
    if(file.endsWith(".md") && file.indexOf("README") == -1){
      list.push(file)
    }else{
      if(file.indexOf(".") == -1){
        let b = fs.statSync(rpath.join(path,file));
        if(b){

        }
      }
    }
  }
  return list;
}
var genSidebar = {
  
  /**
   * 自动生成左侧边栏
   * @param {*} path 
   * @param {*} name 
   * @param {*} version  用来做版本 , 暂时先不写了
   */
  getDefaultBar:function(path,version){
    var result = new Array();
    let p = rpath.resolve("./docs/",path);
    var list = getMdList(p);
    for (let i = 0; i < list.length; i++) {
      let md = list[i];
      let pth = rpath.join("/",path,encodeURI(md));
      pth = pth.replace(/\\/g,'/');
      result.push(pth)
    }
    return result
  }
}
module.exports = genSidebar
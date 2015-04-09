####article命名:

	- 采用tag+date-name.md的命名方式
	- tag格式：如：js-css-html
	- name格式：除+之外的任意字符


####根据 tag命名生成menu-data
    
    	{menu-data:["js","css","html"]}



####扫描 article目录生成 menu-data 和 文件索引列表:

	文件索引列表

	时间索引：

	{
	    date:{  
	       "路径名"：{
                tag:"",
                date:"date"
                desc:"描述"
          	},
          	"路径名"：{
                tag:"",
                date:"date"
                desc:"描述"
            },
	    }
	}

	tag索引：
    {
	    tag:{
	       "路径名"：{
                tag:"",
                date:"date"
                desc:"描述"
          	},
          	"路径名"：{
                tag:"",
                date:"date"
                desc:"描述"
            },
	    }
	}



#### 备注

- 文件名中含有  _x3 表示 为网络收集的材料
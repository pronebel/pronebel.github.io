#Swift

阅读这篇博客http://gashero.iteye.com/blog/2075324 的笔记

## 变量

变量定义

	var myVar = 42
	myVar = 50
	let myConst = 42

	let intVar = 70
	let doubleVar = 70.0
	let explicitDouble: Double = 70


变量转换

	let label = "My age is"
	let age = 94
	let myAge = label + String(age)

	let otherWord = "My age is \(age)"


数组/字典

	var langSorts = ["c#","python","java"]
	langSorts[1] = "python3"

	var fruitNums = [
		"orange":3,
		"apple":4
	]

	fruitNums["banana"]=6

	let emptyArray = String[]()
	let EmptyDict = Dictionary<String,Float>()

	shoppingList = []
	shoppingList = [:]


## 控制流

关键字： if swith for-in for while do-while


	let scores = [76,43,103,87,12]
	var teamScore = 0
	
	for scoreItem in scores {
		if scoreItem >50{
			teamScores +=3
		}else {
			teamScores +=1
		}
	}

	teamScore


if 判断值
	
	在 if 语句中，条件必须是布尔表达式，这意味着 if score { ... } 是错误的，不能隐含的与0比较。
	你可以一起使用 if 和 let 来防止值的丢失。这些值是可选的。可选值可以包含一个值或包含一个 nil 来指定值还不存在。写一个问号 "?" 在类型后表示值是可选的。
	var optionalString: String? = "Hello"
	optionalString == nil
	
	var optionalName: String? = "John Appleseed"
	var greeting = "Hello!"
	if let name = optionalName {
	    greeting = "Hello, \(name)"
	}

switch 
	
	在执行匹配的情况后，程序会从 switch 跳出，而不是继续执行下一个情况。所以不再需要 break 跳出 switch 。

	let vegetable = "red pepper"
	
	switch vegetable {
		
		case "celery":
			let vegetableComment = "balaba1"
		case "cucumber","watercress":
			let vegetableComment = "balaba2"
		case let x where x.hasSuffex("pepper"):
			let vegetableComment = "balaba3"
		default:
			let vegetableComment = "balaba default"


	}


for-in
	
	let numbers = [
		"Prime":[2,3,5,7,11,13],
		"Fiblnacci":[1,1,2,3,5,8],
		"Square":[1,4,9,16,25]
	]

	var largest = 0
	for(kind,nums) in numbers {
		for num in nums{
			if num > largest{
				largest = num
			}
		}
	}


while 

	var n = 2
	while n < 100{
		n = n*2
	}
	n

	var m = 2
	do {
		m = m * 2
	} whiel m <100
	m

索引范围 .. 

	使用 .. 构造范围忽略最高值，而用 ... 构造的范围则包含两个值。
	var firstLoop = 0
	
	for i in 0..3 {
		firstLoop += i	
	}



## 函数与闭包

声明：
	
	使用 func 声明，括号中的参数列表，使用 -> 分隔返回值类型。

	func greet(name:String,day:String) -> String {

		return "Hello \(name), today is \(day)"
	}

	greet ("小明","星期二")


返回多个值

	元组
	
	function getPrices() -> (Double,Double,Double) {
		
		return (1.2,2.3,3.5)
	}
	getPrices()


可变参数

	func sumOf(numbers:Int...) -> Int{

		var sum = 0
		for num in numbers{
			sum += num
		}
		return sum
	}

	sumOf()
	sumOf(44,33,22)
	
函数嵌套

	内嵌函数可以访问其定义所在函数的变量

	func returnNum() -> Int {
		var y = 10
		func add(){
			y +=5
		}	
		add()
		return y
	}
	returnNum()


返回函数（类似JS）

	func makeFunc() -> (Int->Int){
		
		func addOne(number:Int) -> Int{
			return 1+number
		}
		
		return addOne
	}

	var increment = makerFunc()
	increment(7)


函数作为参数

	func hasAnyMatches(list:Int[], condition: Int->Bool) ->Bool{
		
		for item in list {
			if condition(item){
				return true
			}
		}
		return false
	}

	func lessThanTen(number:Int)->Bool{
		
		return number <10
	}
	var numbers = [11,13,1,15]
	hasAnyMatches(numbers,lessThanTen)


	函数实际是闭包的特殊情况。你可以写一个闭包而无需名字，只需要放在大括号中即可。使用 in 到特定参数和主体的返回值。

	numbers.map({
		(number:Int) -> Int in
			let result = 3*number
			return result
	})


	你可以通过数字而不是名字来引用一个参数，这对于很短的闭包很有用。一个闭包传递其最后一个参数到函数作为返回值。
	sort([1, 5, 3, 12, 2]) { $0 > $1 }



## 对象与类
	
创建
	class Shape {
		var num = 0
		let color = "yellow"
		func desc() ->String {
			return "A sharp with \(num) sides"
		}
		
		func showName(name:String)->String{
			return "Sharp name is \(name),color is \(color)"
		}
	}	

实例化及访问
	
	var shape = Shape()
	shape.num = 7
	var shapeDesc = shapr.desc()

构造器、析构函数,Self

	init构造器的生命跟函数一样，除了会创建类的实例。每个属性都需要赋值，无论在声明里还是在构造器里。

	deinit 来创建一个析构器，来执行对象销毁时的清理工作

	子类的方法可以通过标记 override 重载超类中的实现，而没有 override 的会被编译器看作是错误

init

	class NameShape{
		var number:Int = 0
		var name:String

		init(name:String){
			self.name = name
		}

		func desc()->String{
			return "shape has \(number) sides"
		}

	}

deinit 来创建一个析构器，来执行对象销毁时的清理工作
	
	class Square:NamedShape{ //关注继承的方式
		var sideLength:Double

		init(sideLength:Double,name:String){
			self.sideLength = sideLength
			super.init(name:name)
			number = 4
		}

		func area()->Double{
			return sideLength * sideLength
		}

		var perimeter :Double{
			get{
				return sideLength * 4
			}
			set {
				sideLength = newValue / 4
			}

		}

		override func desc()->String{
			return "sideLength is \(sideLength)"
		}
	}

	let test = Square(sideLength:5.2,name:"test square")//这里的复制感觉有些冗余，好处是？
	test.area()
	test.desc()

	test.perimeter
	test.perimeter = 12
	test.sideLength
	

 willSet、didSet: 如果你不需要计算属性，但是仍然要提供在设置值之后执行工作，使用 willSet 和 didSet 。例如，下面的类要保证其三角的边长等于矩形的变长。
	class TriangleAndSquare {
	    var triangle: EquilaterTriangle {
	    willSet {
	        square.sideLength = newValue.sideLength
	    }
	    }
	
	    var square: Square {
	    willSet {
	        triangle.sideLength = newValue.sideLength
	    }
	    }
	
	    init(size: Double, name: String) {
	        square = Square(sideLength: size, name: name)
	        triangle = EquilaterTriangle(sideLength: size, name: name)
	    }
	}
	var triangleAndSquare = TriangleAndSquare(size: 10, name: "another test shape")
	triangleAndSquare.square.sideLength
	triangleAndSquare.triangle.sideLength
	triangleAndSquare.square = Square(sideLength: 50, name: "larger square")
	triangleAndSquare.triangle.sideLength
	
	
类的方法的参数名

	类的方法与函数有个重要的区别。函数的参数名仅用与函数，但方法的参数名也可以用于调用方法(除了第一个参数)。缺省时，一个方法有一个同名的参数，调用时就是参数本身。你可以指定第二个名字，在方法内部使用

	class Counter {
	    var count: Int = 0
	    func incrementBy(amount: Int, numberOfTimes times: Int) {
	        count += amount * times
	    }
	}
	var counter = Counter()
	counter.incrementBy(2, numberOfTimes: 7)


“？”操作符控制可选值 （类似其他语言里的 existObject && existObj.method()）

	let tmpSquare: Square? = Square(sideLength: 2.5, name: "optional square")
	// Square 不存在，则后面的Square()不执行， tmpSquare = nil
	let sideLength = tmpSquare?.sideLength
	//如果tmpSquare存在，则去读  sideLength



## 枚举与结构
	
enum： 枚举可以有方法
	
	enum Rank :Int{
		case Ace =1
		case Two,Three,Fource
		case Jack,Queen,King
		
		func desc()->String{
			swith self {
				case .Ace:
					return "ace"
				case .Jack:
					return "jack"
				default:
					return String(self.toRaw())
	
			}
	
		}
	}
	

	let ace = Rank.Ace
	let aceval = ace.toRaw()

	在如上例子中，原始值的类型是 Int 所以可以只指定第一个原始值。其后的原始值都是按照顺序赋值的。也可以使用字符串或浮点数作为枚举的原始值。
	使用 toRaw 和 fromRaw 函数可以转换原始值和枚举值。
	if let convertedRank = Rank.fromRaw(3) {
	    let threeDescription = convertedRank.simpleDescription()
	}

	枚举的成员值就是实际值，而不是其他方式写的原始值。实际上，有些情况是原始值，就是你不提供的时候。
	enum Suit {
	    case Spades, Hearts, Diamonds, Clubs
	    func simpleDescription() -> String {
	        switch self {
	        case .Spades:
	            return "spades"
	        case .Hearts:
	            return "hearts"
	        case .Diamonds:
	            return "dismonds"
	        case .Clubs:
	            return "clubs"
	        }
	    }
	}
	let hearts = Suit.Hearts    //by gashero
	let heartsDescription = hearts.simpleDescription()
	


struct:

	使用 struct 创建结构体。结构体支持多个与类相同的行为，包括方法和构造器。一大重要的区别是代码之间的传递总是用拷贝(值传递)，而类则是传递引用。
	struct Card {
	    var rank: Rank
	    var suit: Suit
	    func simpleDescription() -> String {
	        return "The \(rank.simpleDescription()) of \
	        (suit.simpleDescription())"
	    }
	}
	let threeOfSpades = Card(rank: .Three, suit: .Spades)
	let threeOfSpadesDescription = threeOfSpades.simpleDescription()




	一个枚举的实例成员可以拥有实例的值。相同枚举成员实例可以有不同的值。你在创建实例时赋值。指定值和原始值的区别：枚举的原始值与其实例相同，你在定义枚举时提供原始值。
	例如，假设情况需要从服务器获取太阳升起和降落时间。服务器可以响应相同的信息或一些错误信息。
	enum ServerResponse {
	    case Result(String, String)
	    case Error(String)
	}
	
	let success = ServerResponse.Result("6:00 am", "8:09 pm")
	let failure = ServerResponse.Error("Out of cheese.")
	
	switch success {
	case let .Result(sunrise, sunset):
	    let serverResponse = "Sunrise is at \(sunrise) and sunset is at \(sunset)."
	case let .Error(error):
	    let serverResponse = "Failure... \(error)"
	}
	Note
	练习
	给 ServerResponse 添加第三种情况来选择。
	注意日出和日落时间实际上来自于对 ServerResponse 的部分匹配来选择的。
	 
	 
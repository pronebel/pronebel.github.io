

##根据传感器获取的信息，经过一定的逻辑

- Roll 左右倾斜
- Pitch 前后倾斜
- Yaw 左右摇摆




可以参考飞行器飞控的姿态获取

陀螺仪积分得YPR，与加速度计、地磁罗盘作卡尔曼



### 传感器参数：

- orientation 方向
- acceleration  加速度
- gravity 重力
- distance 距离





##传感器类型


	Sensor.TYPE_ACCELEROMETER 1 加速度传感器
	Sensor.TYPE_MAGNETIC_FIELD 2 磁力传感器 
	Sensor.TYPE_ORIENTATION  3 方向传感器 
	Sensor.TYPE_GYROSCOPE  4 陀螺仪传感器 
	Sensor.TYPE_LIGHT  5 环境光照传感器 
	Sensor.TYPE_PRESSURE  6 压力传感器 
	Sensor.TYPE_TEMPERATURE  7 温度传感器 
	Sensor.TYPE_PROXIMITY 8 距离传感器



 
 
#define	SENSOR_TYPE_ACCELEROMETER   (1)
 
#define	SENSOR_TYPE_GEOMAGNETIC_FIELD   (2)
 
#define	SENSOR_TYPE_MAGNETIC_FIELD   SENSOR_TYPE_GEOMAGNETIC_FIELD
 
#define	SENSOR_TYPE_ORIENTATION   (3)
 
#define	SENSOR_TYPE_GYROSCOPE   (4)
 
#define	SENSOR_TYPE_LIGHT   (5)
 
#define	SENSOR_TYPE_PRESSURE   (6)
 
#define	SENSOR_TYPE_TEMPERATURE   (7)
 
#define	SENSOR_TYPE_PROXIMITY   (8)
 
#define	SENSOR_TYPE_GRAVITY   (9)
 
#define	SENSOR_TYPE_LINEAR_ACCELERATION   (10)
 
#define	SENSOR_TYPE_ROTATION_VECTOR   (11)
 
#define	SENSOR_TYPE_RELATIVE_HUMIDITY   (12)
 
#define	SENSOR_TYPE_AMBIENT_TEMPERATURE   (13)
 
#define	SENSOR_TYPE_MAGNETIC_FIELD_UNCALIBRATED   (14)
 
#define	SENSOR_TYPE_GAME_ROTATION_VECTOR   (15)
 
#define	SENSOR_TYPE_GYROSCOPE_UNCALIBRATED   (16)
 
#define	SENSOR_TYPE_SIGNIFICANT_MOTION   (17)
 
#define	SENSOR_TYPE_STEP_DETECTOR   (18)
 
#define	SENSOR_TYPE_STEP_COUNTER   (19)
 
#define	SENSOR_TYPE_GEOMAGNETIC_ROTATION_VECTOR   (20)




######参考资料

- [Android传感器编程入门](http://absolute.iteye.com/blog/1190544)  http://android.yaohuiji.com/archives/2503
- android 4.4 Step Counter Sensor计步器的试用 http://blog.csdn.net/aikongmeng/article/details/40457233

-【整理】Android的传感器sendor驱动 + android驱动框架 http://www.crifan.com/android_driver_framework_and_sensors_driver/


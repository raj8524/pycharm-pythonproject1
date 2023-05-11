from pyspark.sql import SparkSession
from pyspark.sql.functions import expr,array,create_map,col,array_contains,regexp_replace
spark=SparkSession.builder.appName("fruits").getOrCreate()
df=spark.read.option("multiline",'true').parquet('D:\AB*.parquet')
# df.show()
# df1=df.select(array(col("first_name"),col("last_name")).alias("fullname"))
df1=df.withColumn("fullname",expr('first_name || " " ||last_name'))
li=['Hill','Adams','Keith','Lori']
df1.filter(col("first_name").isin(li))
df1.select(regexp_replace('first_name','Lori','LARA')).show()
# df.select(create_map(col("first_name"),col("last_name")).alias("fullname")).show()
# df.withColumn("fullname",expr('first_name || " " ||last_name')).show()
# df.select(expr('first_name || " " ||last_name')).show()
# df.select(expr("CASE WHEN gender='Male' THEN 'M'" + "WHEN gender='Female' THEN 'F'" + "ELSE gender END").alias("GENDER")).show()
df.createOrReplaceTempView("emp")
spark.sql("select CASE WHEN gender='Male' THEN 'M'" + "WHEN gender='Female' THEN 'F'" + "ELSE gender END as GENDER from emp")


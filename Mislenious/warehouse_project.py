import sys
from awsglue.transforms import *
from awsglue.utils import getResolvedOptions
from pyspark.context import SparkContext
from awsglue.context import GlueContext
from awsglue.job import Job

## @params: [JOB_NAME]
args = getResolvedOptions(sys.argv, ['JOB_NAME'])

sc = SparkContext()
glueContext = GlueContext(sc)
spark = glueContext.spark_session
job = Job(glueContext)
job.init(args['JOB_NAME'], args)
## @type: DataSource
## @args: [database = "glue-s3-db-copy", table_name = "company_deals_csv", transformation_ctx = "datasource0"]
## @return: datasource0
## @inputs: []
datasource0 = glueContext.create_dynamic_frame.from_catalog(database = "glue-s3-db-copy", table_name = "company_deals_csv", transformation_ctx = "datasource0")
## @type: ApplyMapping
## @args: [mapping = [("num", "long", "num", "long"), ("company", "string", "company", "string"), ("ceo", "string", "ceo", "string"), ("shareteam", "long", "shareteam", "long"), ("stock_fall", "double", "stock_fall", "double"), ("stock_rise", "double", "stock_rise", "double"), ("share_num", "double", "share_num", "double"), ("location", "string", "location", "string"), ("areaexpertise", "string", "areaexpertise", "string"), ("ratings", "double", "ratings", "double")], transformation_ctx = "applymapping1"]
## @return: applymapping1
## @inputs: [frame = datasource0]
applymapping1 = ApplyMapping.apply(frame = datasource0, mappings = [("num", "long", "num", "long"), ("company", "string", "company", "string"), ("ceo", "string", "ceo", "string"), ("shareteam", "long", "shareteam", "long"), ("stock_fall", "double", "stock_fall", "double"), ("stock_rise", "double", "stock_rise", "double"), ("share_num", "double", "share_num", "double"), ("location", "string", "location", "string"), ("areaexpertise", "string", "areaexpertise", "string"), ("ratings", "double", "ratings", "double")], transformation_ctx = "applymapping1")
## @type: SelectFields
## @args: [paths = ["num", "company", "ceo", "shareteam", "stock_fall", "stock_rise", "share_num", "location", "areaexpertise", "ratings"], transformation_ctx = "selectfields2"]
## @return: selectfields2
## @inputs: [frame = applymapping1]
selectfields2 = SelectFields.apply(frame = applymapping1, paths = ["num", "company", "ceo", "shareteam", "stock_fall", "stock_rise", "share_num", "location", "areaexpertise", "ratings"], transformation_ctx = "selectfields2")
## @type: ResolveChoice
## @args: [choice = "MATCH_CATALOG", database = "glue-s3-db-copy", table_name = "company_deals_csv", transformation_ctx = "resolvechoice3"]
## @return: resolvechoice3
## @inputs: [frame = selectfields2]
resolvechoice3 = ResolveChoice.apply(frame = selectfields2, choice = "MATCH_CATALOG", database = "glue-s3-db-copy", table_name = "company_deals_csv", transformation_ctx = "resolvechoice3")
## @type: DataSink
## @args: [database = "glue-s3-db-copy", table_name = "company_deals_csv", transformation_ctx = "datasink4"]
## @return: datasink4
## @inputs: [frame = resolvechoice3]
datasink4 = glueContext.write_dynamic_frame.from_catalog(frame = resolvechoice3, database = "glue-s3-db-copy", table_name = "company_deals_csv", transformation_ctx = "datasink4")
job.commit()

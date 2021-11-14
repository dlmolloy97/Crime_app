def sql_to_js_file(query,filepath):
    import pandas as pd
    import numpy as np
    from sqlalchemy import create_engine
    alchemyEngine=create_engine('postgresql://desmondmolloy:@127.0.0.1', pool_recycle=3600);
    dbConnection=alchemyEngine.connect()
    df=pd.read_sql(query, dbConnection)
    ajson=df.to_json(orient='records')
    myjsobject="export var data={};".format(ajson)
    text_file = open(filepath, "wt")
    n = text_file.write(myjsobject)
    text_file.close()


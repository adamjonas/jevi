var connect=require("connect"),app=connect().use(connect.logger("dev")).use(connect.static("public")).listen(process.env.PORT||3e3);
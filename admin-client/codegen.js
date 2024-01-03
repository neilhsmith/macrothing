import { codegen } from "swagger-axios-codegen"

codegen({
  methodNameMode: "operationId",
  remoteUrl: "https://localhost:5020/swagger/v1/swagger.json",
  outputDir: "./src/api/generated/",
  multipleFileMode: true,
})

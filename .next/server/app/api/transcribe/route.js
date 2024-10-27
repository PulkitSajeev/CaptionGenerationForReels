"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/transcribe/route";
exports.ids = ["app/api/transcribe/route"];
exports.modules = {

/***/ "@aws-sdk/client-s3":
/*!*************************************!*\
  !*** external "@aws-sdk/client-s3" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("@aws-sdk/client-s3");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "fs/promises":
/*!******************************!*\
  !*** external "fs/promises" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("fs/promises");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "http2":
/*!************************!*\
  !*** external "http2" ***!
  \************************/
/***/ ((module) => {

module.exports = require("http2");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "process":
/*!**************************!*\
  !*** external "process" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("process");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftranscribe%2Froute&page=%2Fapi%2Ftranscribe%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftranscribe%2Froute.js&appDir=E%3A%5CCaptionGenerator%5Ccaptiongenerator%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CCaptionGenerator%5Ccaptiongenerator&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftranscribe%2Froute&page=%2Fapi%2Ftranscribe%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftranscribe%2Froute.js&appDir=E%3A%5CCaptionGenerator%5Ccaptiongenerator%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CCaptionGenerator%5Ccaptiongenerator&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var E_CaptionGenerator_captiongenerator_src_app_api_transcribe_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/transcribe/route.js */ \"(rsc)/./src/app/api/transcribe/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/transcribe/route\",\n        pathname: \"/api/transcribe\",\n        filename: \"route\",\n        bundlePath: \"app/api/transcribe/route\"\n    },\n    resolvedPagePath: \"E:\\\\CaptionGenerator\\\\captiongenerator\\\\src\\\\app\\\\api\\\\transcribe\\\\route.js\",\n    nextConfigOutput,\n    userland: E_CaptionGenerator_captiongenerator_src_app_api_transcribe_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/transcribe/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZ0cmFuc2NyaWJlJTJGcm91dGUmcGFnZT0lMkZhcGklMkZ0cmFuc2NyaWJlJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGdHJhbnNjcmliZSUyRnJvdXRlLmpzJmFwcERpcj1FJTNBJTVDQ2FwdGlvbkdlbmVyYXRvciU1Q2NhcHRpb25nZW5lcmF0b3IlNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUUlM0ElNUNDYXB0aW9uR2VuZXJhdG9yJTVDY2FwdGlvbmdlbmVyYXRvciZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDMkI7QUFDeEc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXB0aW9uZ2VuZXJhdG9yLz82MDNjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkU6XFxcXENhcHRpb25HZW5lcmF0b3JcXFxcY2FwdGlvbmdlbmVyYXRvclxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFx0cmFuc2NyaWJlXFxcXHJvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS90cmFuc2NyaWJlL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvdHJhbnNjcmliZVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvdHJhbnNjcmliZS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkU6XFxcXENhcHRpb25HZW5lcmF0b3JcXFxcY2FwdGlvbmdlbmVyYXRvclxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFx0cmFuc2NyaWJlXFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS90cmFuc2NyaWJlL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftranscribe%2Froute&page=%2Fapi%2Ftranscribe%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftranscribe%2Froute.js&appDir=E%3A%5CCaptionGenerator%5Ccaptiongenerator%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CCaptionGenerator%5Ccaptiongenerator&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/transcribe/route.js":
/*!*****************************************!*\
  !*** ./src/app/api/transcribe/route.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/client-s3 */ \"@aws-sdk/client-s3\");\n/* harmony import */ var _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _aws_sdk_client_transcribe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/client-transcribe */ \"(rsc)/./node_modules/@aws-sdk/client-transcribe/dist-es/TranscribeClient.js\");\n/* harmony import */ var _aws_sdk_client_transcribe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-sdk/client-transcribe */ \"(rsc)/./node_modules/@aws-sdk/client-transcribe/dist-es/commands/StartTranscriptionJobCommand.js\");\n/* harmony import */ var _aws_sdk_client_transcribe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aws-sdk/client-transcribe */ \"(rsc)/./node_modules/@aws-sdk/client-transcribe/dist-es/commands/GetTranscriptionJobCommand.js\");\n\n\nfunction getClient() {\n    return new _aws_sdk_client_transcribe__WEBPACK_IMPORTED_MODULE_1__.TranscribeClient({\n        region: \"ap-south-1\",\n        credentials: {\n            accessKeyId: process.env.AWS_ACCESS_KEY,\n            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY\n        }\n    });\n}\nfunction createTranscriptionCommand(filename) {\n    return new _aws_sdk_client_transcribe__WEBPACK_IMPORTED_MODULE_2__.StartTranscriptionJobCommand({\n        TranscriptionJobName: filename,\n        OutputBucketName: process.env.AWS_S3_BUCKET_NAME,\n        OutputKey: filename + \".transcription\",\n        IdentifyLanguage: true,\n        Media: {\n            MediaFileUri: \"s3://\" + process.env.AWS_S3_BUCKET_NAME + \"/\" + filename\n        }\n    });\n}\nasync function createTranscriptionJob(filename) {\n    const transcribeClient = getClient();\n    const transcriptionCommand = createTranscriptionCommand(filename);\n    return transcribeClient.send(transcriptionCommand);\n}\nasync function getJob(filename) {\n    const transcribeClient = getClient();\n    let jobStatusResult = null;\n    try {\n        const transcriptionJobStatusCommand = new _aws_sdk_client_transcribe__WEBPACK_IMPORTED_MODULE_3__.GetTranscriptionJobCommand({\n            TranscriptionJobName: filename\n        });\n        jobStatusResult = await transcribeClient.send(transcriptionJobStatusCommand);\n    } catch (e) {}\n    return jobStatusResult;\n}\nasync function streamToString(stream) {\n    const chunks = [];\n    return new Promise((resolve, reject)=>{\n        stream.on(\"data\", (chunk)=>chunks.push(Buffer.from(chunk)));\n        stream.on(\"end\", ()=>resolve(Buffer.concat(chunks).toString(\"utf8\")));\n        stream.on(\"error\", reject);\n    });\n}\nasync function getTranscriptionFile(filename) {\n    const transcriptionFile = filename + \".transcription\";\n    const s3client = new _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0__.S3Client({\n        region: \"ap-south-1\",\n        credentials: {\n            accessKeyId: process.env.AWS_ACCESS_KEY,\n            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY\n        }\n    });\n    const getObjectCommand = new _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0__.GetObjectCommand({\n        Bucket: process.env.AWS_S3_BUCKET_NAME,\n        Key: transcriptionFile\n    });\n    let transcriptionFileResponse = null;\n    try {\n        transcriptionFileResponse = await s3client.send(getObjectCommand);\n    } catch (e) {}\n    if (transcriptionFileResponse) {\n        return JSON.parse(await streamToString(transcriptionFileResponse.Body));\n    }\n    return null;\n}\nasync function GET(req) {\n    const url = new URL(req.url);\n    const searchParams = new URLSearchParams(url.searchParams);\n    const filename = searchParams.get(\"filename\");\n    // find ready transcription\n    const transcription = await getTranscriptionFile(filename);\n    if (transcription) {\n        return Response.json({\n            status: \"COMPLETED\",\n            transcription\n        });\n    }\n    // check if already transcribing\n    const existingJob = await getJob(filename);\n    if (existingJob) {\n        return Response.json({\n            status: existingJob.TranscriptionJob.TranscriptionJobStatus\n        });\n    }\n    // creating new transcription job\n    if (!existingJob) {\n        const newJob = await createTranscriptionJob(filename);\n        return Response.json({\n            status: newJob.TranscriptionJob.TranscriptionJobStatus\n        });\n    }\n    return Response.json(null);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNGO0lBRUEsZ0NBQWdDO0lBQ2hDLE1BQU1JLGNBQWMsTUFBTXRDLE9BQU9aO0lBRWpDLElBQUlrRCxhQUFhO1FBQ2YsT0FBT0gsU0FBU0MsSUFBSSxDQUFDO1lBQ25CQyxRQUFRQyxZQUFZQyxnQkFBZ0IsQ0FBQ0Msc0JBQXNCO1FBQzdEO0lBQ0Y7SUFFQSxpQ0FBaUM7SUFDakMsSUFBSSxDQUFDRixhQUFhO1FBQ2hCLE1BQU1HLFNBQVMsTUFBTTdDLHVCQUF1QlI7UUFDNUMsT0FBTytDLFNBQVNDLElBQUksQ0FBQztZQUNuQkMsUUFBUUksT0FBT0YsZ0JBQWdCLENBQUNDLHNCQUFzQjtRQUN4RDtJQUNGO0lBRUEsT0FBT0wsU0FBU0MsSUFBSSxDQUFDO0FBQ3ZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FwdGlvbmdlbmVyYXRvci8uL3NyYy9hcHAvYXBpL3RyYW5zY3JpYmUvcm91dGUuanM/NmM0YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0dldE9iamVjdENvbW1hbmQsIFMzQ2xpZW50fSBmcm9tIFwiQGF3cy1zZGsvY2xpZW50LXMzXCI7XHJcbmltcG9ydCB7R2V0VHJhbnNjcmlwdGlvbkpvYkNvbW1hbmQsIFN0YXJ0VHJhbnNjcmlwdGlvbkpvYkNvbW1hbmQsIFRyYW5zY3JpYmVDbGllbnR9IGZyb20gXCJAYXdzLXNkay9jbGllbnQtdHJhbnNjcmliZVwiO1xyXG5cclxuZnVuY3Rpb24gZ2V0Q2xpZW50KCkge1xyXG4gIHJldHVybiBuZXcgVHJhbnNjcmliZUNsaWVudCh7XHJcbiAgICByZWdpb246ICdhcC1zb3V0aC0xJyxcclxuICAgIGNyZWRlbnRpYWxzOiB7XHJcbiAgICAgIGFjY2Vzc0tleUlkOiBwcm9jZXNzLmVudi5BV1NfQUNDRVNTX0tFWSxcclxuICAgICAgc2VjcmV0QWNjZXNzS2V5OiBwcm9jZXNzLmVudi5BV1NfU0VDUkVUX0FDQ0VTU19LRVksXHJcbiAgICB9LFxyXG4gIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZVRyYW5zY3JpcHRpb25Db21tYW5kKGZpbGVuYW1lKSB7XHJcbiAgcmV0dXJuIG5ldyBTdGFydFRyYW5zY3JpcHRpb25Kb2JDb21tYW5kKHtcclxuICAgIFRyYW5zY3JpcHRpb25Kb2JOYW1lOiBmaWxlbmFtZSxcclxuICAgIE91dHB1dEJ1Y2tldE5hbWU6IHByb2Nlc3MuZW52LkFXU19TM19CVUNLRVRfTkFNRSxcclxuICAgIE91dHB1dEtleTogZmlsZW5hbWUgKyAnLnRyYW5zY3JpcHRpb24nLFxyXG4gICAgSWRlbnRpZnlMYW5ndWFnZTogdHJ1ZSxcclxuICAgIE1lZGlhOiB7XHJcbiAgICAgIE1lZGlhRmlsZVVyaTogJ3MzOi8vJyArIHByb2Nlc3MuZW52LkFXU19TM19CVUNLRVRfTkFNRSArICcvJytmaWxlbmFtZSxcclxuICAgIH0sXHJcbiAgfSk7XHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gY3JlYXRlVHJhbnNjcmlwdGlvbkpvYihmaWxlbmFtZSkge1xyXG4gIGNvbnN0IHRyYW5zY3JpYmVDbGllbnQgPSBnZXRDbGllbnQoKTtcclxuICBjb25zdCB0cmFuc2NyaXB0aW9uQ29tbWFuZCA9IGNyZWF0ZVRyYW5zY3JpcHRpb25Db21tYW5kKGZpbGVuYW1lKTtcclxuICByZXR1cm4gdHJhbnNjcmliZUNsaWVudC5zZW5kKHRyYW5zY3JpcHRpb25Db21tYW5kKTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0Sm9iKGZpbGVuYW1lKSB7XHJcbiAgY29uc3QgdHJhbnNjcmliZUNsaWVudCA9IGdldENsaWVudCgpO1xyXG4gIGxldCBqb2JTdGF0dXNSZXN1bHQgPSBudWxsO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB0cmFuc2NyaXB0aW9uSm9iU3RhdHVzQ29tbWFuZCA9IG5ldyBHZXRUcmFuc2NyaXB0aW9uSm9iQ29tbWFuZCh7XHJcbiAgICAgIFRyYW5zY3JpcHRpb25Kb2JOYW1lOiBmaWxlbmFtZSxcclxuICAgIH0pO1xyXG4gICAgam9iU3RhdHVzUmVzdWx0ID0gYXdhaXQgdHJhbnNjcmliZUNsaWVudC5zZW5kKFxyXG4gICAgICB0cmFuc2NyaXB0aW9uSm9iU3RhdHVzQ29tbWFuZFxyXG4gICAgKTtcclxuICB9IGNhdGNoIChlKSB7fVxyXG4gIHJldHVybiBqb2JTdGF0dXNSZXN1bHQ7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHN0cmVhbVRvU3RyaW5nKHN0cmVhbSkge1xyXG4gIGNvbnN0IGNodW5rcyA9IFtdO1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBzdHJlYW0ub24oJ2RhdGEnLCBjaHVuayA9PiBjaHVua3MucHVzaChCdWZmZXIuZnJvbShjaHVuaykpKTtcclxuICAgIHN0cmVhbS5vbignZW5kJywgKCkgPT4gcmVzb2x2ZShCdWZmZXIuY29uY2F0KGNodW5rcykudG9TdHJpbmcoJ3V0ZjgnKSkpO1xyXG4gICAgc3RyZWFtLm9uKCdlcnJvcicsIHJlamVjdCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFRyYW5zY3JpcHRpb25GaWxlKGZpbGVuYW1lKSB7XHJcbiAgY29uc3QgdHJhbnNjcmlwdGlvbkZpbGUgPSBmaWxlbmFtZSArICcudHJhbnNjcmlwdGlvbic7XHJcbiAgY29uc3QgczNjbGllbnQgPSBuZXcgUzNDbGllbnQoe1xyXG4gICAgcmVnaW9uOiAnYXAtc291dGgtMScsXHJcbiAgICBjcmVkZW50aWFsczoge1xyXG4gICAgICBhY2Nlc3NLZXlJZDogcHJvY2Vzcy5lbnYuQVdTX0FDQ0VTU19LRVksXHJcbiAgICAgIHNlY3JldEFjY2Vzc0tleTogcHJvY2Vzcy5lbnYuQVdTX1NFQ1JFVF9BQ0NFU1NfS0VZLFxyXG4gICAgfSxcclxuICB9KTtcclxuICBjb25zdCBnZXRPYmplY3RDb21tYW5kID0gbmV3IEdldE9iamVjdENvbW1hbmQoe1xyXG4gICAgQnVja2V0OiBwcm9jZXNzLmVudi5BV1NfUzNfQlVDS0VUX05BTUUsXHJcbiAgICBLZXk6IHRyYW5zY3JpcHRpb25GaWxlLFxyXG4gIH0pO1xyXG4gIGxldCB0cmFuc2NyaXB0aW9uRmlsZVJlc3BvbnNlID0gbnVsbDtcclxuICB0cnkge1xyXG4gICAgdHJhbnNjcmlwdGlvbkZpbGVSZXNwb25zZSA9IGF3YWl0IHMzY2xpZW50LnNlbmQoZ2V0T2JqZWN0Q29tbWFuZCk7XHJcbiAgfSBjYXRjaCAoZSkge31cclxuICBpZiAodHJhbnNjcmlwdGlvbkZpbGVSZXNwb25zZSkge1xyXG4gICAgcmV0dXJuIEpTT04ucGFyc2UoXHJcbiAgICAgIGF3YWl0IHN0cmVhbVRvU3RyaW5nKHRyYW5zY3JpcHRpb25GaWxlUmVzcG9uc2UuQm9keSlcclxuICAgICk7XHJcbiAgfVxyXG4gIHJldHVybiBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcSkge1xyXG4gIGNvbnN0IHVybCA9IG5ldyBVUkwocmVxLnVybCk7XHJcbiAgY29uc3Qgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh1cmwuc2VhcmNoUGFyYW1zKTtcclxuICBjb25zdCBmaWxlbmFtZSA9IHNlYXJjaFBhcmFtcy5nZXQoJ2ZpbGVuYW1lJyk7XHJcblxyXG4gIC8vIGZpbmQgcmVhZHkgdHJhbnNjcmlwdGlvblxyXG4gIGNvbnN0IHRyYW5zY3JpcHRpb24gPSBhd2FpdCBnZXRUcmFuc2NyaXB0aW9uRmlsZShmaWxlbmFtZSk7XHJcbiAgaWYgKHRyYW5zY3JpcHRpb24pIHtcclxuICAgIHJldHVybiBSZXNwb25zZS5qc29uKHtcclxuICAgICAgc3RhdHVzOidDT01QTEVURUQnLFxyXG4gICAgICB0cmFuc2NyaXB0aW9uLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBjaGVjayBpZiBhbHJlYWR5IHRyYW5zY3JpYmluZ1xyXG4gIGNvbnN0IGV4aXN0aW5nSm9iID0gYXdhaXQgZ2V0Sm9iKGZpbGVuYW1lKTtcclxuXHJcbiAgaWYgKGV4aXN0aW5nSm9iKSB7XHJcbiAgICByZXR1cm4gUmVzcG9uc2UuanNvbih7XHJcbiAgICAgIHN0YXR1czogZXhpc3RpbmdKb2IuVHJhbnNjcmlwdGlvbkpvYi5UcmFuc2NyaXB0aW9uSm9iU3RhdHVzLFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8vIGNyZWF0aW5nIG5ldyB0cmFuc2NyaXB0aW9uIGpvYlxyXG4gIGlmICghZXhpc3RpbmdKb2IpIHtcclxuICAgIGNvbnN0IG5ld0pvYiA9IGF3YWl0IGNyZWF0ZVRyYW5zY3JpcHRpb25Kb2IoZmlsZW5hbWUpO1xyXG4gICAgcmV0dXJuIFJlc3BvbnNlLmpzb24oe1xyXG4gICAgICBzdGF0dXM6IG5ld0pvYi5UcmFuc2NyaXB0aW9uSm9iLlRyYW5zY3JpcHRpb25Kb2JTdGF0dXMsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiBSZXNwb25zZS5qc29uKG51bGwpO1xyXG59Il0sIm5hbWVzIjpbIkdldE9iamVjdENvbW1hbmQiLCJTM0NsaWVudCIsIkdldFRyYW5zY3JpcHRpb25Kb2JDb21tYW5kIiwiU3RhcnRUcmFuc2NyaXB0aW9uSm9iQ29tbWFuZCIsIlRyYW5zY3JpYmVDbGllbnQiLCJnZXRDbGllbnQiLCJyZWdpb24iLCJjcmVkZW50aWFscyIsImFjY2Vzc0tleUlkIiwicHJvY2VzcyIsImVudiIsIkFXU19BQ0NFU1NfS0VZIiwic2VjcmV0QWNjZXNzS2V5IiwiQVdTX1NFQ1JFVF9BQ0NFU1NfS0VZIiwiY3JlYXRlVHJhbnNjcmlwdGlvbkNvbW1hbmQiLCJmaWxlbmFtZSIsIlRyYW5zY3JpcHRpb25Kb2JOYW1lIiwiT3V0cHV0QnVja2V0TmFtZSIsIkFXU19TM19CVUNLRVRfTkFNRSIsIk91dHB1dEtleSIsIklkZW50aWZ5TGFuZ3VhZ2UiLCJNZWRpYSIsIk1lZGlhRmlsZVVyaSIsImNyZWF0ZVRyYW5zY3JpcHRpb25Kb2IiLCJ0cmFuc2NyaWJlQ2xpZW50IiwidHJhbnNjcmlwdGlvbkNvbW1hbmQiLCJzZW5kIiwiZ2V0Sm9iIiwiam9iU3RhdHVzUmVzdWx0IiwidHJhbnNjcmlwdGlvbkpvYlN0YXR1c0NvbW1hbmQiLCJlIiwic3RyZWFtVG9TdHJpbmciLCJzdHJlYW0iLCJjaHVua3MiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIm9uIiwiY2h1bmsiLCJwdXNoIiwiQnVmZmVyIiwiZnJvbSIsImNvbmNhdCIsInRvU3RyaW5nIiwiZ2V0VHJhbnNjcmlwdGlvbkZpbGUiLCJ0cmFuc2NyaXB0aW9uRmlsZSIsInMzY2xpZW50IiwiZ2V0T2JqZWN0Q29tbWFuZCIsIkJ1Y2tldCIsIktleSIsInRyYW5zY3JpcHRpb25GaWxlUmVzcG9uc2UiLCJKU09OIiwicGFyc2UiLCJCb2R5IiwiR0VUIiwicmVxIiwidXJsIiwiVVJMIiwic2VhcmNoUGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwiZ2V0IiwidHJhbnNjcmlwdGlvbiIsIlJlc3BvbnNlIiwianNvbiIsInN0YXR1cyIsImV4aXN0aW5nSm9iIiwiVHJhbnNjcmlwdGlvbkpvYiIsIlRyYW5zY3JpcHRpb25Kb2JTdGF0dXMiLCJuZXdKb2IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/transcribe/route.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@aws-sdk","vendor-chunks/@smithy"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftranscribe%2Froute&page=%2Fapi%2Ftranscribe%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftranscribe%2Froute.js&appDir=E%3A%5CCaptionGenerator%5Ccaptiongenerator%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CCaptionGenerator%5Ccaptiongenerator&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();
import { Injectable } from '@nestjs/common';

@Injectable()
export class ResultsService {
  NAME = 'ResultsService';

  RANDOM = `{
 value: 0.8942764244219945,
 number: 710,
 dateValue: 1645155276159,
 daRESULTSamp: "2022-02-18T03:34:36.256Z"
}`;

  HELPERS = `{
 timeValue: 1645155276885,
 timeStamp: "2022-02-18T03:34:36.885Z",
 jsonObj: { typeOf: "object", value: { desc: "RESULTS of jsonObj" } },
 jsonStr: "{\n  "desc": "RESULTS of jsonStr"\n}",
 jsonInspect: "inspect(obj)",
 jsonFormat: "format(obj)",
 jsonDetails: {
   text: "{\n  "desc": "RESULTS of jsonDetails"\n}",
   inspect: "inspect(obj)",
   format: "format(obj)"
 }
}
`;

  SOURCE = `{
    DEFAULT: {
      FILE: "/home/alezx311/js/quokka/basic.js",
      NAME: "SourceService",
      CONTENT: "const {readFileSync} = require("fs");\n" +
        "\n" +
        "class SourceService {\n" +
        "  NAME = "N/A";\n" +
        "\n" +
        "  _FILE = __filename;\n" +
        "  _NAME = "SourceService";\n" +
        "  _CONTENT = readFileSync(__filename).toString();\n" +
        "  _SOURCE = {\n" +
        "    _FILE: this._FILE,\n" +
        "  _NAME: this._NAME,\n" +
        "  _CONTENT: this._CONTENT,\n" +
        "  }\n" +
        "\n" +
        "  CONTENT = (filePath = __filename) => {\n" +
        "    const content = readFileSync(filePath).toString();\n" +
        "    return { filePath, content };\n" +
        "  };\n" +
        "\n" +
        "\n" +
        "  get FILE() {\n" +
        "    return __filename;\n" +
        "  }\n" +
        "\n" +
        "  DESC = ---> Description <---\n" +
        "  Name: this.NAME}\n" +
        "  File: this.FILE}\n" +
        "  ";\n" +
        "\n" +
        "  getReport = () => "process.report.getReport()";\n" +
        "  getSource = (desc = this.DESC) => "this.FILE} -> desc}";\n" +
        "  getTrace = (desc = this.DESC) => "Trace for desc} -> 
    new Error().stack
  }";\n" +
        "  getDesc = (desc = "N/A") => "this.DESC}\n" +
        "  Report: this.getReport()}\n" +
        " Source: this.getSource(desc)}\n" +
        " Trace: this.getTrace(desc)}\n" +
        " ";\n" +
        "\n" +
        "  get CURRENT() {\n" +
        "    return {\n" +
        "      Report: this.getReport(),\n" +
        "      Source: this.getSource(),\n" +
        "      Trace: this.getTrace(),\n" +
        "      Desc: this.getDesc(),\n" +
        "    };\n" +
        "  }\n" +
        "\n" +
        "  DEFAULT = {\n" +
        "    FILE: this._FILE,\n" +
        "    NAME: this._NAME,\n" +
        "    CONTENT: this._CONTENT,\n" +
        "    ...this.CURRENT,\n" +
        "  };\n" +
        "\n" +
        "  get test() {\n" +
        "    return {\n" +
        "      SourceService: {\n" +
        "        DEFAULT: this.DEFAULT,\n" +
        "        CURRENT: this.CURRENT,\n" +
        "      },\n" +
        "    };\n" +
        "  }\n" +
        "}\n" +
        "\n" +
        "\n" +
        "console.log(new SourceService().test)\n",
      Report: "process.report.getReport()",
      Source: "/home/alezx311/js/quokka/basic.js -> ---> Description <---\n" +
        "  Name: N/A\n" +
        "  File: /home/alezx311/js/quokka/basic.js\n" +
        "  ",
      Trace: "Trace for ---> Description <---\n" +
        "  Name: N/A\n" +
        "  File: /home/alezx311/js/quokka/basic.js\n" +
        "   -> Error\n" +
        "    at SourceService.getTrace (/home/alezx311/js/quokka/basic.js:32:60)\n" +
        "    at SourceService.get CURRENT [as CURRENT] (/home/alezx311/js/quokka/basic.js:43:19)\n" +
        "    at SourceService.<instance_members_initializer> (/home/alezx311/js/quokka/basic.js:52:13)\n" +
        "    at new SourceService (/home/alezx311/js/quokka/basic.js:3:1)\n" +
        "    at Object.<anonymous> (/home/alezx311/js/quokka/basic.js:66:13)\n" +
        "    at Module._compile (internal/modules/cjs/loader.js:1085:14)\n" +
        "    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1114:10)\n" +
        "    at Module.load (internal/modules/cjs/loader.js:950:32)\n" +
        "    at Function.Module._load (internal/modules/cjs/loader.js:790:12)\n" +
        "    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:76:12)",
      Desc: "---> Description <---\n" +
        "  Name: N/A\n" +
        "  File: /home/alezx311/js/quokka/basic.js\n" +
        "  \n" +
        "  Report: process.report.getReport()\n" +
        " Source: /home/alezx311/js/quokka/basic.js -> N/A\n" +
        " Trace: Trace for N/A -> Error\n" +
        "    at SourceService.getTrace (/home/alezx311/js/quokka/basic.js:32:60)\n" +
        "    at SourceService.getDesc (/home/alezx311/js/quokka/basic.js:36:16)\n" +
        "    at SourceService.get CURRENT [as CURRENT] (/home/alezx311/js/quokka/basic.js:44:18)\n" +
        "    at SourceService.<instance_members_initializer> (/home/alezx311/js/quokka/basic.js:52:13)\n" +
        "    at new SourceService (/home/alezx311/js/quokka/basic.js:3:1)\n" +
        "    at Object.<anonymous> (/home/alezx311/js/quokka/basic.js:66:13)\n" +
        "    at Module._compile (internal/modules/cjs/loader.js:1085:14)\n" +
        "    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1114:10)\n" +
        "    at Module.load (internal/modules/cjs/loader.js:950:32)\n" +
        "    at Function.Module._load (internal/modules/cjs/loader.js:790:12)\n" +
        " "
    },
    CURRENT: {
      Report: "process.report.getReport()",
      Source: "/home/alezx311/js/quokka/basic.js -> ---> Description <---\n" +
        "  Name: N/A\n" +
        "  File: /home/alezx311/js/quokka/basic.js\n" +
        "  ",
      Trace: "Trace for ---> Description <---\n" +
        "  Name: N/A\n" +
        "  File: /home/alezx311/js/quokka/basic.js\n" +
        "   -> Error\n" +
        "    at SourceService.getTrace (/home/alezx311/js/quokka/basic.js:32:60)\n" +
        "    at SourceService.get CURRENT [as CURRENT] (/home/alezx311/js/quokka/basic.js:43:19)\n" +
        "    at SourceService.get test [as test] (/home/alezx311/js/quokka/basic.js:59:23)\n" +
        "    at Object.<anonymous> (/home/alezx311/js/quokka/basic.js:66:33)\n" +
        "    at Module._compile (internal/modules/cjs/loader.js:1085:14)\n" +
        "    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1114:10)\n" +
        "    at Module.load (internal/modules/cjs/loader.js:950:32)\n" +
        "    at Function.Module._load (internal/modules/cjs/loader.js:790:12)\n" +
        "    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:76:12)\n" +
        "    at internal/main/run_main_module.js:17:47",
      Desc: "---> Description <---\n" +
        "  Name: N/A\n" +
        "  File: /home/alezx311/js/quokka/basic.js\n" +
        "  \n" +
        "  Report: process.report.getReport()\n" +
        " Source: /home/alezx311/js/quokka/basic.js -> N/A\n" +
        " Trace: Trace for N/A -> Error\n" +
        "    at SourceService.getTrace (/home/alezx311/js/quokka/basic.js:32:60)\n" +
        "    at SourceService.getDesc (/home/alezx311/js/quokka/basic.js:36:16)\n" +
        "    at SourceService.get CURRENT [as CURRENT] (/home/alezx311/js/quokka/basic.js:44:18)\n" +
        "    at SourceService.get test [as test] (/home/alezx311/js/quokka/basic.js:59:23)\n" +
        "    at Object.<anonymous> (/home/alezx311/js/quokka/basic.js:66:33)\n" +
        "    at Module._compile (internal/modules/cjs/loader.js:1085:14)\n" +
        "    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1114:10)\n" +
        "    at Module.load (internal/modules/cjs/loader.js:950:32)\n" +
        "    at Function.Module._load (internal/modules/cjs/loader.js:790:12)\n" +
        "    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:76:12)\n" +
        " "
    }
  }
}`;

  LOGGER = `{
 STR: "Example of string",
 OBJ: { desc: "Example of object" },
 ARR: [ "Example of array" ]
}
Example of Console.error
{
 STR: "Example of string",
 OBJ: { desc: "Example of object" },
 ARR: [ "Example of array" ]
}
Example of Console.warn
{
 STR: "Example of string",
 OBJ: { desc: "Example of object" },
 ARR: [ "Example of array" ]
}
Example of Console.info
{
 STR: "Example of string",
 OBJ: { desc: "Example of object" },
 ARR: [ "Example of array" ]
}
Example of Console.debug
{
 STR: "Example of string",
 OBJ: { desc: "Example of object" },
 ARR: [ "Example of array" ]
}
Example of Console.count: 1
[object Object]: 1
"Example of Console.dir"
{
 STR: "Example of string",
 OBJ: { desc: "Example of object" },
 ARR: [ "Example of array" ]
}
Example of Console.debug
{
 STR: "Example of string",
 OBJ: { desc: "Example of object" },
 ARR: [ "Example of array" ]
}
Example of Console.table
┌─────────┬────────────────────┬─────────────────────┬─────────────────────┐
│ (index) │         0          │        desc         │       Values        │
├─────────┼────────────────────┼─────────────────────┼─────────────────────┤
│   STR   │                    │                     │ "Example of string" │
│   OBJ   │                    │ "Example of object" │                     │
│   ARR   │ "Example of array" │                     │                     │
└─────────┴────────────────────┴─────────────────────┴─────────────────────┘
Example of Console.error
{
 STR: "Example of string",
 OBJ: { desc: "Example of object" },
 ARR: [ "Example of array" ]
}
[object Object]: 0.181ms
Trace: Example of Console.trace
   at /home/alezx311/js/quokka/basic.js:145:17
   at Array.map (<anonymous>)
   at LoggerModule.getRESULTSMethods (/home/alezx311/js/quokka/basic.js:144:26)
   at LoggerModule.get RESULTS [as RESULTS
  ] (/
   at Object.<anonymous> (/home/alezx311/js/quokka/basic.js:163:39)
  NAME: {
   at Module._compile (internal/modules/cjs/loader.js:1085:14)
   at Object.Module._extensions..js (internal/modules/cjs/loader.js:1114:10)
   at Module.load (internal/modules/cjs/loader.js:950:32)
   at Function.Module._load (internal/modules/cjs/loader.js:790:12)
   at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:76:12)
Trace: {
 STR: "Example of string",
 OBJ: { desc: "Example of object" },
 ARR: [ "Example of array" ]
}
   at /home/alezx311/js/quokka/basic.js:146:17
   at Array.map (<anonymous>)
   at LoggerModule.getRESULTSMethods (/home/alezx311/js/quokka/basic.js:144:26)
   at LoggerModule.get RESULTS [as RESULTS
  ] (/
   at Object.<anonymous> (/home/alezx311/js/quokka/basic.js:163:39)
  NAME: {
   at Module._compile (internal/modules/cjs/loader.js:1085:14)
   at Object.Module._extensions..js (internal/modules/cjs/loader.js:1114:10)
   at Module.load (internal/modules/cjs/loader.js:950:32)
   at Function.Module._load (internal/modules/cjs/loader.js:790:12)
   at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:76:12)
Example of Console.group
 {
   STR: "Example of string",
   OBJ: { desc: "Example of object" },
   ARR: [ "Example of array" ]
 }
   Logger RESULTS [
     undefined, undefined,
     undefined, undefined,
     undefined, undefined,
     undefined, undefined,
     undefined, undefined,
     undefined, undefined,
     undefined, undefined,
     undefined
   ]
   (node:97389) Warning: No such label "Example of Console.timeEnd" for console.timeEnd()
   (Use "node --trace-warnings ..." to show where the warning was created)
`;

  test = {
    ResultsService: {
      RANDOM: this.RANDOM,
      HELPERS: this.HELPERS,
      SOURCE: this.SOURCE,
      LOGGER: this.LOGGER,
    },
  };
}

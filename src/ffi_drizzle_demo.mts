/** @ts-ignore */
import { Request as GleamRequest } from "../gleam_http/gleam/http/request.mjs";
/** @ts-ignore */
import { Response as GleamResponse } from "../gleam_http/gleam/http/response.mjs";
import http, { IncomingMessage, ServerResponse } from "node:http";

export function sm() {
  console.log("hey");
}

export function runServer(port: number, handler: (req: GleamRequest, res: GleamResponse) => unknown) {
  const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    const gleamRequest = new GleamRequest(req.method, req.headers);
    const gleamResponse = new GleamResponse(res);
    const response = handler(gleamRequest, gleamResponse);
    res.end(response);
  });
  server.listen(port);
}

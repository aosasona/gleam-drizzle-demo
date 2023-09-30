/** @ts-ignore */
import { Request as GleamRequest } from "../gleam_http/gleam/http/request.mjs";
/** @ts-ignore */
import { Response as GleamResponse } from "../gleam_http/gleam/http/response.mjs";

export function sm() {
  console.log("hey");
}

export function runServer(port: number, handler: () => any) { }

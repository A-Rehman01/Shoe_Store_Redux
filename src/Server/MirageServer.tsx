// src/server.js
import { Server } from "miragejs"
import  shoe from '../FakeData/shoe.json'

export const URL = 'api/shoe';

export function MirageServer({ environment = "test" } = {}) {
  let server = new Server({
    environment,


    routes() {
      this.namespace = "api"

      this.get("/shoe", () => {
        return shoe 
      })
    },
  })

  return server
}
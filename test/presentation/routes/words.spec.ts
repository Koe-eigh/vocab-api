import request from "supertest";
import { AppServer } from "../../../src/presentation/AppServer";

describe("GET /words", () => {
  it("すべての単語を取得", async () => {
    const appServer = new AppServer();
    const response = await request(appServer.app).get("/words");
    const body = response.body;
    body.forEach((word: any) => {
      expect(word.id).toBeDefined();
      expect(word.word).toBeDefined();
      expect(word.type).toBeDefined();
      expect(word.meaning).toBeDefined();
      expect(word.example).toBeDefined();
    })
  });
});

describe("GET /words/:id", () => {
  it("指定されたIDの単語を取得", async () => {
    const appServer = new AppServer();
    const response = await request(appServer.app).get("/words/1");
    const body = response.body;
    expect(body.id).toBeDefined();
    expect(body.word).toBeDefined();
    expect(body.type).toBeDefined();
    expect(body.meaning).toBeDefined();
    expect(body.example).toBeDefined();
  });
});

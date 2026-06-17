const request = require("supertest");
const app = require("../server");

describe("GET /api/livres", () => {
  test("retourne le statut 200", async () => {
    const response = await request(app).get("/api/livres");

    expect(response.statusCode).toBe(200);
  });
});
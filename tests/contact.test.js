import test from "node:test";
import assert from "node:assert/strict";
import { contactSchema } from "../src/utils/contactSchema.js";
import {
  whatsappLink,
  instagramLink,
  sendContact,
} from "../src/utils/contact.js";

const valid = {
  name: "  Ana  ",
  contact: "ana@example.com",
  type: "otra",
  message: "Quisiera conocer la propuesta de asesoramiento.",
};

test("accepts and trims valid details, including telephone alternatives", () => {
  assert.equal(contactSchema.parse(valid).name, "Ana");
  assert.equal(
    contactSchema.safeParse({ ...valid, contact: "+54 (11) 1234-5678" })
      .success,
    true,
  );
});

test("rejects missing, whitespace-only, malformed and oversized inputs", () => {
  for (const changes of [
    { name: " " },
    { contact: "hola" },
    { contact: "++++++++12345678" },
    { contact: "1234567" },
    { type: "" },
    { type: "inexistente" },
    { message: "   " },
    { message: "a".repeat(2001) },
  ]) {
    assert.equal(
      contactSchema.safeParse({ ...valid, ...changes }).success,
      false,
    );
  }
});

test("unconfigured or invalid social links never point to invented destinations", () => {
  assert.equal(whatsappLink(""), null);
  assert.equal(whatsappLink("+54 invalid"), null);
  assert.match(
    whatsappLink("541112345678"),
    /^https:\/\/wa.me\/541112345678\?text=/,
  );
  assert.equal(instagramLink(""), null);
  assert.equal(
    instagramLink("https://instagram.com.evil.example/profile"),
    null,
  );
  assert.equal(instagramLink("javascript:alert(1)"), null);
  assert.equal(instagramLink("https://instagram.com/"), null);
  assert.equal(
    instagramLink("https://www.instagram.com/example/"),
    "https://www.instagram.com/example/",
  );
});

test("missing endpoint causes no network request", async () => {
  let requested = false;
  await assert.rejects(
    sendContact(valid, "", () => {
      requested = true;
    }),
    /no está habilitado/,
  );
  assert.equal(requested, false);
});

test("rejects insecure endpoint before sending data", async () => {
  let requested = false;
  await assert.rejects(
    sendContact(valid, "http://example.com/form", () => {
      requested = true;
    }),
    /HTTPS/,
  );
  assert.equal(requested, false);
});

test("success requires an explicit successful receiver confirmation", async () => {
  let request;
  const result = await sendContact(
    valid,
    "https://example.com/form",
    async (url, options) => {
      request = { url, ...options };
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    },
  );
  assert.equal(result.success, true);
  assert.equal(request.method, "POST");
  assert.deepEqual(JSON.parse(request.body), valid);
  assert.equal(request.credentials, "omit");
  assert.ok(request.signal instanceof AbortSignal);
});

test("HTTP failures, unconfirmed responses and network errors never report success", async () => {
  for (const [body, status] of [
    ['{"success":true}', 500],
    ["{}", 200],
    ['{"success":false}', 200],
    ["<html>OK</html>", 200],
  ]) {
    await assert.rejects(
      sendContact(
        valid,
        "https://example.com/form",
        async () => new Response(body, { status }),
      ),
    );
  }
  await assert.rejects(
    sendContact(valid, "https://example.com/form", async () => {
      throw new TypeError("offline");
    }),
    /offline/,
  );
});

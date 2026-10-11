export function whatsappLink(number) {
  return /^\d{8,15}$/.test(number)
    ? `https://wa.me/${number}?text=${encodeURIComponent("Hola Biengriffo, quisiera consultar por el asesoramiento.")}`
    : null;
}

export function instagramLink(value) {
  try {
    const url = new URL(value);
    return url.protocol === "https:" &&
      ["instagram.com", "www.instagram.com"].includes(url.hostname) &&
      url.pathname !== "/"
      ? url.href
      : null;
  } catch {
    return null;
  }
}

export async function sendContact(data, endpoint, fetcher = fetch) {
  if (!endpoint)
    throw new Error(
      "El formulario todavía no está habilitado para enviar consultas.",
    );
  const url = new URL(endpoint);
  if (url.protocol !== "https:")
    throw new Error("El formulario requiere un destino HTTPS válido.");
  const response = await fetcher(url.href, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(data),
    signal: AbortSignal.timeout(15000),
    credentials: "omit",
  });
  if (!response.ok)
    throw new Error(
      "No se pudo enviar la consulta. Intentá nuevamente más tarde.",
    );
  const result = await response.json().catch(() => null);
  if (result?.success !== true)
    throw new Error(
      "No pudimos confirmar la recepción de la consulta. Probá otro medio de contacto.",
    );
  return result;
}

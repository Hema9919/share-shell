export default function handler(req, res) {
  const { id } = req.query;

  const qrCodes = {
    abc123: {
      expires: "2026-08-13",
      url: "https://your-site.vercel.app",
    },
  };

  const qr = qrCodes[id];

  if (!qr) {
    return res.status(404).send("Invalid QR");
  }

  if (new Date() > new Date(qr.expires)) {
    return res.status(410).send("QR Code Expired");
  }

  res.writeHead(302, {
    Location: qr.url,
  });

  res.end();
}
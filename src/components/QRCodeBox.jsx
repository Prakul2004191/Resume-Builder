import { QRCodeCanvas } from "qrcode.react";

export default function QRCodeBox({ id }) {
  const url = `${window.location.origin}/profile/${id}`;
  return <QRCodeCanvas value={url} size={140} />;
}

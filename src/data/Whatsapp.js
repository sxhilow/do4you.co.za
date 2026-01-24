const phoneNumber = "27689029543";
const message = "Hi, I need help with my visa application form!";

export const whatsappData = {
  phoneNumber,
  message,
  link: `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
};

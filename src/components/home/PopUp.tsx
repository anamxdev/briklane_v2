import { useEffect, useState, type FormEvent } from "react";
import { X } from "lucide-react";

export default function PopUp() {
  const [show, setShow] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = new FormData();

    form.append(
      "access_key",
      import.meta.env.VITE_WEB3FORMS_KEY
    );

    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("phone", formData.phone);
    form.append("message", formData.message);

    form.append("subject", "New Website Enquiry");
    form.append("from_name", "Briklane Website");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: form,
    });

    const data = await response.json();

    if (data.success) {
      alert("Thank you! Our team will contact you shortly.");

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      setShow(false);
    } else {
      alert("Something went wrong.");
    }
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-5">
      <div className="relative w-full max-w-lg rounded-2xl bg-cream p-8 shadow-2xl">

        <button
          onClick={() => setShow(false)}
          className="absolute right-5 top-5 text-navy transition hover:text-gold"
        >
          <X size={24} />
        </button>

        <h2 className="font-display text-3xl text-navy">
          Get In Touch
        </h2>

        <p className="mt-2 mb-8 text-sm text-gray-600">
          Looking for your dream property? Leave your details and our team will
          get in touch shortly.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <input
            required
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-gold"
          />

          <input
            required
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-gold"
          />

          <input
            required
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "").slice(0, 10);
                setFormData({
                ...formData,
                phone: value,
                });
            }}
            maxLength={10}
            pattern="[0-9]{10}"
            title="Please enter a valid 10-digit phone number"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-gold"
            />

          <textarea
            required
            rows={4}
            name="message"
            placeholder="Tell us what you're looking for..."
            value={formData.message}
            onChange={handleChange}
            className="w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-gold"
          />

          <button
            type="submit"
            className="w-full rounded-lg bg-gold py-3 font-semibold text-white transition duration-300 hover:bg-gold-dark"
          >
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
}
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Mail, Phone, Globe, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactUsPopup({ open, setOpen }: { open: boolean, setOpen: (val: boolean) => void }) {
  const [formData, setFormData] = useState({ name: "", email: "",phone: "", message: "" });
    const [showForm, setShowForm] = useState(false);
    
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendToWhatsApp();
    console.log(formData);
    setOpen(false);
  };
  const sendToWhatsApp = async () => {
    const fromNumber = "0524189028";
    const toNumber = "120363402096156323@g.us";
    if(!formData.name || !formData.email || !formData.phone || !formData.message){
        alert("תמלא את כל השדות בבקשה !")
        return;
    }
    let message = `* הדרכת צוותים- RIDOSOFT*\n\n`;
    message += `👤 *שם מלא:* ${formData.name}\n`;
    message += `📧 *אימייל:* ${formData.email}\n`;
    message += `📞 *טלפון:* ${formData.phone}\n\n`;
    message += `📞 *הודעה:* ${formData.message}\n\n`;
    message += `מספר שולח: ${fromNumber}\n\n`;



    message += `נשלח מ: ${window.location.origin}`;

    await fetch("http://localhost:5000/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ number: toNumber, message })
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          alert("ההודעה נשלחה בהצלחה!");
          setFormData({ name: "", email: "",phone: "", message: "" })
         
        } else {
          alert("שליחה נכשלה: " + data.error);
        }
      })
      .catch((err) => {
        alert("שגיאה בשליחה: " + err.message);
      });
  };
  return (
    <Dialog open={open} onClose={() => setOpen(false)} dir="rtl">
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center px-4">
        <Dialog.Panel className="bg-white rounded-2xl max-w-lg w-full shadow-xl p-6 space-y-6">
          <div className="flex justify-between items-center border-b pb-4">
            <h2 className="text-xl font-bold text-slate-800">צור קשר</h2>
            <button onClick={() => setOpen(false)} className="text-slate-400 hover:text-red-500 transition">
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-slate-600 font-medium">שם מלא</label>
              <input
                name="name"
                type="text"
                required
                onChange={handleChange}
                className="mt-1 w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <div>
              <label className="text-slate-600 font-medium">דוא״ל</label>
              <input
                name="email"
                type="email"
                required
                onChange={handleChange}
                className="mt-1 w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500"
              />
            </div>
             <div>
              <label className="text-slate-600 font-medium">מספר טלפון</label>
              <input
                name="phone"
                type="phone"
                required
                onChange={handleChange}
                className="mt-1 w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <div>
              <label className="text-slate-600 font-medium">הודעה</label>
              <textarea
                name="message"
                rows={4}
                required
                onChange={handleChange}
                className="mt-1 w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500"
              ></textarea>
            </div>

            <div className="pt-2">
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-600 to-slate-700 text-white text-lg py-3 hover:from-cyan-700 hover:to-slate-800"
              >
                <Mail className="w-5 h-5 ml-2" />
                שלח הודעה
              </Button>
            </div>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

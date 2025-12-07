import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Bot, MessageCircle } from 'lucide-react';

interface Answer {
  question: string;
  answer: string;
}
// test
const Index = () => {
  const [currentStep, setCurrentStep] = useState(-1);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [workerInfo, setWorkerInfo] = useState({
    fullName: '',
    email: '',
    phone: ''
  });

  const questions = [
    {
      id: 1,
      text: "כמה שנות ניסיון יש לך בתחום הפרונט?",
      options: ["1-2", "3-5", "6-8", "8 שנים ומעלה"]
    },
    {
      id: 2,
      text: "האם אתה רואה עצמך מהיר בפיתוח מבחינת מהירות עבודה?",
      options: ["כמעט ואין כמוני", "מאוד מהיר", "די מהיר", "סביר"]
    },
    {
      id: 3,
      text: "האם יודע לבצע עבודת פרונט ברמת PIXEL PERFECT?",
      options: ["אלוף CSS - חד משמעי !!", "מסוגל", "מכיר אבל לא ממש"]
    },
    {
      id: 4,
      text: "האם אתה יודע לעבוד בתצורת VANILLA CSS MEDIA QUERIES?",
      options: ["בוודאי, תמיד עובד ככה", "יודע", "לא יודע"]
    }
  ];

  const handleAnswer = (answer: string) => {
    const newAnswer: Answer = {
      question: questions[currentStep].text,
      answer
    };
    setAnswers(prev => [...prev, newAnswer]);
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      if (currentStep < questions.length - 1) {
        setCurrentStep(prev => prev + 1);
      } else {
        setShowForm(true);
      }
    }, 1000);
  };

  const startChat = () => {
    setCurrentStep(0);
  };

  const sendToWhatsApp = async () => {
    const fromNumber = "0524189028";
    const toNumber = "120363402096156323@g.us";

    let message = `* מועמד פרונט אנד - RIDOSOFT*\n\n`;
    message += `👤 *שם מלא:* ${workerInfo.fullName}\n`;
    message += `📧 *אימייל:* ${workerInfo.email}\n`;
    message += `📞 *טלפון:* ${workerInfo.phone}\n\n`;
    message += `מספר שולח: ${fromNumber}\n\n`;

    answers.forEach((answer, index) => {
      message += `*שאלה ${index + 1}:*\n${answer.question}\n`;
      message += `*תשובה: ${answer.answer}*\n\n`;
    });

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
        } else {
          alert("שליחה נכשלה: " + data.error);
        }
      })
      .catch((err) => {
        alert("שגיאה בשליחה: " + err.message);
      });
  };

  const resetAll = () => {
    setCurrentStep(-1);
    setAnswers([]);
    setIsTyping(false);
    setShowForm(false);
    setWorkerInfo({ fullName: '', email: '', phone: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-red-50 p-4">
      <div className="max-w-2xl mx-auto pt-8">
        <Card className="shadow-xl bg-white/90 backdrop-blur-sm border-0 overflow-hidden">
          <div className="bg-gradient-to-r from-cyan-500 to-red-500 p-6 text-white text-center">
            <img src="/lovable-uploads/2b8fda07-5851-4a7f-898a-fd1d6d103a5d.png" alt="RIDOSOFT Logo" className="w-32 h-auto mx-auto mb-3" />
            <h1 className="text-2xl font-bold">בוט סינון מועמדים</h1>
            <p className="text-cyan-100">פרונט אנד / ריאקט</p>
          </div>

          <div className="p-6 min-h-96">
            {currentStep === -1 && !showForm ? (
              <div className="text-center py-6 space-y-4">
                <MessageCircle className="w-16 h-16 mx-auto text-cyan-500" />
                <h2 className="text-2xl font-bold text-gray-800">ברוכים הבאים!</h2>
                <p className="text-gray-600 text-lg">ענה על מספר שאלות קצרות ונמשיך למידע האישי.</p>
                <Button
                  onClick={startChat}
                  className="bg-gradient-to-r from-cyan-500 to-red-500 text-white px-8 py-3 text-lg font-semibold"
                >
                  התחל שאלון
                </Button>
              </div>
            ) : showForm ? (
              <div className="space-y-4 text-right">
                <h2 className="text-xl font-bold text-gray-700 mb-4">📝 סיים למלא את פרטיך:</h2>
                <input
                  type="text"
                  placeholder="שם מלא"
                  value={workerInfo.fullName}
                  onChange={(e) => setWorkerInfo({ ...workerInfo, fullName: e.target.value })}
                  className="w-full p-3 border rounded-md text-right"
                />
                <input
                  type="email"
                  placeholder="אימייל"
                  value={workerInfo.email}
                  onChange={(e) => setWorkerInfo({ ...workerInfo, email: e.target.value })}
                  className="w-full p-3 border rounded-md text-right"
                />
                <input
                  type="tel"
                  placeholder="מספר טלפון"
                  value={workerInfo.phone}
                  onChange={(e) => setWorkerInfo({ ...workerInfo, phone: e.target.value })}
                  className="w-full p-3 border rounded-md text-right"
                />
                <Button
                  onClick={sendToWhatsApp}
                  disabled={!workerInfo.fullName || !workerInfo.email || !workerInfo.phone}
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-3 text-lg font-semibold disabled:opacity-50"
                >
                  סיים ושלח
                </Button>
                <Button
                  onClick={resetAll}
                  variant="outline"
                  className="w-full border-2 border-cyan-500 text-cyan-600 hover:bg-cyan-50 py-3 text-lg font-semibold"
                >
                  התחל מחדש
                </Button>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-500">שאלה {currentStep + 1} מתוך {questions.length}</span>
                  <div className="w-48 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-cyan-500 to-red-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <div className="bg-cyan-50 p-6 rounded-xl border-r-4 border-cyan-500">
                  <div className="flex items-start space-x-3 space-x-reverse">
                    <Bot className="w-8 h-8 text-cyan-500 mt-1" />
                    <p className="text-lg font-semibold text-gray-800">{questions[currentStep].text}</p>
                  </div>
                </div>

                {isTyping ? (
                  <div className="text-center text-gray-500">מעבד תשובה...</div>
                ) : (
                  <div className="space-y-2">
                    {questions[currentStep].options.map((text, index) => (
                      <Button
                        key={index}
                        onClick={() => handleAnswer(text)}
                        variant="outline"
                        className="w-full text-right justify-start p-4 h-auto border-2 hover:border-cyan-300 hover:bg-cyan-50"
                      >
                        {text}
                      </Button>
                    ))}
                  </div>
                )}

                {answers.length > 0 && (
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h3 className="text-sm font-semibold text-gray-600 mb-2">תשובות קודמות:</h3>
                    <div className="space-y-2">
                      {answers.map((ans, i) => (
                        <div key={i} className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg border-r-2 border-cyan-400">
                          <span className="font-medium">שאלה {i + 1}:</span> {ans.answer}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;

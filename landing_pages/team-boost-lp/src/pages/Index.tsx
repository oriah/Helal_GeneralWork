
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState} from "react"
import { 
  Users, 
  Code, 
  Rocket, 
  Shield, 
  Target, 
  TrendingUp,
  CheckCircle,
  ArrowLeft,
  Mail,
  Phone,
  Globe
} from "lucide-react";
import { ContactUsPopup } from "./ContactUsPopup";

const Index = () => {
    const [popupOpen, setPopupOpen] = useState(false);

  const services = [
    {
      icon: <Code className="h-8 w-8 text-cyan-600" />,
      title: "שדרוג תהליכי פיתוח",
      description: "שיפור תהליכי העבודה, הטמעת best practices ומתודולוגיות מתקדמות"
    },
    {
      icon: <Rocket className="h-8 w-8 text-slate-700" />,
      title: "אוטומציה ובדיקות",
      description: "בניית pipeline אוטומטי, CI/CD, ובדיקות אוטומטיות לאיכות מוצר גבוהה"
    },
    {
      icon: <Shield className="h-8 w-8 text-red-700" />,
      title: "ארכיטקטורה מתקדמת",
      description: "העמקת הבנה בעיצוב מערכות מורכבות ודפוסי ארכיטקטורה מתקדמים"
    }
  ];

  const benefits = [
    "שיפור משמעותי ביעילות הצוותים",
    "הפחתת באגים וזמני פיתוח",
    "העלאת איכות הקוד והמוצר",
    "הטמעת תרבות טכנולוגית מתקדמת",
    "הכשרה מעשית ומותאמת אישית",
    "ליווי צמוד לאורך התהליך"
  ];

  const stats = [
    { number: "50+", label: "צוותים שלוו" },
    { number: "200+", label: "מפתחים הוכשרו" },
    { number: "95%", label: "שביעות רצון" },
    { number: "3x", label: "שיפור ביעילות ממוצע" }
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-cyan-50 to-slate-100" dir="rtl">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4 space-x-reverse">
             <img 
              src="/lovable-uploads/83d969b4-a67f-4dbb-8e07-a9128bb390fe.png" 
              alt="Ridosoft Logo" 
              className="h-16 w-16 rounded-full border-2 border-cyan-600 object-cover p-1"
            />

            </div>
            <div className="flex items-center space-x-4 space-x-reverse">
             <Button variant="ghost" asChild className="text-slate-600 hover:text-cyan-600 hover:bg-cyan-50">
              <a href="https://ridosoft.com" target="_blank" rel="noopener noreferrer">
                <Globe className="h-4 w-4 ml-2" />
                ridosoft.com
              </a>
            </Button>

              <Button className="bg-gradient-to-r from-cyan-600 to-slate-700 hover:from-cyan-700 hover:to-slate-800 text-white shadow-lg" 
              onClick={() => setPopupOpen(true)}>
               צור קשר
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <ContactUsPopup open={popupOpen} setOpen={setPopupOpen} />

      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-gradient-to-r from-cyan-100 to-slate-100 text-slate-800 hover:from-cyan-200 hover:to-slate-200 border-cyan-200">
              <Target className="h-4 w-4 ml-2 text-cyan-600" />
              מתמחים בחיזוק צוותים קיימים
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-slate-800">הדרכת צוותים</span>
              <span className="block bg-gradient-to-r from-cyan-600 via-slate-700 to-red-700 bg-clip-text text-transparent">
                ברמה הארכיטקטונית
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              רידוסופט מתמחה בליווי וחיזוק צוותים קיימים – תוך שדרוג תהליכי פיתוח, 
              אוטומציה ובדיקות, והעמקת היכולות עד לרמה ארכיטקטונית גבוהה
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-cyan-600 to-slate-700 hover:from-cyan-700 hover:to-slate-800 text-lg px-8 py-4 shadow-xl" onClick={() => setPopupOpen(true)}>
                <Users className="h-5 w-5 ml-2" />
                התחל היום
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-slate-300 text-slate-700 hover:bg-slate-50">
                 <a href="https://ridosoft.com" target="_blank" rel="noopener noreferrer">
                
              למד עוד על השירותים
              </a>
                
              </Button>
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-400 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-2000"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-slate-700 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              השירותים שלנו
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              ליווי מקצועי וחיזוק צוותים בכל היבטי הפיתוח המתקדם
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 bg-white/90 backdrop-blur-sm border-0 shadow-lg group">
                <CardContent className="p-0 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 bg-gradient-to-br from-cyan-50 to-slate-50 rounded-full group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">
                למה לבחור ברידוסופט?
              </h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                אנו מביאים ניסיון רב שנים בפיתוח ארכיטקטורות מתקדמות ומתמחים 
                בהעברת ידע מעשי לצוותים
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3 space-x-reverse group">
                    <CheckCircle className="h-6 w-6 text-cyan-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-slate-700 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-600 via-slate-700 to-red-700 rounded-2xl p-8 text-white shadow-2xl">
                <TrendingUp className="h-12 w-12 mb-6 opacity-90" />
                <h3 className="text-2xl font-bold mb-4">
                  התוצאות מדברות בעד עצמן
                </h3>
                <p className="text-cyan-100 leading-relaxed mb-6">
                  הצוותים שליווינו חווים שיפור משמעותי ביעילות, איכות הקוד 
                  ויכולות הפיתוח הכלליות
                </p>
                <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
                  <div className="text-3xl font-bold">3x</div>
                  <div className="text-cyan-100">שיפור ביעילות ממוצע</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 via-slate-700 to-red-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            מוכנים להעלות את הצוות שלכם לרמה הבאה?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            בואו נתכנן יחד תוכנית הדרכה מותאמת לצרכים הספציפיים של הארגון שלכם
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4 bg-white text-slate-700 hover:bg-gray-50 shadow-lg" onClick={() => setPopupOpen(true)}>
              <Mail className="h-5 w-5 ml-2" />
              שלח הודעה
            </Button>
            {/* <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white/10 backdrop-blur-sm">
              <Phone className="h-5 w-5 ml-2" />
              הזמן שיחה
            </Button> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <img 
                src="/lovable-uploads/83d969b4-a67f-4dbb-8e07-a9128bb390fe.png" 
                alt="Ridosoft Logo" 
                className="h-16 w-auto"
              />
            </div>
            
            <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
              מתמחים בליווי וחיזוק צוותים קיימים – שדרוג תהליכי פיתוח, 
              אוטומציה ובדיקות, והעמקת היכולות עד לרמה ארכיטקטונית גבוהה
            </p>
            
            <div className="flex justify-center items-center space-x-6 space-x-reverse">
              <a href="https://ridosoft.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Globe className="h-6 w-6" />
              </a>
               
              <span className="text-slate-400">|</span>
              <span className="text-slate-400">
                 <a href="https://ridosoft.com" target="_blank" rel="noopener noreferrer">
               ridosoft.com
              </a>
              </span>
            </div>
            
            <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-500">
              <p>&copy; 2025 רידוסופט. כל הזכויות שמורות.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

import React, { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import "./Managment.css";
import buildingImg from "../assets/build_img.png";
import idImg from "../assets/id.png";
import invocicesImg from "../assets/invoices.png";
import fixsImg from "../assets/fixing.png";
import providersImg from "../assets/provider.png";
import tasksImg from "../assets/tasks.png";
import chatImg from "../assets/chat.png";
import paymentsImg from "../assets/payments.png";
import filesImg from "../assets/files.png";
import markerImg from "../assets/marker.png";
import copyImg from "../assets/copy.png";
import bankImg from "../assets/bank.png";
import usersImg from "../assets/users.png";
import securityImg from "../assets/security.png";
import entriesImg from "../assets/entries.png";
import whatsappImg from "../assets/wa_msg.png";
import emailImg from "../assets/email@.png";
import emailmsgImg from "../assets/email_i.png";
import phoneImg from "../assets/phone_i.png";
import binImg from "../assets/bin.png";
import reportImg from "../assets/report.png";
import meazanImg from "../assets/meazan.png";
import dreshatTashlomImg from "../assets/dreshat-tashlom.png";
import invocimentsWhiteImg from "../assets/invoice_w.png";
import expensesImg from "../assets/expenses.png";
import qualifyWhiteImg from "../assets/equality.png";
import clearImg from "../assets/clear.png";
import leftArrowImg from "../assets/left-arrow.png";
import rightArrowImg from "../assets/right-arrow.png";
import revenueImg from "../assets/revenue.png";
import blueMeazanImg from "../assets/blue-meazan.png";
import ImgPayment1 from "../assets/payment1-btn.png";
import ImgPayment2 from "../assets/payment2-btn.png";
import ImgPayment12 from "../assets/payment-btn12.png";
import ImgPayment22 from "../assets/payment-btn22.png";
import ImgDoc from "../assets/doc.png";
import filterImg from "../assets/filter.png";
import deleteImg from "../assets/delete.png";
import editImg from "../assets/edit-icon.png";
import newTaskImg from "../assets/new-task.png";
import dotsImg from "../assets/dots.png";
import humanImg from "../assets/human.png";
import chat_cImg from "../assets/chat_t.png";
const Management = () => {
  const location = useLocation();
  const { building } = location.state || {};
  console.log(building);
  const [nav, setNav] = useState("hero");
  const [selectedINInvioce, setSelectedINInvioce] = useState("equal");
  const [selectedINWorks, setSelectedINWorks] = useState("elevator");
  const [pickedPayment, setPickedPayment] = useState("invoices");
  const [pickedFiles, setPickedFiles] = useState("insurance policies");
  const [invoiceYear, setInvoiceYear] = useState(2025);
  const [selectedSection] = useState("id");

  const idRef = useRef(null);
  const paymentsRef = useRef(null);
  const chatRef = useRef(null);
  const tasksRef = useRef(null);
  const docsRef = useRef(null);
  const providersRef = useRef(null);
  const workRef = useRef(null);
  const invocicesRef = useRef(null);

  const go = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const expenses = [
    "קטגוריה",
    "סוג הוצאה",
    "פירוט",
    "ינואר",
    "פברואר",
    "מרץ",
    "אפריל",
    "מאי",
    "יוני",
    "יולי",
    "אוגוסט",
    "ספטמבר",
    "אוקטובר",
    "נובמבר",
    "דצמבר",
    'סה"כ',
  ];
  const revenue = [
    "סוג הכנסה",
    "פירוט",
    "ינואר",
    "פברואר",
    "מרץ",
    "אפריל",
    "מאי",
    "יוני",
    "יולי",
    "אוגוסט",
    "ספטמבר",
    "אוקטובר",
    "נובמבר",
    "דצמבר",
    'סה"כ',
  ];
  const meazan = [
    "ינואר",
    "פברואר",
    "מרץ",
    "אפריל",
    "מאי",
    "יוני",
    "יולי",
    "אוגוסט",
    "ספטמבר",
    "אוקטובר",
    "נובמבר",
    "דצמבר",
    'סה"כ',
  ];
  const elevator_work = [
    "מעלית",
    "שם ספק נותן שירות",
    "שם יצרן מעליות",
    "מספר סידורי של משרד העבודה",
    "מספר סידורי של היצרן",
    "שם ספק בודק מעליות",
    "סטטוס בדיקה מהנדס מעליות",
    "תאריך בדיקה אחרון",
    "תאריך פג תוקף",
    "מסמכים",
    "תסקירים",
  ];
  const elevator_table = [
    {
      elevator: "מעלית ימין גפן",
      nameOfProvider: "ישראליפט (קונה)",
      nameOfElevatorCompany: "ישראליפט (קונה)",
      numOfOffice: "123456789",
      numOfCreator: "123456789",
      nameOfChecker: "4,500₪",
      statusCheck: "4,500₪",
      lastDateCheck: "4,500₪",
      endDate: "4,500₪",
      files: { file1: "file1.txt", file2: "file2.txt" },
      reviews: { review1: "review1.txt", review2: "review2.txt" },
    },
    {
      elevator: "מעלית ימין גפן",
      nameOfProvider: "ישראליפט (קונה)",
      nameOfElevatorCompany: "ישראליפט (קונה)",
      numOfOffice: "123456789",
      numOfCreator: "123456789",
      nameOfChecker: "4,500₪",
      statusCheck: "4,500₪",
      lastDateCheck: "4,500₪",
      endDate: "4,500₪",
      files: { file1: "file1.txt", file2: "file2.txt" },
      reviews: { review1: "review1.txt", review2: "review2.txt" },
    },
    {
      elevator: "מעלית ימין גפן",
      nameOfProvider: "ישראליפט (קונה)",
      nameOfElevatorCompany: "ישראליפט (קונה)",
      numOfOffice: "123456789",
      numOfCreator: "123456789",
      nameOfChecker: "4,500₪",
      statusCheck: "4,500₪",
      lastDateCheck: "4,500₪",
      endDate: "4,500₪",
      files: { file1: "file1.txt", file2: "file2.txt" },
      reviews: { review1: "review1.txt", review2: "review2.txt" },
    },
  ];
  const water_work = [
    "מערכת מים",
    "שם ספק",
    "סטטוס טיפול",
    "תאריך טיפול אחרון",
    "פג תוקף לטיפול",
    "מס’ מז’’חים",
    "תכולת מאגר מי שתייה",
    "מס’ משאבות מי שתייה",
    "מס’ משאבות כיבוי אש",
  ];
  const water_table = [
    {
      waterSystem: "בדיקת חדר",
      nameOfProvider: "ישראליפט (קונה)",
      statusCheck: "טופל",
      lastDateCheck: "123456789",
      endDate: "123456789",
      numOfPiers: "15",
      waterDrinkQuantity: "15",
      numOfPump: "4,500₪",
      numOfFightFighting: "15",
    },
  ];
  const fireFighting_work = [
    "מערכת כיובי אש",
    "שם ספק",
    "סוג מערכת כיבוי אש",
    "סטטוס בדיקה",
    "תאריך בדיקה אחרונה",
    "תאריך פג תוקף",
    "מסמכים",
  ];
  const fireFighting_table = [
    {
      fireFightingSystem: "בדיקת חדר",
      nameOfProvider: "ישראליפט (קונה)",
      typeOfFireFightingSys: "ישראליפט (קונה)",
      statusCheck: "נבדק",
      lastDateCheck: "123456789",
      endDate: "123456789",
      files: { file1: "file1.txt", file2: "file2.txt" },
    },
  ];
  const providers_titles = [
    "שם הספק",
    "שם המוטב",
    "שם הבנק",
    "סניף",
    "חשבון",
    "איש קשר",
    "טלפון",
    "טלפון נוסף",
    "מייל",
    "ח.פ / ע.מ / ע.פ",
  ];
  const providersMock = [
    {
      name: "על המקום",
      beneficiary: "על המקום - אלעד אופיר",
      bank: "הפועלים (12)",
      branch: "622",
      account_num: "102798",
      contact: "אלעד",
      phone: "0558835516",
      another_phone: "073-2002000",
      mail: "elad5738@gmail.com",
      company_num: "511057606",
    },
    {
      name: "על המקום",
      beneficiary: "על המקום - אלעד אופיר",
      bank: "הפועלים (12)",
      branch: "622",
      account_num: "102798",
      contact: "אלעד",
      phone: "0558835516",
      another_phone: "073-2002000",
      mail: "elad5738@gmail.com",
      company_num: "511057606",
    },
    {
      name: "על המקום",
      beneficiary: "על המקום - אלעד אופיר",
      bank: "הפועלים (12)",
      branch: "622",
      account_num: "102798",
      contact: "אלעד",
      phone: "0558835516",
      another_phone: "073-2002000",
      mail: "elad5738@gmail.com",
      company_num: "511057606",
    },
    {
      name: "על המקום",
      beneficiary: "על המקום - אלעד אופיר",
      bank: "הפועלים (12)",
      branch: "622",
      account_num: "102798",
      contact: "אלעד",
      phone: "0558835516",
      another_phone: "073-2002000",
      mail: "elad5738@gmail.com",
      company_num: "511057606",
    },
  ];
  console.log("MANAGMENT : ", building);
  return (
    <div className="manager-container" ref={idRef}>
      <div className="Manager-main">
        <div className="top-side">
          <img className="building-img" src={buildingImg} />
          <div>
            <div className="building-name">{building?.name}</div>
            <div className="building-name-descrp">בניין מגורים-פעיל</div>
          </div>
        </div>
        <div className="top-side">
          <div className="top-nav-buttons" onClick={() => go(idRef)}>
            <img className="top-nav-icons" src={idImg} />
            <span> תעודת זהות </span>
          </div>
          <div className="top-nav-buttons" onClick={() => go(invocicesRef)}>
            <img className="top-nav-icons" src={invocicesImg} />
            חשבונות
          </div>
          <div className="top-nav-buttons" onClick={() => go(workRef)}>
            <img className="top-nav-icons" src={fixsImg} /> אחזקה
          </div>
          <div className="top-nav-buttons" onClick={() => go(providersRef)}>
            <img className="top-nav-icons" src={providersImg} /> ספקים
          </div>
          <div className="top-nav-buttons" onClick={() => go(tasksRef)}>
            <img className="top-nav-icons" src={tasksImg} /> משימות
          </div>
          <div className="top-nav-buttons" onClick={() => go(chatRef)}>
            <img className="top-nav-icons" src={chatImg} /> צ'אט
          </div>
          <div className="top-nav-buttons" onClick={() => go(paymentsRef)}>
            <img className="top-nav-icons" src={paymentsImg} /> תשלומים
          </div>
          <div className="top-nav-buttons" onClick={() => go(docsRef)}>
            <img className="top-nav-icons" src={filesImg} /> מסמכים
          </div>
        </div>
        <div className="section1 sec" id="id">
          <div className="section">
            <img className="top-nav-icons" src={idImg} />{" "}
            <span className="sectionTitle">תעודת זהות</span>
            <div className="borderDiv"></div>
          </div>
          <div className="sectionContent">
            <div className="btn-approve-contact">הסכם תקשורת</div>
            <div className="section-info">
              <div className="address-top">
                <img src={markerImg} />
                <h2>כתובת</h2>
              </div>
              <div className="cols2">
                <img src={copyImg} />
                <div>
                  <div>
                    <span className="bold-font">עיר: </span>
                    <span>{building?.city}</span>
                  </div>
                  <div className="marginTop">
                    <span className="bold-font">כתובת: </span>
                    <span>{building?.street}</span>
                  </div>
                  <div className="marginTop">
                    <span className="bold-font">מספר דירות: </span>
                    <span>{building?.apartment_num}</span>
                  </div>{" "}
                  <div className="marginTop">
                    <span className="bold-font">מספר קומות: </span>
                    <span>{building?.floor_num}</span>
                  </div>{" "}
                  <div className="marginTop">
                    <span className="bold-font">מספר כניסות: </span>
                    <span>{building?.entries_num}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="section-info">
              <div className="address-top" id="x">
                <img src={bankImg} />
                <h2>פרטי הבנק</h2>
              </div>
              <div className="cols2">
                <img src={copyImg} />
                <div>
                  <div>
                    <span className="bold-font">שם מוטב: </span>
                    <span>{building?.bank_name}</span>
                  </div>
                  <div className="marginTop">
                    <span className="bold-font">בנק: </span>
                    <span>{building?.bank_type}</span>
                  </div>
                  <div className="marginTop">
                    <span className="bold-font">מספר סניף: </span>
                    <span>{building?.bank_branch_num}</span>
                  </div>{" "}
                  <div className="marginTop">
                    <span className="bold-font">מספר חשבון: </span>
                    <span>{building?.bank_account_num}</span>
                  </div>{" "}
                </div>
              </div>
            </div>
            <div className="section-info">
              <div className="address-top">
                <img src={usersImg} />
                <h2>פרטי משתמש</h2>
              </div>
              <div className="cols2">
                <img src={copyImg} />
                <div>
                  <div>
                    <span className="bold-font">קוד משתמש: </span>
                    <span>{building?.userCode}</span>
                  </div>
                  <div className="marginTop">
                    <span className="bold-font">סיסמא: </span>
                    <span>{building?.pass}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="section-info" id="xpp">
              <div className="address-top">
                <img src={securityImg} />
                <h2>פרטי ביטוח</h2>
              </div>
              <div className="cols2">
                <img src={copyImg} />
                <div>
                  <div>
                    <span className="bold-font">סוכנות ביטוח: </span>
                    <span>{building?.insuranceAgency}</span>
                  </div>
                  <div className="marginTop">
                    <span className="bold-font">חברת ביטוח: </span>
                    <span>{building?.insuranceCompany}</span>
                  </div>
                  <div className="marginTop">
                    <span className="bold-font">מספר הפולסים: </span>
                    <span>{building?.apartment_num}</span>
                  </div>{" "}
                  <div className="marginTop">
                    <span className="bold-font">תאריך סיום הביטוח: </span>
                    <span>{building?.insuranceEndDate}</span>
                  </div>{" "}
                  <div className="marginTop">
                    <span className="bold-font">מסמך הפוליסה: </span>
                    <span>{building?.insurancePolicyDocument}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="section-info">
              <div className="address-top">
                <img src={securityImg} />
                <h2>הסכם התקשרות </h2>
              </div>
              <div className="cols2">
                <img src={copyImg} />
                <div>
                  <div>
                    <span className="bold-font">תאריך התחלה: </span>
                    <span>{building?.contactInfo1_startTime}</span>
                  </div>
                  <div className="marginTop">
                    <span className="bold-font">מסמך ההסכם: </span>
                    <span>{building?.contactInfo1_fileContract}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="section-info">
              <div className="address-top">
                <img src={entriesImg} />
                <h2>כניסות </h2>
              </div>
              <div className="cols2">
                <img src={copyImg} />
                <div>
                  <div>
                    <span className="bold-font">קוד כניסה ראשית: </span>
                    <span>{building?.codeEntry1}</span>
                  </div>
                  <div className="marginTop">
                    <span className="bold-font">קוד כניסה משנית: </span>
                    <span>{building?.codeEntry2}</span>
                  </div>
                  <div className="marginTop">
                    <span className="bold-font">כניסה לגג: </span>
                    <span>{building?.codeRooftopEntry}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-section">
            <div className="address-top">
              <img src={usersImg} />
              <h2>פרטי התקשרות</h2>
            </div>
            <div className="contact-content-section">
              <div>
                <div className="address-top">
                  <img src={whatsappImg} />
                  <div>
                    <div className="bold-font"> WhatsApp</div>
                    <div>{building?.whatsapp} </div>
                  </div>
                </div>
                <div className="address-top marginTop20">
                  <img src={emailImg} />
                  <div>
                    <div className="bold-font"> Email</div>
                    <div>{building?.email} </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="contact-table">
                  <div className="contact-table table-row">
                    <div>גיא מנשורי</div>
                    <div>יור ועד</div>
                    <div>050-8262685</div>
                  </div>
                  <img src={phoneImg} />
                  <img src={emailmsgImg} />
                  <img src={binImg} />
                </div>
                <div className="contact-table">
                  <div className="contact-table table-row">
                    <div>גיא מנשורי</div>
                    <div>יור ועד</div>
                    <div>050-8262685</div>
                  </div>
                  <img src={phoneImg} />
                  <img src={emailmsgImg} />
                  <img src={binImg} />
                </div>
                <div className="contact-table">
                  <div className="contact-table table-row">
                    <div>גיא מנשורי</div>
                    <div>יור ועד</div>
                    <div>050-8262685</div>
                  </div>
                  <img src={phoneImg} />
                  <img src={emailmsgImg} />
                  <img src={binImg} />
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <div className="section2 sec" id="invocices" ref={invocicesRef}>
          <div className="section">
            <img className="top-nav-icons" src={invocicesImg} />{" "}
            <span className="sectionTitle">חשבונאות </span>
            <div className="borderDiv"></div>
          </div>
          <div>
            <div className="top-side">
              <div
                className={
                  selectedINInvioce == "equal"
                    ? "top-nav-buttons heshbonot-btns"
                    : "top-nav-buttons"
                }
                onClick={() => {
                  setSelectedINInvioce("equal");
                }}
              >
                <img
                  className="top-nav-icons icon2"
                  src={
                    selectedINInvioce == "equal" ? qualifyWhiteImg : meazanImg
                  }
                />{" "}
                מאזן
              </div>
              <div
                className={
                  selectedINInvioce == "payments"
                    ? "top-nav-buttons heshbonot-btns"
                    : "top-nav-buttons"
                }
                onClick={() => {
                  setSelectedINInvioce("payments");
                }}
              >
                <img
                  className="top-nav-icons icon2"
                  src={
                    selectedINInvioce !== "payments"
                      ? dreshatTashlomImg
                      : invocimentsWhiteImg
                  }
                />{" "}
                דרישת תשלום
              </div>
              <div
                className={
                  selectedINInvioce == "reports"
                    ? "top-nav-buttons heshbonot-btns"
                    : "top-nav-buttons"
                }
                onClick={() => {
                  setSelectedINInvioce("reports");
                }}
              >
                <img
                  className="top-nav-icons icon2"
                  src={
                    selectedINInvioce !== "reports"
                      ? dreshatTashlomImg
                      : invocimentsWhiteImg
                  }
                />{" "}
                דו״חות וסיכומים
              </div>
              <div>
                <img width={50} src={reportImg} />
              </div>
              <span>הפקת דו״ח</span>
              <div>
                <img width={50} src={reportImg} />
              </div>
              <span>צור דרישת תשלום</span>
              <input className="searchInp" placeholder="חיפוש מסמך" />
            </div>
            <div className="expenses">
              <div className="expenses-first">
                <div className="expenses-name">
                  <img src={expensesImg} />
                  <div>הוצאות</div>
                </div>
                <div className="expenses-btns">הכל</div>
                <div className="expenses-btns"> הוצאות שוטפות</div>
                <div className="expenses-btns extra-btns">
                  הוצאות מיוחדות (בלת״מים)
                </div>
                <div className="expenses-btns extra-btns">
                  הוצאות מיוחדות שידרוגים ותוספות
                </div>
                <div className="expenses-btns">קטגוריה כללית</div>
              </div>
              <div className="expenses-clear">
                <img className="clear-img" src={clearImg} />
                <div>נקה טבלה</div>
              </div>
            </div>
            <div>
              <div className="invoicment-categories">
                <div className="year-invoice">
                  <img
                    className="year-control-img"
                    src={rightArrowImg}
                    onClick={() => {
                      setInvoiceYear((prev) => prev + 1);
                    }}
                  />
                  {invoiceYear}
                  <img
                    className="year-control-img"
                    src={leftArrowImg}
                    onClick={() => {
                      setInvoiceYear((prev) => prev - 1);
                    }}
                  />
                </div>
                {expenses.map((exp) => {
                  return <div>{exp}</div>;
                })}
              </div>
            </div>
            <div className="exposes-table">
              <div className="current-exposes">הוצאות שוטפות</div>
              <div>
                <div className="table-row-container">
                  <div className="table-row-exposes">
                    <input className="input-outcome" placeholder="opt" />
                    <input className="input-outcome" placeholder="קטגוריה" />
                    <select className="input-outcome select-inp">
                      <option>בחר</option>
                      <option>הוצאות שוטפות</option>
                      <option>הוצאות מיוחדות (בלתיימים)</option>
                      <option>הוצאות מיוחדות שידרוגים ותוספות</option>
                      <option>קטגוריה כללית</option>
                    </select>
                    <input className="input-outcome" placeholder="פירוט" />
                    <input className="input-outcome" placeholder="ינואר" />
                    <input className="input-outcome" placeholder="פברואר" />
                    <input className="input-outcome" placeholder="מרץ" />
                    <input className="input-outcome" placeholder="אפריל" />
                    <input className="input-outcome" placeholder="מאי" />
                    <input className="input-outcome" placeholder="יוני" />
                    <input className="input-outcome" placeholder="יולי" />
                    <input className="input-outcome" placeholder="אוגוסט" />
                    <input className="input-outcome" placeholder="ספטמבר" />
                    <input className="input-outcome" placeholder="אוקטובר" />
                    <input className="input-outcome" placeholder="נובמבר" />
                    <input className="input-outcome" placeholder="דצמבר" />
                    <input className="input-outcome" placeholder='סה"כ' />
                  </div>
                </div>
                <div className="table-row-exposes">
                  <input className="input-outcome" placeholder="opt" />
                  <input className="input-outcome" placeholder="קטגוריה" />
                  <select className="input-outcome select-inp">
                    <option>בחר</option>
                    <option>הוצאות שוטפות</option>
                    <option>הוצאות מיוחדות (בלתיימים)</option>
                    <option>הוצאות מיוחדות שידרוגים ותוספות</option>
                    <option>קטגוריה כללית</option>
                  </select>
                  <input className="input-outcome" placeholder="פירוט" />
                  <input className="input-outcome" placeholder="ינואר" />
                  <input className="input-outcome" placeholder="פברואר" />
                  <input className="input-outcome" placeholder="מרץ" />
                  <input className="input-outcome" placeholder="אפריל" />
                  <input className="input-outcome" placeholder="מאי" />
                  <input className="input-outcome" placeholder="יוני" />
                  <input className="input-outcome" placeholder="יולי" />
                  <input className="input-outcome" placeholder="אוגוסט" />
                  <input className="input-outcome" placeholder="ספטמבר" />
                  <input className="input-outcome" placeholder="אוקטובר" />
                  <input className="input-outcome" placeholder="נובמבר" />
                  <input className="input-outcome" placeholder="דצמבר" />
                  <input className="input-outcome" placeholder='סה"כ' />
                </div>
                <div className="table-row-exposes">
                  <input className="input-outcome" placeholder="opt" />
                  <input className="input-outcome" placeholder="קטגוריה" />
                  <select className="input-outcome select-inp">
                    <option>בחר</option>
                    <option>הוצאות שוטפות</option>
                    <option>הוצאות מיוחדות (בלתיימים)</option>
                    <option>הוצאות מיוחדות שידרוגים ותוספות</option>
                    <option>קטגוריה כללית</option>
                  </select>
                  <input className="input-outcome" placeholder="פירוט" />
                  <input className="input-outcome" placeholder="ינואר" />
                  <input className="input-outcome" placeholder="פברואר" />
                  <input className="input-outcome" placeholder="מרץ" />
                  <input className="input-outcome" placeholder="אפריל" />
                  <input className="input-outcome" placeholder="מאי" />
                  <input className="input-outcome" placeholder="יוני" />
                  <input className="input-outcome" placeholder="יולי" />
                  <input className="input-outcome" placeholder="אוגוסט" />
                  <input className="input-outcome" placeholder="ספטמבר" />
                  <input className="input-outcome" placeholder="אוקטובר" />
                  <input className="input-outcome" placeholder="נובמבר" />
                  <input className="input-outcome" placeholder="דצמבר" />
                  <input className="input-outcome" placeholder='סה"כ' />
                </div>
                <div className="table-row-exposes">
                  <input className="input-outcome" placeholder="opt" />
                  <input className="input-outcome" placeholder="קטגוריה" />
                  <select className="input-outcome select-inp">
                    <option>בחר</option>
                    <option>הוצאות שוטפות</option>
                    <option>הוצאות מיוחדות (בלתיימים)</option>
                    <option>הוצאות מיוחדות שידרוגים ותוספות</option>
                    <option>קטגוריה כללית</option>
                  </select>
                  <input className="input-outcome" placeholder="פירוט" />
                  <input className="input-outcome" placeholder="ינואר" />
                  <input className="input-outcome" placeholder="פברואר" />
                  <input className="input-outcome" placeholder="מרץ" />
                  <input className="input-outcome" placeholder="אפריל" />
                  <input className="input-outcome" placeholder="מאי" />
                  <input className="input-outcome" placeholder="יוני" />
                  <input className="input-outcome" placeholder="יולי" />
                  <input className="input-outcome" placeholder="אוגוסט" />
                  <input className="input-outcome" placeholder="ספטמבר" />
                  <input className="input-outcome" placeholder="אוקטובר" />
                  <input className="input-outcome" placeholder="נובמבר" />
                  <input className="input-outcome" placeholder="דצמבר" />
                  <input className="input-outcome" placeholder='סה"כ' />
                </div>
              </div>

              <div className="current-exposes"> הוצאות מיוחדות (בלתמים)</div>

              <div className="table-row-container">
                <div className="table-row-exposes">
                  <input className="input-outcome" placeholder="opt" />
                  <input className="input-outcome" placeholder="קטגוריה" />
                  <select className="input-outcome select-inp">
                    <option>בחר</option>
                    <option>הוצאות שוטפות</option>
                    <option>הוצאות מיוחדות (בלתיימים)</option>
                    <option>הוצאות מיוחדות שידרוגים ותוספות</option>
                    <option>קטגוריה כללית</option>
                  </select>
                  <input className="input-outcome" placeholder="פירוט" />
                  <input className="input-outcome" placeholder="ינואר" />
                  <input className="input-outcome" placeholder="פברואר" />
                  <input className="input-outcome" placeholder="מרץ" />
                  <input className="input-outcome" placeholder="אפריל" />
                  <input className="input-outcome" placeholder="מאי" />
                  <input className="input-outcome" placeholder="יוני" />
                  <input className="input-outcome" placeholder="יולי" />
                  <input className="input-outcome" placeholder="אוגוסט" />
                  <input className="input-outcome" placeholder="ספטמבר" />
                  <input className="input-outcome" placeholder="אוקטובר" />
                  <input className="input-outcome" placeholder="נובמבר" />
                  <input className="input-outcome" placeholder="דצמבר" />
                  <input className="input-outcome" placeholder='סה"כ' />
                </div>
              </div>
              <div className="table-row-exposes">
                <input className="input-outcome" placeholder="opt" />
                <input className="input-outcome" placeholder="קטגוריה" />
                <select className="input-outcome select-inp">
                  <option>בחר</option>
                  <option>הוצאות שוטפות</option>
                  <option>הוצאות מיוחדות (בלתיימים)</option>
                  <option>הוצאות מיוחדות שידרוגים ותוספות</option>
                  <option>קטגוריה כללית</option>
                </select>
                <input className="input-outcome" placeholder="פירוט" />
                <input className="input-outcome" placeholder="ינואר" />
                <input className="input-outcome" placeholder="פברואר" />
                <input className="input-outcome" placeholder="מרץ" />
                <input className="input-outcome" placeholder="אפריל" />
                <input className="input-outcome" placeholder="מאי" />
                <input className="input-outcome" placeholder="יוני" />
                <input className="input-outcome" placeholder="יולי" />
                <input className="input-outcome" placeholder="אוגוסט" />
                <input className="input-outcome" placeholder="ספטמבר" />
                <input className="input-outcome" placeholder="אוקטובר" />
                <input className="input-outcome" placeholder="נובמבר" />
                <input className="input-outcome" placeholder="דצמבר" />
                <input className="input-outcome" placeholder='סה"כ' />
              </div>
              <div className="current-exposes"> קטגוריה כללית</div>

              <div className="table-row-container">
                <div className="table-row-exposes">
                  <input className="input-outcome" placeholder="opt" />
                  <input className="input-outcome" placeholder="קטגוריה" />
                  <select className="input-outcome select-inp">
                    <option>בחר</option>
                    <option>הוצאות שוטפות</option>
                    <option>הוצאות מיוחדות (בלתיימים)</option>
                    <option>הוצאות מיוחדות שידרוגים ותוספות</option>
                    <option>קטגוריה כללית</option>
                  </select>
                  <input className="input-outcome" placeholder="פירוט" />
                  <input className="input-outcome" placeholder="ינואר" />
                  <input className="input-outcome" placeholder="פברואר" />
                  <input className="input-outcome" placeholder="מרץ" />
                  <input className="input-outcome" placeholder="אפריל" />
                  <input className="input-outcome" placeholder="מאי" />
                  <input className="input-outcome" placeholder="יוני" />
                  <input className="input-outcome" placeholder="יולי" />
                  <input className="input-outcome" placeholder="אוגוסט" />
                  <input className="input-outcome" placeholder="ספטמבר" />
                  <input className="input-outcome" placeholder="אוקטובר" />
                  <input className="input-outcome" placeholder="נובמבר" />
                  <input className="input-outcome" placeholder="דצמבר" />
                  <input className="input-outcome" placeholder='סה"כ' />
                </div>
              </div>
              <div className="table-row-exposes">
                <input className="input-outcome" placeholder="opt" />
                <input className="input-outcome" placeholder="קטגוריה" />
                <select className="input-outcome select-inp">
                  <option>בחר</option>
                  <option>הוצאות שוטפות</option>
                  <option>הוצאות מיוחדות (בלתיימים)</option>
                  <option>הוצאות מיוחדות שידרוגים ותוספות</option>
                  <option>קטגוריה כללית</option>
                </select>
                <input className="input-outcome" placeholder="פירוט" />
                <input className="input-outcome" placeholder="ינואר" />
                <input className="input-outcome" placeholder="פברואר" />
                <input className="input-outcome" placeholder="מרץ" />
                <input className="input-outcome" placeholder="אפריל" />
                <input className="input-outcome" placeholder="מאי" />
                <input className="input-outcome" placeholder="יוני" />
                <input className="input-outcome" placeholder="יולי" />
                <input className="input-outcome" placeholder="אוגוסט" />
                <input className="input-outcome" placeholder="ספטמבר" />
                <input className="input-outcome" placeholder="אוקטובר" />
                <input className="input-outcome" placeholder="נובמבר" />
                <input className="input-outcome" placeholder="דצמבר" />
                <input className="input-outcome" placeholder='סה"כ' />
              </div>
              <div className="table-row-exposes">
                <input className="input-outcome" placeholder="opt" />
                <input className="input-outcome" placeholder="קטגוריה" />
                <select className="input-outcome select-inp">
                  <option>בחר</option>
                  <option>הוצאות שוטפות</option>
                  <option>הוצאות מיוחדות (בלתיימים)</option>
                  <option>הוצאות מיוחדות שידרוגים ותוספות</option>
                  <option>קטגוריה כללית</option>
                </select>
                <input className="input-outcome" placeholder="פירוט" />
                <input className="input-outcome" placeholder="ינואר" />
                <input className="input-outcome" placeholder="פברואר" />
                <input className="input-outcome" placeholder="מרץ" />
                <input className="input-outcome" placeholder="אפריל" />
                <input className="input-outcome" placeholder="מאי" />
                <input className="input-outcome" placeholder="יוני" />
                <input className="input-outcome" placeholder="יולי" />
                <input className="input-outcome" placeholder="אוגוסט" />
                <input className="input-outcome" placeholder="ספטמבר" />
                <input className="input-outcome" placeholder="אוקטובר" />
                <input className="input-outcome" placeholder="נובמבר" />
                <input className="input-outcome" placeholder="דצמבר" />
                <input className="input-outcome" placeholder='סה"כ' />
              </div>
              <div className="table-row-exposes">
                <input className="input-outcome" placeholder="opt" />
                <input className="input-outcome" placeholder="קטגוריה" />
                <select className="input-outcome select-inp">
                  <option>בחר</option>
                  <option>הוצאות שוטפות</option>
                  <option>הוצאות מיוחדות (בלתיימים)</option>
                  <option>הוצאות מיוחדות שידרוגים ותוספות</option>
                  <option>קטגוריה כללית</option>
                </select>
                <input className="input-outcome" placeholder="פירוט" />
                <input className="input-outcome" placeholder="ינואר" />
                <input className="input-outcome" placeholder="פברואר" />
                <input className="input-outcome" placeholder="מרץ" />
                <input className="input-outcome" placeholder="אפריל" />
                <input className="input-outcome" placeholder="מאי" />
                <input className="input-outcome" placeholder="יוני" />
                <input className="input-outcome" placeholder="יולי" />
                <input className="input-outcome" placeholder="אוגוסט" />
                <input className="input-outcome" placeholder="ספטמבר" />
                <input className="input-outcome" placeholder="אוקטובר" />
                <input className="input-outcome" placeholder="נובמבר" />
                <input className="input-outcome" placeholder="דצמבר" />
                <input className="input-outcome" placeholder='סה"כ' />
              </div>
            </div>
            <div className="expenses revenue">
              <div className="expenses-first">
                <div className="expenses-name">
                  <img src={revenueImg} />
                  <div>הכנסות</div>
                </div>
                <div className="expenses-btns picked-btn">הכל</div>
                <div className="expenses-btns"> הכנסות שוטפות</div>
                <div className="expenses-btns ">הכנסות נוספות</div>
              </div>
            </div>
            <div className="exposes-table">
              <div className="revenue-items">
                {revenue.map((rev) => {
                  return <div>{rev}</div>;
                })}
              </div>
              <div className="table-row-container">
                <div className="table-row-exposes">
                  <input className="input-outcome" placeholder="דמי ועד " />
                  <select className="input-outcome select-inp">
                    <option>בחר</option>
                    <option> הכנסות שוטפות</option>
                    <option> הכנסות נוספות</option>
                  </select>
                  <input className="input-outcome" placeholder="פירוט" />
                  <input className="input-outcome" placeholder="ינואר" />
                  <input className="input-outcome" placeholder="פברואר" />
                  <input className="input-outcome" placeholder="מרץ" />
                  <input className="input-outcome" placeholder="אפריל" />
                  <input className="input-outcome" placeholder="מאי" />
                  <input className="input-outcome" placeholder="יוני" />
                  <input className="input-outcome" placeholder="יולי" />
                  <input className="input-outcome" placeholder="אוגוסט" />
                  <input className="input-outcome" placeholder="ספטמבר" />
                  <input className="input-outcome" placeholder="אוקטובר" />
                  <input className="input-outcome" placeholder="נובמבר" />
                  <input className="input-outcome" placeholder="דצמבר" />
                  <input className="input-outcome" placeholder='סה"כ' />
                </div>
              </div>
            </div>
            <div className="expenses revenue">
              <div className="expenses-first">
                <div className="expenses-name">
                  <img src={blueMeazanImg} />
                  <div>מאזן חודשי</div>
                </div>
              </div>
            </div>
            <div className="exposes-table">
              <div className="revenue-items meazan-items">
                {meazan.map((meaz) => {
                  return <div>{meaz}</div>;
                })}
              </div>
              <div className="table-row-container">
                <div className="table-row-exposes">
                  <div className="meazan-row-name">
                    מאזן חודשי (הכנסות פחות הוצאות)
                  </div>
                  <div className="input-outcome meazan-item"> 60,000₪</div>
                  <div className="input-outcome meazan-item red-meazan">
                    {" "}
                    60,000₪ -
                  </div>
                  <div className="input-outcome meazan-item"> 60,000₪</div>
                  <div className="input-outcome meazan-item red-meazan">
                    {" "}
                    60,000₪ -
                  </div>
                  <div className="input-outcome meazan-item "> 60,000₪ </div>
                  <div className="input-outcome meazan-item red-meazan">
                    {" "}
                    60,000₪ -
                  </div>
                  <div className="input-outcome meazan-item"> 60,000₪</div>
                  <div className="input-outcome meazan-item red-meazan">
                    {" "}
                    60,000₪ -
                  </div>
                  <div className="input-outcome meazan-item"> 60,000₪</div>
                  <div className="input-outcome meazan-item red-meazan">
                    {" "}
                    60,000₪ -
                  </div>
                  <div className="input-outcome meazan-item"> 60,000₪</div>
                  <div className="input-outcome meazan-item red-meazan">
                    {" "}
                    60,000₪ -
                  </div>
                  <div className="input-outcome meazan-item"> 60,000₪</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section3 sec" id="work" ref={workRef}>
          <div className="section">
            <img className="top-nav-icons" src={idImg} />{" "}
            <span className="sectionTitle"> אחזקה</span>
            <div className="borderDiv"></div>
          </div>
          <div className="work-content">
            <div className="right-buttons-works">
              <div
                className={
                  selectedINWorks == "elevator"
                    ? "top-nav-buttons heshbonot-btns work-btn"
                    : "top-nav-buttons work-btn"
                }
                onClick={() => {
                  setSelectedINWorks("elevator");
                }}
              >
                <img
                  className="top-nav-icons icon2 "
                  src={
                    selectedINWorks == "elevator" ? qualifyWhiteImg : meazanImg
                  }
                />{" "}
                מעלית
              </div>
              <div
                className={
                  selectedINWorks == "water"
                    ? "top-nav-buttons heshbonot-btns work-btn"
                    : "top-nav-buttons work-btn"
                }
                onClick={() => {
                  setSelectedINWorks("water");
                }}
              >
                <img
                  className="top-nav-icons icon2 "
                  src={selectedINWorks == "water" ? qualifyWhiteImg : meazanImg}
                />{" "}
                מערכת מים
              </div>
              <div
                className={
                  selectedINWorks == "fireFighting"
                    ? "top-nav-buttons heshbonot-btns work-btn"
                    : "top-nav-buttons work-btn"
                }
                onClick={() => {
                  setSelectedINWorks("fireFighting");
                }}
              >
                <img
                  className="top-nav-icons icon2"
                  src={
                    selectedINWorks == "fireFighting"
                      ? qualifyWhiteImg
                      : meazanImg
                  }
                />{" "}
                כיבוי אש
              </div>
              <div
                className={
                  selectedINWorks == "pest"
                    ? "top-nav-buttons heshbonot-btns work-btn"
                    : "top-nav-buttons work-btn"
                }
                onClick={() => {
                  setSelectedINWorks("pest");
                }}
              >
                <img
                  className="top-nav-icons icon2"
                  src={selectedINWorks == "pest" ? qualifyWhiteImg : meazanImg}
                />{" "}
                הדברה
              </div>
              <div
                className={
                  selectedINWorks == "roofMaintenance"
                    ? "top-nav-buttons heshbonot-btns work-btn"
                    : "top-nav-buttons work-btn"
                }
                onClick={() => {
                  setSelectedINWorks("roofMaintenance");
                }}
              >
                <img
                  className="top-nav-icons icon2"
                  src={
                    selectedINWorks == "roofMaintenance"
                      ? qualifyWhiteImg
                      : meazanImg
                  }
                />{" "}
                אחזקת גג
              </div>
              <div
                className={
                  selectedINWorks == "buildingSecurity"
                    ? "top-nav-buttons heshbonot-btns work-btn"
                    : "top-nav-buttons work-btn"
                }
                onClick={() => {
                  setSelectedINWorks("buildingSecurity");
                }}
              >
                <img
                  className="top-nav-icons icon2"
                  src={
                    selectedINWorks == "buildingSecurity"
                      ? qualifyWhiteImg
                      : meazanImg
                  }
                />{" "}
                ביטחון בניין
              </div>
            </div>
            <div className="left-side-works work-btn">
              {selectedINWorks == "elevator" && (
                <div>
                  <div className="revenue-items work-items">
                    {elevator_work.map((meaz) => {
                      return <div>{meaz}</div>;
                    })}
                  </div>
                  <div className="work-table">
                    <div className="table-work-content">
                      {elevator_table.map((e, i) => {
                        return (
                          <div className="row-content">
                            <div>{e.elevator}</div>
                            <div>{e.nameOfProvider}</div>
                            <div className="a">{e.nameOfElevatorCompany}</div>
                            <div className="b">{e.numOfOffice}</div>
                            <div className="d">{e.numOfCreator}</div>
                            <div className="e">{e.statusCheck}</div>
                            <div className="e">{e.statusCheck}</div>
                            <div className="f">{e.lastDateCheck}</div>
                            <div className="g">{e.endDate}</div>
                            <div className="files-work">
                              <div>
                                <img src={bankImg} />
                              </div>
                              <div>
                                {/* {e.files.file2} */}
                                <img src={bankImg} />
                              </div>
                            </div>
                            <div className="files-work reviews-work">
                              <div>
                                <img src={bankImg} />
                              </div>
                              <div>
                                {/* {e.files.file2} */}
                                <img src={bankImg} />
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="section4 sec" id="providers" ref={providersRef}>
          <div className="section">
            <img className="top-nav-icons" src={providersImg} />{" "}
            <span className="sectionTitle">ספקים </span>
            <div className="borderDiv"></div>
          </div>
          <div>
            <div></div>
            <div className="providers">
              <div className="row header">
                {providers_titles.map((t, idx) => (
                  <div key={idx} className="cell">
                    {t}
                  </div>
                ))}
              </div>

              {providersMock.map((p, idx) => (
                <div
                  key={idx}
                  className={idx % 2 == 1 ? "row " : "row table-row-providers"}
                >
                  <div className="cell">{p.name}</div>
                  <div className="cell">{p.beneficiary}</div>
                  <div className="cell">{p.bank}</div>
                  <div className="cell">{p.branch}</div>
                  <div className="cell">{p.account_num}</div>
                  <div className="cell">{p.contact}</div>
                  <div className="cell">{p.phone}</div>
                  <div className="cell">{p.another_phone}</div>
                  <div className="cell">{p.mail}</div>
                  <div className="cell">{p.company_num}</div>
                  <div>
                    {" "}
                    <img className="cell ml" src={bankImg} />
                    <img className="cell " src={bankImg} />{" "}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="section5 sec" id="payments" ref={paymentsRef}>
          <div className="section">
            <img className="top-nav-icons" src={providersImg} />{" "}
            <span className="sectionTitle">תשלומים </span>
            <div className="borderDiv"></div>
          </div>
          <div className="payment-container">
            <div>
              <div
                className={
                  pickedPayment != "invoices"
                    ? "payments-btns-picked payments-btns"
                    : "payments-btns"
                }
                onClick={() => {
                  setPickedPayment("invoices");
                }}
              >
                <img
                  className="payment-imgs"
                  src={pickedPayment == "invoices" ? ImgPayment1 : ImgPayment12}
                />
                <span>חשבוניות</span>
              </div>
              <div
                className={
                  pickedPayment != "receipts"
                    ? "payments-btns-picked payments-btns"
                    : "payments-btns"
                }
                onClick={() => {
                  setPickedPayment("receipts");
                }}
              >
                <img
                  className="payment-imgs"
                  src={pickedPayment != "receipts" ? ImgPayment2 : ImgPayment22}
                />
                <span>חשבוניות</span>
              </div>
            </div>
            <div>
              <div className="top-payment">
                <input className="inpt-payment" placeholder="חיפוש משימה" />
                <div className="add-file-pay">הוספת מסמך חדש</div>
                <div className="dates-pay"> טווח תאריכים </div>
              </div>
              <div>
                <table>
                  <tr>
                    <td className="payment-table-title">שם מסמך</td>
                    <td className="payment-table-title">תאריך</td>
                    <td className="payment-table-title">סטטוס</td>
                    <td className="payment-table-title">מספר</td>
                    <td className="payment-table-title">סכום</td>
                  </tr>
                  <tr className="blue-bg">
                    <td>דרישת תשלום ינואר 25</td>
                    <td>17 בינואר 2025</td>
                    <td>פתוח</td>
                    <td>10023</td>
                    <td>20,000₪</td>
                  </tr>
                  <tr>
                    <td>דרישת תשלום ינואר 25</td>
                    <td>17 בינואר 2025</td>
                    <td>פתוח</td>
                    <td>10023</td>
                    <td>20,000₪</td>
                  </tr>
                  <tr className="blue-bg">
                    <td>דרישת תשלום ינואר 25</td>
                    <td>17 בינואר 2025</td>
                    <td>פתוח</td>
                    <td>10023</td>
                    <td>20,000₪</td>
                  </tr>
                  <tr>
                    <td>דרישת תשלום ינואר 25</td>
                    <td>17 בינואר 2025</td>
                    <td>פתוח</td>
                    <td>10023</td>
                    <td>20,000₪</td>
                  </tr>
                  <tr className="blue-bg">
                    <td>דרישת תשלום ינואר 25</td>
                    <td>17 בינואר 2025</td>
                    <td>פתוח</td>
                    <td>10023</td>
                    <td>20,000₪</td>
                  </tr>
                  <tr>
                    <td>דרישת תשלום ינואר 25</td>
                    <td>17 בינואר 2025</td>
                    <td>פתוח</td>
                    <td>10023</td>
                    <td>20,000₪</td>
                  </tr>
                  <tr className="blue-bg">
                    <td>דרישת תשלום ינואר 25</td>
                    <td>17 בינואר 2025</td>
                    <td>פתוח</td>
                    <td>10023</td>
                    <td>20,000₪</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="section8 sec" id="docs" ref={docsRef}>
          <div className="section">
            <img className="top-nav-icons" src={filesImg} />{" "}
            <span className="sectionTitle"> מסמכים</span>
            <div className="borderDiv"></div>
          </div>
          <div>
            <div className="top-payment">
              <input className="inpt-payment" placeholder="חיפוש משימה" />
              <div className="add-file-pay">הוספת מסמך חדש</div>
              <div className="add-file-pay">הוספת תיקייה חדשה</div>
              <div className="dates-pay"> טווח תאריכים </div>
            </div>

            <div className="files-content">
              <div className="files-btns-container">
                <div
                  className={
                    pickedFiles == "insurance policies"
                      ? "files-btns files-btns-picked"
                      : "files-btns "
                  }
                  onClick={() => {
                    setPickedFiles("insurance policies");
                  }}
                >
                  פוליסות ביטוח
                </div>
                <div
                  className={
                    pickedFiles == "receipts"
                      ? "files-btns files-btns-picked"
                      : "files-btns "
                  }
                  onClick={() => {
                    setPickedFiles("receipts");
                  }}
                >
                  קבלות
                </div>
                <div
                  className={
                    pickedFiles == "invoices"
                      ? "files-btns files-btns-picked"
                      : "files-btns "
                  }
                  onClick={() => {
                    setPickedFiles("invoices");
                  }}
                >
                  חשבוניות
                </div>
                <div className="special-files-btn">צור טאב חדש</div>
              </div>
              <div className="files-container">
                <div>
                  <img src={ImgDoc} className="files-doc-img" />
                  <div>פוליסת ביטוח 123</div>
                </div>
                <div>
                  <img src={ImgDoc} className="files-doc-img" />
                  <div>פוליסת ביטוח 123</div>
                </div>
                <div>
                  <img src={ImgDoc} className="files-doc-img" />
                  <div>פוליסת ביטוח 123</div>
                </div>
                <div>
                  <img src={ImgDoc} className="files-doc-img" />
                  <div>פוליסת ביטוח 123</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section7 sec" id="tasks" ref={tasksRef}>
          <div className="section">
            <img className="top-nav-icons" src={paymentsImg} />{" "}
            <span className="sectionTitle"> משימות</span>
            <div className="borderDiv"></div>
          </div>
          <div>
            <div className="top-payment tasks">
              <input className="inpt-payment" placeholder="חיפוש משימה" />
              <img src={filterImg} />
              <div className="filter-name">סינון </div>
            </div>

            <div className="task-cards-container">
              <div className="">
                <div className="task-title">משימות חדשות</div>
                <div className="task-card">
                  <div className="task">
                    <div className="top-task">
                      <div className="task-status">שותף</div>
                      <div className="task-icons">
                        <img src={deleteImg} />
                        <img src={editImg} />
                      </div>
                    </div>
                    <div className="task-content"> החלפת נורה בקומה 3</div>
                    <div className="task_text_small">15.1.24. 16:00</div>
                  </div>
                  <div className="task">
                    <div className="top-task">
                      <div className="task-status yellowBG">בלת״ם</div>
                      <div className="task-icons">
                        <img src={deleteImg} />
                        <img src={editImg} />
                      </div>
                    </div>
                    <div className="task-content"> החלפת נורה בקומה 3</div>
                    <div className="task_text_small">15.1.24. 16:00</div>
                  </div>
                  <div className="new-task-container">
                    <div className="top-task">
                      <div className="new-task-title">הוספת משימה חדשה</div>
                      <div className="task-icons">
                        <img src={deleteImg} />
                      </div>
                    </div>
                    <textarea
                      placeholder="מה המשימה הבאה?"
                      className="new-task-textarea"
                    ></textarea>
                    <div className="new-task-btns-cont">
                      <img src={newTaskImg} />
                      <div className="new-task-btn">שותף</div>
                      <div className="new-task-btn">בלת״ם</div>
                      <div className="new-task-btn">אחזקה</div>
                      <div className="new-task-btn">דחוף</div>
                    </div>
                    <div className="add-task-btn">הוספת משימה</div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="task-title">משימות בטיפול</div>
                <div className="task-card">
                  <div className="task">
                    <div className="top-task">
                      <div className="task-status">שותף</div>
                      <div className="task-icons">
                        <img src={deleteImg} />
                        <img src={editImg} />
                      </div>
                    </div>
                    <div className="task-content"> החלפת נורה בקומה 3</div>
                    <div className="task_text_small">15.1.24. 16:00</div>
                  </div>{" "}
                  <div className="task">
                    <div className="top-task">
                      <div className="task-status yellowBG">בלת״ם</div>
                      <div className="task-icons">
                        <img src={deleteImg} />
                        <img src={editImg} />
                      </div>
                    </div>
                    <div className="task-content"> החלפת נורה בקומה 3</div>
                    <div className="task_text_small">15.1.24. 16:00</div>
                  </div>{" "}
                  <div className="task">
                    <div className="top-task">
                      <div className="task-status redBG">תקופתית</div>
                      <div className="task-icons">
                        <img src={deleteImg} />
                        <img src={editImg} />
                      </div>
                    </div>
                    <div className="task-content"> החלפת נורה בקומה 3</div>
                    <div className="task_text_small">15.1.24. 16:00</div>
                  </div>{" "}
                  <div className="task">
                    <div className="top-task">
                      <div className="task-status blueBG">תחזוקה</div>
                      <div className="task-icons">
                        <img src={deleteImg} />
                        <img src={editImg} />
                      </div>
                    </div>
                    <div className="task-content"> החלפת נורה בקומה 3</div>
                    <div className="task_text_small">15.1.24. 16:00</div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="task-title">משימות שהסתיימו</div>
                <div className="task-card">
                  <div className="task">
                    <div className="top-task">
                      <div className="task-status">שותף</div>
                      <div className="task-icons">
                        <img src={deleteImg} />
                        <img src={editImg} />
                      </div>
                    </div>
                    <div className="task-content"> החלפת נורה בקומה 3</div>
                    <div className="task_text_small">15.1.24. 16:00</div>
                  </div>{" "}
                  <div className="task">
                    <div className="top-task">
                      <div className="task-status yellowBG">בלת״ם</div>
                      <div className="task-icons">
                        <img src={deleteImg} />
                        <img src={editImg} />
                      </div>
                    </div>
                    <div className="task-content"> החלפת נורה בקומה 3</div>
                    <div className="task_text_small">15.1.24. 16:00</div>
                  </div>{" "}
                  <div className="task">
                    <div className="top-task">
                      <div className="task-status redBG">תקופתית</div>
                      <div className="task-icons">
                        <img src={deleteImg} />
                        <img src={editImg} />
                      </div>
                    </div>
                    <div className="task-content"> החלפת נורה בקומה 3</div>
                    <div className="task_text_small">15.1.24. 16:00</div>
                  </div>{" "}
                  <div className="task">
                    <div className="top-task">
                      <div className="task-status blueBG">תחזוקה</div>
                      <div className="task-icons">
                        <img src={deleteImg} />
                        <img src={editImg} />
                      </div>
                    </div>
                    <div className="task-content"> החלפת נורה בקומה 3</div>
                    <div className="task_text_small">15.1.24. 16:00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section6 sec" id="chat" ref={chatRef}>
          <div className="section">
            <img className="top-nav-icons" src={chatImg} />{" "}
            <span className="sectionTitle"> צ׳אט</span>
            <div className="borderDiv"></div>
          </div>
          <div className="chat-container">
            <div className="right-chat">
              <div className="chat-item chat-item-picked">
                <img width={32} src={buildingImg} />
                <div className="chat-item-name">ועד הבניין</div>
              </div>
              <div className="chat-item">
                <img width={24} src={buildingImg} />
                <div className="chat-item-name">
                  {" "}
                  יעקב כהן
                  <div className="chat-item-name-sm">יו"ר הועד</div>
                </div>
              </div>{" "}
              <div className="chat-item">
                <img width={24} src={buildingImg} />
                <div className="chat-item-name">
                  רונית לוי<div className="chat-item-name-sm">חבר</div>
                </div>
              </div>{" "}
              <div className="chat-item">
                <img width={24} src={buildingImg} />
                <div className="chat-item-name">
                  שי ברק
                  <div className="chat-item-name-sm">חברה</div>
                </div>
              </div>
            </div>
            <div className="left-chat">
              <div className="top-chat-body-cont">
                <input
                  className="chat-search-inp"
                  placeholder="חיפוש מסמך, הודעה או לינק…"
                />
                <img width={4} height={18} src={dotsImg} />
              </div>
              <div className="sec-message-container">
                <img width={46} height={46} src={humanImg} />
                <div className="sec-message">
                  <img className="chat_t" src={chat_cImg} />
                  <div className="message-body-cont">
                    <div dir="ltr" className="msg-title">
                      <span className="msg-time">23:25</span>
                      יעל | OPTIMUM
                    </div>
                    <div className="msg-body">
                      שלום, היום בוצע תיקון מעלית ע”י שינדלר. הכול חזר לפעולה
                      רגילה.
                    </div>
                  </div>
                </div>
              </div>
              <div className="sec-message-container">
                <img width={46} height={46} src={humanImg} />
                <div className="sec-message">
                  <img className="chat_t" src={chat_cImg} />
                  <div className="message-body-cont">
                    <div dir="ltr" className="msg-title">
                      <span className="msg-time">23:25</span>
                      יעל | OPTIMUM
                    </div>
                    <div className="msg-body">
                      שלום, היום בוצע תיקון מעלית ע”י שינדלר. הכול חזר לפעולה
                      רגילה.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Management;

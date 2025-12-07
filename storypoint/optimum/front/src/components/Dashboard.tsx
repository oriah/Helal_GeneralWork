import React, { useEffect, useState } from "react";
import "./Hero.css";
import "./Dashboard.css";

import filterImg from "../assets/filter.png";
import apartmentImg from "../assets/apartment.png";
import box_imgImg from "../assets/box_img.png";
import phoneImg from "../assets/phone.png";
import copyImg from "../assets/copy.png";
import y_dotImg from "../assets/y_dot.png";
import buildingImg from "../assets/building.png";
import WA_LogoImg from "../assets/WA_Logo.png";
import addFileImage from "../assets/add_file.png";
import documentImage from "../assets/document.png";
import user from "../assets/users.png";
import phoneImage from "../assets/phone_i.png";
import mailImage from "../assets/email_i.png";
import markerImage from "../assets/marker.png";
import bankImage from "../assets/bank.png";
import copyImage from "../assets/copy.png";
import user2Img from "../assets/user2.png";
import { NavLink, useNavigate } from "react-router-dom";

const Dashboard = ({ data }) => {
  const buildings = [
    { id: "1", img: apartmentImg, name: "בני ברק", num: "2" },
    { id: "2", img: apartmentImg, name: "תל אביב", num: "5" },
    { id: "3", img: apartmentImg, name: "רמת גן", num: "3" },
    { id: "4", img: apartmentImg, name: "פתח תקווה", num: "1" },
    { id: "5", img: apartmentImg, name: " חולון", num: "9" },
    { id: "6", img: apartmentImg, name: " בת ים", num: "1" },
    { id: "7", img: apartmentImg, name: " חיפה", num: "3" },
    { id: "8", img: apartmentImg, name: " נתניה", num: "1" },
  ];

  const building_assets = [
    {
      id: "1",
      name: "גפן 9 חריש",
      address: {
        city: "חריש",
        street: "גפן 9",
        apartment_num: 9,
        floor_num: 7,
        entries_num: 7,
      },
      bank: {
        name: "מזרחי טופחות (20)",
        branch_num: 593,
        account_num: 100835,
        bank: "לאומי",
      },
      user: { userCode: "5933615800", pass: "shayop2024" },
      contactInfo1: { startTime: "27/08/25", fileContract: "txt.txt" },
      insuranceInfo: {
        insuranceAgency: "a",
        insuranceCompany: "a",
        insuranceCompany2: "a",
        insuranceEndDate: "27/08/27",
        insurancePolicyDocument: "txt.txt",
      },
      entries: {
        codeEntry1: "2424",
        codeEntry2: "2425",
        codeRooftopEntry: "2222",
      },
      contactSocialInfo: { whatsapp: "0543596768", email: "e@gmail.com" },
    },
    {
      id: "2",
      name: "גפן 9 חריש",
      address: {
        city: "חריש",
        street: "גפן 9",
        apartment_num: 9,
        floor_num: 7,
        entries_num: 7,
      },
      bank: {
        name: "מזרחי טופחות (20)",
        branch_num: 593,
        account_num: 100835,
        bank: "לאומי",
      },
      user: { userCode: "5933615800", pass: "shayop2024" },
      contactInfo1: { startTime: "27/08/25", fileContract: "txt.txt" },
      insuranceInfo: {
        insuranceAgency: "a",
        insuranceCompany: "a",
        insuranceCompany2: "a",
        insuranceEndDate: "27/08/27",
        insurancePolicyDocument: "txt.txt",
      },
      entries: {
        codeEntry1: "2424",
        codeEntry2: "2425",
        codeRooftopEntry: "2222",
      },
      contactSocialInfo: { whatsapp: "0543596768", email: "e@gmail.com" },
    },
    {
      id: "3",
      name: " 9 חריש",
      address: {
        city: "חריש",
        street: "גפן 9",
        apartment_num: 9,
        floor_num: 7,
        entries_num: 7,
      },
      bank: {
        name: "מזרחי טופחות (20)",
        branch_num: 593,
        account_num: 100835,
        bank: "לאומי",
      },
      user: { userCode: "5933615800", pass: "shayop2024" },
      contactInfo1: { startTime: "27/08/25", fileContract: "txt.txt" },
      insuranceInfo: {
        insuranceAgency: "a",
        insuranceCompany: "a",
        insuranceCompany2: "a",
        insuranceEndDate: "27/08/27",
        insurancePolicyDocument: "txt.txt",
      },
      entries: {
        codeEntry1: "2424",
        codeEntry2: "2425",
        codeRooftopEntry: "2222",
      },
      contactSocialInfo: { whatsapp: "0543596768", email: "e@gmail.com" },
    },
    {
      id: "4",
      name: "גפן 9 חריש",
      address: {
        city: "חריש",
        street: "גפן 9",
        apartment_num: 9,
        floor_num: 7,
        entries_num: 7,
      },
      bank: {
        name: "מזרחי טופחות (20)",
        branch_num: 593,
        account_num: 100835,
        bank: "לאומי",
      },
      user: { userCode: "5933615800", pass: "shayop2024" },
      contactInfo1: { startTime: "27/08/25", fileContract: "txt.txt" },
      insuranceInfo: {
        insuranceAgency: "a",
        insuranceCompany: "a",
        insuranceCompany2: "a",
        insuranceEndDate: "27/08/27",
        insurancePolicyDocument: "txt.txt",
      },
      entries: {
        codeEntry1: "2424",
        codeEntry2: "2425",
        codeRooftopEntry: "2222",
      },
      contactSocialInfo: { whatsapp: "0543596768", email: "e@gmail.com" },
    },
  ];
  const cards = [
    {
      id: "1",
      img: box_imgImg,
      address: "חזון איש 10, תל אביב ",
      contact_name: "יעקב כהן",
      phone: "0501234567",
      date: "(01.06.25)",
      price: "5,000",
    },
    {
      id: "2",
      img: box_imgImg,
      address: "חזון איש 10, בני ברק ",
      contact_name: "יעקב כהן",
      phone: "0501234567",
      date: "(01.06.25)",
      price: "5,000",
    },
    {
      id: "3",
      img: box_imgImg,
      address: "חזון איש 10, בני ברק ",
      contact_name: "יעקב כהן",
      phone: "0501234567",
      date: "(01.06.25)",
      price: "5,000",
    },
    {
      id: "4",
      img: box_imgImg,
      address: "חזון איש 10, בני ברק ",
      contact_name: "יעקב כהן",
      phone: "0501234567",
      date: "(01.06.25)",
      price: "5,000",
    },
  ];
  const titles = [
    { key: "id", name: "תעודת זהות" },
    { key: "accounting", name: " חשבונאות" },
    { key: "maintenance", name: " אחזקה" },
    { key: "Building_insurance", name: " ביטוח מבנה" },
    { key: "tasks", name: "  משימות" },
    { key: "chat", name: " צ'אט" },
  ];
  const navigate = useNavigate();
  const [buildingsData, setBuildingsData] = useState([]);
  const [filteredCards, setFilteredCards] = useState(buildingsData);
  const [pickedFilter, setPickedFilter] = useState("all");
  const handleFilterCards = (picked: string) => {
    console.log("picked", picked, picked == "all");
    let filtered = buildingsData;

    if (!picked || picked == "all") {
      setFilteredCards(filtered);
      return;
    }
    setPickedFilter(picked);
    filtered = buildingsData.filter((card) => {
      return card?.name.includes(picked);
    });
    setFilteredCards(filtered);
  };
  const [titleSelected, setTitleSelected] = useState("id");
  const [cardViewInfo, setCardViewInfo] = useState(cards[0]);
  const [cardViewOpen, setCardViewOpen] = useState(false);

  // const handleCardView = (cardId: String) => {
  //   setCardViewInfo(cards[0]);
  //   setCardViewOpen(true);
  //   console.log(cardViewInfo);
  // };

  useEffect(() => {
    console.log(data, "ss");
    setBuildingsData(data);
    setFilteredCards(data);
  }, [data]);

  const handlePickedSideTitle = (picked: String) => {
    setTitleSelected(picked);
  };
  return (
    <div className="main-dashboard">
      {/* left side view */}
      {/* {cardViewOpen && (
        <div className="SideCardView">
          <button
            onClick={() => {
              setCardViewOpen(false);
            }}
          >
            close
          </button>
          <div className="top-side-viewcard" dir="rtl">
            <img className="side-viewcard-image" src={box_imgImg} />
            <h1 className="side-view-top-title">{cardViewInfo.address} </h1>
            <img src={WA_LogoImg} />
            <img src={addFileImage} />
          </div>

          <div className="side-viewcard-titles" dir="rtl">
            {titles.map((t) => {
              return (
                <span
                  key={t.key}
                  className={
                    titleSelected !== t.key ? "title-name" : "title-name-picked"
                  }
                  onClick={(e) => {
                    handlePickedSideTitle(t.key);
                  }}
                >
                  {t.name}
                </span>
              );
            })}
          </div>

          <div className="side-viewcard-content-main">
            {titleSelected == "id" && (
              <div className="a" dir="rtl">
                <div className="side-viewcard-content-parent">
                  <div className="side-viewcard-content">
                    הסכם אחקה
                    <span>
                      <img src={documentImage} />
                    </span>
                  </div>
                </div>
                <div className="side-viewcard-contact">
                  <div className="contact-top">
                    <img src={user} />
                    <text>אנשי קשר</text>
                    <button className="btn">הוספת איש קשר</button>
                  </div>
                </div>
                <div className="contact-body">
                  <div className="contact-body-info">
                    <text>יעקב כהן</text>
                    <text>050-1234567</text>
                    <text>Email@gmail.com</text>
                  </div>
                  <img src={phoneImage} />
                  <img src={mailImage} />
                </div>
                <div className="contact-body">
                  <div className="contact-body-info">
                    <text>יעקב כהן</text>
                    <text>050-1234567</text>
                    <text>Email@gmail.com</text>
                  </div>
                  <img src={phoneImage} />
                  <img src={mailImage} />
                </div>
                <div className="contact-body">
                  <div className="contact-body-info">
                    <text>יעקב כהן</text>
                    <text>050-1234567</text>
                    <text>Email@gmail.com</text>
                  </div>
                  <img src={phoneImage} />
                  <img src={mailImage} />
                </div>
                <div className="info-content">
                  <div className="a">
                    <div className="info-content-inner">
                      <img src={markerImage} />
                      <text>כתובת</text>
                    </div>
                    <div className="bank-info2">
                      <img src={copyImage} />
                      <div className="a">
                        <text>חזון איש 10, דירה 1 בני ברק,</text>
                        <br />
                        <text>מיקוד 5153110 עבור: ועד הבית</text>
                        <br />
                        <text>– חזון איש 10</text>
                      </div>
                    </div>
                  </div>
                  <div className="a">
                    <div className="info-content-inner">
                      <img src={bankImage} />
                      <text>פרטי הבנק</text>
                    </div>
                    <div className="bank-info">
                      <text>בנק פועלים 12</text>
                      <br />

                      <text>סניף 123</text>
                      <br />

                      <text>חשבון 98765432</text>
                    </div>
                  </div>
                </div>

                <button className="btn getDocumentbtn">
                  {" "}
                  הפקת מכתב עם כתובת זו
                </button>

                <div>a</div>
              </div>
            )}
          </div>
        </div>
      )} */}
      <div className="hero-places-cards-container">
        {filteredCards.map((card, ind) => {
          return (
            <div
              className="hero-card"
              key={card.id}
              // onClick={() => {
              //   handleCardView(card.id);
              // }}
            >
              <div className="hero-card-container">
                <div className="card-content">
                  <img className="card-image" src={box_imgImg} />
                  <div className="left-side-card-content">
                    <h3> {card.name} </h3>
                    <div className="card-content-inner">
                      <div className="card-content-inner-section">
                        <div className="right-side">
                          <img width={20} height={20} src={bankImage} />
                          <div className="m-bold-text">פרטי הבנק</div>
                        </div>
                        <div className="left-side">
                          <div className="left-side-cont">
                            <div>{card.bank_name}</div>
                            <div>{card.bank_branch_num}</div>
                            <div>{card.bank_account_num}</div>
                          </div>
                          <img width={26} height={26} src={copyImg} />
                        </div>
                      </div>
                      <br />

                      <div className="card-content-inner-section">
                        <div className="right-side">
                          <img width={20} height={20} src={user2Img} />
                          <div className="m-bold-text">פרטי משתמש</div>
                        </div>
                        <div className="left-side">
                          <div className="left-side-cont">
                            <div className="sec1">
                              {card.userCode}
                              <span className="s-bold-text"> :קוד משתמש</span>
                            </div>
                            <div className="sec2">
                              {card.pass}
                              <span className="s-bold-text"> :סיסמא</span>
                            </div>
                          </div>
                          <img width={26} height={26} src={copyImg} />
                        </div>
                      </div>
                      {/* <div className="info-content">
                        <span className="">{card.whatsapp} </span>
                        <span className="">{card.email}</span>
                        <img src={copyImg} />
                        <img src={phoneImg} />
                      </div> */}
                      <br />
                      {/* <span className="pay-info">
                        {" "}
                        <span>27/08/25</span>
                        <span>תשלום אחרון:</span>
                        <span>₪500</span>
                      </span> */}
                      <br />
                      <br />
                      {/* <div className="info-content">
                        <img src={y_dotImg} />
                        <span className=""> תקלה פתוחה: תיקון מעלית </span>
                      </div> */}
                      <div className="card-btns-dash">
                        <div
                          className=" btns btn1"
                          onClick={() => {
                            console.log(card);
                            navigate("/management", {
                              state: { building: card },
                            });
                          }}
                        >
                          <img src={buildingImg} />
                          <span>ניהול נכס</span>
                        </div>
                        <div className=" btns btn2">
                          <img src={WA_LogoImg} />
                          <span className=""> שליחת הודעה</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;

// src/CustomerPage.jsx

import backImg from "../assets/images/back.png";
import bellIcon from "../assets/images/bell-notification-social-media (3).png";
import caretUpWhite from "../assets/images/caret-up-white.png";
import proposalGreen from "../assets/images/Proposal_green.png";
import iconGreen from "../assets/images/Icon-green.png";
import IconWhite from "../assets/images/Icon_white.png";
import uploadIcon from "../assets/images/upload (3).png";
import documentIcon from "../assets/images/document (12).png";
import downloadIcon from "../assets/images/download (3).png";
import commentsIcon from "../assets/images/comments (1).png";
import editIcon from "../assets/images/edit (2).png";
import avatarEllipse from "../assets/images/Ellipse 1.png";
import menuDots from "../assets/images/menu-dots (1).png";
import purpleCheck from "../assets/images/check-purple.png";
import greenCheck from "../assets/images/check-green.png";
import blueCheck from "../assets/images/check-blue.png";
import icon1White from "../assets/images/Icon-1-white.png";
import icon2White from "../assets/images/Icon-2-white.png";
import icon3White from "../assets/images/Icon-3-white.png";
import wrenchWhite from "../assets/images/wrench-alt-white.png";
import sheildWhite from "../assets/images/shield-check (1).png";
import icon1Yellow from "../assets/images/Icon-1-yellow.png";

import "./CustomerPage.css";
import { useState } from "react";
export default function CustomerPage() {
  const [process, setProcess] = useState("proposal archi material");
  return (
    <div className="customers">
      <div className="backbtn">
        <img src={backImg} alt="חזרה" />
        חזרה ללקוחות
      </div>

      <div className="topDashboard">
        <div className="TitleDashboard_Cont">
          <h1 className="TitleDashboard">שרה ג׳ונסון</h1>
        </div>

        <div className="notificationDashboard_Cont">
          <div className="notificationDashboad">
            <img
              className="notifImg"
              width="20"
              height="20"
              src={bellIcon}
              alt="התראות"
            />
            <div className="square">
              <span>3</span>
            </div>
            <div className="notifName">התראות</div>
            <img className="arrow" width="14" src={caretUpWhite} alt="חץ" />
          </div>
        </div>
      </div>

      <div className="CustomerPageBtns">
        <div
          className={
            process.includes("proposal")
              ? " customerBtn customerBtnPicked"
              : "customerBtn "
          }
          onClick={() => {
            setProcess("proposal");
          }}
        >
          <img
            width="12"
            src={process.includes("proposal") ? blueCheck : proposalGreen}
            alt="הצעות"
          />
          הצעות מחיר
        </div>

        <div
          className={
            process.includes("archi")
              ? "customerBtn customerBtnPickedArch"
              : "customerBtn "
          }
          onClick={() => {
            setProcess("archi");
          }}
        >
          {process.includes("archi") ? (
            <img src={greenCheck} alt="תכנון אדריכלי" />
          ) : (
            <img width={16} src={IconWhite} alt="תכנון אדריכלי" />
          )}
          תכנון אדריכלי
        </div>

        <div
          className={
            process.includes("material")
              ? "customerBtn customerBtnPickedYellow"
              : "customerBtn "
          }
          onClick={() => {
            setProcess("archi");
          }}
        >
          <img
            width="18"
            src={process.includes("proposal") ? icon1Yellow : icon1White}
            alt="בחירת חומרים"
          />
          בחירת חומרים
        </div>

        <div className="customerBtn">
          <img width="18" src={icon2White} alt="מפעל" />
          מפעל
        </div>

        <div className="customerBtn">
          <img width="18" src={icon3White} alt="הובלה והתקנה" />
          הובלה והתקנה
        </div>

        <div className="customerBtn">
          <img width="18" src={sheildWhite} alt="בקרת איכות" />
          בקרת איכות
        </div>

        <div className="customerBtn">
          <img width="18" src={wrenchWhite} alt="תיקונים וסגירה" />
          תיקונים וסגירה
        </div>
      </div>

      {/* Architecture plan */}
      <div className="customerContent">
        <div className="firstContent">
          {/* Right Side */}
          <div className="rightSide">
            <h5 className="title_customerPage">תהליך התכנון</h5>

            <div className="imgUplaodCont">
              <div className="uploadCont">
                <img
                  className="uploadImg"
                  width="28"
                  src={uploadIcon}
                  alt="העלאה"
                />
                <div className="uploadTxt">
                  לחץ להעלאת קבצים או גרור לכאן
                  <br />
                  PDF, DWG, PNG עד 10MB
                </div>
              </div>
            </div>

            <div className="ax">
              <div className="costInner goLeft">
                <span className="costInnerTxt"> גרסאות תוכניות</span>
              </div>
            </div>

            <div className="versionsCont">
              <div className="versionContentCont">
                <div className="versionCont">
                  <div className="circlePurple">
                    <img className="docImg" src={documentIcon} alt="מסמך" />
                  </div>

                  <div className="verTxtCont">
                    <div className="verTxt">גרסה 1.0 - סקיצה ראשונית</div>
                    <div className="verMiniTxt">חוזה • 2.4 MB • 8/15/2024</div>
                  </div>

                  <img className="downloadImg" src={downloadIcon} alt="הורדה" />
                </div>

                <div className="circle circleRight">
                  <img src={commentsIcon} alt="תגובות" />
                </div>
              </div>

              <div className="versionContentCont">
                <div className="versionCont">
                  <div className="circlePurple">
                    <img className="docImg" src={documentIcon} alt="מסמך" />
                  </div>

                  <div className="verTxtCont">
                    <div className="verTxt">גרסה 1.0 - סקיצה ראשונית</div>
                    <div className="verMiniTxt">חוזה • 2.4 MB • 8/15/2024</div>
                  </div>

                  <img className="downloadImg" src={downloadIcon} alt="הורדה" />
                </div>

                <div className="circle circleRight">
                  <img src={commentsIcon} alt="תגובות" />
                </div>
              </div>
            </div>
          </div>

          {/* Left Side */}
          <div className="leftSide">
            <div className="summarizeMoney">
              <div className="topSumMoney">
                <h5 className="title_customerPage">הערות ותקשורת עם אדריכל</h5>

                <button className="IconAndTextBg buttonEdit1">
                  <img width="14" src={editIcon} alt="עריכה" />
                  <span>הוסף הערה</span>
                </button>

                <div className="circle circleRight">
                  <img src={commentsIcon} alt="תגובות" />
                </div>
              </div>

              <div className="sumMoneyContent archiNote">
                <div className="baseNoteCont">
                  <div className="titleBaseCost">
                    <div className="rowLine">
                      <img width="25" src={avatarEllipse} alt="אוואטר" />
                      <div className="txtAvatar">
                        <span className="boldTxt">אלקנה כהן</span>
                        <br />
                        <span className="smTxt">נשלחה הצעת מחיר </span>
                      </div>
                    </div>
                  </div>

                  <div className="topNote rowLine">
                    <div className="circle">
                      <img src={commentsIcon} alt="תגובות" />
                    </div>

                    <div className="checkDone">סמן כ״בוצע״</div>
                    <div className="specTxt">25 אוקטובר 2025</div>

                    <img src={menuDots} alt="תפריט" />
                  </div>
                </div>

                <div className="noteTxt">
                  הלקוח ביקש שדרוג לגימור מטבח פרימיום. נשלחה התאמת הצעת מחיר.
                </div>
              </div>
            </div>

            <div className="checkList">
              <div className="topSumMoney">
                <h5 className="title_customerPage">צ׳קליסט</h5>
                <div className="circle circleRight">
                  <img src={commentsIcon} alt="תגובות" />
                </div>
              </div>

              <div className="checklistBody">
                <div className="topSpecifBegin">
                  <input className="pickCheckBox" type="checkbox" />
                  <span className="smTxt">נשלחה הצעת מחיר </span>
                </div>

                <div className="topSpecifBegin checkboxCont">
                  <input className="pickCheckBox" type="checkbox" />
                  <span className="smTxt"> קיבלנו תגובה</span>
                </div>

                <div className="topSpecifBegin checkboxCont">
                  <input className="pickCheckBox" type="checkbox" />
                  <span className="smTxt"> אישור לקוח</span>
                </div>

                <div className="checkListBtn">
                  המשך לבחירת מסלול (עם או בלי אדריכל)
                </div>
              </div>
            </div>
          </div>

          <div className="aa" />
        </div>
      </div>
    </div>
  );
}

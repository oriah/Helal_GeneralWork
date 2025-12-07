import "./Dashboard.css";
import { useState } from "react";

import notifBell from "../assets/images/bell-notification-social-media (3).png";
import caretUpWhite from "../assets/images/caret-up-white.png";
import arrowTrendUp from "../assets/images/arrow-trend-up.png";
import facebookIcon from "../assets/images/_x30_1._Facebook.png";
import instagramIcon from "../assets/images/instagram (1).png";
import googleIcon from "../assets/images/google (1).png";
import proposalIcon from "../assets/images/Proposal.png";
import architectsIcon from "../assets/images/Icon.png";
import materialsIcon from "../assets/images/Icon-1.png";
import factoryIcon from "../assets/images/Icon-2.png";
import shippingIcon from "../assets/images/Icon-3.png";
import clientsIcon from "../assets/images/Clients.png";
import arrowTrendDown from "../assets/images/arrow-trend-down.png";
import barsFilter from "../assets/images/bars-filter (4).png";
import graphicImg from "../assets/images/graphic.png";
import warningImg from "../assets/images/triangle-warning (5).png";
import waitingImg from "../assets/images/hourglass-end.png";
function Dashboard() {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  return (
    <div className="dashboard">
      <div className="topDashboard">
        <div className="TitleDashboard_Cont">
          <h1 className="TitleDashboard">לוח בקרה</h1>
          <span className="smTitleDashboard">
            ברוכים השבים! הנה מה קורה עם הפרויקטים שלך היום
          </span>
        </div>
        <div
          className="notificationDashboard_Cont"
          onClick={() => {
            setIsNotificationOpen(!isNotificationOpen);
          }}
        >
          <div className="notificationDashboad">
            <img className="notifImg" width="20" height="20" src={notifBell} />
            <div className="square">
              <span>3</span>
            </div>
            <div className="notifName">התראות</div>
            <img className="arrow" width="14px" src={caretUpWhite} />
          </div>
          {isNotificationOpen && (
            <div className="notifOpenedCont">
              <div className="notifCont">
                <img width={18} height={18} src={warningImg} />
                <div className="a">
                  {" "}
                  <h2 className="notifTitle">תשלום באיחור</h2>
                  <div className="notifDesc">
                    פרויקט וילה - אבן דרך תשלום 2 באיחור של 5 ימים
                  </div>
                </div>
              </div>
              <hr />
              <div className="notifCont2">
                <img width={18} height={18} src={waitingImg} />
                <div className="a">
                  {" "}
                  <h2 className="notifTitle">תשלום באיחור</h2>
                  <div className="notifDesc">
                    פרויקט וילה - אבן דרך תשלום 2 באיחור של 5 ימים
                  </div>
                </div>
              </div>
              <hr />
              <div className="notifCont2">
                <img width={18} height={18} src={waitingImg} />
                <div className="a">
                  {" "}
                  <h2 className="notifTitle">תשלום באיחור</h2>
                  <div className="notifDesc">
                    פרויקט וילה - אבן דרך תשלום 2 באיחור של 5 ימים
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="heroCont">
        <div className="cardsCont">
          <div className="cardCont">
            <div className="topCard">
              <div className="cardTitle">סה״כ לידים</div>
              <div className="periodListCont">
                {/* <!-- <div className="pickedPeriod"> --> */}
                <select className="pickedPeriod">
                  <option selected value="today">
                    היום
                  </option>
                  <option value="week">השבוע</option>
                  <option value="month">החודש</option>
                  <option value="year">השנה</option>
                </select>
                {/* <!-- <img
                        width="10"
                        height="6"
                        src="./assets/images/caret-up.png"
                      /> -->
                      <!-- </div> --> */}
              </div>
            </div>
            <div className="cardNumCont">
              <span className="cardNum">47</span>
              <div className="statusNum">
                <img src={arrowTrendUp} />
                <span>12%</span>
              </div>
            </div>
            <div className="statisticsCont">
              <div className="statistic">
                <div className="circle">
                  <img width="10" height="16" src={facebookIcon} />
                </div>
                <span>26</span>
              </div>
              <div className="statistic">
                <div className="circle">
                  <img width="15" height="17" src={instagramIcon} />
                </div>
                <span>26</span>
              </div>
              <div className="statistic">
                <div className="circle">
                  <img width="13" height="16" src={googleIcon} />
                </div>
                <span>26</span>
              </div>
            </div>
          </div>
          <div className="cardCont">
            <div className="topCard">
              <div className="cardTitle">פרוייקטים פעילים</div>
              <select className="pickedPeriod">
                <option selected value="today">
                  היום
                </option>
                <option value="week">השבוע</option>
                <option value="month">החודש</option>
                <option value="year">השנה</option>
              </select>
              {/* <!-- <div className="periodListCont">
                      <div className="pickedPeriod">
                        <span>היום</span>
                        <img
                          width="10"
                          height="6"
                          src="./assets/images/caret-up.png"
                        />
                      </div>
                    </div> --> */}
            </div>
            <div className="cardNumCont">
              <span className="cardNum">35</span>
              <div className="statusNum">
                <img src={arrowTrendUp} />
                <span>25%</span>
              </div>
            </div>
            <div className="statisticsCont">
              <div className="statistic">
                <div className="circle blueBg">
                  <img width="13" height="15" src={proposalIcon} />
                </div>
                <span>26</span>
              </div>
              <div className="statistic">
                <div className="circle greenBg">
                  <img width="13" height="15" src={architectsIcon} />
                </div>
                <span>26</span>
              </div>
              <div className="statistic">
                <div className="circle yellowBg">
                  <img width="13" height="15" src={materialsIcon} />
                </div>
                <span>26</span>
              </div>
              <div className="statistic">
                <div className="circle redBg">
                  <img width="13" height="16" src={factoryIcon} />
                </div>
                <span>26</span>
              </div>
              <div className="statistic">
                <div className="circle">
                  <img width="13" height="16" src={shippingIcon} />
                </div>
                <span>26</span>
              </div>
            </div>
          </div>
          <div className="cardCont">
            <div className="topCard">
              <div className="cardTitle">הכנסות חודשיות</div>
              <div className="periodListCont">
                <select className="pickedPeriod">
                  <option selected value="today">
                    היום
                  </option>
                  <option value="week">השבוע</option>
                  <option value="month">החודש</option>
                  <option value="year">השנה</option>
                </select>
                {/* <!-- <div className="pickedPeriod">
                        <span>היום</span>
                        <img
                          width="10"
                          height="6"
                          src="./assets/images/caret-up.png"
                        />
                      </div> --> */}
              </div>
            </div>
            <div className="cardNumCont">
              <span className="cardNum">56,000₪</span>
              <div className="statusNum statusNumRedBg">
                <img src={arrowTrendDown} />
                <span>25%</span>
              </div>
            </div>
            <div className="statisticsCont">
              <div className="statistic">
                <div className="circle">
                  <img width="13" height="15" src={clientsIcon} />
                </div>
                <span>7</span>
              </div>
            </div>
          </div>
          <div className="cardCont">
            <div className="topCard">
              <div className="cardTitle">תשלומים ממתינים</div>
              <div className="periodListCont">
                <select className="pickedPeriod">
                  <option selected value="today">
                    היום
                  </option>
                  <option value="week">השבוע</option>
                  <option value="month">החודש</option>
                  <option value="year">השנה</option>
                </select>
                {/* <!-- <div className="pickedPeriod">
                        <span>היום</span>
                        <img
                          width="10"
                          height="6"
                          src="./assets/images/caret-up.png"
                        />
                      </div> --> */}
              </div>
            </div>
            <div className="cardNumCont">
              <span className="cardNum">127,000₪</span>
              <div className="statusNum statusNumRedBg">
                <img src={arrowTrendDown} />
                <span>25%</span>
              </div>
            </div>
            <div className="statisticsCont">
              <div className="statistic">
                <div className="circle">
                  <img width="13" height="15" src={clientsIcon} />
                </div>
                <span>7</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bodyContentCont">
        <div className="bodyContentInnerCont">
          <div className="topBodyContent">
            <h3 className="titleBodyContent">צינור עבודה</h3>
            <div className="periodListCont">
              {/* <!-- <div className="pickedPeriod">
                      <span>היום</span>
                      <img
                        width="10"
                        height="6"
                        src="./assets/images/caret-up.png"
                      />
                    </div> --> */}
              <select className="pickedPeriod">
                <option selected value="today">
                  היום
                </option>
                <option value="week">השבוע</option>
                <option value="month">החודש</option>
                <option value="year">השנה</option>
              </select>
            </div>
            <div className="periodListCont">
              <div className="pickedPeriod">
                <span>סינון</span>
                <img width="13" height="10" src={barsFilter} />
              </div>
            </div>
            <input
              className="searchInp pickedPeriod"
              placeholder="חיפוש מהיר"
            />
          </div>
          <div className="barCont">
            <img width="1230" src={graphicImg} />
          </div>

          <div className="table-Cont">
            <table className="clientsTable">
              <tr className="tableRows">
                <td></td>
                <td>
                  <div className="graphBtnCont LeadbtnCon">
                    <div className="IconTitleBtn leadBtn">
                      <img width="13" src={clientsIcon} />
                      <span className="leadsTitile">לידים</span>
                    </div>
                    <span className="cardNum leadNum">53</span>
                  </div>
                </td>

                <td>
                  <div className="graphBtnCont quotationbtnCon">
                    <div className="IconTitleBtn quotationBtn">
                      <img width="13" src={clientsIcon} />
                      <span className="leadsTitile">הצעת מחיר</span>
                    </div>
                    <span className="cardNum leadNum">17</span>
                  </div>
                </td>
                <td>
                  <div className="graphBtnCont archibtnCon">
                    <div className="IconTitleBtn archinBtn">
                      <img width="13" src={clientsIcon} />
                      <span className="leadsTitile">אדריכל </span>
                    </div>
                    <span className="cardNum leadNum">28</span>
                  </div>
                </td>
                <td>
                  <div className="graphBtnCont materialbtnCon">
                    <div className="IconTitleBtn materialBtn">
                      <img width="13" src={clientsIcon} />
                      <span className="leadsTitile">חומרים </span>
                    </div>
                    <span className="cardNum leadNum">75</span>
                  </div>
                </td>
                <td>
                  <div className="graphBtnCont manufbtnCon">
                    <div className="IconTitleBtn manufacBtn">
                      <img width="13" src={clientsIcon} />
                      <span className="leadsTitile">מפעל </span>
                    </div>
                    <span className="cardNum leadNum">5</span>
                  </div>
                </td>
                <td>
                  <div className="graphBtnCont materialbtnCon">
                    <div className="IconTitleBtn deliveryBtn">
                      <img width="13" src={clientsIcon} />
                      <span className="leadsTitile">משלוח </span>
                    </div>
                    <span className="cardNum leadNum">32</span>
                  </div>
                </td>
              </tr>
              <tr className="tableTitles">
                <td>שם לקוח</td>
                <td>שלב</td>
                <td>סוג פרויקט</td>
                <td>גודל</td>
                <td>תאריך התחלה</td>
                <td>תאריך משוער לסיום</td>
                <td>מצב חשבון</td>
                <td>טלפון</td>
              </tr>

              <tr className="tableRows">
                <td>שרדה ג׳ונסון</td>
                <td>
                  <div className="IconTitleBtn quotationBtn quatBtnTable">
                    {" "}
                    הצעת מחיר
                  </div>
                </td>
                <td>וילה</td>
                <td>180 מ״ר</td>
                <td>15 לינואר 2025</td>
                <td>16 לאפריל 2026</td>
                <td>-1,500₪</td>
                <td>050-1234567</td>
              </tr>
              <tr className="tableRows">
                <td>חברת הייטק בע״מ</td>
                <td>
                  <div className="IconTitleBtn quotationBtn quatBtnTable">
                    {" "}
                    הצעת מחיר
                  </div>
                </td>
                <td>וילה</td>
                <td>180 מ״ר</td>
                <td>15 לינואר 2025</td>
                <td>16 לאפריל 2026</td>
                <td>-1,500₪</td>
                <td>050-1234567</td>
              </tr>
              <tr className="tableRows">
                <td>אתר נופש בהרים</td>
                <td>
                  <div className="IconTitleBtn quotationBtn quatBtnTable">
                    {" "}
                    הצעת מחיר
                  </div>
                </td>
                <td>וילה</td>
                <td>180 מ״ר</td>
                <td>15 לינואר 2025</td>
                <td>16 לאפריל 2026</td>
                <td>-1,500₪</td>
                <td>050-1234567</td>
              </tr>
              <tr className="tableRows">
                <td>חברת הייטק בע״מ</td>
                <td>
                  <div className="IconTitleBtn quotationBtn quatBtnTable">
                    {" "}
                    הצעת מחיר
                  </div>
                </td>
                <td>וילה</td>
                <td>180 מ״ר</td>
                <td>15 לינואר 2025</td>
                <td>16 לאפריל 2026</td>
                <td>-1,500₪</td>
                <td>050-1234567</td>
              </tr>
              <tr className="tableRows">
                <td>חברת הייטק בע״מ</td>
                <td>
                  <div className="IconTitleBtn quotationBtn quatBtnTable">
                    {" "}
                    הצעת מחיר
                  </div>
                </td>
                <td>וילה</td>
                <td>180 מ״ר</td>
                <td>15 לינואר 2025</td>
                <td>16 לאפריל 2026</td>
                <td>-1,500₪</td>
                <td>050-1234567</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

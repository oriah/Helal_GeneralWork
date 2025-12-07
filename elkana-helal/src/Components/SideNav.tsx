import "./SideNav.css";
import eclipse1 from "../assets/images/Ellipse 1.png";
import leadsIcon from "../assets/images/Leads.png";
import clientsIcon from "../assets/images/Clients.png";
import proposalIcon from "../assets/images/Proposal.png";
import architectsIcon from "../assets/images/Icon.png";
import materialsIcon from "../assets/images/Icon-1.png";
import factoryIcon from "../assets/images/Icon-2.png";
import shippingIcon from "../assets/images/Icon-3.png";
import supportIcon from "../assets/images/Icon-4.png";
import reportsIcon from "../assets/images/Icon-5.png";
import settingsIcon from "../assets/images/Icon-6.png";
import ellipse3 from "../assets/images/Ellipse 3.png";
import bottomLogo from "../assets/images/Group 5.png";
import exitIcon from "../assets/images/exit.png";

function SideNav() {
  return (
    <div className="sideNav">
      <div className="title_sideNavCont">
        <img className="userImg_SideNav" src={eclipse1} />
        <div className="name_sideNavCont">
          <h3 className="name_sideNav">אלקנה כהן</h3>
          <div className="role_sideNav">מנהל מערכת</div>
        </div>
      </div>
      <div className="navItems_cont">
        <div className="item">
          <img width="15" height="15" className="itemIcon" src="../" />
          <div className="itemName">לוח בקרה</div>
        </div>
        <div className="NotEffectedItem">
          <img width="15" height="15" className="itemIcon" src={leadsIcon} />
          <div className="itemName">לידים</div>
        </div>
        <div className="NotEffectedItem">
          <img width="15" height="15" className="itemIcon" src={clientsIcon} />
          <div className="itemName">לקוחות</div>
        </div>
        <div className="NotEffectedItem">
          <img width="15" height="15" className="itemIcon" src={proposalIcon} />
          <div className="itemName">הצעות מחיר</div>
        </div>
        <div className="NotEffectedItem">
          <img
            width="15"
            height="15"
            className="itemIcon"
            src={architectsIcon}
          />
          <div className="itemName">אדריכלים</div>
        </div>
        <div className="NotEffectedItem">
          <img
            width="15"
            height="15"
            className="itemIcon"
            src={materialsIcon}
          />
          <div className="itemName">בחירת חומרים</div>
        </div>
        <div className="NotEffectedItem">
          <img width="15" height="15" className="itemIcon" src={factoryIcon} />
          <div className="itemName">מפעל</div>
        </div>
        <div className="NotEffectedItem">
          <img width="15" height="15" className="itemIcon" src={shippingIcon} />
          <div className="itemName">משלוחים</div>
        </div>
        <div className="NotEffectedItem">
          <img width="15" height="15" className="itemIcon" src={supportIcon} />
          <div className="itemName">שירות לקוחות</div>
        </div>
        <div className="NotEffectedItem">
          <img width="15" height="15" className="itemIcon" src={reportsIcon} />
          <div className="itemName">ד"וחות</div>
        </div>
        <div className="NotEffectedItem">
          <img width="15" height="15" className="itemIcon" src={settingsIcon} />
          <div className="itemName">הגדרות</div>
        </div>
      </div>

      <hr className="bottomLine_SideNav" />
      <div className="bottom_SideNav">
        <div className="bottomLogoCont">
          <img className="whiteCircle" width="35" height="35" src={ellipse3} />
          <img className="bottomLogo" width="20" height="25" src={bottomLogo} />
        </div>
        <div className="logOutCont">
          <img width="10" height="10" src={exitIcon} />
          <div className="logOut">התנתק</div>
        </div>
      </div>
    </div>
  );
}

export default SideNav;

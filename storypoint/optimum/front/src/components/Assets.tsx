import React, { useEffect, useState, useRef } from "react";
import "./Assets.css";
import buildingImg from "../assets/build_img.png";
import bankImg from "../assets/bank.png";
import copyImg from "../assets/copy.png";
import userImg from "../assets/user2.png";
import building2Img from "../assets/building.png";
import editImg from "../assets/edit.png";
import reportImg from "../assets/report.png";
import addressImg from "../assets/marker.png";
import usersImg from "../assets/users.png";
import entriesImg from "../assets/entries.png";
import securityImg from "../assets/security.png";
import uploadImg from "../assets/upload_img.png";
import { useNavigate } from "react-router-dom";

interface Address {
  city: string;
  street: string;
  apartment_num: number;
  floor_num: number;
  entries_num: number;
}

interface Bank {
  name: string;
  branch_num: number;
  account_num: number;
  bank: string;
}

interface UserInfo {
  userCode: string;
  pass: string;
}

interface ContactInfo1 {
  startTime: string;
  fileContract: string;
}

interface InsuranceInfo {
  insuranceAgency: string;
  insuranceCompany: string;
  insuranceCompany2: string;
  insuranceEndDate: string;
  insurancePolicyDocument: string;
}

interface Entries {
  codeEntry1: string;
  codeEntry2: string;
  codeRooftopEntry: string;
}

interface ContactSocialInfo {
  whatsapp: string;
  email: string;
}

export interface Building {
  id: string;
  name: string;
  address: Address;
  bank: Bank;
  user: UserInfo;
  contactInfo1: ContactInfo1;
  insuranceInfo: InsuranceInfo;
  entries: Entries;
  contactSocialInfo: ContactSocialInfo;
}

const Assets = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [building_assets, setBuilding_assets] = useState([]);

  const navigate = useNavigate();

  const [cardViewInfo, setCardViewInfo] = useState<Building | null>(null);
  const [cardViewOpen, setCardViewOpen] = useState(false);
  const fileInputRef = useRef(null);
  const [preview, setPreview] = useState(uploadImg);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setPreview(URL.createObjectURL(file));
  };
  const num = (v: string) => (v.trim() === "" ? 0 : Number(v));

  const updateNested = <K extends keyof Building>(
    section: K,
    key: keyof Building[K],
    value: any
  ) => {
    setCardViewInfo((prev) =>
      prev
        ? { ...prev, [section]: { ...(prev[section] as any), [key]: value } }
        : prev
    );
  };

  const updateAddress = (k: keyof Building["address"], v: any) =>
    updateNested("address", k, v);
  const updateBank = (k: keyof Building["bank"], v: any) =>
    updateNested("bank", k, v);
  const updateUser = (k: keyof Building["user"], v: any) =>
    updateNested("user", k, v);
  const updateContact1 = (k: keyof Building["contactInfo1"], v: any) =>
    updateNested("contactInfo1", k, v);
  const updateInsurance = (k: keyof Building["insuranceInfo"], v: any) =>
    updateNested("insuranceInfo", k, v);
  const updateEntries = (k: keyof Building["entries"], v: any) =>
    updateNested("entries", k, v);
  const updateSocial = (k: keyof Building["contactSocialInfo"], v: any) =>
    updateNested("contactSocialInfo", k, v);

  const handleCardView = (buildingId: string) => {
    const objectById =
      building_assets.find((item) => item.id === buildingId) || null;
    setCardViewInfo(objectById);
    setCardViewOpen(!!objectById);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/buildings");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setBuilding_assets(data);
        console.log(data);
      } catch (error) {
        console.error("Fetch error:", error);
        alert(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  const cardRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!cardViewOpen) return;
    const onDown = (e: MouseEvent) => {
      const node = cardRef.current;
      if (node && !node.contains(e.target as Node)) {
        setCardViewOpen(false);
      }
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [cardViewOpen]);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="assets-main">
      {/* left side view */}
      {cardViewOpen && cardViewInfo && (
        <div className="SideCardView">
          <div className="main-left" ref={cardRef}>
            <div className="left-top-side">
              <img className="left-side-img" src={reportImg} />
              <h1 className="title-edit">ערוך בניין</h1>
            </div>

            <div className="container-left-side">
              {/* כתובת */}
              <div className="address-title">
                <img src={addressImg} />
                <div>כתובת</div>
              </div>

              <div className="address-container">
                <div className="step-field">
                  <div className="field">
                    <div className="field-name">עיר</div>
                    <br />
                    <input
                      className="field-inp"
                      value={cardViewInfo.city}
                      onChange={(e) => updateAddress("city", e.target.value)}
                    />
                  </div>

                  <div className="field">
                    <div className="field-name">רחוב</div>
                    <br />
                    <input
                      className="field-inp"
                      value={cardViewInfo.street}
                      onChange={(e) => updateAddress("street", e.target.value)}
                    />
                  </div>

                  <div className="field">
                    <div className="field-name">מספר דירות</div>
                    <br />
                    <input
                      className="field-inp"
                      type="number"
                      inputMode="numeric"
                      value={cardViewInfo.apartment_num}
                      onChange={(e) =>
                        updateAddress("apartment_num", num(e.target.value))
                      }
                    />
                  </div>
                </div>

                <div className="step-field">
                  <div className="field">
                    <div className="field-name">מספר קומות</div>
                    <br />
                    <input
                      className="field-inp"
                      type="number"
                      inputMode="numeric"
                      value={cardViewInfo.floor_num}
                      onChange={(e) =>
                        updateAddress("floor_num", num(e.target.value))
                      }
                    />
                  </div>

                  <div className="field">
                    <div className="field-name">מספר כניסות</div>
                    <br />
                    <input
                      className="field-inp"
                      type="number"
                      inputMode="numeric"
                      value={cardViewInfo.entries_num}
                      onChange={(e) =>
                        updateAddress("entries_num", num(e.target.value))
                      }
                    />
                  </div>
                </div>
              </div>

              {/* בנק */}
              <div className="address-title">
                <img src={bankImg} />
                <div>פרטי בנק</div>
              </div>

              <div className="step-field">
                <div className="field">
                  <div className="field-name">שם המוטב</div>
                  <br />
                  <input
                    className="field-inp"
                    value={cardViewInfo.name}
                    onChange={(e) => updateBank("name", e.target.value)}
                  />
                </div>

                <div className="field half">
                  <div className="field-name">בנק</div>
                  <br />
                  <input
                    className="field-inp half"
                    value={cardViewInfo.bank}
                    onChange={(e) => updateBank("bank", e.target.value)}
                  />
                </div>

                <div className="field half">
                  <div className="field-name">מספר סניף</div>
                  <br />
                  <input
                    className="field-inp half"
                    type="number"
                    inputMode="numeric"
                    value={cardViewInfo.branch_num}
                    onChange={(e) =>
                      updateBank("branch_num", num(e.target.value))
                    }
                  />
                </div>

                <div className="field half">
                  <div className="field-name">מספר חשבון</div>
                  <br />
                  <input
                    className="field-inp half"
                    type="number"
                    inputMode="numeric"
                    value={cardViewInfo.account_num}
                    onChange={(e) =>
                      updateBank("account_num", num(e.target.value))
                    }
                  />
                </div>
              </div>

              {/* משתמש */}
              <div className="address-title">
                <img src={usersImg} />
                <div>פרטי משתמש</div>
              </div>

              <div className="step-field">
                <div className="field">
                  <div className="field-name">קוד משתמש</div>
                  <br />
                  <input
                    className="field-inp"
                    value={cardViewInfo.userCode}
                    onChange={(e) => updateUser("userCode", e.target.value)}
                  />
                </div>

                <div className="field">
                  <div className="field-name">סיסמה</div>
                  <br />
                  <input
                    className="field-inp"
                    value={cardViewInfo.pass}
                    onChange={(e) => updateUser("pass", e.target.value)}
                  />
                </div>
              </div>

              {/* ביטוח */}
              <div className="address-title">
                <img src={securityImg} />
                <div>פרטי ביטוח</div>
              </div>

              <div className="step-field">
                <div className="field half">
                  <div className="field-name">סוכנות ביטוח</div>
                  <br />
                  <input
                    className="field-inp half"
                    value={cardViewInfo.insuranceAgency}
                    onChange={(e) =>
                      updateInsurance("insuranceAgency", e.target.value)
                    }
                  />
                </div>

                <div className="field half">
                  <div className="field-name">חברת ביטוח</div>
                  <br />
                  <input
                    className="field-inp half"
                    value={cardViewInfo.insuranceCompany}
                    onChange={(e) =>
                      updateInsurance("insuranceCompany", e.target.value)
                    }
                  />
                </div>

                <div className="field half">
                  <div className="field-name">2 חברת ביטוח</div>
                  <br />
                  <input
                    className="field-inp half"
                    value={cardViewInfo.insuranceCompany2}
                    onChange={(e) =>
                      updateInsurance("insuranceCompany2", e.target.value)
                    }
                  />
                </div>

                <div className="field half">
                  <div className="field-name">תאריך סיום הביטוח</div>
                  <br />
                  <input
                    className="field-inp half"
                    value={cardViewInfo.insuranceEndDate}
                    onChange={(e) =>
                      updateInsurance("insuranceEndDate", e.target.value)
                    }
                  />
                </div>

                <div className="field half">
                  <div className="field-name">מסמך הפוליסה</div>
                  <br />
                  <input
                    className="field-inp half"
                    value={cardViewInfo.insurancePolicyDocument}
                    onChange={(e) =>
                      updateInsurance("insurancePolicyDocument", e.target.value)
                    }
                  />
                </div>
              </div>

              {/* התקשרות */}
              <div className="address-title">
                <img src={securityImg} />
                <div>פרטי התקשרות</div>
              </div>

              <div className="step-field">
                <div className="field half">
                  <div className="field-name">תאריך התחלה</div>
                  <br />
                  <input
                    className="field-inp half"
                    value={cardViewInfo.contactInfo1_startTime}
                    onChange={(e) =>
                      updateContact1("startTime", e.target.value)
                    }
                  />
                </div>

                <div className="field half">
                  <div className="field-name">מסמך הסכם</div>
                  <br />
                  <input
                    className="field-inp half"
                    value={cardViewInfo.contactInfo1_fileContract}
                    onChange={(e) =>
                      updateContact1("fileContract", e.target.value)
                    }
                  />
                </div>
              </div>

              {/* כניסות */}
              <div className="address-title">
                <img src={entriesImg} />
                <div>כניסות</div>
              </div>

              <div className="address-container">
                <div className="step-field">
                  <div className="field">
                    <div className="field-name">קוד כניסה ראשית</div>
                    <br />
                    <input
                      className="field-inp"
                      value={cardViewInfo.codeEntry1}
                      onChange={(e) =>
                        updateEntries("codeEntry1", e.target.value)
                      }
                    />
                  </div>

                  <div className="field">
                    <div className="field-name">קוד כניסה משנית</div>
                    <br />
                    <input
                      className="field-inp"
                      value={cardViewInfo.codeEntry2}
                      onChange={(e) =>
                        updateEntries("codeEntry2", e.target.value)
                      }
                    />
                  </div>

                  <div className="field">
                    <div className="field-name">קוד כניסה לגג</div>
                    <br />
                    <input
                      className="field-inp"
                      value={cardViewInfo.codeRooftopEntry}
                      onChange={(e) =>
                        updateEntries("codeRooftopEntry", e.target.value)
                      }
                    />
                  </div>
                </div>

                {/* רשתות */}
                <div className="address-title">
                  <img src={usersImg} />
                  <div>פרטי התקשרות</div>
                </div>

                <div className="address-container">
                  <div className="step-field">
                    <div className="field">
                      <div className="field-name">WhatsApp</div>
                      <br />
                      <input
                        className="field-inp"
                        value={cardViewInfo.whatsapp}
                        onChange={(e) =>
                          updateSocial("whatsapp", e.target.value)
                        }
                      />
                    </div>

                    <div className="field two3">
                      <div className="field-name">Email</div>
                      <br />
                      <input
                        className="field-inp two3"
                        value={cardViewInfo.email}
                        onChange={(e) => updateSocial("email", e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                {/* העלאת תמונה */}
                <div
                  className="upload-step"
                  style={{ cursor: "pointer" }}
                  onClick={() => fileInputRef.current.click()}
                >
                  <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                  />

                  <img src={preview} alt="upload" width={40} />

                  <div style={{ fontWeight: "bold", color: "#1a237e" }}>
                    העלה תמונה מהמחשב
                  </div>
                </div>

                <button className="add_btn">ערוך בניין</button>
                <button
                  className="add_btn_cancel"
                  onClick={() => setCardViewOpen(false)}
                >
                  ביטול
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* רשימת בניינים */}
      {building_assets &&
        building_assets.map((building) => {
          return (
            <div className="main-table" key={building.id}>
              <input className="building_box_checkbox" type="checkbox" />

              <div className="building-row">
                <img className="building-img" src={buildingImg} />
                <div className="building-name">
                  {building.city} {building.street}
                </div>

                <div className="bank">
                  <img className="bank-img" src={bankImg} />
                  <div className="bank-name">פרטי הבנק</div>
                </div>

                <div className="bank-info">
                  <div>{building.bank_name}</div>

                  <div>{building.bank_branch_num}</div>

                  <div>{building.bank_account_num}</div>
                </div>

                <img className="copy-img" src={copyImg} />

                <div className="user-main">
                  <img className="user-img" src={userImg} />
                  <div className="user-info-name">
                    <div>פרטי</div>

                    <div>משתמש</div>
                  </div>
                </div>

                <div className="a">
                  <div>
                    <span className="user-fields-title">קוד משתמש: </span>
                    <span className="user-fields-title2">
                      {" "}
                      {building.userCode}
                    </span>
                  </div>

                  <div>
                    <span className="user-fields-title">סיסמא: </span>
                    <span className="user-fields-title2"> {building.pass}</span>
                  </div>
                </div>

                <img className="copy-img" src={copyImg} />

                <div className="card-btns">
                  <div
                    className="btns btn1"
                    onClick={() => {
                      navigate("/management", {
                        state: { building: building },
                      });
                    }}
                  >
                    <img src={building2Img} />
                    <span>ניהול נכס</span>
                  </div>
                  <div
                    className="btns btn2"
                    onClick={() => handleCardView(building.id)}
                  >
                    <img src={editImg} />
                    <span className="">עריכת נכס</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Assets;

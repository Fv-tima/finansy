import { createContext, useContext, useState, useEffect } from "react";
import { db } from "../firebase-config";
import { useAuth } from "./AuthContext";
import { query, where, collection, getDocs } from "firebase/firestore";
import { onSnapshot } from "firebase/firestore";
const ColContext = createContext();

export function useCol() {
  return useContext(ColContext);
}

export const ColContextProvider = ({ children }) => {
  const { currentUser } = useAuth();
  const uid = currentUser?.uid;

  const [lang, setLang] = useState("");
  const [excRate, setExcRate] = useState("");
  const [excCur, setExcCur] = useState("");
  const [defCur, setDefCur] = useState("");
  const [country, setCountry] = useState("");
  const [fullName, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const profileCollectionRef = collection(db, "Profile");
  const pQuery = query(profileCollectionRef, where("userId", "==", `${uid}`));

  //Budget
  const [budgetData, setBudgetData] = useState([]);
  const [loader, setLoader] = useState(true);
  const [budName, setBudName] = useState("");
  const [budAmt, setBudAmt] = useState("");
  const [budCat, setBudCat] = useState("");
  const budgetCollectionRef = collection(db, "Budget");

  useEffect(() => {
    const bQuery = query(budgetCollectionRef, where("userId", "==", `${uid}`));
    const newBud = onSnapshot(budgetCollectionRef, (querySnapshot) => {
      setBudgetData(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    });
    
    return () => {
      newBud();
      console.log(budgetData.map((doc) =>
        doc.amount
      ));
    }
  }, [budgetData]);

  // Edit Budget
  const [ebudName, setEBudName] = useState("");
  const [ebudAmt, setEBudAmt] = useState("");
  const [ebudCat, setEBudCat] = useState("");

  // add records
  const [recordData, setRecordData] = useState([]);

  const [recName, setRecName] = useState("");
  const [recAmt, setRecAmt] = useState("");
  const [recCat, setRecCat] = useState("");
  const recordCollectionRef = collection(db, "Record");
  const rQuery = query(recordCollectionRef, where("userId", "==", `${uid}`));

  useEffect(() => {
    const getRecord = async () => {
      try {
        onSnapshot(recordCollectionRef, (snapshot) => {
          const newRec = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setRecordData(newRec);
          console.log(recordData);
          setLoader(false);
        });
      } catch (err) {
        console.log(err);
      }
    };
    getRecord();
  }, []);

  // add savings
  const [savAmt, setSavAmt] = useState("");
  const savingsCollectionRef = collection(db, "Savings");
  const sQuery = query(savingsCollectionRef, where("userId", "==", `${uid}`));

  const value = {
    lang,
    setLang,
    excRate,
    setExcRate,
    excCur,
    setExcCur,
    defCur,
    setDefCur,
    country,
    setCountry,
    fullName,
    setFullname,
    email,
    setEmail,
    password,
    setPassword,
    budName,
    setBudName,
    budAmt,
    setBudAmt,
    budCat,
    setBudCat,
    ebudName,
    setEBudName,
    ebudAmt,
    setEBudAmt,
    ebudCat,
    setEBudCat,
    budgetCollectionRef,
    profileCollectionRef,
    budgetData,
    setBudgetData,
    loader,
    recName,
    recAmt,
    recCat,
    setRecName,
    setRecAmt,
    setRecCat,
    recordCollectionRef,
    setSavAmt,
    savAmt,
    savingsCollectionRef,
  };

  return <ColContext.Provider value={value}>{children}</ColContext.Provider>;
};
